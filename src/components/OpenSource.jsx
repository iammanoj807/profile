import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';

const ext = { target: '_blank', rel: 'noopener noreferrer' };
const ALL_MERGED =
    'https://github.com/search?q=author%3Aiammanoj807+is%3Apr+is%3Amerged+-user%3Aiammanoj807&type=pullrequests';

// "2026-11-17" -> "17 Nov 2026". Plain string work, so no time zone or locale can shift it.
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formatDate = (iso) => {
    const [y, m, d] = iso.split('-').map(Number);
    return `${d} ${MONTHS[m - 1]} ${y}`;
};

// One group per repository, newest merge first; PRs inside a group newest first.
const groupByRepo = (prs) => {
    const groups = new Map();
    for (const pr of prs) {
        if (!groups.has(pr.repo)) groups.set(pr.repo, { repo: pr.repo, project: pr.project, area: pr.area, prs: [] });
        groups.get(pr.repo).prs.push(pr);
    }
    const list = [...groups.values()];
    for (const g of list) {
        g.prs.sort((a, b) => b.merged.localeCompare(a.merged) || b.pr - a.pr);
        g.latest = g.prs[0].merged;
    }
    return list.sort((a, b) => b.latest.localeCompare(a.latest));
};

const OpenSource = () => {
    const prs = portfolioData.openSource;
    if (!prs?.length) return null;
    const groups = groupByRepo(prs);

    return (
        <section className="section" aria-labelledby="open-source">
            <h2 id="open-source">Open source</h2>
            <p className="section-intro">
                {prs.length} merged pull requests in {groups.length} projects, mostly bug fixes in machine learning
                libraries. <a href={ALL_MERGED} {...ext}>All merged PRs</a>
            </p>

            {groups.map(g => {
                const owner = g.repo.split('/')[0];
                const repoUrl = `https://github.com/${g.repo}`;
                return (
                    <article key={g.repo} className="item oss">
                        <a className="oss-thumb" href={repoUrl} {...ext} tabIndex={-1} aria-hidden="true">
                            <img
                                src={`https://github.com/${owner}.png?size=128`}
                                alt=""
                                width="64"
                                height="64"
                                loading="lazy"
                                onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                            />
                        </a>
                        <div className="item-body">
                            <a className="item-title" href={repoUrl} {...ext}>{g.project}</a>
                            <div className="item-meta">{g.area} · {g.repo}</div>
                            <ul className="pr-list">
                                {g.prs.map(pr => (
                                    <li key={pr.pr}>
                                        <a className="pr-num" href={`${repoUrl}/pull/${pr.pr}`} {...ext}>#{pr.pr}</a>{' '}
                                        <strong>{pr.title}.</strong>{' '}
                                        {renderBoldText(pr.summary)}{' '}
                                        <span className="pr-merged">Merged {formatDate(pr.merged)} by @{pr.mergedBy}.</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                );
            })}
        </section>
    );
};

export default OpenSource;

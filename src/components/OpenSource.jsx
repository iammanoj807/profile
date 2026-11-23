import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';

const ext = { target: '_blank', rel: 'noopener noreferrer' };
const ALL_MERGED =
    'https://github.com/search?q=author%3Aiammanoj807+is%3Apr+is%3Amerged+-user%3Aiammanoj807&type=pullrequests';

// One group per repository, in the order the repos first appear in openSource; PRs inside a group newest first.
const groupByRepo = (prs) => {
    const groups = new Map();
    for (const pr of prs) {
        if (!groups.has(pr.repo)) groups.set(pr.repo, { repo: pr.repo, project: pr.project, area: pr.area, prs: [] });
        const g = groups.get(pr.repo);
        g.logo ||= pr.logo;
        g.prs.push(pr);
    }
    const list = [...groups.values()];
    for (const g of list) g.prs.sort((a, b) => b.merged.localeCompare(a.merged) || b.pr - a.pr);
    return list;
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
                libraries. Click a pull request to see what it fixed. <a href={ALL_MERGED} {...ext}>All merged PRs</a>
            </p>

            {groups.map(g => {
                const owner = g.repo.split('/')[0];
                const repoUrl = `https://github.com/${g.repo}`;
                return (
                    <article key={g.repo} className="item oss">
                        <a className="oss-thumb" href={repoUrl} {...ext} tabIndex={-1} aria-hidden="true">
                            <img
                                src={g.logo || `https://github.com/${owner}.png?size=288`}
                                alt=""
                                width="56"
                                height="56"
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
                                        <details>
                                            <summary>
                                                <a className="pr-num" href={`${repoUrl}/pull/${pr.pr}`} {...ext}>#{pr.pr}</a>{' '}
                                                {pr.title}
                                            </summary>
                                            <p className="pr-summary">{renderBoldText(pr.summary)}</p>
                                        </details>
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

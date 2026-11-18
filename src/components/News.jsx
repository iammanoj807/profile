import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';

const ext = { target: '_blank', rel: 'noopener noreferrer' };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const NUMBER_WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];

// "2026-11-17" -> "17 Nov 2026"; "2026-07" -> "Jul 2026"
const formatDate = (iso) => {
    const [y, m, d] = iso.split('-').map(Number);
    return d ? `${d} ${MONTHS[m - 1]} ${y}` : `${MONTHS[m - 1]} ${y}`;
};

// [a, b, c] -> [a, ', ', b, ' and ', c]
const joinWithAnd = (parts) =>
    parts.flatMap((p, i) => (i === 0 ? [p] : [i === parts.length - 1 ? ' and ' : ', ', p]));

const prUrl = (pr) => `https://github.com/${pr.repo}/pull/${pr.pr}`;

// One news item per month of merges: "Seven pull requests merged into Feast (#7159, #7166), River (#2111) and ...".
// Projects are listed by their latest merge, newest first; the item sorts by the month's latest merge.
const prItems = (openSource) => {
    const byMonth = new Map();
    for (const pr of openSource) {
        const month = pr.merged.slice(0, 7);
        if (!byMonth.has(month)) byMonth.set(month, []);
        byMonth.get(month).push(pr);
    }

    return [...byMonth].map(([month, prs]) => {
        const newestFirst = [...prs].sort((a, b) => b.merged.localeCompare(a.merged));
        const byProject = new Map();
        for (const pr of newestFirst) {
            if (!byProject.has(pr.project)) byProject.set(pr.project, []);
            byProject.get(pr.project).push(pr);
        }
        const projects = [...byProject].map(([project, list]) => (
            <React.Fragment key={project}>
                <strong>{project}</strong> (
                {[...list].sort((a, b) => a.pr - b.pr).map((pr, i) => (
                    <React.Fragment key={pr.pr}>
                        {i > 0 && ', '}
                        <a href={prUrl(pr)} {...ext}>#{pr.pr}</a>
                    </React.Fragment>
                ))}
                )
            </React.Fragment>
        ));
        const count = NUMBER_WORDS[prs.length] ?? prs.length;

        return {
            date: newestFirst[0].merged,
            label: month,
            key: `prs-${month}`,
            content: <>{count} pull request{prs.length > 1 ? 's' : ''} merged into {joinWithAnd(projects)}.</>
        };
    });
};

/** Dated updates: the hand-written news items plus the merged pull requests, newest first. */
const News = () => {
    const { news = [], openSource = [] } = portfolioData;
    const items = [
        ...news.map(n => ({ date: n.date, key: n.text, content: renderBoldText(n.text) })),
        ...prItems(openSource)
    ].sort((a, b) => b.date.localeCompare(a.date));

    if (!items.length) return null;

    return (
        <section className="section" aria-labelledby="news">
            <h2 id="news">News</h2>
            <ul className="plain-list dated news">
                {items.map(item => (
                    <li key={item.key}>
                        <span className="when">{formatDate(item.label ?? item.date)}</span>
                        <div>{item.content}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default News;

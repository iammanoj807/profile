import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';

const ext = { target: '_blank', rel: 'noopener noreferrer' };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Month and year only: "2026-11-17" -> "Nov 2026". Items still sort by the full date.
const formatDate = (iso) => {
    const [y, m] = iso.split('-').map(Number);
    return `${MONTHS[m - 1]} ${y}`;
};

/** Dated updates: the hand-written news items plus every merged pull request, newest first. */
const News = () => {
    const { news = [], openSource = [] } = portfolioData;
    const items = [
        ...news.map(n => ({ date: n.date, key: n.text, content: renderBoldText(n.text) })),
        ...openSource.map(pr => {
            const url = `https://github.com/${pr.repo}/pull/${pr.pr}`;
            return {
                date: pr.merged,
                key: url,
                content: (
                    <>
                        {pr.area === 'Feature' ? 'Feature' : 'Fix'} merged into <strong>{pr.project}</strong>: {pr.title}{' '}
                        (<a href={url} {...ext}>#{pr.pr}</a>).
                    </>
                )
            };
        })
    ].sort((a, b) => b.date.localeCompare(a.date));

    if (!items.length) return null;

    return (
        <section className="section" aria-labelledby="news">
            <h2 id="news">News</h2>
            <ul className="plain-list dated news">
                {items.map(item => (
                    <li key={item.key}>
                        <span className="when">{formatDate(item.date)}</span>
                        <div>{item.content}</div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default News;

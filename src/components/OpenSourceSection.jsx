import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';
import { Reveal, SectionHead } from './ui';

const ALL_MERGED =
    'https://github.com/search?q=author%3Aiammanoj807+is%3Apr+is%3Amerged+-user%3Aiammanoj807&type=pullrequests';

const OpenSourceSection = () => {
    const prs = portfolioData.openSource;
    if (!prs?.length) return null;
    const projects = new Set(prs.map(p => p.repo)).size;

    return (
        <section id="open-source" className="section">
            <div className="container">
                <SectionHead
                    eyebrow="Open source"
                    title="Merged"
                    accent="upstream."
                    lead={`${prs.length} pull requests merged into ${projects} open-source projects. Most are bug fixes in machine learning libraries, several of them bugs that returned wrong results without raising an error.`}
                    link={{ href: ALL_MERGED, label: 'All merged PRs' }}
                />

                <div className="oss-grid">
                    {prs.map((pr, i) => {
                        const url = `https://github.com/${pr.repo}/pull/${pr.pr}`;
                        return (
                            <Reveal as="article" key={url} delay={(i % 2) * 0.05} className="card oss-card">
                                <div className="oss-meta">
                                    <span className="chip">{pr.project}</span>
                                    <span className="oss-area">{pr.area}</span>
                                    <span className="oss-date">Merged {pr.merged}</span>
                                </div>
                                <h3 className="oss-title">{pr.title}</h3>
                                <p className="oss-summary">{renderBoldText(pr.summary)}</p>
                                <div className="oss-footer">
                                    <ul className="tag-list" aria-label="Technologies">
                                        {pr.tags.map(tag => <li key={tag} className="tag">{tag}</li>)}
                                    </ul>
                                    <a href={url} target="_blank" rel="noopener noreferrer" className="oss-link">
                                        <i className="fa-brands fa-github" aria-hidden="true"></i>
                                        {pr.repo}#{pr.pr}
                                    </a>
                                </div>
                                <p className="oss-by">Merged by @{pr.mergedBy}</p>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OpenSourceSection;

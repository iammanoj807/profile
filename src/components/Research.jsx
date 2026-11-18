import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

const Research = () => (
    <section className="section" aria-labelledby="research">
        <h2 id="research">Research and projects</h2>
        <p className="section-intro">
            Systems I built and then measured with golden sets, baselines and fault injection.
            Each figure shows a real result and opens full size; the <span className="hl-sample">highlighted</span> project
            is my MSc dissertation.
        </p>

        {portfolioData.projects.map(p => {
            const main = p.link || p.github;
            const picture = p.figure || p.screenshot;
            return (
                <article key={p.title} className={`item project${p.highlight ? ' highlight' : ''}`}>
                    {/* Title first in the markup so phones show it above its figure */}
                    <div className="item-head">
                        <a className="item-title" href={main} {...ext}>{p.title}</a>
                        <div className="item-meta">{p.kicker} · {p.date}</div>
                        <div className="item-links">
                            {p.github && <a href={p.github} {...ext}>code</a>}
                            {p.github && p.link && <span className="sep" aria-hidden="true">/</span>}
                            {p.link && <a href={p.link} {...ext}>demo</a>}
                        </div>
                    </div>
                    {/* The result figure opens full size in a new tab */}
                    <a className="item-thumb" href={picture} {...ext} title="Open the figure full size">
                        <img
                            src={picture}
                            alt={p.figure ? `${p.title} results figure` : ''}
                            width="800"
                            height="500"
                            loading="lazy"
                            decoding="async"
                        />
                    </a>
                    <p className="item-text">{renderBoldText(p.abstract)}</p>
                </article>
            );
        })}
    </section>
);

export default Research;

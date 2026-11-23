import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

const gradeText = (edu) =>
    edu.gradeLabel?.startsWith('CGPA') ? `CGPA ${edu.grade}/10` : `${edu.gradeLabel}: ${edu.grade}`;

/** Publication, education and experience: the short, list-style part of the page. */
const Background = () => {
    const { education, experience } = portfolioData;
    const publications = education.map(e => e.publication).filter(Boolean);

    return (
        <>
            {publications.length > 0 && (
                <section className="section" aria-labelledby="publications">
                    <h2 id="publications">Publication</h2>
                    <ul className="plain-list">
                        {publications.map(p => (
                            <li key={p.title}>
                                <a className="pub-title" href={p.link} {...ext}>{p.title}</a>
                                <div>{renderBoldText(p.authors)}</div>
                                <div className="item-meta">{p.venue}</div>
                            </li>
                        ))}
                    </ul>
                </section>
            )}



            <section className="section" aria-labelledby="education">
                <h2 id="education">Education</h2>
                <ul className="plain-list dated">
                    {education.map(e => (
                        <li key={e.degree}>
                            <span className="when">{e.duration}</span>
                            <div>
                                <strong>{e.degree}</strong>, {e.school}, {e.location}. {gradeText(e)}
                                {e.transcript && (
                                    <>
                                        <span className="sep" aria-hidden="true">/</span>
                                        <a href={e.transcript} {...ext}>transcript</a>
                                    </>
                                )}
                                {e.thesis && (
                                    <div className="muted">
                                        Thesis: <em>{e.thesis}</em>{e.supervisor && <>, supervised by {e.supervisor}</>}
                                    </div>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="section" aria-labelledby="experience">
                <h2 id="experience">Teaching and work experience</h2>
                <ul className="plain-list dated">
                    {experience.map(e => (
                        <li key={e.company}>
                            <span className="when">{e.duration}</span>
                            <div>
                                <strong>{e.title}</strong>, {e.company}, {e.location}.
                                <div className="muted">{renderBoldText(e.description[0])}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Background;

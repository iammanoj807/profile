import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';

const ext = { target: '_blank', rel: 'noopener noreferrer' };

const gradeText = (edu) =>
    edu.gradeLabel?.startsWith('CGPA') ? `CGPA ${edu.grade}/10` : `${edu.grade} (${edu.gradeLabel})`;

/** Publication, experience, education and certificates: the short, list-style part of the page. */
const Background = () => {
    const { education, experience, certifications } = portfolioData;
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

            <section className="section" aria-labelledby="experience">
                <h2 id="experience">Experience</h2>
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

            <section className="section" aria-labelledby="education">
                <h2 id="education">Education</h2>
                <ul className="plain-list dated">
                    {education.map(e => (
                        <li key={e.degree}>
                            <span className="when">{e.duration}</span>
                            <div>
                                <strong>{e.degree}</strong>, {e.school}, {e.location}. {gradeText(e)}.
                            </div>
                        </li>
                    ))}
                </ul>
                {certifications?.length > 0 && (
                    <p className="certs">
                        Certificates:{' '}
                        {certifications.map((c, i) => (
                            <React.Fragment key={c.title}>
                                {i > 0 && ' · '}
                                <a href={c.link} {...ext}>{c.title}</a> ({c.subtitle})
                            </React.Fragment>
                        ))}
                    </p>
                )}
            </section>
        </>
    );
};

export default Background;

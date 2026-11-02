import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';
import { Reveal, SectionHead } from './ui';

const ExperienceSection = () => (
    <section id="experience" className="section">
        <div className="container">
            <SectionHead eyebrow="Experience" title="Where I've" accent="shipped." />

            <ol className="timeline">
                {portfolioData.experience.map((exp, index) => (
                    <Reveal as="li" key={exp.company} delay={index * 0.06} className="timeline-item">
                        <div className="timeline-meta">
                            <span className="timeline-date">{exp.duration}</span>
                            <span className="timeline-location">{exp.location}</span>
                        </div>
                        <span className="timeline-dot" aria-hidden="true" />
                        <div className="card timeline-card">
                            <div className="timeline-head">
                                {exp.company_logo && (
                                    <span className="company-logo">
                                        <img src={exp.company_logo} alt="" loading="lazy" />
                                    </span>
                                )}
                                <div>
                                    <h3 className="timeline-role">{exp.title}</h3>
                                    <p className="timeline-company">{exp.company}</p>
                                </div>
                            </div>
                            <ul className="bullets">
                                {exp.description.map((desc, i) => <li key={i}>{renderBoldText(desc)}</li>)}
                            </ul>
                            {exp.skills && (
                                <ul className="tag-list" aria-label="Skills">
                                    {exp.skills.map(skill => <li key={skill} className="tag">{skill}</li>)}
                                </ul>
                            )}
                        </div>
                    </Reveal>
                ))}
            </ol>
        </div>
    </section>
);

export default ExperienceSection;

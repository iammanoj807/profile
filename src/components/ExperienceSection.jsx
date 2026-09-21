import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';
import { Reveal, SectionHeader, handleSpotlight } from './ui';

const ExperienceSection = () => (
    <section id="experience" className="section">
        <div className="container">
            <SectionHeader
                index="02"
                eyebrow="Experience"
                title="Where I've"
                accent="shipped."
            />

            <ol className="timeline">
                {portfolioData.experience.map((exp, index) => (
                    <Reveal as="li" key={exp.company} delay={index * 0.08} className={`timeline-item ${exp.current ? 'current' : ''}`}>
                        <span className="timeline-dot" aria-hidden="true" />
                        <div className="timeline-meta">
                            <span className="timeline-date">{exp.duration}</span>
                            <span className="timeline-location">{exp.location}</span>
                        </div>
                        <div className="timeline-card" onMouseMove={handleSpotlight}>
                            <div className="timeline-head">
                                {exp.company_logo && (
                                    <span className={`company-logo ${String(exp.company_logo).endsWith('.svg') ? 'on-light' : ''}`}>
                                        <img src={exp.company_logo} alt="" loading="lazy" />
                                    </span>
                                )}
                                <div>
                                    <h3 className="timeline-role">{exp.title}</h3>
                                    <p className="timeline-company">
                                        {exp.company}
                                        {exp.current && <span className="now-badge">Now</span>}
                                    </p>
                                </div>
                            </div>
                            <ul className="timeline-points">
                                {exp.description.map((desc, i) => <li key={i}>{renderBoldText(desc)}</li>)}
                            </ul>
                            {exp.skills && (
                                <div className="tag-list">
                                    {exp.skills.map(skill => <span key={skill} className="tag">{skill}</span>)}
                                </div>
                            )}
                        </div>
                    </Reveal>
                ))}
            </ol>
        </div>
    </section>
);

export default ExperienceSection;

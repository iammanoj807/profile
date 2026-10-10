import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Reveal, SectionHeader, handleSpotlight } from './ui';

const EducationSection = () => (
    <section id="education" className="section">
        <div className="container">
            <SectionHeader
                index="04"
                eyebrow="Education"
                title="Foundations,"
                accent="with the grades to show."
            />

            <div className="edu-grid">
                {portfolioData.education.map((edu, i) => (
                    <Reveal key={edu.degree} delay={i * 0.1} className="edu-card" onMouseMove={handleSpotlight}>
                        <div className="edu-top">
                            <span className="edu-icon"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i></span>
                            <span className="edu-date">{edu.duration}</span>
                        </div>
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <p className="edu-school">{edu.school} · {edu.location}</p>
                        <p className="edu-desc">{edu.description}</p>
                        {edu.publication && (
                            <a
                                className="edu-pub"
                                href={edu.publication.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                                <span>
                                    <strong>{edu.publication.title}</strong>
                                    <em>{edu.publication.venue}</em>
                                </span>
                            </a>
                        )}
                        {edu.skills && (
                            <div className="tag-list edu-tags">
                                {edu.skills.map(skill => <span key={skill} className="tag">{skill}</span>)}
                            </div>
                        )}
                        <div className="edu-grade">
                            <span className="edu-grade-value">{edu.grade}</span>
                            <span className="edu-grade-label">{edu.gradeLabel}</span>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default EducationSection;

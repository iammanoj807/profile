import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Reveal, SectionHead } from './ui';

const EducationSection = () => (
    <section id="education" className="section">
        <div className="container">
            <SectionHead eyebrow="Education" title="Foundations," accent="with the grades to show." />

            <div className="edu-grid">
                {portfolioData.education.map((edu, i) => (
                    <Reveal key={edu.degree} delay={i * 0.08} className="card edu-card">
                        <div className="edu-top">
                            <span className="icon-tile"><i className="fa-solid fa-graduation-cap" aria-hidden="true"></i></span>
                            <div className="edu-grade">
                                <span className="edu-grade-value">{edu.grade}</span>
                                <span className="edu-grade-label">{edu.gradeLabel}</span>
                            </div>
                        </div>
                        <h3 className="edu-degree">{edu.degree}</h3>
                        <p className="edu-school">{edu.school} · {edu.location}</p>
                        <p className="edu-date">{edu.duration}</p>
                        <p className="edu-desc">{edu.description}</p>
                        {edu.publication && (
                            <a className="edu-pub" href={edu.publication.link} target="_blank" rel="noopener noreferrer">
                                <i className="fa-solid fa-file-lines" aria-hidden="true"></i>
                                <span>
                                    <strong>{edu.publication.title}</strong>
                                    <em>{edu.publication.venue}</em>
                                </span>
                            </a>
                        )}
                        {edu.skills && (
                            <ul className="tag-list" aria-label="Topics">
                                {edu.skills.map(skill => <li key={skill} className="tag">{skill}</li>)}
                            </ul>
                        )}
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default EducationSection;

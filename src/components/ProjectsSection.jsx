import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';
import { Reveal, SectionHeader, handleSpotlight } from './ui';

const ProjectsSection = () => {
    const { projects } = portfolioData;

    return (
        <section id="projects" className="section">
            <div className="container">
                <SectionHeader
                    index="01"
                    eyebrow="Selected work"
                    title="Things I've built,"
                    accent="and how I measured them."
                    description="Live demos and source code, plus the evaluation behind the results: golden sets, baselines and failure tests."
                />

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <Reveal
                            as="article"
                            key={project.title}
                            className="project-card"
                            style={{ '--accent': project.accent }}
                            onMouseMove={handleSpotlight}
                        >
                            <div className="project-main">
                                <div className="project-top">
                                    <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                                    <span className="project-date">{project.date}</span>
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-kicker">{project.kicker}</p>

                                <ul className="project-points">
                                    {project.description.map((point, i) => (
                                        <li key={i}>{renderBoldText(point)}</li>
                                    ))}
                                </ul>

                                <div className="project-footer">
                                    <div className="tag-list">
                                        {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                    </div>
                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-btn">
                                                <i className="fa-brands fa-github" aria-hidden="true"></i> Code
                                            </a>
                                        )}
                                        {project.link && (
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="link-btn link-btn-accent">
                                                Live demo <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <aside className="project-metrics">
                                <div className="metric-hero">
                                    <span className={`metric-hero-value ${Number.isNaN(parseFloat(project.metric.value)) ? 'is-word' : ''}`}>{project.metric.value}</span>
                                    <span className="metric-hero-label">{project.metric.label}</span>
                                </div>
                                <dl className="metric-list">
                                    {project.subMetrics.map(m => (
                                        <div key={m.label} className="metric-row">
                                            <dt>{m.value}</dt>
                                            <dd>{m.label}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </aside>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;

import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ProjectsSection = () => {
    const [ref, inView] = useIntersectionObserver();

    return (
        <section id="projects" className="section" ref={ref}>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                Project Archive
            </motion.h2>
            <div className="projects-grid">
                {portfolioData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`project-terminal ${project.status === 'In Progress' ? 'in-progress' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="terminal-header-bar">
                            <div className="terminal-dot red"></div>
                            <div className="terminal-dot yellow"></div>
                            <div className="terminal-dot green"></div>
                        </div>
                        <div className="project-command-line">
                            <div className="command-prompt">project.execute("{project.title}")</div>
                            <div className="command-output">
                                {Array.isArray(project.description) ? (
                                    <ul className="stack-description" style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                                        {project.description.map((desc, i) => (
                                            <li key={i} style={{ display: 'flex', gap: '0.5rem', color: 'inherit', lineHeight: 1.6 }}>
                                                <span>•</span>
                                                <span>{desc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="output-line">{project.description}</div>
                                )}
                                {project.accuracy && (
                                    <div className="output-line highlight">Accuracy: {project.accuracy}</div>
                                )}
                                {project.date && (
                                    <div className="output-line" style={{ color: '#c9d1d9' }}>Timeline: {project.date}</div>
                                )}
                                {project.status === 'In Progress' ? (
                                    <div className="output-line" style={{ color: '#ffbe0b' }}>Status: ⏳ {project.status}</div>
                                ) : (
                                    <div className="output-line highlight">Status: ✓ {project.status}</div>
                                )}
                                <div className="command-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tagIndex}
                                            className="command-tag"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: index * 0.1 + tagIndex * 0.05 }}
                                        >
                                            [{tag}]
                                        </motion.span>
                                    ))}
                                </div>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="command-link">
                                        → open:repository
                                    </a>
                                )}
                                {project.link && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="command-link">
                                        → {project.linkText || "view:project"}
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;

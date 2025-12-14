import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ExperienceSection = () => {
    const [ref, inView] = useIntersectionObserver();

    return (
        <section id="experience" className="section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                Experience
            </motion.h2>
            <div className="timeline" ref={ref}>
                {portfolioData.experience.map((exp, index) => (
                    <motion.div
                        key={index}
                        className="timeline-item"
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                        <motion.div
                            className="timeline-dot"
                            initial={{ scale: 0 }}
                            animate={inView ? { scale: 1 } : {}}
                            transition={{ duration: 0.4, delay: index * 0.2 }}
                        />
                        <div className="timeline-card">
                            <h3>{exp.title}</h3>
                            <div className="company">
                                {exp.company_logo && (
                                    <img src={exp.company_logo} alt={`${exp.company} logo`} className="company-logo" />
                                )}
                                {exp.company}
                            </div>
                            <div className="duration" style={{ color: '#c9d1d9' }}>{exp.duration} • {exp.location}</div>
                            <p className="description">{exp.description}</p>
                            {exp.skills && (
                                <div className="command-tags" style={{ marginTop: '1rem' }}>
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="command-tag">{skill}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ExperienceSection;

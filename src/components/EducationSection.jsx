import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const EducationSection = () => {
    const [ref, inView] = useIntersectionObserver();

    return (
        <section id="education" className="section" ref={ref}>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                Knowledge Stack
            </motion.h2>
            <div className="timeline" ref={ref}>
                {portfolioData.education.map((edu, index) => (
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
                            <h3>
                                {edu.title}
                                {edu.expected_distinction && (
                                    <span className="distinction-badge" style={{ marginLeft: '10px', fontSize: '0.8rem', verticalAlign: 'middle' }}>
                                        ⭐ Expected Distinction
                                    </span>
                                )}
                                {edu.cgpa && (
                                    <span className="distinction-badge" style={{ marginLeft: '10px', fontSize: '0.8rem', verticalAlign: 'middle' }}>
                                        ⭐ {edu.cgpa}
                                    </span>
                                )}
                            </h3>
                            <div className="stack-subtitle" style={{ color: 'var(--accent-green)', marginBottom: '0.5rem', fontWeight: 500 }}>
                                {edu.subtitle}
                            </div>
                            <div className="duration" style={{ color: '#c9d1d9', marginBottom: '1rem', fontSize: '0.85rem' }}>
                                {edu.duration}
                            </div>
                            <ul className="stack-description" style={{ paddingLeft: '1.2rem', margin: 0 }}>
                                {edu.descriptions.map((desc, i) => (
                                    <li key={i} style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;

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
            <div className="education-stack">
                {portfolioData.education.slice(0, 2).map((edu, index) => (
                    <motion.div
                        key={index}
                        className="stack-frame"
                        data-index={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                    >
                        <h3>
                            {edu.title}
                            {edu.expected_distinction && (
                                <span className="distinction-badge">⭐ Expected Distinction</span>
                            )}
                            {edu.cgpa && (
                                <span className="distinction-badge">⭐ {edu.cgpa} CGPA</span>
                            )}
                        </h3>
                        <div className="stack-subtitle">{edu.subtitle}</div>
                        <div className="stack-duration">{edu.duration}</div>
                        <ul className="stack-description">
                            {edu.descriptions.map((desc, i) => (
                                <li key={i}>{desc}</li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EducationSection;

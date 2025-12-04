import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { playHoverSound } from '../utils/audio';

const SkillsSection = () => {
    const [ref, inView] = useIntersectionObserver();
    const [expandedFolders, setExpandedFolders] = useState([]);

    const toggleFolder = (index) => {
        setExpandedFolders(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section id="skills" className="section" ref={ref}>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {"Skills"}
            </motion.h2>

            <div className="skills-container">
                {portfolioData.skills.map((category, catIndex) => {
                    const isExpanded = expandedFolders.includes(catIndex);
                    return (
                        <motion.div
                            key={catIndex}
                            className="skill-folder"
                            initial={{ opacity: 0, y: 50 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                        >
                            <div
                                className="folder-header"
                                onClick={() => toggleFolder(catIndex)}
                            >
                                <div className={`folder-icon ${isExpanded ? 'expanded' : ''}`}>▶</div>
                                <div className="folder-name">{category.category}</div>
                            </div>
                            <div className={`folder-contents ${isExpanded ? 'expanded' : ''}`}>
                                <div className="skills-grid-layout">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            className="skill-card"
                                            onMouseEnter={playHoverSound}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isExpanded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                                            whileHover={{
                                                scale: 1.1,
                                                boxShadow: "0 0 15px rgba(57, 255, 20, 0.3)",
                                                borderColor: "var(--accent-green)",
                                                y: -5
                                            }}
                                            transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                        >
                                            {skill.icon && skill.icon.startsWith('fa-') ? (
                                                <i className={`${skill.icon} skill-card-icon`} style={{ color: skill.color || 'var(--accent-green)' }}></i>
                                            ) : skill.icon ? (
                                                <iconify-icon icon={skill.icon} className="skill-card-icon" style={{ color: skill.color || 'var(--accent-green)' }}></iconify-icon>
                                            ) : null}
                                            <div className="skill-card-name">{skill.name}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default SkillsSection;

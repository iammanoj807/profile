import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon, Reveal, SectionHeader, handleSpotlight } from './ui';

const SkillsSection = () => {
    const { skills, extraSkills } = portfolioData;

    return (
        <section id="skills" className="section">
            <div className="container">
                <SectionHeader
                    index="03"
                    eyebrow="Toolkit"
                    title="The stack behind"
                    accent="the numbers."
                />

                <div className="skills-grid">
                    {skills.map((group, i) => (
                        <Reveal
                            key={group.category}
                            delay={(i % 3) * 0.06}
                            className={`skill-card ${group.wide ? 'wide' : ''} ${group.highlight ? 'highlight' : ''}`}
                            onMouseMove={handleSpotlight}
                        >
                            <div className="skill-card-head">
                                <span className="skill-card-icon"><Icon name={group.icon} /></span>
                                <h3>{group.category}</h3>
                                {group.note && <span className="skill-note">{group.note}</span>}
                            </div>
                            <ul className="chip-list">
                                {group.skills.map(skill => (
                                    <li key={skill.name} className="chip">
                                        {skill.icon && <Icon name={skill.icon} className="chip-icon" />}
                                        {skill.name}
                                    </li>
                                ))}
                            </ul>
                            {group.description && <p className="skill-card-desc">{group.description}</p>}
                        </Reveal>
                    ))}

                    {extraSkills?.length > 0 && (
                        <Reveal delay={0.12} className="extra-skills">
                            <span className="extra-label">Also familiar with</span>
                            <ul>
                                {extraSkills.map(s => <li key={s}>{s}</li>)}
                            </ul>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;

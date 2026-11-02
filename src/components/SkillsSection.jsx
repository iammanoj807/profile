import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon, Reveal, SectionHead } from './ui';

const SkillsSection = () => {
    // The highlighted group (Evaluation) has its own band; see MethodSection.
    const groups = portfolioData.skills.filter(g => !g.highlight);
    const { extraSkills } = portfolioData;

    return (
        <section id="skills" className="section">
            <div className="container">
                <SectionHead eyebrow="Toolkit" title="The stack behind" accent="the numbers." />

                <div className="skills-grid">
                    {groups.map((group, i) => (
                        <Reveal key={group.category} delay={(i % 3) * 0.05} className="card skill-card">
                            <div className="skill-card-head">
                                <span className="icon-tile"><Icon name={group.icon} /></span>
                                <h3>{group.category}</h3>
                            </div>
                            <ul className="chip-list">
                                {group.skills.map(skill => (
                                    <li key={skill.name} className="skill-chip">
                                        {skill.icon && <Icon name={skill.icon} className="skill-chip-icon" />}
                                        {skill.name}
                                    </li>
                                ))}
                            </ul>
                        </Reveal>
                    ))}
                </div>

                {extraSkills?.length > 0 && (
                    <Reveal className="extra-skills">
                        <span className="extra-label">Also familiar with</span>
                        <ul>
                            {extraSkills.map(s => <li key={s}>{s}</li>)}
                        </ul>
                    </Reveal>
                )}
            </div>
        </section>
    );
};

export default SkillsSection;

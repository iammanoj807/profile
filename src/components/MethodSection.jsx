import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';
import { Reveal } from './ui';

// Evidence for each method, quoted from the project write-ups in portfolioData.
const evidence = {
    'Golden-set design': {
        text: 'A **30-question golden set** and a grading rubric, both committed to Git before the first run.',
        source: 'Planck AI'
    },
    'Fault injection': {
        text: 'With the primary provider disabled on every single call, it still finished **30 of 30** tasks.',
        source: 'Planck AI'
    },
    'Baseline controls': {
        text: '**95% hit@3**, against **80%** for a keyword baseline on the same questions.',
        source: 'CogniGraph'
    },
    'Latency benchmarking': {
        text: 'Cut p95 REST API latency from roughly **850 ms to 510 ms** across **18 endpoints**.',
        source: 'Accenture'
    }
};

const MethodSection = () => {
    const group = portfolioData.skills.find(g => g.highlight);
    if (!group) return null;

    return (
        <section id="approach" className="band" aria-labelledby="approach-title">
            <div className="container band-grid">
                <Reveal className="band-copy">
                    <p className="eyebrow">{group.category}</p>
                    <h2 id="approach-title">{group.note}<em>.</em></h2>
                    <p>{group.description}</p>
                    <a className="btn btn-lg band-btn" href="#projects">
                        See the projects <i className="fa-solid fa-arrow-up" aria-hidden="true"></i>
                    </a>
                </Reveal>

                <ol className="band-steps">
                    {group.skills.map((skill, i) => {
                        const proof = evidence[skill.name];
                        return (
                            <Reveal as="li" key={skill.name} delay={i * 0.06}>
                                <span className="band-num">{i + 1}</span>
                                <div>
                                    <h3>{skill.name}</h3>
                                    {proof && (
                                        <p>
                                            {renderBoldText(proof.text)}
                                            <span className="band-source">{proof.source}</span>
                                        </p>
                                    )}
                                </div>
                            </Reveal>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
};

export default MethodSection;

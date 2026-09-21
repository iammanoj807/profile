import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';
import { Icon } from './ui';
import profileImg from '../assets/Manoj Thapa Professional.png';

const ease = [0.2, 0.7, 0.2, 1];
const rise = (delay) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease }
});

const RotatingWord = ({ words }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setIndex(i => (i + 1) % words.length), 2600);
        return () => clearInterval(timer);
    }, [words.length]);

    return (
        <span className="rotator" aria-live="polite">
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    className="rotator-word"
                    initial={{ opacity: 0, y: '0.5em', filter: 'blur(6px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, y: '-0.5em', filter: 'blur(6px)', transition: { duration: 0.2, ease } }}
                    transition={{ duration: 0.4, ease }}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const HeroSection = () => {
    const { name, title, headlineWords, description, resume_link, social_links, address, relocation, visa, visaNote } = portfolioData;
    const iconLinks = social_links.filter(l => ['GitHub', 'LinkedIn', 'Email'].includes(l.name));

    return (
        <section id="home" className="hero">
            <div className="hero-inner container">
                <div className="hero-copy">
                    <motion.div className="status-pill" {...rise(0.05)}>
                        <span className="pulse-dot" />
                        Available now · AI & software roles
                    </motion.div>

                    <motion.h1 className="hero-name" {...rise(0.15)}>
                        Manoj Kumar <span className="gradient-text">Thapa</span>
                    </motion.h1>

                    <motion.p className="hero-headline" {...rise(0.25)}>
                        {title} building <RotatingWord words={headlineWords} />
                        <br />
                        and <em>measuring</em> them before they ship.
                    </motion.p>

                    <motion.p className="hero-description" {...rise(0.35)}>
                        {renderBoldText(description)}
                    </motion.p>

                    <motion.div className="hero-actions" {...rise(0.45)}>
                        <a href="#projects" className="btn btn-primary">
                            See my work <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={resume_link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                            <i className="fa-regular fa-file-lines" aria-hidden="true"></i> Resume
                        </a>
                        <div className="hero-socials">
                            {iconLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="icon-btn"
                                    aria-label={link.name}
                                    title={link.name}
                                >
                                    <Icon name={link.icon} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.ul className="hero-meta" {...rise(0.55)}>
                        <li><i className="fa-solid fa-location-dot" aria-hidden="true"></i><span>{address} · {relocation}</span></li>
                        <li><i className="fa-solid fa-passport" aria-hidden="true"></i><span>{visa} · <strong>{visaNote}</strong></span></li>
                    </motion.ul>
                </div>

                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease }}
                >
                    <div className="portrait">
                        <div className="portrait-ring" />
                        <div className="portrait-card">
                            <div className="portrait-glow" />
                            <img
                                src={profileImg}
                                alt={name}
                                className="portrait-img"
                                draggable="false"
                                onContextMenu={(e) => e.preventDefault()}
                            />
                        </div>

                        <div className="float-chip chip-a">
                            <span className="chip-value">30/30</span>
                            <span className="chip-label">under fault injection</span>
                        </div>
                        <div className="float-chip chip-b">
                            <span className="chip-value">96.3%</span>
                            <span className="chip-label">from 207 images</span>
                        </div>
                        <div className="float-chip chip-c terminal-chip">
                            <span className="term-prompt">$</span> eval --golden-set 30
                            <span className="term-ok">✓ pass</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            <a href="#impact" className="scroll-cue" aria-label="Scroll to highlights">
                <span className="scroll-cue-line" />
            </a>
        </section>
    );
};

export default HeroSection;

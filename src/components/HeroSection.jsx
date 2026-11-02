import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';
import { Icon } from './ui';
import profileImg from '../assets/manoj-portrait.webp';

const ease = [0.2, 0.7, 0.2, 1];
const rise = (delay) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease }
});

const RotatingWord = ({ words }) => {
    const [index, setIndex] = useState(0);
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (reduceMotion) return;
        const timer = setInterval(() => setIndex(i => (i + 1) % words.length), 2600);
        return () => clearInterval(timer);
    }, [words.length, reduceMotion]);

    return (
        <span className="rotator">
            <span className="sr-only">{words.join(', ')}</span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={words[index]}
                    className="rotator-word"
                    aria-hidden="true"
                    initial={{ opacity: 0, y: '0.4em' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: '-0.4em', transition: { duration: 0.18, ease } }}
                    transition={{ duration: 0.35, ease }}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
};

const HeroSection = () => {
    const { name, title, headlineWords, description, resume_link, social_links, address, relocation, visa, visaNote, education } = portfolioData;
    const iconLinks = social_links.filter(l => ['GitHub', 'LinkedIn', 'Email'].includes(l.name));
    const msc = education[0];

    return (
        <section id="home" className="hero">
            <div className="hero-grid-paper" aria-hidden="true" />
            <div className="container hero-inner">
                <div className="hero-copy">
                    <motion.p className="status-pill" {...rise(0.05)}>
                        <span className="pulse-dot" aria-hidden="true" />
                        Available now · AI &amp; software roles
                    </motion.p>

                    <motion.h1 className="hero-name" {...rise(0.12)}>
                        Manoj Kumar <em>Thapa</em>
                    </motion.h1>

                    <motion.p className="hero-headline" {...rise(0.2)}>
                        {title} building <RotatingWord words={headlineWords} />
                        <br />
                        and <em>measuring</em> them before they ship.
                    </motion.p>

                    <motion.p className="hero-description" {...rise(0.28)}>
                        {renderBoldText(description)}
                    </motion.p>

                    <motion.div className="hero-actions" {...rise(0.36)}>
                        <a href="#projects" className="btn btn-lg">
                            See my work <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={resume_link} target="_blank" rel="noopener noreferrer" className="btn-ghost btn-lg">
                            <i className="fa-regular fa-file-lines" aria-hidden="true"></i> Resume
                        </a>
                        <div className="hero-socials">
                            {iconLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target={link.url.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    className="social-btn"
                                    aria-label={link.name}
                                    title={link.name}
                                >
                                    <Icon name={link.icon} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.div className="hero-visual" {...rise(0.2)}>
                    <img
                        src={profileImg}
                        alt={name}
                        className="portrait-img"
                        width="450"
                        height="554"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="glance">
                        <p className="glance-label">At a glance</p>
                        <ul className="glance-list">
                            <li>
                                <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                                <span>{address} · {relocation}</span>
                            </li>
                            <li>
                                <i className="fa-solid fa-passport" aria-hidden="true"></i>
                                <span>{visa} · <strong>{visaNote}</strong></span>
                            </li>
                            <li>
                                <i className="fa-solid fa-graduation-cap" aria-hidden="true"></i>
                                <span>{msc.degree}, <strong>{msc.grade}</strong> · {msc.school}</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
            <div className="ruler" aria-hidden="true" />
        </section>
    );
};

export default HeroSection;

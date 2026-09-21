import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Icon, Reveal, handleSpotlight } from './ui';

const CountUp = ({ value, decimals = 0, suffix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' });
    const reduceMotion = useReducedMotion();
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduceMotion) {
            setDisplay(value);
            return;
        }
        const controls = animate(0, value, {
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: setDisplay
        });
        return () => controls.stop();
    }, [inView, value, reduceMotion]);

    return (
        <span ref={ref} className="stat-value">
            {display.toFixed(decimals)}
            <span className="stat-suffix">{suffix}</span>
        </span>
    );
};

const StatsSection = () => {
    const { stats, marquee } = portfolioData;

    return (
        <section id="impact" className="impact" aria-label="Highlights">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, i) => (
                        <Reveal key={stat.label} delay={i * 0.08} className="stat-card" onMouseMove={handleSpotlight}>
                            <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                            <p className="stat-label">{stat.label}</p>
                            <span className="stat-source">{stat.source}</span>
                        </Reveal>
                    ))}
                </div>
            </div>

            <div className="marquee" aria-label="Tech stack">
                <div className="marquee-track">
                    {[...marquee, ...marquee].map((item, i) => (
                        <span className="marquee-item" key={i} aria-hidden={i >= marquee.length}>
                            <Icon name={item.icon} className="marquee-icon" />
                            {item.name}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;

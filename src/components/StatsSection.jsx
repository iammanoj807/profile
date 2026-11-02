import React, { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Reveal } from './ui';

const CountUp = ({ value, decimals = 0, suffix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
    const reduceMotion = useReducedMotion();
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (reduceMotion) {
            setDisplay(value);
            return;
        }
        const controls = animate(0, value, {
            duration: 1.4,
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

const StatsSection = () => (
    <section id="impact" className="impact" aria-label="Highlights">
        <div className="container">
            <div className="stats-grid">
                {portfolioData.stats.map((stat, i) => (
                    <Reveal key={stat.label} delay={i * 0.06} className="stat-card">
                        <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                        <p className="stat-label">{stat.label}</p>
                        <span className="stat-source">{stat.source}</span>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default StatsSection;

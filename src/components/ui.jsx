import React from 'react';
import { motion } from 'framer-motion';

/** Renders a Font Awesome class ("fa-...") or an Iconify icon ("set:name"). */
export const Icon = ({ name, className = '', style }) => {
    if (!name) return null;
    if (name.startsWith('fa-')) {
        return <i className={`${name} ${className}`} style={style} aria-hidden="true"></i>;
    }
    return <iconify-icon icon={name} class={className} style={style} aria-hidden="true"></iconify-icon>;
};

export const Reveal = ({ children, delay = 0, y = 24, className, as = 'div', ...rest }) => {
    const Component = motion[as];
    return (
        <Component
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -80px 0px' }}
            transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
            {...rest}
        >
            {children}
        </Component>
    );
};

export const SectionHeader = ({ index, eyebrow, title, accent, description }) => (
    <Reveal className="section-header">
        <div className="eyebrow">
            <span className="eyebrow-index">{index}</span>
            <span className="eyebrow-line" />
            <span>{eyebrow}</span>
        </div>
        <h2 className="section-title">
            {title} {accent && <em>{accent}</em>}
        </h2>
        {description && <p className="section-description">{description}</p>}
    </Reveal>
);

/** Tracks the cursor inside an element so CSS can draw a spotlight at --mx / --my. */
export const handleSpotlight = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

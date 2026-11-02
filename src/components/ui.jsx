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

/** Fades content up once as it scrolls into view. Motion is skipped for reduced-motion users (see MotionConfig). */
export const Reveal = ({ children, delay = 0, y = 16, className, as = 'div', ...rest }) => {
    const Component = motion[as];
    return (
        <Component
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -60px 0px' }}
            transition={{ duration: 0.55, delay, ease: [0.2, 0.7, 0.2, 1] }}
            {...rest}
        >
            {children}
        </Component>
    );
};

/** Section heading: eyebrow, serif title with an italic accent, optional lead and side link. */
export const SectionHead = ({ eyebrow, title, accent, lead, link }) => (
    <Reveal className="section-head">
        <div className="section-head-text">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h2>
                {title} {accent && <em>{accent}</em>}
            </h2>
            {lead && <p className="section-lead">{lead}</p>}
        </div>
        {link && (
            <a className="section-link" href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label} <i className="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
        )}
    </Reveal>
);

export const LogoMark = () => (
    <svg className="logo-mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect width="40" height="40" rx="11" fill="var(--accent)" />
        {/* an "M" whose last stroke becomes a trend line heading up */}
        <path d="M9 30 V15 L18 24 L22.5 19.5" fill="none" stroke="var(--accent-ink)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <g className="logo-rise">
            <path d="M22.5 19.5 L31.5 10.5" fill="none" stroke="var(--accent-ink)" strokeWidth="3.4" strokeLinecap="round" />
            <path d="M24 10 H32 V18" fill="none" stroke="var(--accent-ink)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
    </svg>
);

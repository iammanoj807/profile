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
        {/* an "M" drawn as a rising plot line, ending on a data point */}
        <path d="M9 29 V13 L20 24 L31 11" fill="none" stroke="var(--accent-ink)" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="31" cy="11" r="3.4" fill="var(--accent-ink)" />
        <path d="M31 17 V29" stroke="var(--accent-ink)" strokeWidth="3.4" strokeLinecap="round" opacity=".55" />
    </svg>
);

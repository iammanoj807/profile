import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CertificationsSection = () => {
    const [ref, inView] = useIntersectionObserver();

    return (
        <section id="certifications" className="section" ref={ref}>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                Achievements Registry
            </motion.h2>
            <div className="achievement-grid">
                {portfolioData.certifications.map((cert, index) => (
                    <motion.a
                        key={index}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="achievement-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{ textDecoration: 'none', display: 'block' }}
                    >
                        <div className="achievement-icon">
                            {cert.icon && cert.icon.startsWith('logos:') ? (
                                <iconify-icon icon={cert.icon} style={{ fontSize: '3.5rem', marginBottom: '1rem' }}></iconify-icon>
                            ) : cert.icon && cert.icon.includes(':') && cert.icon.startsWith('fa-') ? (
                                <i className={cert.icon.split(':')[0] + ' fa-' + cert.icon.split(':')[1]} style={{ fontSize: '3.5rem', color: cert.iconColor || 'var(--accent-green)', marginBottom: '1rem' }}></i>
                            ) : cert.icon && cert.icon.startsWith('simple-icons:') ? (
                                <iconify-icon icon={cert.icon} style={{ fontSize: '3.5rem', color: cert.iconColor || 'var(--accent-green)', marginBottom: '1rem' }}></iconify-icon>
                            ) : cert.icon ? (
                                <i className={cert.icon} style={{ fontSize: '3.5rem', color: cert.iconColor || 'var(--accent-green)', marginBottom: '1rem' }}></i>
                            ) : null}
                        </div>
                        <h3>{cert.title}</h3>
                        <div className="subtitle">{cert.subtitle}</div>
                        <div className="achievement-link">
                            view credential →
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default CertificationsSection;

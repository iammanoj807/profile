import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon, Reveal, handleSpotlight } from './ui';

const CertificationsSection = () => (
    <section id="certifications" className="section section-tight">
        <div className="container">
            <Reveal className="subsection-head">
                <h3>Certifications</h3>
                <span className="subsection-line" />
            </Reveal>

            <div className="cert-grid">
                {portfolioData.certifications.map((cert, i) => (
                    <Reveal
                        as="a"
                        key={cert.title}
                        delay={(i % 3) * 0.08}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-card"
                        onMouseMove={handleSpotlight}
                    >
                        <span className="cert-icon">
                            <Icon name={cert.icon} style={cert.iconColor ? { color: cert.iconColor } : undefined} />
                        </span>
                        <span className="cert-text">
                            <span className="cert-title">{cert.title}</span>
                            <span className="cert-issuer">{cert.subtitle}</span>
                        </span>
                        <i className="fa-solid fa-arrow-right cert-arrow" aria-hidden="true"></i>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
);

export default CertificationsSection;

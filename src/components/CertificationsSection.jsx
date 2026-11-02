import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon, Reveal } from './ui';

const CertificationsSection = () => (
    <section id="certifications" className="section section-tight" aria-labelledby="certs-title">
        <div className="container">
            <Reveal className="subsection-head">
                <h3 id="certs-title">Certifications</h3>
            </Reveal>

            <div className="cert-grid">
                {portfolioData.certifications.map((cert, i) => (
                    <Reveal
                        as="a"
                        key={cert.title}
                        delay={(i % 3) * 0.05}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card cert-card"
                    >
                        <span className="icon-tile cert-icon">
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

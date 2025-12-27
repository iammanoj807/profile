import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Connection Port</h2>

                    <motion.div
                        className="debug-console"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="console-header">
                            <div className="console-dot red"></div>
                            <div className="console-dot yellow"></div>
                            <div className="console-dot green"></div>
                            <div className="console-title">contact_info.json</div>
                        </div>
                        <div className="console-body" style={{ fontFamily: 'monospace' }}>
                            <div className="console-line">
                                <span className="keyword" style={{ color: '#ff79c6' }}>{"{"}</span>
                            </div>

                            <div className="console-line" style={{ paddingLeft: '20px' }}>
                                <span className="key" style={{ color: '#8be9fd' }}>location:</span>
                                <span className="value" style={{ color: '#e6edf3' }}> "{portfolioData.address}",</span>
                            </div>

                            <div className="console-line" style={{ paddingLeft: '20px' }}>
                                <span className="key" style={{ color: '#8be9fd' }}>email:</span>
                                <span className="value" style={{ color: '#e6edf3' }}>
                                    <a href="mailto:thapam807@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: '#e6edf3', textDecoration: 'none' }}>
                                        "thapam807@gmail.com"
                                    </a>,
                                </span>
                            </div>

                            <div className="console-line" style={{ paddingLeft: '20px' }}>
                                <span className="key" style={{ color: '#8be9fd' }}>phone:</span>
                                <span className="value" style={{ color: '#f1fa8c', fontWeight: 'normal' }}>
                                    <a href={portfolioData.phoneLink || "tel:+447438029689"} target="_blank" rel="noopener noreferrer" style={{ color: '#e6edf3', textDecoration: 'none', fontWeight: 'normal' }}>
                                        "{portfolioData.phoneDisplay || "+44 7438 029689"}"
                                    </a>,
                                </span>
                            </div>

                            <div className="console-line" style={{ paddingLeft: '20px' }}>
                                <span className="key" style={{ color: '#8be9fd' }}>graduation:</span>
                                <span className="value" style={{ color: '#e6edf3' }}> "January 2026",</span>
                            </div>

                            <div className="console-line" style={{ paddingLeft: '20px' }}>
                                <span className="key" style={{ color: '#8be9fd' }}>status:</span>
                                <span className="value" style={{ color: '#e6edf3' }}> "Available for 2026 Graduate Roles",</span>
                            </div>

                            <div className="console-line" style={{ paddingLeft: '20px' }}>
                                <span className="key" style={{ color: '#8be9fd' }}>visa:</span>
                                <span className="value" style={{ color: '#e6edf3' }}> "UK Graduate Route (2026–2028) – No sponsorship required"</span>
                            </div>

                            <div className="console-line">
                                <span className="keyword" style={{ color: '#ff79c6' }}>{"}"}</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="social-links" style={{ marginTop: '3rem' }}>
                        {portfolioData.social_links.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                whileHover={{ scale: 1.1 }}
                                viewport={{ once: true }}
                                title={link.name}
                            >
                                {link.icon.startsWith('fa-') ? (
                                    <i className={link.icon} style={{ color: link.color || 'var(--text-secondary)' }}></i>
                                ) : (
                                    <iconify-icon icon={link.icon} style={{ color: link.color || 'var(--text-secondary)', fontSize: '1.5rem' }}></iconify-icon>
                                )}
                            </motion.a>
                        ))}
                    </div>
                    <p className="footer-text" style={{ marginTop: '2rem' }}>
                        Made with <span className="heart">❤️</span> by {portfolioData.name}
                    </p>
                    <p className="footer-text" style={{ marginTop: '0.5rem', fontSize: '0.85rem', opacity: 0.7 }}>
                        <a href="https://iammanoj807.github.io/portfolio" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none', borderBottom: '1px dotted var(--text-secondary)' }}>
                            Looking for v1.0? View Legacy Portfolio
                        </a>
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;

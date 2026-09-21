import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon, Reveal } from './ui';

const Footer = () => {
    const { name, email, phoneDisplay, phoneLink, address, relocation, visa, visaNote, resume_link, social_links } = portfolioData;
    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${email}`;
        }
    };

    return (
        <footer id="contact" className="contact">
            <div className="container">
                <Reveal className="contact-card">
                    <div className="contact-glow" aria-hidden="true" />
                    <div className="eyebrow">
                        <span className="eyebrow-index">05</span>
                        <span className="eyebrow-line" />
                        <span>Contact</span>
                    </div>
                    <h2 className="contact-title">
                        Let's build AI that <em>holds up</em> in production.
                    </h2>
                    <p className="contact-text">
                        I'm open to AI engineer, ML engineer and software engineer roles across the UK: on-site, hybrid or remote.
                        {' '}{visa}, <strong>{visaNote.toLowerCase()}</strong>.
                    </p>

                    <div className="contact-actions">
                        <a href={`mailto:${email}`} className="btn btn-primary btn-lg">
                            <i className="fa-solid fa-paper-plane" aria-hidden="true"></i> Say hello
                        </a>
                        <button type="button" className={`btn btn-ghost btn-lg copy-btn ${copied ? 'copied' : ''}`} onClick={copyEmail}>
                            <i className={copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'} aria-hidden="true"></i>
                            {copied ? 'Copied!' : email}
                        </button>
                        <a href={resume_link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-lg">
                            <i className="fa-regular fa-file-lines" aria-hidden="true"></i> Resume
                        </a>
                    </div>

                    <dl className="contact-info">
                        <div>
                            <dt>Phone</dt>
                            <dd><a href={phoneLink}>{phoneDisplay}</a></dd>
                        </div>
                        <div>
                            <dt>Location</dt>
                            <dd>{address} · {relocation.toLowerCase()}</dd>
                        </div>
                        <div>
                            <dt>Right to work</dt>
                            <dd>Graduate Route to 2028 · no sponsorship</dd>
                        </div>
                    </dl>
                </Reveal>

                <div className="footer-bar">
                    <p>© {new Date().getFullYear()} {name}. Designed & built with React.</p>
                    <div className="footer-socials">
                        {social_links.map(link => (
                            <a
                                key={link.name}
                                href={link.url}
                                target={link.url.startsWith('mailto') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                className="icon-btn icon-btn-sm"
                                aria-label={link.name}
                                title={link.name}
                            >
                                <Icon name={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Icon, LogoMark, Reveal } from './ui';

export const ContactSection = () => {
    const { email, phoneDisplay, phoneLink, address, relocation, visa, visaNote } = portfolioData;
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
        <section id="contact" className="section contact-section" aria-labelledby="contact-title">
            <div className="container">
                <Reveal className="contact-card">
                    <div className="contact-copy">
                        <p className="eyebrow">Contact</p>
                        <h2 id="contact-title">
                            Let's build AI that <em>holds up</em> in production.
                        </h2>
                        <p className="contact-text">
                            I'm open to AI engineer, ML engineer and software engineer roles across the UK: on-site, hybrid or remote.
                            {' '}{visa}, <strong>{visaNote.toLowerCase()}</strong>.
                        </p>
                        <div className="contact-actions">
                            <a href={`mailto:${email}`} className="btn btn-lg">
                                <i className="fa-solid fa-paper-plane" aria-hidden="true"></i> Say hello
                            </a>
                            <button type="button" className="btn-ghost btn-lg copy-btn" onClick={copyEmail} aria-live="polite">
                                <i className={copied ? 'fa-solid fa-check' : 'fa-regular fa-copy'} aria-hidden="true"></i>
                                {copied ? 'Copied!' : email}
                            </button>
                        </div>
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
            </div>
        </section>
    );
};

const Footer = () => {
    const { name, title, email, phoneDisplay, phoneLink, address, resume_link, social_links, projects } = portfolioData;
    const external = (url) => (url.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' });

    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="footer-about">
                    <a href="#home" className="brand" aria-label="Back to top">
                        <LogoMark />
                        <span>Manoj <b>Thapa</b></span>
                    </a>
                    <p>{title} in {address}.</p>
                    <div className="footer-socials">
                        {social_links.map(link => (
                            <a key={link.name} href={link.url} {...external(link.url)} className="social-btn" aria-label={link.name} title={link.name}>
                                <Icon name={link.icon} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className="footer-h">Projects</h2>
                    <ul>
                        {projects.map(p => (
                            <li key={p.title}><a href={p.link || p.github} target="_blank" rel="noopener noreferrer">{p.title}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="footer-h">Profiles</h2>
                    <ul>
                        {social_links.filter(l => !l.url.startsWith('mailto')).map(link => (
                            <li key={link.name}><a href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="footer-h">Get in touch</h2>
                    <ul>
                        <li><a href={`mailto:${email}`}>Email</a></li>
                        <li><a href={phoneLink}>{phoneDisplay}</a></li>
                        <li><a href={resume_link} target="_blank" rel="noopener noreferrer">Resume (PDF)</a></li>
                    </ul>
                </div>
            </div>
            <div className="container footer-base">
                <p>© {new Date().getFullYear()} {name}.</p>
                <p>Designed &amp; built with React.</p>
            </div>
        </footer>
    );
};

export default Footer;

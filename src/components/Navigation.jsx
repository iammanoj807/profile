import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const links = [
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
];

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 24);
            const probe = window.scrollY + window.innerHeight * 0.35;
            let current = 'home';
            for (const id of ['home', ...links.map(l => l.id)]) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= probe) current = id;
            }
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = 'contact';
            setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
        const onKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [mobileMenuOpen]);

    return (
        <>
            <motion.div className="scroll-progress" style={{ scaleX: progress }} />
            <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <nav className="nav-container" aria-label="Main">
                    <a href="#home" className="nav-logo" aria-label="Back to top">
                        <span className="nav-logo-mark">M</span>
                        <span className="nav-logo-text">Manoj<span>.</span></span>
                    </a>
                    <ul className="nav-links">
                        {links.map(link => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className={activeSection === link.id ? 'active' : ''}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-actions">
                        <a href={portfolioData.resume_link} target="_blank" rel="noopener noreferrer" className="nav-cta">
                            Resume <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                        </a>
                        <button
                            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
                            onClick={() => setMobileMenuOpen(o => !o)}
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={mobileMenuOpen}
                        >
                            <span /><span />
                        </button>
                    </div>
                </nav>
            </header>

            <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
                <ul>
                    {[{ id: 'home', label: 'Home' }, ...links].map((link, i) => (
                        <li key={link.id} style={{ transitionDelay: mobileMenuOpen ? `${80 + i * 50}ms` : '0ms' }}>
                            <a
                                href={`#${link.id}`}
                                className={activeSection === link.id ? 'active' : ''}
                                onClick={() => setMobileMenuOpen(false)}
                                tabIndex={mobileMenuOpen ? 0 : -1}
                            >
                                <span className="mobile-nav-index">0{i}</span>{link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a
                    href={portfolioData.resume_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary mobile-nav-cta"
                    tabIndex={mobileMenuOpen ? 0 : -1}
                >
                    View resume <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                </a>
            </div>
        </>
    );
};

export default Navigation;

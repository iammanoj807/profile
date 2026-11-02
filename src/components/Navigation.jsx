import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { LogoMark } from './ui';

const links = [
    { id: 'projects', label: 'Work' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
];

const THEME_KEY = 'mkt-theme';
const THEME_COLOR = { light: '#f6f8fc', dark: '#0b1120' };

const useTheme = () => {
    const [theme, setTheme] = useState(() =>
        typeof document !== 'undefined' && document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
    );

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') root.dataset.theme = 'dark';
        else delete root.dataset.theme;
        document.querySelector('meta[name="theme-color"]')?.setAttribute('content', THEME_COLOR[theme]);
        try { localStorage.setItem(THEME_KEY, theme); } catch { /* storage blocked: the choice lasts this visit only */ }
    }, [theme]);

    return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))];
};

const SunIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
);
const MoonIcon = () => (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>
);

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, toggleTheme] = useTheme();
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });

    useEffect(() => {
        const handleScroll = () => {
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
        if (!menuOpen) return;
        const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
        const onResize = () => window.innerWidth > 900 && setMenuOpen(false);
        window.addEventListener('keydown', onKey);
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('keydown', onKey);
            window.removeEventListener('resize', onResize);
        };
    }, [menuOpen]);

    const isDark = theme === 'dark';

    return (
        <>
            <a className="skip" href="#main">Skip to content</a>
            <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
            <header className="site-header">
                <div className="container header-row">
                    <a href="#home" className="brand" aria-label="Manoj Kumar Thapa, back to top">
                        <LogoMark />
                        <span>Manoj <b>Thapa</b></span>
                    </a>

                    <nav className={`main-nav ${menuOpen ? 'open' : ''}`} id="main-nav" aria-label="Main">
                        {links.map(link => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                aria-current={activeSection === link.id ? 'true' : undefined}
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={portfolioData.resume_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm nav-menu-cta"
                        >
                            View resume <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                        </a>
                    </nav>

                    <div className="header-actions">
                        <button
                            type="button"
                            className="icon-btn"
                            onClick={toggleTheme}
                            aria-pressed={isDark}
                            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                            title={isDark ? 'Light mode' : 'Dark mode'}
                        >
                            {isDark ? <MoonIcon /> : <SunIcon />}
                        </button>
                        <a
                            href={portfolioData.resume_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-sm header-cta"
                        >
                            Resume <i className="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
                        </a>
                        <button
                            type="button"
                            className="icon-btn menu-btn"
                            onClick={() => setMenuOpen(o => !o)}
                            aria-controls="main-nav"
                            aria-expanded={menuOpen}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        >
                            {menuOpen ? (
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                            ) : (
                                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navigation;

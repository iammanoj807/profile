import React, { useState, useEffect } from 'react';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'skills', 'experience', 'education', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMobileNavigation = (sectionId) => {
        scrollToSection(sectionId);
        setMobileMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="nav-logo">MKT</div>
                    <ul className="nav-links">
                        <li><a onClick={() => scrollToSection('home')} className={activeSection === 'home' ? 'active' : ''}>{'{ home }'}</a></li>
                        <li><a onClick={() => scrollToSection('skills')} className={activeSection === 'skills' ? 'active' : ''}>{'{ skills }'}</a></li>
                        <li><a onClick={() => scrollToSection('experience')} className={activeSection === 'experience' ? 'active' : ''}>{'{ experience }'}</a></li>
                        <li><a onClick={() => scrollToSection('education')} className={activeSection === 'education' ? 'active' : ''}>{'{ education }'}</a></li>
                        <li><a onClick={() => scrollToSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>{'{ projects }'}</a></li>
                        <li><a onClick={() => scrollToSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>{'{ contact }'}</a></li>
                    </ul>

                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Menu">
                        ☰
                    </button>
                </div>
            </nav>

            <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-nav-header">
                    <button className="mobile-nav-close" onClick={toggleMobileMenu} aria-label="Close menu">
                        ✕
                    </button>
                </div>
                <ul className="mobile-nav-links">
                    <li><a onClick={() => handleMobileNavigation('home')} className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
                    <li><a onClick={() => handleMobileNavigation('skills')} className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
                    <li><a onClick={() => handleMobileNavigation('experience')} className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
                    <li><a onClick={() => handleMobileNavigation('education')} className={activeSection === 'education' ? 'active' : ''}>Education</a></li>
                    <li><a onClick={() => handleMobileNavigation('projects')} className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
                    <li><a onClick={() => handleMobileNavigation('contact')} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
                </ul>
            </div>
        </>
    );
};

export default Navigation;

import React from 'react';
import { MotionConfig } from 'framer-motion';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ProjectsSection from './components/ProjectsSection';
import MethodSection from './components/MethodSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import Footer, { ContactSection } from './components/Footer';

const App = () => (
    <MotionConfig reducedMotion="user">
        <Navigation />
        <main id="main">
            <HeroSection />
            <StatsSection />
            <ProjectsSection />
            <MethodSection />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <CertificationsSection />
            <ContactSection />
        </main>
        <Footer />
    </MotionConfig>
);

export default App;

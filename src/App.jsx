import React from 'react';
import { MotionConfig } from 'framer-motion';
import BackgroundFX from './components/BackgroundFX';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';

const App = () => {
    return (
        <MotionConfig reducedMotion="user">
            <BackgroundFX />
            <Navigation />
            <main>
                <HeroSection />
                <StatsSection />
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
                <EducationSection />
                <CertificationsSection />
            </main>
            <Footer />
        </MotionConfig>
    );
};

export default App;

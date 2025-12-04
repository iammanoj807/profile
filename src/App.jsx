import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import BackgroundCodeRain from './components/BackgroundCodeRain';
import MouseTrail from './components/MouseTrail';
import Navigation from './components/Navigation';
import AvailabilityWidget from './components/AvailabilityWidget';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';

const App = () => {
    const [showSplash, setShowSplash] = useState(true);

    const handleSplashComplete = () => {
        setShowSplash(false);
    };

    if (showSplash) {
        return <SplashScreen onComplete={handleSplashComplete} />;
    }

    return (
        <div>
            <BackgroundCodeRain />
            <MouseTrail />
            <Navigation />
            <AvailabilityWidget />
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <EducationSection />
            <CertificationsSection />
            <ProjectsSection />
            <Footer />
        </div>
    );
};

export default App;

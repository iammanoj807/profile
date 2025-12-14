import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import FloatingCodeSnippets from './FloatingCodeSnippets';
import DeveloperCharacter from './DeveloperCharacter';
import profileImg from '../assets/profile.png';

const HeroSection = () => {

    return (
        <section id="home" className="hero">
            <FloatingCodeSnippets />
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="hero-text">
                    <motion.img
                        src={profileImg}
                        alt="Manoj Kumar Thapa"
                        className="profile-photo"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    />
                    <motion.h1
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {portfolioData.name}
                    </motion.h1>
                    <motion.div
                        className="title"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {portfolioData.title}
                    </motion.div>
                    <motion.div
                        className="description"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        {portfolioData.description}
                    </motion.div>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <a href={portfolioData.resume_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                            View CV
                        </a>
                        <button className="btn btn-secondary" onClick={() => {
                            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                        }}>
                            Get In Touch
                        </button>
                    </motion.div>
                </div>
                <div className="hero-animation">
                    <DeveloperCharacter />
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;

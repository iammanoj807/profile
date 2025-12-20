import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCodeRain = () => {
    const codeSymbols = ['{', '}', '<', '>', '/', ';', '(', ')', '[', ']', '=', '=>', '...', '&&', '||'];
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const skillsSection = document.getElementById('skills');
            if (skillsSection) {
                // Show when we're getting close to the skills section (scrolled past most of hero)
                // Using a threshold of window.innerHeight * 0.5 effectively hides it on the main Hero view
                if (window.scrollY > window.innerHeight * 0.5) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="code-rain-container"
            style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.8s ease-in-out'
            }}
        >
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="code-particle"
                    style={{
                        left: `${Math.random() * 100}% `,
                        top: `${Math.random() * 100}% `,
                    }}
                    animate={{
                        y: [-100, window.innerHeight + 100],
                        opacity: [0, 0.08, 0.08, 0],
                        rotate: [0, 360]
                    }}
                    transition={{
                        duration: 15 + Math.random() * 10,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear"
                    }}
                >
                    {codeSymbols[Math.floor(Math.random() * codeSymbols.length)]}
                </motion.div>
            ))}
        </div>
    );
};

export default BackgroundCodeRain;

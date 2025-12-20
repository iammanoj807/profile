import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const AvailabilityWidget = () => {
    const [showConfetti, setShowConfetti] = useState(false);
    const [buttonText, setButtonText] = useState('Hire Me');
    const [isWaving, setIsWaving] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        setIsWaving(true);

        if (buttonText === 'Hire Me') {
            setButtonText('Hired ✨');
            setShowConfetti(true);
        } else {
            setButtonText('Hire Me');
            setShowConfetti(false);
        }

        setTimeout(() => setIsWaving(false), 1000);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    const widgetRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target)) {
                if (buttonText === 'Hired ✨') {
                    setButtonText('Hire Me');
                    setShowConfetti(false);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [buttonText]);

    return (
        <>
            <motion.div
                ref={widgetRef}
                className="availability-widget"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                onClick={handleClick}
            >
                <div className="widget-bubble">{buttonText}</div>
                <div className="widget-icon-container">
                    <motion.div
                        animate={isWaving ? {
                            rotate: [0, -20, 20, -20, 0],
                            scale: [1, 1.1, 1]
                        } : {
                            y: [0, -5, 0]
                        }}
                        transition={isWaving ? {
                            duration: 0.5
                        } : {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img
                            src={profileImg}
                            alt="Manoj"
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                objectPosition: 'top'
                            }}
                        />
                    </motion.div>
                </div>

                {/* Confetti */}
                {showConfetti && (
                    <div className="small-confetti-container">
                        {Array.from({ length: 25 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="small-confetti-piece"
                                style={{
                                    left: `${-50 + Math.random() * 100}px`,
                                    backgroundColor: ['#FFD700', '#00ff88', '#FF6B6B', '#4ECDC4'][Math.floor(Math.random() * 4)]
                                }}
                                initial={{ y: 0, opacity: 1, scale: 1 }}
                                animate={{ y: 150, opacity: 0, scale: 0.3 }}
                                transition={{
                                    duration: 1.5 + Math.random() * 1,
                                    delay: Math.random() * 0.3,
                                    ease: "easeOut"
                                }}
                            />
                        ))}
                    </div>
                )}
            </motion.div>
        </>
    );
};

export default AvailabilityWidget;
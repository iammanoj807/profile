import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const AvailabilityWidget = () => {
    const [showModal, setShowModal] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [buttonText, setButtonText] = useState('Hire Me');
    const [isWaving, setIsWaving] = useState(false);
    const modalRef = useRef(null);

    const handleClick = (e) => {
        e.stopPropagation();
        setIsWaving(true);

        if (!showModal) {
            setShowModal(true);
            setButtonText('Hired ✨');
            setShowConfetti(true);
        } else {
            setShowModal(false);
            setButtonText('Hire Me');
            setShowConfetti(false);
        }

        setTimeout(() => setIsWaving(false), 1000);
        setTimeout(() => setShowConfetti(false), 3000);
    };

    const handleCloseModal = (e) => {
        e.stopPropagation();
        setShowModal(false);
        setShowConfetti(false);
        setButtonText('Hire Me');
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target) && showModal) {
                setShowModal(false);
                setShowConfetti(false);
                setButtonText('Hire Me');
            }
        };

        const handleEscKey = (event) => {
            if (event.key === 'Escape' && showModal) {
                setShowModal(false);
                setShowConfetti(false);
                setButtonText('Hire Me');
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKey);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [showModal]);

    return (
        <>
            <motion.div
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

            {showModal && (
                <motion.div
                    className="availability-modal"
                    ref={modalRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <button className="modal-close-btn" onClick={handleCloseModal} aria-label="Close modal">
                        ✕
                    </button>
                    <div className="modal-header">
                        <div className="modal-title">Open for Opportunities</div>
                    </div>
                    <div className="modal-detail"><strong>Position:</strong> 2026 Graduate Software Engineer</div>
                    <div className="modal-detail"><strong>Graduating:</strong> Jan 2026</div>
                    <div className="modal-detail"><strong>University:</strong> Aston University</div>
                    <div className="modal-detail"><strong>Location:</strong> Birmingham, UK</div>
                    <div className="modal-detail"><strong>Visa:</strong> UK Graduate Route (2026-2028)</div>
                    <div className="modal-detail"><strong>Sponsorship:</strong> Not Required</div>
                    <div className="modal-detail"><strong>Experience:</strong> 2+ years professional experience</div>
                </motion.div>
            )}
        </>
    );
};

export default AvailabilityWidget;

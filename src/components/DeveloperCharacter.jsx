import React from 'react';
import { motion } from 'framer-motion';

const DeveloperCharacter = () => {
    return (
        <motion.svg
            className="developer-character"
            viewBox="0 0 400 400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            {/* Desk */}
            <motion.rect
                x="50"
                y="280"
                width="300"
                height="20"
                fill="#00d4ff"
                rx="5"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Monitor */}
            <motion.rect
                x="150"
                y="180"
                width="140"
                height="100"
                fill="#0a0e27"
                stroke="#00ff88"
                strokeWidth="3"
                rx="5"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Code Lines on Monitor */}
            <motion.line
                x1="160"
                y1="200"
                x2="230"
                y2="200"
                stroke="#00ff88"
                strokeWidth="2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
            />
            <motion.line
                x1="160"
                y1="215"
                x2="270"
                y2="215"
                stroke="#00d4ff"
                strokeWidth="2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
            />
            <motion.line
                x1="160"
                y1="230"
                x2="250"
                y2="230"
                stroke="#ffbe0b"
                strokeWidth="2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
            />
            <motion.line
                x1="160"
                y1="245"
                x2="220"
                y2="245"
                stroke="#ff006e"
                strokeWidth="2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }}
            />

            {/* Monitor Stand */}
            <rect x="210" y="280" width="20" height="30" fill="#00d4ff" />

            {/* Person Head */}
            <motion.circle
                cx="100"
                cy="230"
                r="25"
                fill="#ffbe0b"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Person Body */}
            <motion.rect
                x="75"
                y="255"
                width="50"
                height="60"
                fill="#833ab4"
                rx="5"
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Arms */}
            <motion.rect
                x="60"
                y="260"
                width="70"
                height="10"
                fill="#6f00d2"
                rx="5"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 2, repeat: Infinity }}
            />

            {/* Coffee Cup */}
            <motion.g
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            >
                <rect x="320" y="260" width="30" height="35" fill="#0a0e27" stroke="#00ff88" strokeWidth="2" rx="3" />
                <ellipse cx="335" cy="260" rx="15" ry="5" fill="#0a0e27" stroke="#00ff88" strokeWidth="2" />
                {/* Steam */}
                <motion.path
                    d="M 330 245 Q 325 235 330 225"
                    stroke="#00d4ff"
                    strokeWidth="2"
                    fill="none"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.path
                    d="M 340 245 Q 345 235 340 225"
                    stroke="#00d4ff"
                    strokeWidth="2"
                    fill="none"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
            </motion.g>

            {/* Keyboard */}
            <rect x="140" y="295" width="80" height="5" fill="#00ff88" rx="2" />

            {/* Floating Particles */}
            <motion.circle
                cx="50"
                cy="100"
                r="3"
                fill="#00ff88"
                animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.circle
                cx="350"
                cy="150"
                r="3"
                fill="#00d4ff"
                animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            <motion.circle
                cx="200"
                cy="80"
                r="3"
                fill="#ff006e"
                animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
            />
        </motion.svg>
    );
};

export default DeveloperCharacter;

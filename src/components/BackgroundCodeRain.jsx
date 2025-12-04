import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCodeRain = () => {
    const codeSymbols = ['{', '}', '<', '>', '/', ';', '(', ')', '[', ']', 'const', 'if', 'return', '=', '=>', '...', '&&', '||', 'hire manoj'];

    return (
        <div className="code-rain-container">
            {Array.from({ length: 30 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="code-particle"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
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

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MouseTrail = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        window.addEventListener("mousemove", mouseMove);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 10,
            y: mousePosition.y - 10,
            opacity: 1,
        }
    };

    return (
        <>
            <motion.div
                className="cursor-trail"
                variants={variants}
                animate="default"
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid var(--accent-green)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    mixBlendMode: 'difference'
                }}
            />
            <motion.div
                className="cursor-dot"
                variants={variants}
                animate="default"
                transition={{
                    type: "spring",
                    stiffness: 1500,
                    damping: 50,
                    mass: 0.1
                }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-cyan)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    marginTop: '7px',
                    marginLeft: '7px'
                }}
            />
        </>
    );
};

export default MouseTrail;

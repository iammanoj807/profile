import React from 'react';
import { motion } from 'framer-motion';

const FloatingCodeSnippets = () => {
    const codeSnippets = [
        'Graduate manoj = new Graduate(2026);',
        `if hiring:\n    return "Manoj Kumar Thapa"`,
        'git commit -m "Ready for 2026 Graduate Opportunity"',
        `SELECT * FROM developers \nWHERE name = "Manoj Kumar Thapa" \nAND location = "Birmingham" \nAND relocation = TRUE;`,
        'String visa = "Graduate Route (No Sponsorship)";',
        'await manoj.readyToWork();',
        'import Innovation from "Manoj Kumar Thapa";'
    ];

    const positions = [
        { top: '15%', left: '5%' },   // Java Grad (Top Left)
        { top: '15%', left: '45%' },  // Python (Top Right)
        { top: '75%', left: '60%' },  // Git (Bottom Right near widget)
        { top: '35%', left: '55%' },  // SQL (Mid Right)
        { top: '30%', left: '28%' },  // Visa (Upper Center-Left)
        { top: '20%', left: '80%' },  // Await (Top Right)
        { top: '35%', left: '75%' }   // Innovation (Mid Right)
    ];

    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Filter snippets for mobile: Java Grad (0), Python (1), Innovation (6)
    const displaySnippets = isMobile
        ? [codeSnippets[0], codeSnippets[1], codeSnippets[6]]
        : codeSnippets;

    const mobilePositions = [
        { top: '60%', left: '5%' },   // Mobile 1 (Lower Left)
        { top: '70%', left: '40%' },  // Mobile 2 (Lower Center)
        { top: '80%', left: '10%' }   // Mobile 3 (Bottom Left)
    ];

    // Map mobile snippets to valid positions
    const displayPositions = isMobile
        ? mobilePositions
        : positions;

    return (
        <>
            {displaySnippets.map((snippet, index) => (
                <motion.div
                    key={index}
                    className="code-snippet"
                    style={{
                        top: displayPositions[index] ? displayPositions[index].top : `${Math.random() * 80}%`,
                        left: displayPositions[index] ? displayPositions[index].left : `${Math.random() * 80}%`
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: [0, 0.3, 0],
                        y: [20, -20, -40]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        delay: index * 1.5
                    }}
                >
                    {snippet}
                </motion.div>
            ))}
        </>
    );
};

export default FloatingCodeSnippets;

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
        { top: '20%', left: '80%' },  // Await (Moved to Top Right - filling blank space)
        { top: '35%', left: '75%' }   // Innovation (Mid Right)
    ];

    return (
        <>
            {codeSnippets.map((snippet, index) => (
                <motion.div
                    key={index}
                    className="code-snippet"
                    style={{
                        top: positions[index] ? positions[index].top : `${Math.random() * 80}%`,
                        left: positions[index] ? positions[index].left : `${Math.random() * 80}%`
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

import React from 'react';
import { motion } from 'framer-motion';

const FloatingCodeSnippets = () => {
    const codeSnippets = [
        'if (passionate) { hire("Manoj"); }',
        'const llm = new OpenAI({ model: "gpt-5"});',
        'function innovate() { }',
        'import skills from "Manoj Kumar Thapa";',
        'const ai = tensorflow.model();',
        'SELECT * FROM skills;',
        'docker build -t app .',
        'git commit -m "awesome"'
    ];

    return (
        <>
            {codeSnippets.map((snippet, index) => (
                <motion.div
                    key={index}
                    className="code-snippet"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`
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

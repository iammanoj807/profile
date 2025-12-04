import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        const terminalLines = [
            { text: '> Manoj is initializing...', delay: 100, class: 'terminal-info' },
            { text: '> Loading neural networks...', delay: 600, class: 'terminal-warning' },
            { text: '> Manoj is absorbing new skills...', delay: 1200, class: 'terminal-success' },
            { text: '> Compiling experience modules...', delay: 1600, class: 'terminal-info' },
            { text: '> Optimizing for success...', delay: 2200, class: 'terminal-info' },
            { text: '', delay: 2500 },
            { text: '> READY TO INNOVATE', delay: 2800, class: 'terminal-success' },
            { text: '', delay: 3000 },
        ];

        const timeouts = [];

        terminalLines.forEach((line, index) => {
            const id = setTimeout(() => {
                setLines(prev => [...prev, line]);
                if (index === terminalLines.length - 1) {
                    const completionId = setTimeout(onComplete, 800);
                    timeouts.push(completionId);
                }
            }, line.delay);
            timeouts.push(id);
        });

        // Cleanup function to prevent duplicates in Strict Mode
        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [onComplete]);

    return (
        <div className="splash-screen">
            <div className="terminal-window">
                <div className="terminal-header">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                    <span style={{ marginLeft: '1rem', color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                        system@boot:~
                    </span>
                </div>
                <div className="terminal-body">
                    {lines.map((line, index) => (
                        <div key={index} className={`terminal-line show ${line.class || ''}`}>
                            {line.text}
                        </div>
                    ))}
                    <div className="terminal-line show">
                        <span className="terminal-prompt">$</span>
                        <span className="terminal-cursor"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SplashScreen;

import React, { useState, useEffect } from 'react';

const ImportAnimation = ({ text, onComplete }) => {
    const [displayText, setDisplayText] = useState('');
    const [stage, setStage] = useState(0); // 0: typing import, 1: pause, 2: show name

    useEffect(() => {
        const importText = text; // Only type the name to avoid duplication bug

        if (stage === 0) {
            let i = 0;
            const timer = setInterval(() => {
                if (i < importText.length) {
                    setDisplayText(importText.substring(0, i + 1));
                    i++;
                } else {
                    clearInterval(timer);
                    setTimeout(() => setStage(1), 1000); // Pause after typing
                }
            }, 100); // Slower typing speed (Medium)

            return () => clearInterval(timer);
        } else if (stage === 1) {
            setDisplayText(text);
            setStage(2);
        }
    }, [text, stage]);

    return (
        <div className="import-animation">
            {stage === 0 ? (
                <span className="import-text">
                    <span className="keyword">from</span> skills <span className="keyword">import</span> {displayText}
                    <span className="cursor">|</span>
                </span>
            ) : (
                <span className="final-name">{text}</span>
            )}
        </div>
    );
};

export default ImportAnimation;

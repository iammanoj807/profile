import React from 'react';

const GlitchText = ({ text }) => {
    return (
        <div className="glitch-wrapper">
            <div className="glitch" data-text={text}>{text}</div>
        </div>
    );
};

export default GlitchText;

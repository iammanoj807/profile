import React from 'react';

/**
 * Parses text containing **bold** markers and returns React elements
 * with <strong> tags for bold segments.
 */
export function renderBoldText(text) {
    if (!text || typeof text !== 'string') return text;

    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        return part;
    });
}

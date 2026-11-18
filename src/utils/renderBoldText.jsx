import React from 'react';

/**
 * Parses text containing **bold** markers and [label](https://...) links and returns React elements:
 * <strong> for bold segments and an <a> that opens in a new tab for links.
 */
export function renderBoldText(text) {
    if (!text || typeof text !== 'string') return text;

    const parts = text.split(/(\*\*.*?\*\*|\[[^\]]+\]\([^)\s]+\))/g);
    return parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/);
        if (link) {
            return <a key={i} href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]}</a>;
        }
        return part;
    });
}

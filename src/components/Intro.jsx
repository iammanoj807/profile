import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { renderBoldText } from '../utils/renderBoldText';
import portrait from '../assets/manoj-portrait.webp';

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const inWords = (n) => NUMBER_WORDS[n] ?? String(n);

const external = (href) => (href.startsWith('mailto:') ? {} : { target: '_blank', rel: 'noopener noreferrer' });

const Intro = () => {
    const { name, tagline, bio, email, resume_link, social_links, openSource } = portfolioData;
    const profile = (label) => social_links.find(l => l.name === label)?.url;
    const links = [
        { label: 'Email', href: `mailto:${email}` },
        { label: 'CV', href: resume_link },
        { label: 'GitHub', href: profile('GitHub') },
        { label: 'LinkedIn', href: profile('LinkedIn') }
    ].filter(l => l.href);
    const merged = inWords(openSource.length);

    return (
        <header className="intro">
            <div className="intro-text">
                <h1 className="name">{name}</h1>
                {tagline && <p className="tagline">{tagline}</p>}
                {bio.map((paragraph, i) => (
                    <p key={i}>{renderBoldText(paragraph.replace('{mergedCount}', merged))}</p>
                ))}
                <p className="links">
                    {links.map((l, i) => (
                        <React.Fragment key={l.label}>
                            {i > 0 && <span className="sep" aria-hidden="true">/</span>}
                            <a href={l.href} {...external(l.href)}>{l.label}</a>
                        </React.Fragment>
                    ))}
                </p>
            </div>
            <img
                className="photo"
                src={portrait}
                alt={name}
                width="200"
                height="200"
                draggable="false"
            />
        </header>
    );
};

export default Intro;

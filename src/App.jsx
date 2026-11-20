import React, { useEffect } from 'react';
import Intro from './components/Intro';
import News from './components/News';
import Research from './components/Research';
import OpenSource from './components/OpenSource';
import Background from './components/Background';

// A plain, single-column academic homepage.
const App = () => {
    // React draws the page after the browser has looked for the #section in the
    // address, so links such as /profile/#open-source (from the CV) would open at
    // the top. Scroll there once the sections exist.
    useEffect(() => {
        const id = decodeURIComponent(window.location.hash.slice(1));
        if (id) document.getElementById(id)?.scrollIntoView();
    }, []);

    return (
        <main className="page">
            <Intro />
            <News />
            <Research />
            <OpenSource />
            <Background />
            <footer className="page-footer">© {new Date().getFullYear()} Manoj Kumar Thapa</footer>
        </main>
    );
};

export default App;

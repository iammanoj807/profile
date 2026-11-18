import React from 'react';
import Intro from './components/Intro';
import News from './components/News';
import Research from './components/Research';
import OpenSource from './components/OpenSource';
import Background from './components/Background';

// A plain, single-column academic homepage.
const App = () => (
    <main className="page">
        <Intro />
        <News />
        <Research />
        <OpenSource />
        <Background />
        <footer className="page-footer">© {new Date().getFullYear()} Manoj Kumar Thapa</footer>
    </main>
);

export default App;

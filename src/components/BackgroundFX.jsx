import React from 'react';
import NeuralBackground from './NeuralBackground';

const BackgroundFX = () => (
    <div className="bg-fx" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <NeuralBackground />
        <div className="bg-noise" />
    </div>
);

export default BackgroundFX;

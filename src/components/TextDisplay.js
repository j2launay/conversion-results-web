import React from 'react';

const TextDisplay = ({ content }) => {
    return (
        <div className="text-display">
            <h2>Conversion Results for Amethyst</h2>
            <p>{content}</p>
        </div>
    );
};

export default TextDisplay;
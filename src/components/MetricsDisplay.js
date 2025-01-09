import React from 'react';

const MetricsDisplay = ({ precision, hallucination, positive, negative }) => {
    return (
        <div className="metrics-display">
            <h2>Conversion Metrics</h2>
            <div className="metric">
                <h3>Precision</h3>
                <p>{precision}</p>
            </div>
            <div className="metric">
                <h3>Hallucination</h3>
                <p>{hallucination}</p>
            </div>
            <div className="metric">
                <h3>Positive Aspects</h3>
                <p>{positive}</p>
            </div>
            <div className="metric">
                <h3>Negative Aspects</h3>
                <p>{negative}</p>
            </div>
        </div>
    );
};

export default MetricsDisplay;
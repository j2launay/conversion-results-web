import React from 'react';

const MetricsDisplay = ({ precision, hallucination, positive, negative }) => {
    const formatMetric = (value) => {
        if (value === null || value === undefined || value === 'N/A') {
            return 'Pending';
        }
        return value;
    };

    return (
        <div className="metrics">
            <div className="metrics-scores">
                <div className="metric-score">
                    <h3>Precision Score</h3>
                    <div className="score-value">{formatMetric(precision)}/10</div>
                </div>
                <div className="metric-score">
                    <h3>Hallucination Score</h3>
                    <div className="score-value">{formatMetric(hallucination)}/10</div>
                </div>
            </div>
            <div className="metrics-analysis">
                <div className="metric-text">
                    <h3>Positive Aspects</h3>
                    <ul>
                        {formatMetric(positive).split('.').filter(item => item.trim()).map((point, index) => (
                            <li key={index}>{point.trim()}.</li>
                        ))}
                    </ul>
                </div>
                <div className="metric-text">
                    <h3>Negative Aspects</h3>
                    <ul>
                        {formatMetric(negative).split('.').filter(item => item.trim()).map((point, index) => (
                            <li key={index}>{point.trim()}.</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MetricsDisplay;
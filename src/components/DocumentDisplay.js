import React from 'react';

const DocumentDisplay = ({ content }) => {
    const formatDocument = (text) => {
        try {
            if (typeof text === 'object' && text !== null) {
                return text;
            }
            
            if (typeof text === 'string') {
                // First try to parse as JSON
                try {
                    return JSON.parse(text);
                } catch (e) {
                    // If that fails, try to clean up the string first
                    const cleanedText = text.replace(/</g, '{').replace(/>/g, '}');
                    return JSON.parse(cleanedText);
                }
            }
            
            return text;
        } catch (e) {
            console.error('Error formatting document:', e);
            return text;
        }
    };

    const renderValue = (value) => {
        if (value === null || value === undefined || value === "") return "No information available";
        if (Array.isArray(value)) {
            if (value.length === 0) return "No information available";
            return (
                <ul className="value-list">
                    {value.map((item, index) => (
                        <li key={index}>{item || "Not specified"}</li>
                    ))}
                </ul>
            );
        }
        if (typeof value === 'object') {
            const entries = Object.entries(value);
            if (entries.length === 0) return "No information available";
            return entries.map(([subKey, subValue]) => (
                <div className="sub-item" key={subKey}>
                    <strong>{subKey.replace(/_/g, ' ')}:</strong> {renderValue(subValue)}
                </div>
            ));
        }
        return String(value);
    };

    try {
        const parsedContent = formatDocument(content);
        
        if (!parsedContent || Object.keys(parsedContent).length === 0) {
            return (
                <div className="document-converted">
                    <h2>Converted Document</h2>
                    <div className="document-content">
                        <p>No content available</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="document-converted">
                <h2>Converted Document</h2>
                <div className="document-content">
                    {Object.entries(parsedContent).map(([section, sectionData]) => (
                        <div className="document-section" key={section}>
                            <h3 className="section-title">{section}</h3>
                            <div className="section-content">
                                {Object.entries(sectionData).map(([key, value]) => (
                                    <div className="section-item" key={key}>
                                        <strong className="item-key">{key}:</strong>
                                        <div className="item-value">
                                            {value === null ? "Not available" : renderValue(value)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error rendering document:', error);
        return (
            <div className="document-converted">
                <h2>Converted Document</h2>
                <div className="document-content">
                    <p>Error displaying document content</p>
                </div>
            </div>
        );
    }
};

export default DocumentDisplay;

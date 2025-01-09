import React, { useState, useEffect } from 'react';
import MetricsDisplay from './components/MetricsDisplay';
import TextDisplay from './components/TextDisplay';
import './styles/App.css';

function App() {
    const [documents, setDocuments] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [metrics, setMetrics] = useState({
        precision: 0,
        hallucination: 0,
        positive: 0,
        negative: 0,
        document_converted: ""
    });

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/results/index.json`)
            .then(response => response.json())
            .then(data => setDocuments(data))
            .catch(error => console.error('Error fetching document list:', error));
    }, []);

    const handleDocumentChange = (event) => {
        const documentName = event.target.value;
        setSelectedDocument(documentName);
        fetch(`${process.env.PUBLIC_URL}/results/${documentName}.json`)
            .then(response => response.json())
            .then(data => setMetrics(data))
            .catch(error => console.error('Error fetching document:', error));
    };

    return (
        <div className="App">
            <h1>Conversion Results</h1>
            <div>
                <label htmlFor="document-select">Select Document: </label>
                <select id="document-select" onChange={handleDocumentChange}>
                    <option value="">--Select a document--</option>
                    {documents.map((doc, index) => (
                        <option key={index} value={doc}>{doc}</option>
                    ))}
                </select>
            </div>
            {selectedDocument && (
                <>
                    <TextDisplay content={`Conversion results for ${selectedDocument}`} />
                    <div className="document-converted">
                        <h2>Converted Document</h2>
                        <pre>{metrics.document_converted}</pre>
                    </div>
                    <MetricsDisplay 
                        precision={metrics.precision} 
                        hallucination={metrics.hallucination} 
                        positive={metrics.positive} 
                        negative={metrics.negative} 
                    />
                </>
            )}
        </div>
    );
}

export default App;
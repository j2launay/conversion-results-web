import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import MetricsDisplay from './components/MetricsDisplay';
import TextDisplay from './components/TextDisplay';
import DocumentDisplay from './components/DocumentDisplay';
import FileUpload from './components/FileUpload';
import './styles/App.css';

function App() {
    const [documents, setDocuments] = useState([]);
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [loading, setLoading] = useState(false);
    const [metrics, setMetrics] = useState({
        precision: 0,
        hallucination: 0,
        positive: 0,
        negative: 0,
        document_converted: ""
    });
    const [summary, setSummary] = useState(null);

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/results/index.json`)
            .then(response => response.json())
            .then(data => setDocuments(data))
            .catch(error => console.error('Error fetching document list:', error));
    }, []);

    const handleDocumentChange = async (event) => {
        const documentName = event.target.value;
        setSelectedDocument(documentName);
        setLoading(true);

        try {
            const [metricsResponse, summaryResponse] = await Promise.all([
                fetch(`${process.env.PUBLIC_URL}/results/${documentName}.json`),
                fetch(`${process.env.PUBLIC_URL}/results/${documentName}_summary.json`)
            ]);

            const metricsData = await metricsResponse.json();
            const summaryData = await summaryResponse.json();

            setMetrics(metricsData);
            setSummary(summaryData);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleUploadComplete = (data) => {
        console.log('Upload complete, received data:', data);
        setSelectedDocument(null);
        
        // Ensure we have valid data before updating state
        if (data && typeof data === 'object') {
            setMetrics({
                precision: data.precision ?? 'N/A',
                hallucination: data.hallucination ?? 'N/A',
                positive: data.positive ?? 'N/A',
                negative: data.negative ?? 'N/A',
                document_converted: data.document_converted || {}
            });
        } else {
            console.error('Invalid data received from server');
        }
    };

    return (
        <div className="App">
            <div className="container">
                <h1>Medical Document Conversion Results</h1>
                
                <FileUpload onUploadComplete={handleUploadComplete} />

                <div className="document-selector">
                    <label htmlFor="document-select">Select Patient Document: </label>
                    <select id="document-select" onChange={handleDocumentChange}>
                        <option value="">--Select a document--</option>
                        {documents.map((doc, index) => (
                            <option key={index} value={doc}>{doc}</option>
                        ))}
                    </select>
                </div>

                {loading && <div className="loading">Loading...</div>}
                
                {(metrics.document_converted || selectedDocument) && !loading && (
                    <>
                        {summary && (
                            <div className="executive-summary">
                                <h2>Executive Summary</h2>
                                <ReactMarkdown>{summary.summary}</ReactMarkdown>
                            </div>
                        )}

                        <MetricsDisplay 
                            precision={metrics.precision} 
                            hallucination={metrics.hallucination} 
                            positive={metrics.positive} 
                            negative={metrics.negative} 
                        />

                        <DocumentDisplay content={metrics.document_converted} />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
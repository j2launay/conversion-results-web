import React, { useState } from 'react';

const FileUpload = ({ onUploadComplete }) => {
    const [files, setFiles] = useState([]);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
        setError(null);
    };

    const handleUpload = async () => {
        if (files.length === 0) {
            setError('Please select files to upload');
            return;
        }

        setUploading(true);
        setError(null);

        const formData = new FormData();
        files.forEach(file => {
            formData.append('files', file);
        });

        try {
            const response = await fetch('http://localhost:5000/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            console.log('Response data:', data); // Add this for debugging
            
            if (!response.ok) {
                throw new Error(data.error || 'Upload failed');
            }

            if (data.document_converted) {
                onUploadComplete(data);
                setFiles([]);
            } else {
                throw new Error('No document conversion data received');
            }
        } catch (err) {
            if (err.message === 'Failed to fetch') {
                setError('Cannot connect to server. Please ensure the Flask server is running on port 5000');
            } else {
                setError('Error uploading files: ' + err.message);
            }
            console.error('Upload error:', err);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="file-upload">
            <h2>Upload New Documents</h2>
            <div className="upload-container">
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    accept=".pdf,.png,.jpg,.jpeg"
                    disabled={uploading}
                />
                <button 
                    onClick={handleUpload}
                    disabled={uploading || files.length === 0}
                >
                    {uploading ? 'Processing...' : 'Upload and Process'}
                </button>
            </div>
            {error && <div className="error-message">{error}</div>}
            {files.length > 0 && (
                <div className="selected-files">
                    <h3>Selected Files:</h3>
                    <ul>
                        {files.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default FileUpload;

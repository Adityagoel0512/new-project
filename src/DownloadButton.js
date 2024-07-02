import React from 'react';
import './DownloadButton.css';

const DownloadButton = ({ url, filename = 'download.pdf' }) => {
    const onButtonClick = () => {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button className="custom-download-button" onClick={onButtonClick}>
            Download
        </button>
    );
};

export default DownloadButton;


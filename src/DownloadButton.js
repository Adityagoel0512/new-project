import React from 'react';
import './DownloadButton.css';

const DownloadButton = () => {
    const onButtonClick = () => {
        const pdfUrl = "Terms.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "T&C.pdf"; // specify the filename
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

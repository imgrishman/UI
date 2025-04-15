import React, { useState, useCallback } from 'react';


const BottomDragDrop = ({ onFileChange }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length > 0) {
      onFileChange(e.dataTransfer.files[0]);
    }
  }, [onFileChange]);

  const openFileExplorer = useCallback(() => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.jpg,.jpeg,.png,.pdf';
    fileInput.onchange = (e) => e.target.files[0] && onFileChange(e.target.files[0]);
    fileInput.click();
  }, [onFileChange]);

  return (
    <div className="bottom-drag-drop-container">
      <div
        className={`drag-drop-area ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={openFileExplorer}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="#0071e3">
          <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
        </svg>
        <p>Drag & drop files here or click to browse</p>
      </div>
      <button
        className="change-file-button"
        onClick={openFileExplorer}
      >
        Upload File
      </button>
    </div>
  );
};

export default BottomDragDrop;
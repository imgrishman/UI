import React from 'react';
// import './FilePreview.css'; // No separate CSS import

const FileIcon3D = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0071e3">
    <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
    <path d="M8 12h8v2H8zm0 4h8v2H8z" fill="#fff"/>
  </svg>
);

const FilePreview = ({ file, fileUrl }) => {
  return (
    <div className="file-preview">
      <div className="section-header">
        <h2>Original Document</h2>
        {file && file.type && (
          <div className="file-type-badge">{file.type.split('/')[1]?.toUpperCase() || 'FILE'}</div>
        )}
      </div>
      <div className="preview-container">
        {file ? (
          file.type?.startsWith('image/') ? (
            <img src={fileUrl} alt="Preview" className="document-preview" />
          ) : (
            <iframe
              src={fileUrl}
              title="Document Preview"
              className="document-preview"
              scrolling="auto"
              style={{ overflow: 'hidden' }}
            />
          )
        ) : (
          <p className="placeholder-text">No document selected.</p>
        )}
      </div>
      {file && (
        <div className="file-info-footer">
          <div className="file-meta">
            <FileIcon3D />
            <span className="file-name">{file.name}</span>
            <span className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilePreview;
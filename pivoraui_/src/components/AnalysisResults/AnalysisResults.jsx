import React from 'react';

const AnalysisResults = ({ apiData }) => {
  return (
    <div className="analysis-results">
      <div className="results-content">
        {apiData ? (
          <div>
            
            {typeof apiData === 'object' && apiData !== null ? (
              <ul>
                {Object.entries(apiData).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {JSON.stringify(value, null, 2)} {/* Pretty print JSON */}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Data is not in JSON format.</p>
            )}
          </div>
        ) : (
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Analyzing document...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalysisResults;
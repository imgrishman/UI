import React, { useState, useMemo } from 'react';
import FilePreview from './components/FilePreview/FilePreview';
import AnalysisResults from './components/AnalysisResults/AnalysisResults';
import BottomDragDrop from './components/BottomDragDrop/BottomDragDrop';
import PivoraLogo from './assets/images/pivora_black_text.svg';
import './App.css'; // Single CSS file

function App() {
  const [file, setFile] = useState(null);
  const [apiData, setApiData] = useState(null);

  const fileUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);

  const handleFileChange = (selectedFile) => {
    setFile(selectedFile);
    setTimeout(() => {
      setApiData({ title: "GRISHMAN" }); // Simulate API data loading with the name
    }, 800);
  };


  return (
    <div className="app-container">
      <header className="app-header">
        <img src={PivoraLogo} alt="Pivora Logo" className="pivora-logo" />
      </header>
      <div className="side-by-side-container">
        <div className="left-panel">
          <FilePreview file={file} fileUrl={fileUrl} />
        </div>
        <div className="right-panel">
          <div className="analysis-header">
            <h2>ANALYSIS RESULTS</h2>
            <AnalysisResults apiData={apiData} />
            <div className="bottom-section">
            <BottomDragDrop onFileChange={handleFileChange} />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
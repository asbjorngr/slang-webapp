import React from 'react';
import { useNavigate } from 'react-router-dom';

const EnableRecordingScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="screen-container">
      <div className="screen-header">
        <span className="back-button" onClick={() => navigate(-1)}>&larr;</span>
      </div>

      <div className="screen-content content-animate">
        <div className="card" style={{ 
          borderRadius: 32, 
          padding: 'var(--space-xl) var(--space-lg)', 
          width: '100%',
          maxWidth: '320px',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' 
        }}>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 'var(--space-md)' }}>
            <rect x="18" y="8" width="12" height="24" rx="6" stroke="#222" strokeWidth="2" fill="#fff" />
            <path d="M24 40V44" stroke="#222" strokeWidth="2" strokeLinecap="round" />
            <path d="M16 32V34C16 37.3137 18.6863 40 22 40H26C29.3137 40 32 37.3137 32 34V32" stroke="#222" strokeWidth="2" />
          </svg>
          <h2 style={{ textAlign: 'center', margin: 0 }}>Husk å slå på taleopptak</h2>
          <p style={{ textAlign: 'center', marginTop: 'var(--space-md)', marginBottom: 0, fontSize: '1.1rem', opacity: 0.8 }}>
            Bruk én telefon til å bla i spørsmålene, og en annen telefon til å gjøre taleopptaket.
          </p>
        </div>
      </div>

      <div className="screen-footer">
        <button onClick={() => navigate('/get-ready')}>
          Den er grei
        </button>
      </div>
    </div>
  );
};

export default EnableRecordingScreen; 
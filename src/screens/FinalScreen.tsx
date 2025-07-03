import React from 'react';
import horseImg from '../assets/a transparent icon of an icelandic pony head.png';

const FinalScreen: React.FC = () => {
  const handleClose = () => {
    // Close the browser tab/window
    window.close();
  };

  return (
    <div className="screen-container">
      <div className="screen-content no-header content-animate">
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <img src={horseImg} alt="Slang mascot" style={{ width: 120, height: 120, objectFit: 'contain' }} />
        </div>
        
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: 'var(--space-xl)', 
          fontSize: '2.2rem', 
          lineHeight: '1.1' 
        }}>
          Tusen takk for<br />
          at dere deltok<br />
          på Slang
        </h1>
      </div>

      <div className="screen-footer">
        <button onClick={handleClose}>
          Lukk
        </button>
      </div>
    </div>
  );
};

export default FinalScreen; 
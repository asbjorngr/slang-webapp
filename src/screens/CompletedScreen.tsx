import React from 'react';
import { useNavigate } from 'react-router-dom';
import horseImg from '../assets/a transparent icon of an icelandic pony head.png';
import chatIcon from '../assets/ChatCircleText.svg';

const CompletedScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="screen-header">
        <span className="back-button" onClick={() => navigate(-1)}>&larr;</span>
      </div>

      <div className="screen-content content-animate">
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          <img src={horseImg} alt="Slang mascot" style={{ width: 120, height: 120, objectFit: 'contain' }} />
        </div>
        <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-xs)' }}>Ferdig!</h1>
        <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', fontSize: '1rem' }}>
          Dere har fullført Slang<br />om Trondheim Kino
        </p>
        
        <div className="stagger-animate" style={{ width: '100%', maxWidth: '340px' }}>
          <div className="card" style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
            <img src={chatIcon} alt="Chat icon" style={{ marginRight: 12, width: 20, height: 20, flexShrink: 0 }} />
            <span style={{ fontSize: '0.95rem' }}>Du kan nå stanse lydopptaket. Husk å lagre</span>
          </div>
          
          <div className="card" style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
            <img src={chatIcon} alt="Chat icon" style={{ marginRight: 12, width: 20, height: 20, flexShrink: 0 }} />
            <span style={{ fontSize: '0.95rem' }}>Send lydopptaket til Superponni</span>
          </div>
          
          <div className="card" style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
            <img src={chatIcon} alt="Chat icon" style={{ marginRight: 12, width: 20, height: 20, flexShrink: 0 }} />
            <span style={{ fontSize: '0.95rem' }}>Godtgjørelse utbetales etter at lydopptaket er mottatt</span>
          </div>
        </div>
      </div>

      <div className="screen-footer">
        <button onClick={() => navigate('/registration')}>
          Gå til registrering
        </button>
      </div>
    </div>
  );
};

export default CompletedScreen; 
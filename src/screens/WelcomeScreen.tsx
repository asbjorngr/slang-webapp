import React from 'react';
import { useNavigate } from 'react-router-dom';
import horseImg from '../assets/a transparent icon of an icelandic pony head.png';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="screen-container">
      <div className="screen-content no-header content-animate">
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: 'var(--space-sm)',
          fontSize: '3rem',
          lineHeight: '1.1'
        }}>
          Velkommen til Slang
        </h1>
        <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', fontSize: '1rem' }}>
          I denne runden vil vi høre hva dere tenker om Trondheim Kino
        </p>
        <div style={{ marginBottom: 'var(--space-xl)' }}>
          <img src={horseImg} alt="Slang mascot" style={{ width: 80, height: 80, objectFit: 'contain' }} />
        </div>
      </div>

      <div className="screen-footer">
        <button onClick={() => navigate('/audio-intro')}>
          Kom i gang
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen; 
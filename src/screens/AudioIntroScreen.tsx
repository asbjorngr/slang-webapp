import React from 'react';
import { useNavigate } from 'react-router-dom';
import horseImg from '../assets/a transparent icon of an icelandic pony head.png';
import AudioPlayer from '../components/AudioPlayer';
import audioIntro from '../assets/Intro til deltagere - Trondheim Kino.mp3';

const AudioIntroScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="screen-header">
        <span className="back-button" onClick={() => navigate(-1)}>&larr;</span>
      </div>

      <div className="screen-content content-animate" style={{ justifyContent: 'flex-start', paddingTop: 'calc(var(--header-height) + var(--space-lg))' }}>
        <div style={{ marginBottom: 'var(--space-lg)', textAlign: 'center' }}>
          <img src={horseImg} alt="Slang mascot" style={{ width: 80, height: 80, objectFit: 'contain' }} />
        </div>
        <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }}>
          En intro til Slang
        </h1>
        <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', fontSize: '1rem' }}>
          Lurt å høre ferdig før du går videre
        </p>
        <div style={{ 
          width: '100%', 
          maxWidth: '340px',
          marginBottom: 'var(--space-lg)',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <AudioPlayer src={audioIntro} />
        </div>
      </div>

      <div className="screen-footer">
        <button onClick={() => navigate('/tips')}>
          Fortsett
        </button>
      </div>
    </div>
  );
};

export default AudioIntroScreen; 
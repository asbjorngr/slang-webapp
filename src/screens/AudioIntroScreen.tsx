import React from 'react';
import { useNavigate } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';
import audioIntro from '../assets/Intro til deltagere - Trondheim Kino.mp3';

const AudioIntroScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="screen-header">
        <span className="back-button" onClick={() => navigate(-1)}>&larr;</span>
      </div>

      <div className="screen-content content-animate" style={{ 
        justifyContent: 'flex-start', 
        paddingTop: 'calc(var(--header-height) + var(--space-xl))',
        paddingBottom: 'calc(var(--footer-height) + var(--space-lg))'
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }}>
          Kjapp intro
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
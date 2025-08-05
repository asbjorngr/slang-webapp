import React from 'react';
import { useNavigate } from 'react-router-dom';
import AudioPlayer from '../components/AudioPlayer';
import audioIntro from '../assets/Intro til deltagere - Trondheim Kino.mp3';

const AudioIntroScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="screen-content no-header no-footer centered-content-layout stable-animate">
        <h1 className="screen-title">
          Kjapp intro
        </h1>
        <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
          Lurt å høre ferdig før du går videre
        </p>
        <div style={{ 
          width: '100%', 
          maxWidth: '340px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <AudioPlayer src={audioIntro} />
        </div>
      </div>

      <div className="standard-button-container">
        <button 
          className="standard-button"
          onClick={() => navigate('/tips')}
        >
          Fortsett
        </button>
      </div>
    </div>
  );
};

export default AudioIntroScreen; 
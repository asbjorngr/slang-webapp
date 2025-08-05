import React from 'react';
import { useNavigate } from 'react-router-dom';
import horseImg from '../assets/a transparent icon of an icelandic pony head.png';

const WelcomeScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="screen-container">
      {/* No header at all - more space for content */}
      <div className="screen-content no-header no-footer stable-animate" style={{
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 'calc(var(--safe-area-top) + var(--space-md))',
        paddingBottom: 'calc(var(--space-xl) + var(--space-lg))'
      }}>
        {/* Content group with tighter spacing, centered in viewport */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          gap: 'var(--space-sm)',
          textAlign: 'center'
        }}>
          <h1 className="screen-title">
            Velkommen til Slang
          </h1>
          <p style={{ 
            margin: '0', 
            fontSize: '1.1rem',
            maxWidth: '280px',
            lineHeight: '1.4'
          }}>
            I denne runden vil vi høre hva dere tenker om Trondheim Kino
          </p>
          {/* Fixed image container to prevent layout shift */}
          <div style={{ 
            width: '80px', 
            height: '80px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginTop: 'var(--space-xs)'
          }}>
            <img 
              src={horseImg} 
              alt="Slang mascot" 
              style={{ 
                width: '80px', 
                height: '80px', 
                objectFit: 'contain',
                display: 'block'
              }} 
            />
          </div>
        </div>
        
        {/* Button moved into content area for better positioning */}
        <div className="standard-button-container">
          <button 
            className="standard-button"
            onClick={() => navigate('/audio-intro')}
          >
            Kom i gang
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen; 
import React from 'react';
import { useNavigate } from 'react-router-dom';
import horseImg from '../assets/a transparent icon of an icelandic pony head.png';

const CompletedScreen: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="screen-container">
      <div className="screen-content no-header stable-animate">
        {/* Fixed image container to prevent layout shift */}
        <div style={{ 
          marginBottom: 'var(--space-lg)',
          width: '120px', 
          height: '120px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          <img 
            src={horseImg} 
            alt="Slang mascot" 
            style={{ 
              width: '120px', 
              height: '120px', 
              objectFit: 'contain',
              display: 'block'
            }}
            onLoad={() => {}} // Prevent any potential loading flicker
          />
        </div>
        <h1 className="screen-title" style={{ marginBottom: 'var(--space-xs)' }}>Ferdig!</h1>
        <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)', fontSize: '1.1rem' }}>
          Dere har fullført Slang<br />om Trondheim Kino. Tusen takk for hjelpen!
        </p>
        
        <div className="stable-animate card-container">
          <div className="card" style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
            <span style={{ fontSize: '1.1rem' }}>Du kan nå stanse lydopptaket. Husk å lagre.</span>
          </div>
          
          <div className="card" style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
            <span style={{ fontSize: '1.1rem' }}>Send lydopptaket til Superponni.</span>
          </div>
          
          <div className="card" style={{ display: 'flex', alignItems: 'center', marginBottom: 'var(--space-sm)' }}>
            <span style={{ fontSize: '1.1rem' }}>Godtgjørelse gis etter at lydopptaket er mottatt og gjennomgått.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedScreen; 
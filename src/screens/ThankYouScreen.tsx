import React from 'react';
import { useNavigate } from 'react-router-dom';
import horseImg from '../assets/a transparent icon of an icelandic pony head.png';
import chatIcon from '../assets/ChatCircleText.svg';

const instructions = [
  'Du kan nå stanse lydopptaket. Husk å lagre',
  'Send lydopptaket til Superponni',
  'Godtgjørelse utbetales etter at lydopptaket er mottatt'
];

const ThankYouScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="main-container">
      <span onClick={() => navigate(-1)} style={{ position: 'absolute', left: 16, top: 16, fontSize: 24, cursor: 'pointer' }}>&larr;</span>
      <div style={{ marginBottom: '1.5rem', marginTop: '2rem' }}>
        <img src={horseImg} alt="Slang mascot" style={{ width: 80, height: 80, objectFit: 'contain' }} />
      </div>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Tusen takk!</h1>
      <p style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Dere har fullført Slang om Trondheim Kino</p>
      <div style={{ width: '100%', maxWidth: 340, marginBottom: '2rem' }}>
        {instructions.map((inst, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', alignItems: 'flex-start' }}>
            <img src={chatIcon} alt="Chat icon" style={{ marginRight: 10, width: 20, height: 20, flexShrink: 0 }} />
            <span>{inst}</span>
          </div>
        ))}
      </div>
      <button onClick={() => alert('Sendt inn!')}>
        Send inn
      </button>
    </div>
  );
};

export default ThankYouScreen; 
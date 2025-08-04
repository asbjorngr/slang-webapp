import React from 'react';
import { useNavigate } from 'react-router-dom';
import horseImg from '../assets/a transparent icon of an icelandic pony head.png';

const tips = [
  'Dette er en uformell samtale mellom dere to – bare snakk fritt!',
  'Vær ærlig – det første dere tenker er ofte det mest ekte.',
  'Still oppfølgingsspørsmål og spør deg selv: "Er det noe mer her?"',
  'Gode svar kommer gjerne etter man tror man har svart på det.'
];

const TipsScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="screen-container">
      <div className="screen-header">
        <span className="back-button" onClick={() => navigate(-1)}>&larr;</span>
      </div>

      <div className="screen-content content-animate">
        <h1 style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
          Noen tips før dere starter
        </h1>
        <div className="stagger-animate" style={{ 
          width: '100%', 
          maxWidth: '340px', 
          marginBottom: 'var(--space-xl)' 
        }}>
          {tips.map((tip, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span>{tip}</span>
            </div>
          ))}
        </div>
        <div>
          <img src={horseImg} alt="Slang mascot" style={{ width: 60, height: 60, objectFit: 'contain' }} />
        </div>
      </div>

      <div className="screen-footer">
        <button onClick={() => navigate('/enable-recording')}>
          Fortsett
        </button>
      </div>
    </div>
  );
};

export default TipsScreen; 
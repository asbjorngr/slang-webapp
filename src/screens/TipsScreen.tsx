import React from 'react';
import { useNavigate } from 'react-router-dom';

const tips = [
  'Dette er en uformell samtale mellom dere to – bare snakk fritt!',
  'Vær ærlig – det første dere tenker er ofte det mest ekte.',
  'Still oppfølgingsspørsmål og spør deg selv: "Er det noe mer her?"'
];

const TipsScreen: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="screen-container">
      <div className="screen-content no-header no-footer centered-content-layout stable-animate">
        <h1 className="screen-title">
          Noen tips før dere starter
        </h1>
        <div className="stable-animate card-container">
          {tips.map((tip, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', alignItems: 'flex-start' }}>
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="standard-button-container">
        <button 
          className="standard-button"
          onClick={() => navigate('/enable-recording')}
        >
          Fortsett
        </button>
      </div>
    </div>
  );
};

export default TipsScreen; 
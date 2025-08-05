import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import horseImg from '../assets/a transparent icon of an icelandic pony head.png';

const GetReadyScreen: React.FC = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 16; // ~60fps
    const steps = duration / interval;
    const progressStep = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + progressStep;
        if (newProgress >= 100) {
          clearInterval(timer);
          // Automatically navigate to questions after a brief delay
          setTimeout(() => {
            navigate('/questions/1');
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [navigate]);

  const circumference = 2 * Math.PI * 100;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="screen-container">
      <div className="screen-content no-header no-footer centered-content-layout stable-animate">
        <div style={{ 
          position: 'relative', 
          width: 220, 
          height: 220, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center' 
        }}>
          {/* Circular progress indicator */}
          <svg width="220" height="220">
            <circle cx="110" cy="110" r="100" stroke="var(--color-accent)" strokeWidth="12" fill="none" />
            <circle 
              cx="110" 
              cy="110" 
              r="100" 
              stroke="var(--color-primary)" 
              strokeWidth="12" 
              fill="none" 
              strokeDasharray={circumference} 
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ 
                transform: 'rotate(-90deg)', 
                transformOrigin: '110px 110px',
                transition: 'stroke-dashoffset 0.1s ease-out'
              }}
            />
          </svg>
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: 220, 
            height: 220, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <img src={horseImg} alt="Slang mascot" style={{ width: 120, height: 120, objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetReadyScreen; 
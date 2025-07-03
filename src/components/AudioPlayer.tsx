import React, { useRef, useState, useEffect } from 'react';
import backwardIcon from '../assets/15_backward.svg';
import forwardIcon from '../assets/15_forward.svg';

interface AudioPlayerProps {
  src: string;
  onPlay?: () => void;
  onPause?: () => void;
  onTimeUpdate?: (currentTime: number) => void;
  onDurationChange?: (duration: number) => void;
  onAudioPlayed?: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ 
  src, 
  onPlay, 
  onPause, 
  onTimeUpdate, 
  onDurationChange,
  onAudioPlayed 
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      onDurationChange?.(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      onTimeUpdate?.(audio.currentTime);
      if (audio.currentTime > 0) {
        onAudioPlayed?.();
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onAudioPlayed?.();
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onTimeUpdate, onDurationChange, onAudioPlayed]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      onPause?.();
    } else {
      audio.play();
      setIsPlaying(true);
      onPlay?.();
    }
  };

  const skip = (seconds: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(0, Math.min(duration, audio.currentTime + seconds));
  };



  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressBarRef.current || !audioRef.current || duration === 0) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    
    audioRef.current.currentTime = Math.max(0, Math.min(duration, newTime));
  };

  const handleProgressBarMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    handleProgressBarClick(e);
  };

  const handleProgressBarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleProgressBarClick(e);
  };

  const handleProgressBarMouseUp = () => {
    setIsDragging(false);
  };

  // Add global mouse event listeners for dragging
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !progressBarRef.current || !audioRef.current || duration === 0) return;
      
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      const newTime = percentage * duration;
      
      audioRef.current.currentTime = newTime;
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging, duration]);

  return (
    <div style={{ width: '100%', maxWidth: 340, margin: '0 auto' }}>
      <audio ref={audioRef} src={src} preload="metadata" />
      
      {/* Waveform visualization */}
      <div style={{ 
        height: 100, 
        marginBottom: 8, 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px'
      }}>
        {/* Static waveform bars */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          height: '100%',
          gap: 2,
          width: '100%'
        }}>
          {Array.from({ length: 80 }, (_, i) => {
            const baseHeight = 8;
            const variation = Math.sin(i * 0.3) * 25 + Math.sin(i * 0.1) * 15;
            const height = baseHeight + Math.abs(variation) + Math.random() * 8;
            return (
              <div 
                key={i}
                style={{
                  width: 1.5,
                  height: Math.min(height, 60),
                  background: i / 80 < progress / 100 ? '#000' : '#d0d0d0',
                  borderRadius: 0.5
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Progress bar */}
      <div 
        ref={progressBarRef}
        onMouseDown={handleProgressBarMouseDown}
        onMouseMove={handleProgressBarMouseMove}
        onMouseUp={handleProgressBarMouseUp}
        style={{ 
          height: 20,
          marginBottom: 16,
          position: 'relative',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Background line (full length) */}
        <div style={{ 
          width: '100%',
          height: 2,
          background: '#e0e0e0',
          position: 'relative'
        }}>
          {/* Progress line (played portion) */}
          <div style={{ 
            width: `${progress}%`, 
            height: '100%', 
            background: '#000',
            transition: isDragging ? 'none' : 'width 0.1s ease'
          }} />
        </div>
        
        {/* Scrubber circle */}
        <div style={{
          position: 'absolute',
          left: `${progress}%`,
          transform: 'translateX(-50%)',
          width: 12,
          height: 12,
          background: '#000',
          borderRadius: '50%',
          cursor: 'grab',
          transition: isDragging ? 'none' : 'left 0.1s ease'
        }} />
      </div>

      {/* Time display */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        fontSize: 14, 
        color: '#333',
        marginBottom: 24,
        fontWeight: '400'
      }}>
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration - currentTime)}</span>
      </div>

      {/* Controls */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: 40
      }}>
        {/* Skip Back 15s */}
        <button 
          onClick={() => skip(-15)}
          style={{ 
            background: 'transparent', 
            border: 'none',
            borderRadius: '50%',
            width: 48, 
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            minWidth: 48,
            minHeight: 48,
            flexShrink: 0
          }}
        >
          <img src={backwardIcon} alt="Skip back 15 seconds" width="31" height="31" />
        </button>

        {/* Main Play/Pause Button */}
        <button
          onClick={togglePlay}
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: '#000',
            color: 'white',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            minWidth: 64,
            minHeight: 64,
            flexShrink: 0
          }}
        >
          {isPlaying ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16"/>
              <rect x="14" y="4" width="4" height="16"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: 2 }}>
              <path d="M8 5v14l11-7z"/>
            </svg>
          )}
        </button>

        {/* Skip Forward 15s */}
        <button 
          onClick={() => skip(15)}
          style={{ 
            background: 'transparent', 
            border: 'none',
            borderRadius: '50%',
            width: 48, 
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            padding: 0,
            minWidth: 48,
            minHeight: 48,
            flexShrink: 0
          }}
        >
          <img src={forwardIcon} alt="Skip forward 15 seconds" width="31" height="31" />
        </button>
      </div>
    </div>
  );
};

export default AudioPlayer; 
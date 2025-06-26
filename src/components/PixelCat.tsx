
import React, { useState, useEffect } from 'react';

const PixelCat: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentAnimation, setCurrentAnimation] = useState<'bounce' | 'walk'>('bounce');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnimation(prev => prev === 'bounce' ? 'walk' : 'bounce');
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-10 cursor-pointer" onClick={() => setIsPlaying(!isPlaying)}>
      <div className={`${isPlaying ? (currentAnimation === 'bounce' ? 'animate-cat-bounce' : 'animate-cat-walk') : ''}`}>
        <div className="relative">
          {/* Cat body */}
          <div className="w-16 h-12 bg-gradient-to-b from-slate-700 to-slate-800 rounded-2xl shadow-lg relative">
            {/* Cat head */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-8 bg-gradient-to-b from-slate-700 to-slate-800 rounded-full">
              {/* Ears */}
              <div className="absolute -top-2 left-1 w-3 h-3 bg-slate-700 rounded-full transform rotate-45"></div>
              <div className="absolute -top-2 right-1 w-3 h-3 bg-slate-700 rounded-full transform rotate-45"></div>
              
              {/* Eyes */}
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-lofi-accent rounded-full animate-pulse"></div>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-lofi-accent rounded-full animate-pulse"></div>
              
              {/* Nose */}
              <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-300 rounded-full"></div>
            </div>
            
            {/* Tail */}
            <div className="absolute -right-2 top-1 w-6 h-2 bg-slate-700 rounded-full transform rotate-12 origin-left"></div>
            
            {/* Paws */}
            <div className="absolute -bottom-1 left-2 w-2 h-2 bg-slate-800 rounded-full"></div>
            <div className="absolute -bottom-1 right-2 w-2 h-2 bg-slate-800 rounded-full"></div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-lofi-purple/20 rounded-2xl blur-md -z-10 animate-pulse"></div>
        </div>
        
        {/* Tooltip */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-lofi-surface px-2 py-1 rounded text-xs text-lofi-text-muted opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {isPlaying ? 'Пауза' : 'Играть'}
        </div>
      </div>
    </div>
  );
};

export default PixelCat;

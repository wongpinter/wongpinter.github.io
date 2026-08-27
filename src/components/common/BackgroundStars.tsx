import React, { useMemo } from 'react';

export const BackgroundStars: React.FC = React.memo(() => {
  const stars = useMemo(() => 
    Array.from({ length: 70 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 1,
      d: Math.random() * 2 + 1
    })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.s}px`,
            height: `${star.s}px`,
            animation: `twinkle ${star.d + 1.5}s ease-in-out infinite`,
            animationDelay: `${star.d}s`
          }}
        />
      ))}
    </div>
  );
});

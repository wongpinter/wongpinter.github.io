import { useState, useEffect } from 'react';

const KONAMI_SEQUENCE = [
  'ArrowUp', 'ArrowUp',
  'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight',
  'ArrowLeft', 'ArrowRight',
  'b', 'a'
];

export function useKonamiCode(): { isRainbowMode: boolean; toggleRainbowMode: () => void } {
  const [isRainbowMode, setIsRainbowMode] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetKey = KONAMI_SEQUENCE[index];
      const pressedKey = e.key;

      if (pressedKey.toLowerCase() === targetKey.toLowerCase() || pressedKey === targetKey) {
        const nextIndex = index + 1;
        if (nextIndex === KONAMI_SEQUENCE.length) {
          setIsRainbowMode(prev => !prev);
          setIndex(0);
        } else {
          setIndex(nextIndex);
        }
      } else if (pressedKey.startsWith('Arrow')) {
        setIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [index]);

  return {
    isRainbowMode,
    toggleRainbowMode: () => setIsRainbowMode(prev => !prev)
  };
}

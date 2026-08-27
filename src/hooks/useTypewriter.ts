import { useState, useEffect } from 'react';

export function useTypewriter(text: string, isActive: boolean, speedMs: number = 18): string {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!isActive) {
      setDisplayText('');
      return;
    }

    setDisplayText('');
    let idx = 0;
    const interval = setInterval(() => {
      idx++;
      setDisplayText(text.slice(0, idx));
      if (idx >= text.length) {
        clearInterval(interval);
      }
    }, speedMs);

    return () => clearInterval(interval);
  }, [text, isActive, speedMs]);

  return displayText;
}

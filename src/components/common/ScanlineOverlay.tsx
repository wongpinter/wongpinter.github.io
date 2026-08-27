import React from 'react';

export const ScanlineOverlay: React.FC = React.memo(() => {
  return (
    <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.25] scanlines" />
  );
});

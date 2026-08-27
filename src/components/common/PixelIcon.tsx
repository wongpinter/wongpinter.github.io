import React from 'react';

export type IconName =
  | 'heart'
  | 'swords'
  | 'star'
  | 'quest'
  | 'mail'
  | 'database'
  | 'download'
  | 'chat'
  | 'cube'
  | 'key'
  | 'robot'
  | 'book'
  | 'puzzle'
  | 'pen'
  | 'shield'
  | 'sparkle'
  | 'lock'
  | 'pin';

interface PixelIconProps {
  name: IconName | string;
  className?: string;
  size?: number;
}

export const PixelIcon: React.FC<PixelIconProps> = ({
  name,
  className = 'w-5 h-5',
  size = 20
}) => {
  const iconProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    className: `inline-block shrink-0 pixelated ${className}`,
    style: { shapeRendering: 'crispEdges' as const }
  };

  switch (name) {
    case 'heart':
      return (
        <svg {...iconProps}>
          {/* Pixel Heart */}
          <path d="M4 4h4v2H4V4zm8 0h4v2h-4V4zM2 6h8v2H2V6zm10 0h8v2h-8V6zM2 8h18v4H2V8zm2 4h14v2H4v-2zm2 2h10v2H6v-2zm2 2h6v2H8v-2zm2 2h2v2h-2v-2z" />
        </svg>
      );

    case 'swords':
      return (
        <svg {...iconProps}>
          {/* Crossed Pixel Swords */}
          <path d="M19 2h3v3h-2v2h-2v2h-2v2h-2V9h2V7h2V5h2V2h-3zM2 19h3v3H2v-3zm3-2h2v2H5v-2zm2-2h2v2H7v-2zm2-2h2v2H9v-2zm2-2h2v2h-2v-2zm-7 2H2v-2h2v-2h2v2H4v2zm4-4H6V7h2v2zm2-2H8V5h2v2zm2-2h-2V3h2v2zm2-2h-2V1h3v3h-1zM4 20h2v2H4v-2zm14 0h2v2h-2v-2zm-2-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm-2-2h2v2h-2v-2zm4-4h2v2h-2v-2zm2-2h2v2h-2V8zm2-2h2v2h-2V6z" />
        </svg>
      );

    case 'star':
      return (
        <svg {...iconProps}>
          {/* 8-bit Star */}
          <path d="M11 2h2v4h-2V2zM7 6h2v2H7V6zm8 0h2v2h-2V6zM2 9h20v2H2V9zm2 2h16v2H4v-2zm2 2h12v2H6v-2zm2 2h2v2H8v-2zm6 0h2v2h-2v-2zm-4 2h4v2h-4v-2zm-4 2h2v2H6v-2zm10 0h2v2h-2v-2z" />
        </svg>
      );

    case 'quest':
      return (
        <svg {...iconProps}>
          {/* 8-bit Quest Question / Scroll */}
          <path d="M8 3h8v2H8V3zM6 5h2v4H6V5zm10 0h2v4h-2V5zm-4 4h4v2h-4V9zm-2 2h4v4h-2v-2h-2v-2zm2 6h2v2h-2v-2zm-8-9H2V2h6v2H4v2h2v2zm12-4h4v6h-2V4h-2V2zM4 18H2v4h6v-2H4v-2zm16 0h2v4h-6v-2h4v-2z" />
        </svg>
      );

    case 'mail':
      return (
        <svg {...iconProps}>
          {/* Pixel Mail Envelope */}
          <path d="M2 5h20v2H2V5zm0 2h2v10H2V7zm20 0h-2v10h2V7zm-2 10H4v2h16v-2zm-14-8h2v2H6V9zm2 2h2v2H8v-2zm2 2h4v2h-4v-2zm4-2h2v2h-2v-2zm2-2h2v2h-2V9z" />
        </svg>
      );

    case 'database':
    case 'cdc':
      return (
        <svg {...iconProps}>
          {/* Database / Server Rack CDC */}
          <path d="M4 3h16v4H4V3zm2 2h2v1H6V5zm10 0h2v1h-2V5zM4 9h16v4H4V9zm2 2h2v1H6v-1zm10 0h2v1h-2v-1zM4 15h16v4H4v-4zm2 2h2v1H6v-1zm10 0h2v1h-2v-1zM2 2h20v20H2V2z" />
        </svg>
      );

    case 'download':
    case 'cli':
      return (
        <svg {...iconProps}>
          {/* CLI Download Tray */}
          <path d="M11 2h2v8h-2V2zM9 8h6v2H9V8zm-2 2h10v2H7v-2zm-2 2h14v2H5v-2zm-2 6h18v4H3v-4zm2 2h14v1H5v-1zM2 14h2v6H2v-6zm20 0h-2v6h2v-6z" />
        </svg>
      );

    case 'chat':
      return (
        <svg {...iconProps}>
          {/* Speech Message Bubble */}
          <path d="M3 3h18v12H9l-4 4v-4H3V3zm3 5h2v2H6V8zm5 0h2v2h-2V8zm5 0h2v2h-2V8z" />
        </svg>
      );

    case 'cube':
    case 'wrapper':
      return (
        <svg {...iconProps}>
          {/* 3D Pixel Cube / Wrapper */}
          <path d="M10 2h4v2h-4V2zM6 4h4v2H6V4zm8 0h4v2h-4V4zM2 7h4v2H2V7zm16 0h4v2h-4V7zM2 9h2v8H2V9zm20 0h-2v8h2V9zM4 17h4v2H4v-2zm12 0h4v2h-4v-2zm-6 2h4v2h-4v-2zm1-9h2v8h-2v-8zm-8-3h18v2H3V7z" />
        </svg>
      );

    case 'key':
    case 'ssh':
      return (
        <svg {...iconProps}>
          {/* SSH Key / Security */}
          <path d="M7 4h10v2H7V4zM5 6h2v8H5V6zm12 0h2v8h-2V6zM7 12h10v2H7v-2zm4 2h2v8h-2v-8zm2 2h3v2h-3v-2zm0 3h3v2h-3v-2z" />
        </svg>
      );

    case 'robot':
    case 'ai':
      return (
        <svg {...iconProps}>
          {/* AI Robot / Agent */}
          <path d="M11 2h2v2h-2V2zM4 5h16v14H4V5zm3 3h4v4H7V8zm7 0h4v4h-4V8zm-5 7h6v2H9v-2zM2 9h2v6H2V9zm20 0h-2v6h2V9z" />
        </svg>
      );

    case 'book':
    case 'scraper':
      return (
        <svg {...iconProps}>
          {/* Pixel Open Book */}
          <path d="M3 4h8v15H3V4zm10 0h8v15h-8V4zm-2 2h2v13h-2V6zm-6 3h4v2H5V9zm0 4h4v2H5v-2zm10-4h4v2h-4V9zm0 4h4v2h-4v-2z" />
        </svg>
      );

    case 'puzzle':
    case 'ext':
      return (
        <svg {...iconProps}>
          {/* Puzzle Piece Extension */}
          <path d="M10 2h4v4h-4V2zM4 6h6v3h4V6h6v6h-3v4h3v6h-6v-3h-4v3H4v-6h3v-4H4V6z" />
        </svg>
      );

    case 'pen':
    case 'tool':
      return (
        <svg {...iconProps}>
          {/* Pixel Pen / Editor Tool */}
          <path d="M18 2h4v4h-4V2zm-3 3h4v4h-4V5zm-3 3h4v4h-4V8zm-3 3h4v4H9v-4zm-3 3h4v4H6v-4zm-3 3h4v4H3v-4zm-1 5h2v2H2v-2z" />
        </svg>
      );

    case 'shield':
      return (
        <svg {...iconProps}>
          {/* Pixel Shield */}
          <path d="M3 3h18v4H3V3zm2 4h14v4H5V7zm2 4h10v4H7v-4zm2 4h6v3H9v-3zm2 3h2v2h-2v-2z" />
        </svg>
      );

    case 'sparkle':
      return (
        <svg {...iconProps}>
          {/* 4-Point Sparkle */}
          <path d="M11 2h2v6h-2V2zm0 14h2v6h-2v-6zM2 11h6v2H2v-2zm14 0h6v2h-6v-2zm-6-2h4v4h-4V9z" />
        </svg>
      );

    case 'lock':
      return (
        <svg {...iconProps}>
          {/* Pixel Padlock */}
          <path d="M7 3h10v2H7V3zM5 5h2v5H5V5zm12 0h2v5h-2V5zM3 10h18v11H3V10zm8 3h2v3h-2v-3zm0 4h2v1h-2v-1z" />
        </svg>
      );

    case 'pin':
      return (
        <svg {...iconProps}>
          {/* Map Marker Pin */}
          <path d="M8 3h8v2H8V3zM6 5h12v6H6V5zm2 6h8v2H8v-2zm2 2h4v3h-4v-3zm1 3h2v4h-2v-4zm0-9h2v2h-2V7z" />
        </svg>
      );

    default:
      return (
        <span className={`inline-block text-center font-mono ${className}`}>
          {name}
        </span>
      );
  }
};

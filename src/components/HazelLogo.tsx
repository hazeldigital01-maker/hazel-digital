import React from 'react';

interface HazelLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showSubtitle?: boolean;
  variant?: 'full' | 'mark' | 'horizontal';
}

export const HazelLogo: React.FC<HazelLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  variant = 'full',
}) => {
  // Dimension scales
  const dimensions = {
    sm: { width: 140, height: 42, markSize: 36, fontSize: 'text-base', subSize: 'text-[9px]' },
    md: { width: 190, height: 56, markSize: 46, fontSize: 'text-xl', subSize: 'text-[10px]' },
    lg: { width: 240, height: 72, markSize: 60, fontSize: 'text-2xl', subSize: 'text-xs' },
    hero: { width: 340, height: 100, markSize: 84, fontSize: 'text-3xl', subSize: 'text-sm' },
  }[size];

  // The HD Emblem Vector
  const Emblem = ({ emblemSize }: { emblemSize: number }) => (
    <svg
      width={emblemSize}
      height={emblemSize}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 select-none drop-shadow-sm"
      aria-label="Hazel Digital HD Monogram"
    >
      <defs>
        {/* Navy metallic gradients */}
        <linearGradient id="hdNavy" x1="20" y1="20" x2="160" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E3A63" />
          <stop offset="45%" stopColor="#164B8C" />
          <stop offset="80%" stopColor="#0B1F3A" />
          <stop offset="100%" stopColor="#081427" />
        </linearGradient>

        <linearGradient id="hdNavyDark" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#163B6E" />
          <stop offset="100%" stopColor="#081427" />
        </linearGradient>

        {/* Gold 3D metallic gradients */}
        <linearGradient id="hdGold" x1="40" y1="30" x2="180" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F9E29D" />
          <stop offset="25%" stopColor="#E6B94D" />
          <stop offset="60%" stopColor="#D4AF37" />
          <stop offset="85%" stopColor="#B38622" />
          <stop offset="100%" stopColor="#8C6514" />
        </linearGradient>

        <linearGradient id="hdGoldLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFF2C6" />
          <stop offset="50%" stopColor="#E9BD53" />
          <stop offset="100%" stopColor="#C99723" />
        </linearGradient>

        {/* Subtle shadow filter for 3D depth */}
        <filter id="hdDrop" x="-10%" y="-10%" width="125%" height="125%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodColor="#0B1F3A" floodOpacity="0.25" />
        </filter>
      </defs>

      {/* --- Monogram HD Body --- */}
      <g filter="url(#hdDrop)">
        {/* Left vertical pillar of H (Deep Navy 3D) */}
        <path
          d="M 28 32 L 64 32 L 64 168 L 28 168 Z"
          fill="url(#hdNavy)"
        />
        {/* Top & bottom beveled edges of left pillar */}
        <path d="M 28 32 L 64 32 L 56 40 L 28 40 Z" fill="#2E5C9A" />
        <path d="M 28 168 L 64 168 L 56 160 L 28 160 Z" fill="#081427" />

        {/* Right vertical pillar of H */}
        <path
          d="M 94 32 L 120 32 L 120 168 L 94 168 Z"
          fill="url(#hdNavy)"
        />

        {/* Crossbar of H */}
        <path
          d="M 64 94 L 100 94 L 100 122 L 64 122 Z"
          fill="url(#hdNavy)"
        />

        {/* Golden Bar Chart Columns inside H pillar (middle) */}
        <rect x="80" y="128" width="10" height="34" rx="1.5" fill="url(#hdGold)" />
        <rect x="94" y="112" width="10" height="50" rx="1.5" fill="url(#hdGold)" />
        <rect x="108" y="96" width="10" height="66" rx="1.5" fill="url(#hdGold)" />

        {/* Golden Growth Trajectory Arrow surging across H */}
        <path
          d="M 26 128 L 56 104 L 78 122 L 118 52 L 130 52 L 132 82 L 122 74 L 112 58 L 78 110 L 56 94 L 26 118 Z"
          fill="url(#hdGold)"
        />
        {/* Arrow head detail */}
        <polygon points="120,44 142,50 128,72 124,62 114,60" fill="url(#hdGoldLight)" />

        {/* Letter D sculpted in gleaming dimensional Gold, interlocking over H */}
        <path
          d="M 108 32 L 140 32 C 172 32 192 56 192 100 C 192 144 170 168 136 168 L 78 168 C 96 160 114 140 124 120 C 136 126 148 126 156 116 C 166 104 166 84 154 70 C 146 62 134 60 120 60 L 108 60 Z"
          fill="url(#hdGold)"
        />

        {/* Dimensional outer rim bevel of D */}
        <path
          d="M 136 168 C 170 168 192 144 192 100 C 192 85 186 72 176 60 L 172 68 C 182 80 184 94 184 100 C 184 138 165 160 134 160 Z"
          fill="url(#hdNavyDark)"
          opacity="0.85"
        />

        {/* Golden Constellation Data Nodes & Lines inside D */}
        <g stroke="url(#hdGold)" strokeWidth="2.5" strokeLinecap="round">
          <line x1="126" y1="88" x2="148" y2="76" />
          <line x1="148" y1="76" x2="174" y2="84" />
          <line x1="126" y1="88" x2="152" y2="108" />
          <line x1="152" y1="108" x2="174" y2="84" />
        </g>
        {/* The 4 glowing gold nodes */}
        <circle cx="126" cy="88" r="4.5" fill="url(#hdGoldLight)" />
        <circle cx="148" cy="76" r="4.5" fill="url(#hdGoldLight)" />
        <circle cx="174" cy="84" r="5" fill="url(#hdGoldLight)" />
        <circle cx="152" cy="108" r="4.5" fill="url(#hdGoldLight)" />

        {/* Navy digital cursor arrow inside D */}
        <polygon
          points="138,98 138,124 146,118 154,132 160,128 152,114 162,112"
          fill="#0B1F3A"
          stroke="#FFFFFF"
          strokeWidth="1.2"
        />
      </g>
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <Emblem emblemSize={dimensions.markSize} />
      </div>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {/* Monogram + Brand Typography Lockup */}
      <div className="flex items-center gap-3">
        <Emblem emblemSize={dimensions.markSize} />
        
        <div className="flex flex-col justify-center">
          <div className="flex items-baseline tracking-wider">
            <span
              className={`font-extrabold tracking-[0.14em] text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#E6B94D] to-[#B38622] ${dimensions.fontSize}`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              HAZEL
            </span>
            <span
              className={`font-black tracking-[0.14em] text-[#0B1F3A] ml-2 ${dimensions.fontSize}`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              DIGITAL
            </span>
          </div>

          {showSubtitle && (
            <div className="flex items-center justify-between w-full mt-0.5">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/70" />
              <span
                className={`px-2 font-bold uppercase tracking-[0.18em] text-[#0B1F3A]/80 ${dimensions.subSize}`}
              >
                SEO <span className="text-[#D4AF37] mx-0.5">•</span> GOOGLE ADS <span className="text-[#D4AF37] mx-0.5">•</span> META ADS
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/70" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

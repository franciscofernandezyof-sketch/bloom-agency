// BloomLogo — wavy scalloped badge, same shape as Fanfix's app icon
// Gradient: pastel rose → violet (matches our brand)
const BloomLogo = ({ size = 36 }) => {
  const id = `bloom-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#F2A7C3" />
          <stop offset="45%"  stopColor="#D9A0DA" />
          <stop offset="100%" stopColor="#C3A7E8" />
        </linearGradient>
        <linearGradient id={`g2-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={`f-${id}`}>
          <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#C3A7E8" floodOpacity="0.45" />
        </filter>
      </defs>

      {/* Wavy scalloped badge — 12 bumps, same as Fanfix icon */}
      <path
        d="
          M50 4
          C53 4, 55 1, 58 2
          C61 3, 62 7, 65 7
          C68 7, 70 4, 73 5
          C76 7, 76 11, 79 13
          C82 15, 86 14, 88 17
          C90 20, 89 24, 91 27
          C93 30, 97 31, 97 35
          C97 39, 94 41, 94 45
          C94 49, 97 51, 96 55
          C95 59, 91 60, 90 64
          C89 68, 91 72, 88 75
          C85 78, 81 77, 78 80
          C75 83, 75 87, 71 89
          C67 91, 64 88, 60 90
          C56 92, 55 96, 50 96
          C45 96, 44 92, 40 90
          C36 88, 33 91, 29 89
          C25 87, 25 83, 22 80
          C19 77, 15 78, 12 75
          C9 72, 11 68, 10 64
          C9 60, 5 59, 4 55
          C3 51, 6 49, 6 45
          C6 41, 3 39, 3 35
          C3 31, 7 30, 9 27
          C11 24, 10 20, 12 17
          C14 14, 18 15, 21 13
          C24 11, 24 7, 27 5
          C30 4, 32 7, 35 7
          C38 7, 39 3, 42 2
          C45 1, 47 4, 50 4
          Z
        "
        fill={`url(#g-${id})`}
        filter={`url(#f-${id})`}
      />

      {/* Gloss top highlight */}
      <path
        d="
          M50 4
          C53 4, 55 1, 58 2
          C61 3, 62 7, 65 7
          C68 7, 70 4, 73 5
          C76 7, 76 11, 79 13
          C82 15, 86 14, 88 17
          C90 20, 89 24, 91 27
          C93 30, 97 31, 97 35
          C97 39, 94 41, 94 45
          L6 45
          C6 41, 3 39, 3 35
          C3 31, 7 30, 9 27
          C11 24, 10 20, 12 17
          C14 14, 18 15, 21 13
          C24 11, 24 7, 27 5
          C30 4, 32 7, 35 7
          C38 7, 39 3, 42 2
          C45 1, 47 4, 50 4 Z
        "
        fill={`url(#g2-${id})`}
      />

      {/* Bold "B" centered */}
      <text
        x="50"
        y="69"
        textAnchor="middle"
        fontFamily="'Inter', 'Helvetica Neue', Arial, sans-serif"
        fontWeight="900"
        fontSize="56"
        fill="#1a0d22"
        opacity="0.88"
      >
        B
      </text>
    </svg>
  );
};

export default BloomLogo;

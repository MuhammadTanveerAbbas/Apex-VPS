export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#7c3aed" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <linearGradient id="logo-glow" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="glow-effect">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Server rack container */}
      <rect x="20" y="18" width="60" height="64" rx="5" fill="url(#logo-grad)" opacity="0.12" />
      <rect x="22" y="20" width="56" height="60" rx="4" fill="currentColor" className="text-slate-900 dark:text-slate-950" fillOpacity="0.08" stroke="url(#logo-grad)" strokeWidth="2" />
      
      {/* Server slots with gradient */}
      <rect x="27" y="27" width="46" height="11" rx="2.5" fill="url(#logo-grad)" opacity="0.95" filter="url(#glow-effect)" />
      <rect x="27" y="42" width="46" height="11" rx="2.5" fill="url(#logo-grad)" opacity="0.8" />
      <rect x="27" y="57" width="46" height="11" rx="2.5" fill="url(#logo-grad)" opacity="0.65" />
      
      {/* Status LEDs with glow */}
      <circle cx="32" cy="32.5" r="2" fill="#10b981" opacity="0.95" filter="url(#glow-effect)" />
      <circle cx="38" cy="32.5" r="2" fill="#10b981" opacity="0.95" filter="url(#glow-effect)" />
      <circle cx="32" cy="47.5" r="2" fill="#3b82f6" opacity="0.9" />
      <circle cx="38" cy="47.5" r="2" fill="#3b82f6" opacity="0.9" />
      <circle cx="32" cy="62.5" r="2" fill="#8b5cf6" opacity="0.85" />
      <circle cx="38" cy="62.5" r="2" fill="#8b5cf6" opacity="0.85" />
      
      {/* Activity indicators */}
      <rect x="44" y="30.5" width="26" height="2" rx="1" fill="#60a5fa" opacity="0.85" />
      <rect x="44" y="34" width="22" height="2" rx="1" fill="#60a5fa" opacity="0.55" />
      <rect x="44" y="45.5" width="26" height="2" rx="1" fill="#7c3aed" opacity="0.75" />
      <rect x="44" y="49" width="20" height="2" rx="1" fill="#7c3aed" opacity="0.45" />
      <rect x="44" y="60.5" width="26" height="2" rx="1" fill="#a78bfa" opacity="0.65" />
      <rect x="44" y="64" width="24" height="2" rx="1" fill="#a78bfa" opacity="0.35" />
    </svg>
  );
}

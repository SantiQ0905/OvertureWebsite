import './Tachometer.css';

interface TachometerProps {
  value?: number; // 0..1, needle sweep target
  size?: number;
  className?: string;
}

export function Tachometer({ value = 0.72, size = 64, className = '' }: TachometerProps) {
  const clamped = Math.min(1, Math.max(0, value));
  const angle = -110 + clamped * 220; // -110deg .. +110deg sweep

  return (
    <svg
      className={`tachometer ${className}`}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      role="presentation"
      aria-hidden="true"
      style={{ ['--needle-angle' as string]: `${angle}deg` }}
    >
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="var(--color-dark)"
        strokeWidth="6"
        strokeDasharray="185 264"
        strokeDashoffset="-38"
        strokeLinecap="round"
      />
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="url(#tach-gradient)"
        strokeWidth="6"
        strokeDasharray="185 264"
        strokeDashoffset="-38"
        strokeLinecap="round"
        className="tachometer-arc"
      />
      <defs>
        <linearGradient id="tach-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--color-primary)" />
          <stop offset="100%" stopColor="var(--color-button)" />
        </linearGradient>
      </defs>
      <line
        x1="50"
        y1="50"
        x2="50"
        y2="16"
        stroke="var(--color-wordmark)"
        strokeWidth="3"
        strokeLinecap="round"
        className="tachometer-needle"
      />
      <circle cx="50" cy="50" r="4.5" fill="var(--color-wordmark)" />
    </svg>
  );
}

import './Logo.css';

const LOGO_SRC = '/images/logos/Overture/OVT_FRC_Colour.png';

interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 220, className = '' }: LogoProps) {
  return (
    <div
      className={`logo-ignition ${className}`}
      style={{ width: size, maxWidth: '100%' }}
    >
      <img
        src={LOGO_SRC}
        alt="Overture 7421"
        className="logo-mark"
        width={size}
        height={Math.round(size * (1500 / 2100))}
      />
      <span className="logo-sheen" aria-hidden="true" />
    </div>
  );
}

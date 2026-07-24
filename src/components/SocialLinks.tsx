import './SocialLinks.css';

// TODO: replace with the real social profile URLs once supplied.
const SOCIAL_LINKS = [
  { label: 'Instagram', url: '#instagram-pending', icon: 'instagram' as const },
  { label: 'Facebook', url: '#facebook-pending', icon: 'facebook' as const },
  { label: 'X', url: '#x-pending', icon: 'x' as const },
];

function SocialIcon({ name }: { name: 'instagram' | 'facebook' | 'x' }) {
  if (name === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (name === 'facebook') {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path
          d="M13.5 21v-7h2.2l.3-2.6h-2.5V9.7c0-.75.2-1.26 1.28-1.26h1.37V6.1c-.24-.03-1.05-.1-2-.1-1.98 0-3.33 1.2-3.33 3.42v1.98H8.5v2.6h2.32V21h2.68Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
      <path
        d="M7 7l10 10M17 7 7 17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SocialLinks({ title }: { title?: string }) {
  return (
    <div className="social-links">
      {title && <p className="social-links-title">{title}</p>}
      <div className="social-links-row">
        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.icon}
            className="social-links-icon"
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
          >
            <SocialIcon name={social.icon} />
          </a>
        ))}
      </div>
    </div>
  );
}

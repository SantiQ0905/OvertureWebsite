import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './NavBar.css';

const NAV_LINKS: { to: string; key: 'home' | 'about' | 'robots' | 'sponsors' | 'news' | 'join' }[] = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/robots', key: 'robots' },
  { to: '/sponsors', key: 'sponsors' },
  { to: '/news', key: 'news' },
  { to: '/join', key: 'join' },
];

export function NavBar() {
  const { t, lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [lang]);

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <img
            src="/images/logos/Overture/OVT_FRC_White.png"
            alt="Overture 7421"
            className="navbar-brand-mark"
          />
        </NavLink>

        <button
          type="button"
          className={`navbar-toggle ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => (isActive ? 'is-active' : '')}
                  onClick={() => setOpen(false)}
                >
                  {t.nav[link.key]}
                </NavLink>
              </li>
            ))}
          </ul>
          <button type="button" className="lang-toggle" onClick={toggleLang}>
            <span className="lang-toggle-current">{lang.toUpperCase()}</span>
            <span className="lang-toggle-arrow" aria-hidden="true">
              ⇄
            </span>
            {t.nav.toggleLabel}
          </button>
        </nav>
      </div>
    </header>
  );
}

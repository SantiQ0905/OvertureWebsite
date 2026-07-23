import { NavLink } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer-inner">
        <img
          src="/images/logos/Overture/OVT_FRC_White.png"
          alt="Overture 7421"
          className="site-footer-mark"
        />
        <p className="site-footer-tagline">{t.footer.tagline}</p>
        <nav className="site-footer-links">
          <NavLink to="/about">{t.nav.about}</NavLink>
          <NavLink to="/robots">{t.nav.robots}</NavLink>
          <NavLink to="/sponsors">{t.nav.sponsors}</NavLink>
          <NavLink to="/news">{t.nav.news}</NavLink>
          <NavLink to="/join">{t.nav.join}</NavLink>
        </nav>
        <p className="site-footer-rights">
          © {year} Overture 7421. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}

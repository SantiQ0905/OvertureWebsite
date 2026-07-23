import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Logo } from '../components/Logo';
import { Tachometer } from '../components/Tachometer';
import './NotFound.css';

export function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="page-section container not-found-page grid-horizon crt">
      <span className="crt-scanlines" aria-hidden="true" />
      <span className="crt-vignette" aria-hidden="true" />
      <span className="crt-tracking" aria-hidden="true" />
      <Logo size={140} />
      <Tachometer size={90} value={0.05} className="not-found-tach" />
      <p className="kicker">{t.notFound.kicker}</p>
      <h1 className="vhs-title">404 · {t.notFound.title}</h1>
      <p className="not-found-message">{t.notFound.message}</p>
      <Link to="/" className="btn">
        {t.notFound.cta}
      </Link>
    </section>
  );
}

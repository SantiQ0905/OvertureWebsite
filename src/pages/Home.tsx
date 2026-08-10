import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { Logo } from '../components/Logo';
import { Tachometer } from '../components/Tachometer';
import { robots } from '../data/robots';
import './Home.css';

const SCOUTING_TOOL_URL = 'https://overture-7421.github.io/OverPitScouting/';

export function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero grid-horizon crt">
        <span className="crt-scanlines" aria-hidden="true" />
        <span className="crt-vignette" aria-hidden="true" />
        <span className="crt-tracking" aria-hidden="true" />
        <div className="container hero-inner">
          <Logo size={240} />
          <p className="kicker">{t.home.kicker}</p>
          <h1 className="chrome-text hero-title">OVERTURE 7421</h1>
          <p className="hero-tagline">{t.home.tagline}</p>
          <div className="hero-cta">
            <Link to="/robots" className="btn">
              {t.home.ctaRobots}
            </Link>
            <Link to="/join" className="btn btn-outline">
              {t.home.ctaJoin}
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section container">
        <a
          className="scouting-card panel"
          href={SCOUTING_TOOL_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tachometer size={72} value={0.85} />
          <div className="scouting-card-copy">
            <h2>{t.home.scoutingTitle}</h2>
            <p>{t.home.scoutingDesc}</p>
            <span className="scouting-card-cta">
              {t.home.scoutingCta} ↗<small>{t.home.scoutingNote}</small>
            </span>
          </div>
        </a>
      </section>

      <section className="page-section container">
        <div className="page-header">
          <p className="kicker">{t.home.highlightsTitle}</p>
          <span className="holo-strip centered" />
          <h2>{t.home.highlightsDesc}</h2>
        </div>
        <div className="card-grid home-fleet">
          {robots.map((robot) => (
            <Link
              key={robot.id}
              to={`/robots/${robot.id}`}
              className="home-fleet-item panel"
            >
              <span className="home-fleet-program">{robot.team}</span>
              <span className="home-fleet-name vhs-title">{robot.name}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

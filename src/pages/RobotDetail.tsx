import { Link, useParams } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { getRobotBySlug } from '../data/robots';
import { Tachometer } from '../components/Tachometer';
import './RobotDetail.css';

export function RobotDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, lang } = useLanguage();
  const robot = slug ? getRobotBySlug(slug) : undefined;

  if (!robot) {
    return (
      <section className="page-section container robot-detail-missing">
        <p className="kicker">404</p>
        <h1>{t.robots.notFoundTitle}</h1>
        <p>{t.robots.notFoundDesc}</p>
        <Link to="/robots" className="btn">
          {t.robots.backToRobots}
        </Link>
      </section>
    );
  }

  const copy = robot.copy[lang];

  return (
    <>
      <section className="robot-hero crt grid-horizon">
        <span className="crt-scanlines" aria-hidden="true" />
        <span className="crt-vignette" aria-hidden="true" />
        <span className="crt-tracking" aria-hidden="true" />
        <div className="container robot-hero-inner">
          <Link to="/robots" className="robot-back-link">
            ← {t.robots.backToRobots}
          </Link>
          <div className="robot-hero-plate">
            {robot.image ? (
              <img src={robot.image} alt={robot.name} />
            ) : (
              <Tachometer size={110} value={0.7} />
            )}
          </div>
          <span className="robot-hero-program">{robot.team}</span>
          <h1 className="chrome-text robot-hero-name">{robot.name}</h1>
          <p className="robot-hero-tagline">{copy.tagline}</p>
        </div>
      </section>

      <section className="page-section container robot-detail-body">
        <div className="robot-spec-grid">
          <div className="panel robot-spec-block">
            <h2>{t.robots.labels.season}</h2>
            <p className="data-value robot-spec-value">{robot.season}</p>
          </div>
          <div className="panel robot-spec-block">
            <h2>{t.robots.labels.game}</h2>
            <p className="data-value robot-spec-value">{robot.game ?? t.robots.tbd}</p>
          </div>
          <div className="panel robot-spec-block">
            <h2>{t.robots.labels.drivetrain}</h2>
            <p className="data-value robot-spec-value">{copy.drivetrain}</p>
          </div>
          <div className="panel robot-spec-block">
            <h2>{t.robots.labels.mechanisms}</h2>
            <p className="data-value robot-spec-value">{copy.mechanisms}</p>
          </div>
          <div className="panel robot-spec-block">
            <h2>{t.robots.labels.programming}</h2>
            <p className="data-value robot-spec-value">{copy.programming}</p>
          </div>
        </div>

        <div className="panel robot-section">
          <h2>{t.robots.labels.events}</h2>
          <span className="holo-strip" />
          {robot.events.length > 0 ? (
            <div className="robot-events-table-wrap">
              <table className="robot-events-table">
                <thead>
                  <tr>
                    <th>{t.robots.labels.events}</th>
                    <th>{t.robots.labels.date}</th>
                    <th>W-L-T</th>
                    <th>OPR</th>
                  </tr>
                </thead>
                <tbody>
                  {robot.events.map((event) => (
                    <tr key={event.name + event.date}>
                      <td>{event.name}</td>
                      <td className="data-value">{event.date}</td>
                      <td className="data-value">{event.wlt ?? '—'}</td>
                      <td className="data-value">{event.opr ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p>{t.robots.empty}</p>
          )}
        </div>

        <div className="robot-section-row">
          <div className="panel robot-section">
            <h2>{t.robots.labels.awards}</h2>
            <span className="holo-strip" />
            {robot.awards.length > 0 ? (
              <ul className="robot-awards-list">
                {robot.awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            ) : (
              <p>{t.robots.awardsEmpty}</p>
            )}
          </div>

          <div className="panel robot-section">
            <h2>{t.robots.labels.links}</h2>
            <span className="holo-strip" />
            {robot.links.length > 0 ? (
              <ul className="robot-links-list">
                {robot.links.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>{t.robots.linksEmpty}</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

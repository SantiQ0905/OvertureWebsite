import { useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { RobotTile } from '../components/RobotTile';
import { robots, programOrder, type Program } from '../data/robots';
import './Robots.css';

type Filter = 'ALL' | Program;

export function Robots() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('ALL');

  const filtered = useMemo(
    () => (filter === 'ALL' ? robots : robots.filter((r) => r.program === filter)),
    [filter],
  );

  return (
    <section className="page-section container">
      <div className="page-header">
        <p className="kicker">{t.robots.kicker}</p>
        <span className="holo-strip centered" />
        <h1 className="chrome-text">{t.robots.title}</h1>
        <p>{t.robots.intro}</p>
      </div>

      <div className="robots-filter" role="tablist" aria-label={t.robots.title}>
        <button
          type="button"
          role="tab"
          aria-selected={filter === 'ALL'}
          className={filter === 'ALL' ? 'is-active' : ''}
          onClick={() => setFilter('ALL')}
        >
          {t.robots.filterAll}
        </button>
        {programOrder.map((program) => (
          <button
            key={program}
            type="button"
            role="tab"
            aria-selected={filter === program}
            className={filter === program ? 'is-active' : ''}
            onClick={() => setFilter(program)}
          >
            {program}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="card-grid">
          {filtered.map((robot) => (
            <RobotTile key={robot.id} robot={robot} />
          ))}
        </div>
      ) : (
        <p className="robots-empty">{t.robots.empty}</p>
      )}
    </section>
  );
}

import { useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { RobotTile } from '../components/RobotTile';
import { robots, programOrder, type Program } from '../data/robots';
import './Robots.css';

type Filter = 'ALL' | Program;
const ALL_YEARS = 'ALL';

export function Robots() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<Filter>('ALL');
  const [year, setYear] = useState<string>(ALL_YEARS);

  const years = useMemo(
    () => Array.from(new Set(robots.map((r) => r.season))).sort((a, b) => b.localeCompare(a)),
    [],
  );

  const filtered = useMemo(
    () =>
      robots
        .filter((r) => filter === 'ALL' || r.program === filter)
        .filter((r) => year === ALL_YEARS || r.season === year),
    [filter, year],
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

      <div className="robots-year-filter">
        <label htmlFor="robots-year-select">{t.robots.yearLabel}</label>
        <select
          id="robots-year-select"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value={ALL_YEARS}>{t.robots.filterAll}</option>
          {years.map((season) => (
            <option key={season} value={season}>
              {season}
            </option>
          ))}
        </select>
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

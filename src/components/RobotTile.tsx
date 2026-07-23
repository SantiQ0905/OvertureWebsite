import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import type { Robot } from '../data/robots';
import { Tachometer } from './Tachometer';
import './RobotTile.css';

interface RobotTileProps {
  robot: Robot;
}

export function RobotTile({ robot }: RobotTileProps) {
  const { t, lang } = useLanguage();
  const copy = robot.copy[lang];

  return (
    <Link to={`/robots/${robot.id}`} className="robot-tile panel">
      <div className="robot-tile-plate">
        {robot.image ? (
          <img src={robot.image} alt={robot.name} loading="lazy" />
        ) : (
          <Tachometer size={64} value={0.6} />
        )}
      </div>
      <span className="robot-tile-program">{robot.team}</span>
      <h3 className="robot-tile-name vhs-title">{robot.name}</h3>
      <p className="robot-tile-tagline">{copy.tagline}</p>
      <span className="robot-tile-cta">{t.robots.viewSpec} →</span>
    </Link>
  );
}

import { useLanguage } from '../i18n/LanguageContext';
import { ScrollReveal } from './ScrollReveal';
import { timeline } from '../data/timeline';
import './Timeline.css';

export function Timeline() {
  const { lang } = useLanguage();

  return (
    <ol className="timeline">
      {timeline.map((entry, index) => {
        const copy = entry.copy[lang];
        return (
          <ScrollReveal as="li" key={entry.year} delay={index * 80} className="timeline-item">
            <span className="timeline-year data-value">{entry.year}</span>
            <div className="timeline-item-body panel">
              <h3>{copy.title}</h3>
              <p>{copy.desc}</p>
            </div>
          </ScrollReveal>
        );
      })}
    </ol>
  );
}

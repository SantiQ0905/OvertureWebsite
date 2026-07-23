import { useLanguage } from '../i18n/LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';
import './About.css';

export function About() {
  const { t } = useLanguage();

  return (
    <section className="page-section container about-page">
      <div className="page-header">
        <p className="kicker">{t.about.kicker}</p>
        <span className="holo-strip centered" />
        <h1 className="chrome-text">{t.about.title}</h1>
      </div>

      <div className="about-body">
        {t.about.paragraphs.map((paragraph, index) => (
          <ScrollReveal as="p" key={index} delay={index * 90}>
            {paragraph}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

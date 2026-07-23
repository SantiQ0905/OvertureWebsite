import { useLanguage } from '../i18n/LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';
import './JoinUs.css';

// TODO: replace with the real recruitment contact address/form once supplied.
const JOIN_CONTACT_URL = '#join-contact-pending';

export function JoinUs() {
  const { t } = useLanguage();

  return (
    <section className="page-section container join-page">
      <div className="page-header">
        <p className="kicker">{t.join.kicker}</p>
        <span className="holo-strip centered" />
        <h1 className="chrome-text">{t.join.title}</h1>
        <p>{t.join.intro}</p>
      </div>

      <h2 className="join-steps-title">{t.join.stepsTitle}</h2>
      <ol className="join-steps">
        {t.join.steps.map((step, index) => (
          <ScrollReveal as="li" key={step.title} delay={index * 100} className="join-step panel">
            <span className="join-step-number">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </ol>

      <div className="join-cta panel">
        <h2>{t.join.contactTitle}</h2>
        <p>{t.join.contactDesc}</p>
        <a className="btn" href={JOIN_CONTACT_URL}>
          {t.join.contactCta}
        </a>
      </div>
    </section>
  );
}

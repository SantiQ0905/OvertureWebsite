import { useLanguage } from '../i18n/LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { sponsorTiers, currentSponsors } from '../data/sponsors';
import './Sponsors.css';

// TODO: replace with the real sponsor contact address/form once supplied.
const SPONSOR_CONTACT_URL = '#sponsor-contact-pending';

export function Sponsors() {
  const { t } = useLanguage();

  return (
    <section className="page-section container sponsors-page">
      <div className="page-header">
        <p className="kicker">{t.sponsors.kicker}</p>
        <span className="holo-strip centered" />
        <h1 className="chrome-text">{t.sponsors.title}</h1>
        <p>{t.sponsors.intro}</p>
      </div>

      <div className="sponsor-why panel">
        <h2>{t.sponsors.whyTitle}</h2>
        <span className="holo-strip" />
        {t.sponsors.whyParagraphs.map((paragraph, index) => (
          <ScrollReveal as="p" key={index} delay={index * 90}>
            {paragraph}
          </ScrollReveal>
        ))}
      </div>

      <div className="sponsor-tiers">
        {sponsorTiers.map((tier) => (
          <div key={tier.id} className="sponsor-tier panel">
            <h2 className="sponsor-tier-name">{t.sponsors.tiers[tier.id]}</h2>
            {tier.sponsors.length > 0 ? (
              <ul className="sponsor-tier-list">
                {tier.sponsors.map((sponsor) => (
                  <li key={sponsor.name}>
                    {sponsor.url ? (
                      <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                        {sponsor.logo ? (
                          <img src={sponsor.logo} alt={sponsor.name} />
                        ) : (
                          sponsor.name
                        )}
                      </a>
                    ) : (
                      sponsor.name
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="sponsor-tier-empty">{t.sponsors.empty}</p>
            )}
          </div>
        ))}
      </div>

      <div className="sponsor-thanks">
        <div className="page-header">
          <h2>{t.sponsors.thanksTitle}</h2>
          <span className="holo-strip centered" />
          <p>{t.sponsors.thanksDesc}</p>
        </div>
        {currentSponsors.length > 0 ? (
          <div className="sponsor-thanks-grid">
            {currentSponsors.map((sponsor) =>
              sponsor.url ? (
                <a
                  key={sponsor.name}
                  className="sponsor-thanks-item panel"
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {sponsor.logo ? (
                    <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
                  ) : (
                    sponsor.name
                  )}
                </a>
              ) : (
                <div key={sponsor.name} className="sponsor-thanks-item panel">
                  {sponsor.logo ? (
                    <img src={sponsor.logo} alt={sponsor.name} loading="lazy" />
                  ) : (
                    sponsor.name
                  )}
                </div>
              ),
            )}
          </div>
        ) : (
          <p className="sponsor-tier-empty">{t.sponsors.thanksEmpty}</p>
        )}
      </div>

      <div className="sponsor-cta panel">
        <h2>{t.sponsors.ctaTitle}</h2>
        <p>{t.sponsors.ctaDesc}</p>
        <a className="btn" href={SPONSOR_CONTACT_URL}>
          {t.sponsors.ctaButton}
        </a>
      </div>
    </section>
  );
}

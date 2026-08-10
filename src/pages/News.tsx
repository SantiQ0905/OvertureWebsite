import { useLanguage } from '../i18n/LanguageContext';
import { SocialLinks } from '../components/SocialLinks';
import './News.css';

const FTC_THREAD_URL =
  'https://www.chiefdelphi.com/t/overture-23619-ftc-build-blog-2025-2026-open-alliance/508083';
const FRC_THREAD_URL =
  'https://www.chiefdelphi.com/t/overture-7421-build-blog-2026-open-alliance/510279/1';

export function News() {
  const { t } = useLanguage();

  return (
    <section className="page-section container news-page">
      <div className="page-header">
        <p className="kicker">{t.news.kicker}</p>
        <span className="holo-strip centered" />
        <h1 className="chrome-text">{t.news.title}</h1>
        <p>{t.news.intro}</p>
      </div>

      <div className="news-choices">
        <a
          className="news-choice panel"
          href={FTC_THREAD_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="news-choice-badge">FTC</span>
          <h2>{t.news.ftcTitle}</h2>
          <p>{t.news.ftcDesc}</p>
          <span className="news-choice-cta">{t.news.cta} ↗</span>
        </a>

        <a
          className="news-choice panel"
          href={FRC_THREAD_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="news-choice-badge">FRC</span>
          <h2>{t.news.frcTitle}</h2>
          <p>{t.news.frcDesc}</p>
          <span className="news-choice-cta">{t.news.cta} ↗</span>
        </a>
      </div>

      <p className="news-note">{t.news.note}</p>

      <div className="news-social">
        <SocialLinks title={t.news.socialTitle} />
      </div>
    </section>
  );
}

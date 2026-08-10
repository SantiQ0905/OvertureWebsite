import { useLanguage } from '../i18n/LanguageContext';
import { ScrollReveal } from '../components/ScrollReveal';
import { Timeline } from '../components/Timeline';
import { Carousel } from '../components/Carousel';
import { VideoGrid } from '../components/VideoGrid';
import { galleryImages } from '../data/gallery';
import { teamVideos } from '../data/videos';
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

      <div className="about-section">
        <div className="page-header">
          <h2>{t.about.timelineTitle}</h2>
          <span className="holo-strip centered" />
          <p>{t.about.timelineDesc}</p>
        </div>
        <Timeline />
      </div>

      <div className="about-section-row">
        <ScrollReveal as="div" className="panel about-block">
          <img
            src="/images/logos/PrepaTec/PREPATEC_White.png"
            alt="PrepaTec"
            className="about-school-logo"
          />
          <h2>{t.about.schoolTitle}</h2>
          <span className="holo-strip" />
          {t.about.schoolParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </ScrollReveal>

        <ScrollReveal as="div" className="panel about-block" delay={90}>
          <h2>{t.about.cityTitle}</h2>
          <span className="holo-strip" />
          <p>{t.about.cityDesc}</p>
        </ScrollReveal>
      </div>

      <div className="about-section">
        <div className="page-header">
          <h2>{t.about.galleryTitle}</h2>
          <span className="holo-strip centered" />
        </div>
        <Carousel images={galleryImages} emptyLabel={t.about.galleryEmpty} />
      </div>

      <div className="about-section">
        <div className="page-header">
          <h2>{t.about.videosTitle}</h2>
          <span className="holo-strip centered" />
        </div>
        <VideoGrid videos={teamVideos} emptyLabel={t.about.videosEmpty} />
      </div>

      <ScrollReveal as="div" className="panel about-block about-outreach">
        <h2>{t.about.outreachTitle}</h2>
        <span className="holo-strip" />
        {t.about.outreachParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </ScrollReveal>
    </section>
  );
}

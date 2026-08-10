import type { Lang } from '../i18n/translations';

export interface TimelineEntry {
  year: string;
  copy: Record<Lang, { title: string; desc: string }>;
}

// TODO: replace placeholder milestone copy below with the real season-by-season
// history once supplied — only 2018 (founding) is confirmed content.
export const timeline: TimelineEntry[] = [
  {
    year: '2018',
    copy: {
      es: {
        title: 'Arranca Overture',
        desc: 'El equipo nace en PrepaTec con un grupo inicial de estudiantes decididos a competir en FIRST.',
      },
      en: {
        title: 'Overture is born',
        desc: 'The team starts at PrepaTec with an initial group of students determined to compete in FIRST.',
      },
    },
  },
  {
    year: '2019',
    copy: {
      es: { title: 'Primera temporada completa', desc: 'Contenido pendiente por publicar.' },
      en: { title: 'First full season', desc: 'Content pending.' },
    },
  },
  {
    year: '2020',
    copy: {
      es: { title: 'Temporada 2020', desc: 'Contenido pendiente por publicar.' },
      en: { title: '2020 season', desc: 'Content pending.' },
    },
  },
  {
    year: '2021',
    copy: {
      es: { title: 'Temporada 2021', desc: 'Contenido pendiente por publicar.' },
      en: { title: '2021 season', desc: 'Content pending.' },
    },
  },
  {
    year: '2022',
    copy: {
      es: { title: 'Temporada 2022', desc: 'Contenido pendiente por publicar.' },
      en: { title: '2022 season', desc: 'Content pending.' },
    },
  },
  {
    year: '2023',
    copy: {
      es: { title: 'Temporada 2023', desc: 'Contenido pendiente por publicar.' },
      en: { title: '2023 season', desc: 'Content pending.' },
    },
  },
  {
    year: '2024',
    copy: {
      es: { title: 'Temporada 2024', desc: 'Contenido pendiente por publicar.' },
      en: { title: '2024 season', desc: 'Content pending.' },
    },
  },
  {
    year: '2025',
    copy: {
      es: {
        title: 'Temporada 2025–2026',
        desc: 'Overture compite con Hornet (FTC), Shellby (FRC) y Rigoberto (FLL).',
      },
      en: {
        title: '2025–2026 season',
        desc: 'Overture competes with Hornet (FTC), Shellby (FRC) and Rigoberto (FLL).',
      },
    },
  },
];

import type { Lang } from '../i18n/translations';

export type Program = 'FRC' | 'FTC' | 'FLL';

export interface RobotEvent {
  name: string;
  date: string;
  wlt?: string;
  opr?: string;
}

export interface RobotLink {
  label: string;
  url: string;
}

export interface RobotCopy {
  tagline: string;
  drivetrain: string;
  mechanisms: string;
  programming: string;
}

export interface Robot {
  id: string;
  name: string;
  program: Program;
  team: string;
  season: string;
  game?: string;
  image?: string;
  events: RobotEvent[];
  awards: string[];
  links: RobotLink[];
  copy: Record<Lang, RobotCopy>;
}

export function getRobotBySlug(slug: string): Robot | undefined {
  return robots.find((robot) => robot.id === slug);
}

export const robots: Robot[] = [
  {
    id: 'hornet',
    name: 'Hornet',
    program: 'FTC',
    team: 'FTC 7421',
    season: '2025-2026',
    game: '"DECODE" presented by RTX',
    events: [
      {
        name: 'Torneo Regional Torreón',
        date: '12–13 Dic 2025',
        wlt: '4-1-0',
        opr: '3.80 RP · 56.75 npOPR · 98.00 npAVG',
      },
      {
        name: 'Torneo Regional Monterrey',
        date: '16–17 Ene 2026',
        wlt: '4-1-0',
        opr: '4.20 RP · 105.72 npOPR · 138.00 npAVG',
      },
      {
        name: 'Mexico Championship',
        date: '6–8 Feb 2026',
        wlt: '5-0-0',
        opr: '4.60 RP · 116.20 npOPR · 163.00 npAVG',
      },
      {
        name: 'World Championship',
        date: '29 Abr – 2 May 2026',
        wlt: '6-4-0',
        opr: '3.50 RP · 137.79 npOPR · 255.10 npAVG',
      },
    ],
    awards: [],
    links: [],
    copy: {
      es: {
        tagline: 'El aguijón de la temporada FTC — rápido, preciso, competitivo desde el regional.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: "This season's FTC sting — fast, precise, competitive since the regional.",
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'shellby',
    name: 'Shellby',
    program: 'FRC',
    team: 'FRC 7421',
    season: '2025-2026',
    events: [],
    awards: [],
    links: [],
    copy: {
      es: {
        tagline: 'El músculo de FRC de Overture, en preparación para su próxima temporada.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: "Overture's FRC muscle car, gearing up for its next season.",
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'rigoberto',
    name: 'Rigoberto',
    program: 'FLL',
    team: 'FLL 7421',
    season: '2025-2026',
    events: [],
    awards: [],
    links: [],
    copy: {
      es: {
        tagline: 'La cantera de Overture — donde empiezan los futuros ingenieros del equipo.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: "Overture's farm team — where the team's future engineers get their start.",
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
];

export const programOrder: Program[] = ['FRC', 'FTC', 'FLL'];

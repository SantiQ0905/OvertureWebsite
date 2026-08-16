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
    awards: [
      'Torneo Regional Torreón — Connect Award Winner',
      'Mexico Championship — Winning Alliance 1st Pick',
      'Mexico Championship — Control Award 2nd Place',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/Hornet-2026-23619' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/7277e04136a3819938e37df3/w/7ab5082c987248f1c211a53a/e/a49395ea5f1eccc4bc12e446',
      },
    ],
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
    id: 'diavel',
    name: 'Diavel',
    program: 'FTC',
    team: 'FTC 7421',
    season: '2024-2025',
    game: '"Into the Deep" presented by RTX',
    events: [
      {
        name: 'Torneo Regional Monterrey',
        date: '7–9 Feb 2025',
        wlt: '1-4-0',
        opr: '0.40 RP · 40.25 npOPR · 53.00 npAVG',
      },
      {
        name: 'Mexico Championship',
        date: '21–22 Feb 2025',
        wlt: '4-1-0',
        opr: '1.60 RP · 75.48 npOPR · 151.20 npAVG',
      },
    ],
    awards: [
      'Torneo Regional Monterrey — Inspire Award 2nd Place',
      "Mexico Championship — Judges' Choice Award 2nd Place",
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FTC-Diavel-23619-2025' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/3118dba012f7b01a185b682e/w/c2cf783002ba68b893c35c99/e/c515736f5cc04815a149d76d',
      },
    ],
    copy: {
      es: {
        tagline: 'El diablo de Into the Deep — agilidad y garra que se llevaron el Inspire Award.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: "Into the Deep's resident devil — the agility and grit that earned an Inspire Award.",
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'valkyrie',
    name: 'Valkyrie',
    program: 'FTC',
    team: 'FTC 7421',
    season: '2024-2025',
    game: '"Into the Deep" presented by RTX',
    events: [
      {
        name: 'Torneo Regional Monterrey',
        date: '7–9 Feb 2025',
        wlt: '3-2-0',
        opr: '1.20 RP · 50.08 npOPR · 80.40 npAVG',
      },
      {
        name: 'Mexico Championship',
        date: '21–22 Feb 2025',
        wlt: '3-2-0',
        opr: '1.20 RP · 73.30 npOPR · 118.40 npAVG',
      },
    ],
    awards: [
      'Torneo Regional Monterrey — Inspire Award 1st Place Winner',
      'Torneo Regional Monterrey — Finalist Alliance 1st Pick',
    ],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FTC-Valkyrie-26381-2025' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/c457ba5fc5a12ff46e2cc264/w/dd07e06a97381a1eed2923d3/e/9d12cc5bd19c6c627224430d',
      },
    ],
    copy: {
      es: {
        tagline: 'La guerrera de Into the Deep — Inspire Award 1st Place y alianza finalista en su primer regional.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: "Into the Deep's warrior — 1st Place Inspire Award and a finalist alliance in its first regional.",
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'hayabusa',
    name: 'Hayabusa',
    program: 'FTC',
    team: 'FTC 7421',
    season: '2023-2024',
    game: '"Centerstage" presented by RTX',
    events: [
      {
        name: 'Torneo Regional Monterrey',
        date: '2–3 Feb 2024',
        wlt: '1-4-0',
        opr: '0.40 RP · 10.75 npOPR · 34.00 npAVG',
      },
    ],
    awards: ["Torneo Regional Monterrey — Judges' Choice Award 1st Place Winner"],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FTC-Hayabusa-2024' },
      { label: 'Onshape', url: 'https://cad.onshape.com/documents/572abe76f930baf94aa3dc23' },
    ],
    copy: {
      es: {
        tagline: 'El halcón de Centerstage 2023–2024 — velocidad pura desde su primer regional.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: 'The 2023–2024 Centerstage falcon — pure speed from its very first regional.',
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
    game: '"REBUILT" presented by HAAS',
    events: [
      {
        name: 'Regional Monterrey presented by PrepaTec',
        date: '11–14 Mar 2026',
        wlt: '8-7-0',
        opr: '12/43 Rank · 81.62 OPR · 2.10 RS · 126.00 AVG',
      },
      {
        name: 'Denver Regional',
        date: '8–11 Abr 2026',
        wlt: '6-6-0',
        opr: '12/55 Rank · 153.87 OPR · 2.78 RS · 254.89 AVG',
      },
      {
        name: 'World Championship – Curie Division',
        date: '29 Abr – 2 May 2026',
        wlt: '5-5-0',
        opr: '33/74 Rank · 143.14 OPR · 2.30 RS · 391.90 AVG',
      },
    ],
    awards: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FRC-Shelby-2026' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/469b63a8fed7124363d4312c/w/debbcc39a192be3ae65783aa/e/32037e5420ffe0cdc8032168',
      },
      {
        label: 'Onshape (2.0)',
        url: 'https://cad.onshape.com/documents/b0bd25b39e02244254aef7a0/w/89dd967bdfb693acfa78ca96/e/77b552295b581418d285c856',
      },
    ],
    copy: {
      es: {
        tagline: 'El músculo de Overture en REBUILT 2026 — motor grande, camino directo al Mundial.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: "Overture's REBUILT 2026 muscle car — big horsepower, straight shot to Worlds.",
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'daytona',
    name: 'Daytona',
    program: 'FRC',
    team: 'FRC 7421',
    season: '2025',
    game: '"Reefscape" presented by HAAS',
    events: [
      {
        name: 'Regional Monterrey presented by Prepa Tec',
        date: '26 Feb – 1 Mar 2025',
        wlt: '8-4-1',
        opr: '6/43 Rank · 35.72 OPR · 2.60 RS · 73.50 AVG',
      },
      {
        name: 'Heartland Regional',
        date: '19–22 Mar 2025',
        wlt: '15-4-0',
        opr: '3/36 Rank · 53.35 OPR · 4.00 RS · 96.83 AVG',
      },
      {
        name: 'World Championship – Hopper Division',
        date: '16–19 Abr 2025',
        wlt: '3-7-0',
        opr: '71/75 Rank · 26.65 OPR · 2.40 RS · 152.50 AVG',
      },
    ],
    awards: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FRC-Daytona-2025' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/6e2e164faf51d52a7f087f27/w/604c571604be9313a0d80876/e/e8aed2df21edf0719de38296',
      },
      {
        label: 'Onshape (2.0)',
        url: 'https://cad.onshape.com/documents/e3d9b34aa3ad383a1fba7755/w/8a392f7a410bd89245b839be/e/9d69d458f2bc0d882295ef7e',
      },
    ],
    copy: {
      es: {
        tagline: 'El bólido de Reefscape 2025 — velocidad y consistencia camino al Mundial.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: "Overture's 2025 Reefscape speedster — built for pace and consistency all the way to Worlds.",
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'maverick',
    name: 'Maverick',
    program: 'FRC',
    team: 'FRC 7421',
    season: '2024',
    game: '"Crescendo" presented by HAAS',
    events: [
      {
        name: 'Regional Monterrey presented by Prepa Tec',
        date: '28 Feb – 2 Mar 2024',
        wlt: '14-1-1',
        opr: '2/44 Rank · 21.82 OPR · 2.50 RS · 42.80 AVG',
      },
      {
        name: 'Heartland Regional',
        date: '13–16 Mar 2024',
        wlt: '12-6-0',
        opr: '10/36 Rank · 31.19 OPR · 2.00 RS · 61.83 AVG',
      },
      {
        name: 'World Championship – Curie Division',
        date: '17–20 Abr 2024',
        wlt: '7-7-0',
        opr: '43/74 Rank · 32.54 OPR · 1.80 RS · 81.20 AVG',
      },
    ],
    awards: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FRC-Maverick-2024' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/7713014d9581fd5ca14c0274/w/367b9afcf469d7b155e49540/e/0bb998828847636219fa081d',
      },
      {
        label: 'Onshape (Off-season)',
        url: 'https://cad.onshape.com/documents/a4bf027ffe03cb9046da3ddf/w/563b13dc5deb818f0e56fb66/e/4c1595fee31f7b5a9a219980',
      },
    ],
    copy: {
      es: {
        tagline: 'El corcel de Crescendo 2024 — ágil, resistente y siempre en la pelea por el podio.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: 'The 2024 Crescendo pony car — agile, resilient, always in the fight for the podium.',
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'miura',
    name: 'Miura',
    program: 'FRC',
    team: 'FRC 7421',
    season: '2023',
    game: '"Charged Up" presented by HAAS',
    events: [
      {
        name: 'Regional Monterrey',
        date: '1–4 Mar 2023',
        wlt: '8-6-0',
        opr: '15/41 Rank · 22.60 OPR · 1.40 RS · 54.90 AVG',
      },
      {
        name: 'Regional Laguna',
        date: '22–25 Mar 2023',
        wlt: '13-3-0',
        opr: '4/41 Rank · 50.26 OPR · 2.45 RS · 81.36 AVG',
      },
    ],
    awards: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FRC-Miura-2023' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/651a0b430eee3a08fbb1f7a7/w/027d7dbd4353654dd9344b8e/e/8f3c12c27018d27d0b25f71f',
      },
    ],
    copy: {
      es: {
        tagline: 'El clásico de Charged Up 2023 — el diseño elegante que marcó el arranque de nuestra era FRC.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: 'The 2023 Charged Up classic — the sleek design that kicked off our FRC era.',
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'mulssane',
    name: 'Mulssane',
    program: 'FRC',
    team: 'FRC 7421',
    season: '2022',
    events: [],
    awards: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FRC-Mulssane-2022' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/edae7e9205ce05a9a26e9f89/w/527da252023d86d3110d1567/e/495a633181d9124b6bfd5893',
      },
    ],
    copy: {
      es: {
        tagline: 'El regreso de Overture a las canchas en 2022 — elegancia y potencia tras la pausa.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: "Overture's return to the field in 2022 — elegance and power after the pause.",
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'skyline',
    name: 'Skyline',
    program: 'FRC',
    team: 'FRC 7421',
    season: '2020',
    events: [],
    awards: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FRC-Skyline-2020' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/c6f11da8c93c477f249ce578/w/5e7059967a65710c92cccab6/e/f8831316ac6f404ab44b6594',
      },
    ],
    copy: {
      es: {
        tagline: 'El Skyline de 2020 — una temporada marcada por la contingencia, pero con el motor siempre encendido.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: 'The 2020 Skyline — a season marked by the pandemic, but the engine never stopped running.',
        drivetrain: 'To be determined',
        mechanisms: 'To be determined',
        programming: 'To be determined',
      },
    },
  },
  {
    id: 'delorean',
    name: 'DeLorean',
    program: 'FRC',
    team: 'FRC 7421',
    season: '2019',
    events: [],
    awards: [],
    links: [
      { label: 'GitHub', url: 'https://github.com/Overture-7421/FRC-Delorean-2019' },
      {
        label: 'Onshape',
        url: 'https://cad.onshape.com/documents/c29c181df6a499a13c4fe4de/w/ea2d04626dd5e3831a44a5b4/e/30cf94f42d0a7c050cce3f46',
      },
    ],
    copy: {
      es: {
        tagline: 'El primer bólido de Overture con historial en Github — 2019, el inicio de nuestra era FRC documentada.',
        drivetrain: 'Por definir',
        mechanisms: 'Por definir',
        programming: 'Por definir',
      },
      en: {
        tagline: "Overture's first Github-tracked machine — 2019, the start of our documented FRC era.",
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

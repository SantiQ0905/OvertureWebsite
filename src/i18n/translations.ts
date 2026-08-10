export type Lang = 'es' | 'en';

const es = {
  nav: {
    home: 'Inicio',
    about: 'Nosotros',
    robots: 'Robots',
    sponsors: 'Patrocinadores',
    news: 'Noticias',
    join: 'Únete',
    scouting: 'Scouting',
    toggleLabel: 'English',
  },
  home: {
    kicker: 'PrepaTec · FIRST Robotics',
    tagline:
      'Motores encendidos, ingeniería mexicana. Competimos en FRC, FTC y FLL bajo un mismo tablero.',
    ctaRobots: 'Ver los robots',
    ctaJoin: 'Únete al equipo',
    scoutingTitle: 'Herramienta de Scouting',
    scoutingDesc:
      'Nuestra app de scouting en vivo para analizar partidos, equipos y estrategia — construida por el equipo, para el equipo.',
    scoutingCta: 'Abrir Scouting',
    scoutingNote: 'Se abre en una pestaña nueva',
    highlightsTitle: 'En pista',
    highlightsDesc:
      'Del garage al campeonato: revisa nuestra flota de robots y lo último del equipo.',
  },
  about: {
    kicker: 'Nuestra historia',
    title: 'Sobre Overture',
    paragraphs: [
      'Overture (Equipo 7421) nace en PrepaTec como un espacio donde estudiantes diseñan, fabrican y compiten con robots propios, aprendiendo ingeniería real bajo presión real de temporada.',
      'Competimos en tres programas de FIRST — FRC, FTC y FLL — y seguimos una tradición muy nuestra: cada robot lleva el nombre de un auto o motocicleta icónico. Skyline, DeLorean, Impala, Mulsanne, Hornet, Valkyrie, Diavel, Hayabusa — cada nombre marca una temporada, un reto y una versión más afinada del equipo.',
      'Más allá de la competencia, buscamos formar ingenieros con criterio: gente que sabe soldar, programar, diseñar en CAD, presentar ante jueces y sostener un proyecto completo de principio a fin.',
      'Cada temporada es una vuelta más rápida que la anterior. Este es nuestro tablero, así rodamos.',
    ],
    timelineTitle: 'Línea del tiempo',
    timelineDesc: 'De 2018 a hoy, temporada tras temporada.',
    schoolTitle: 'Nuestra escuela',
    schoolParagraphs: [
      'Overture nace y compite bajo el nombre de PrepaTec (Preparatoria Tec de Monterrey), parte del sistema Tecnológico de Monterrey, uno de los referentes de educación STEM en México.',
      'Somos parte de la Escudería PrepaTec de Robótica, el programa que agrupa a los equipos de robótica competitiva de la escuela en las distintas categorías de FIRST (FRC, FTC y FLL), compartiendo taller, mentoría y filosofía de trabajo.',
    ],
    cityTitle: 'Nuestra ciudad',
    cityDesc:
      'Somos de Monterrey, Nuevo León, capital industrial del norte de México y cuna de generaciones de ingenieros. Entre cerros, fábricas y universidades, competir en robótica es una extensión natural de la cultura técnica de la ciudad.',
    galleryTitle: 'Galería',
    galleryEmpty: 'Aún no hay fotos publicadas en esta galería — pronto compartiremos momentos de taller y competencia.',
    videosTitle: 'Videos',
    videosEmpty: 'Aún no hay videos publicados — pronto compartiremos contenido del equipo en pista y en taller.',
    outreachTitle: 'Trabajo social',
    outreachParagraphs: [
      'Creemos que la robótica competitiva también es una herramienta de comunidad. Fuera de temporada de torneos, el equipo organiza talleres y actividades de acercamiento STEM para estudiantes más jóvenes interesados en ingeniería y robótica.',
      'Buscamos que ese conocimiento no se quede solo en Overture: mentoreamos equipos FLL y FTC que arrancan, y compartimos lo aprendido en cada temporada con quien quiera empezar su propio camino en FIRST.',
    ],
  },
  robots: {
    kicker: 'Ficha técnica',
    title: 'Nuestros Robots',
    intro:
      'Cada robot, un modelo distinto. Filtra por programa para ver la flota completa de Overture.',
    filterAll: 'Todos',
    yearLabel: 'Temporada',
    tbd: 'Por definir',
    labels: {
      season: 'Temporada',
      game: 'Juego',
      drivetrain: 'Tren motriz',
      mechanisms: 'Mecanismos',
      programming: 'Programación',
      events: 'Eventos',
      date: 'Fecha',
      awards: 'Reconocimientos',
      results: 'Resultados',
      links: 'Enlaces',
    },
    empty: 'Aún no hay robots registrados en esta categoría.',
    viewSpec: 'Ver ficha',
    backToRobots: 'Volver a robots',
    notFoundTitle: 'Robot no encontrado',
    notFoundDesc: 'Ese modelo no está en el catálogo. Puede que se haya movido o retirado de pista.',
    awardsEmpty: 'Aún sin reconocimientos registrados.',
    linksEmpty: 'Enlaces por publicar.',
  },
  sponsors: {
    kicker: 'Aliados de pista',
    title: 'Patrocinadores',
    intro:
      'Overture rueda gracias a las empresas y familias que invierten en la siguiente generación de ingenieros. Estas son las marcas en nuestro chasis.',
    tiers: {
      diamond: 'Diamante',
      gold: 'Oro',
      silver: 'Plata',
      inkind: 'En especie',
    },
    whyTitle: '¿Por qué patrocinar a Overture?',
    whyParagraphs: [
      'Detrás de cada robot hay un equipo de estudiantes de PrepaTec que diseña, fabrica, programa y compite representando a Monterrey y a México en torneos de FIRST — FRC, FTC y FLL. Patrocinar a Overture es invertir directamente en esa formación.',
      'Tu marca viaja con nosotros a cada torneo: en el robot, en el uniforme, en el pit y en nuestras redes, frente a jueces, equipos rivales y la comunidad FIRST regional e internacional. Es visibilidad real ante un público técnico, familias y futuros ingenieros.',
      'Más allá de la marca, tu apoyo se traduce en piezas, herramienta, viáticos y horas de taller — el combustible que nos mantiene en pista temporada tras temporada.',
    ],
    ctaTitle: '¿Quieres patrocinar a Overture?',
    ctaDesc:
      'Escríbenos y con gusto compartimos nuestro dossier de patrocinio con niveles, beneficios y alcance del equipo.',
    ctaButton: 'Contactar al equipo',
    empty: 'Aún no hay patrocinadores registrados en este nivel.',
    thanksTitle: 'Gracias a nuestros patrocinadores actuales',
    thanksDesc: 'Estas marcas ya ruedan con nosotros esta temporada.',
    thanksEmpty: 'Aún no hay patrocinadores confirmados para esta temporada — ¡sé el primero!',
  },
  news: {
    kicker: 'Última vuelta',
    title: 'Noticias',
    intro:
      'Seguimos nuestras temporadas en vivo en Chief Delphi. Elige un hilo para ver actualizaciones, resultados y discusión de la comunidad.',
    ftcTitle: 'Hilo FTC',
    ftcDesc: 'Sigue la temporada de FIRST Tech Challenge de Overture.',
    frcTitle: 'Hilo FRC',
    frcDesc: 'Sigue la temporada de FIRST Robotics Competition de Overture.',
    cta: 'Abrir hilo',
    note: 'Se abre en Chief Delphi, en una pestaña nueva.',
    socialTitle: '¡Para estar al día con lo último!',
  },
  join: {
    kicker: 'Súmate al equipo',
    title: 'Únete a Overture',
    intro:
      'Buscamos estudiantes de PrepaTec con ganas de diseñar, programar, fabricar, grabar, presentar o administrar un equipo de robótica competitivo. No necesitas experiencia previa, solo compromiso de temporada.',
    stepsTitle: 'Cómo unirte',
    steps: [
      {
        title: 'Ven a un entrenamiento abierto',
        desc: 'Visita el taller durante la semana de reclutamiento al inicio del semestre.',
      },
      {
        title: 'Elige un subequipo',
        desc: 'Mecánica, programación, electrónica, negocios/medios o estrategia — hay lugar para todos los perfiles.',
      },
      {
        title: 'Ponte la overol',
        desc: 'Empiezas en talleres y proyectos guiados antes de subir a piezas de competencia.',
      },
    ],
    contactTitle: '¿Preguntas antes de inscribirte?',
    contactDesc: 'Escríbenos y un capitán del equipo te responde directamente.',
    contactCta: 'Escribir al equipo',
  },
  notFound: {
    kicker: 'Check Engine',
    title: 'Fuera de pista',
    message:
      'Esta ruta no existe en el circuito. Puede que el enlace esté descompuesto o la página se haya movido de carril.',
    cta: 'Volver a la base',
  },
  footer: {
    tagline: 'Equipo 7421 · PrepaTec · FIRST Robotics',
    rights: 'Todos los derechos reservados.',
  },
  common: {
    language: 'Idioma',
  },
  whatsapp: {
    label: 'Escríbenos por WhatsApp',
  },
};

const en: typeof es = {
  nav: {
    home: 'Home',
    about: 'About',
    robots: 'Robots',
    sponsors: 'Sponsors',
    news: 'News',
    join: 'Join Us',
    scouting: 'Scouting',
    toggleLabel: 'Español',
  },
  home: {
    kicker: 'PrepaTec · FIRST Robotics',
    tagline:
      'Engines on, Mexican engineering. We compete in FRC, FTC and FLL under one dashboard.',
    ctaRobots: 'See the robots',
    ctaJoin: 'Join the team',
    scoutingTitle: 'Scouting Tool',
    scoutingDesc:
      'Our live scouting app for match analysis, team data and strategy — built by the team, for the team.',
    scoutingCta: 'Open Scouting',
    scoutingNote: 'Opens in a new tab',
    highlightsTitle: 'On track',
    highlightsDesc:
      'From the garage to the championship: check out our robot fleet and the latest from the team.',
  },
  about: {
    kicker: 'Our story',
    title: 'About Overture',
    paragraphs: [
      "Overture (Team 7421) started at PrepaTec as a place where students design, build, and compete with robots of their own, learning real engineering under real season pressure.",
      "We compete in three FIRST programs — FRC, FTC and FLL — and follow a tradition of our own: every robot is named after an iconic car or motorcycle. Skyline, DeLorean, Impala, Mulsanne, Hornet, Valkyrie, Diavel, Hayabusa — each name marks a season, a challenge, and a sharper version of the team.",
      'Beyond competition, we aim to form engineers with judgment: people who can weld, code, design in CAD, present to judges, and carry a full project from start to finish.',
      "Every season is a faster lap than the last. This is our dashboard, this is how we ride.",
    ],
    timelineTitle: 'Timeline',
    timelineDesc: 'From 2018 to today, season after season.',
    schoolTitle: 'Our school',
    schoolParagraphs: [
      "Overture is based at, and competes under, PrepaTec (Preparatoria Tec de Monterrey), part of the Tecnológico de Monterrey system, one of Mexico's leading STEM education institutions.",
      "We're part of Escudería PrepaTec de Robótica, the program that brings together the school's competitive robotics teams across FIRST categories (FRC, FTC and FLL), sharing a shop, mentorship and a common way of working.",
    ],
    cityTitle: 'Our city',
    cityDesc:
      "We're from Monterrey, Nuevo León, the industrial capital of northern Mexico and home to generations of engineers. Between mountains, factories and universities, competing in robotics is a natural extension of the city's engineering culture.",
    galleryTitle: 'Gallery',
    galleryEmpty: "No photos published in this gallery yet — shop and competition moments coming soon.",
    videosTitle: 'Videos',
    videosEmpty: 'No videos published yet — team footage from the shop and the field coming soon.',
    outreachTitle: 'Community outreach',
    outreachParagraphs: [
      "We believe competitive robotics is also a community tool. Outside of tournament season, the team runs workshops and STEM outreach activities for younger students interested in engineering and robotics.",
      "We want that knowledge to spread beyond Overture: we mentor FLL and FTC teams just getting started, and share what we learn each season with anyone looking to begin their own FIRST journey.",
    ],
  },
  robots: {
    kicker: 'Spec sheet',
    title: 'Our Robots',
    intro:
      'Every robot, a different model. Filter by program to see the full Overture fleet.',
    filterAll: 'All',
    yearLabel: 'Season',
    tbd: 'To be determined',
    labels: {
      season: 'Season',
      game: 'Game',
      drivetrain: 'Drivetrain',
      mechanisms: 'Mechanisms',
      programming: 'Programming',
      events: 'Events',
      date: 'Date',
      awards: 'Awards',
      results: 'Results',
      links: 'Links',
    },
    empty: 'No robots registered in this category yet.',
    viewSpec: 'View spec',
    backToRobots: 'Back to robots',
    notFoundTitle: 'Robot not found',
    notFoundDesc: "That model isn't in the catalog. It may have moved or been retired from the track.",
    awardsEmpty: 'No awards on record yet.',
    linksEmpty: 'Links coming soon.',
  },
  sponsors: {
    kicker: 'Track allies',
    title: 'Sponsors',
    intro:
      'Overture runs thanks to the companies and families investing in the next generation of engineers. These are the brands on our chassis.',
    tiers: {
      diamond: 'Diamond',
      gold: 'Gold',
      silver: 'Silver',
      inkind: 'In-Kind',
    },
    whyTitle: 'Why sponsor Overture?',
    whyParagraphs: [
      "Behind every robot is a team of PrepaTec students who design, build, code and compete representing Monterrey and Mexico at FIRST tournaments — FRC, FTC and FLL. Sponsoring Overture is a direct investment in that training.",
      "Your brand travels with us to every event: on the robot, on our uniforms, in the pit, and across our channels, in front of judges, rival teams and the wider FIRST community. That's real visibility with a technical audience, families and future engineers.",
      "Beyond brand exposure, your support turns directly into parts, tools, travel and shop hours — the fuel that keeps us on track season after season.",
    ],
    ctaTitle: 'Want to sponsor Overture?',
    ctaDesc:
      "Reach out and we'll gladly share our sponsorship deck with tiers, benefits and team reach.",
    ctaButton: 'Contact the team',
    empty: 'No sponsors registered at this tier yet.',
    thanksTitle: 'Thanks to our current sponsors',
    thanksDesc: 'These brands are already riding with us this season.',
    thanksEmpty: 'No confirmed sponsors for this season yet — be the first!',
  },
  news: {
    kicker: 'Last lap',
    title: 'News',
    intro:
      'We track our seasons live on Chief Delphi. Pick a thread to see updates, results and community discussion.',
    ftcTitle: 'FTC Thread',
    ftcDesc: "Follow Overture's FIRST Tech Challenge season.",
    frcTitle: 'FRC Thread',
    frcDesc: "Follow Overture's FIRST Robotics Competition season.",
    cta: 'Open thread',
    note: 'Opens on Chief Delphi, in a new tab.',
    socialTitle: 'To keep up with our latest info!',
  },
  join: {
    kicker: 'Join the crew',
    title: 'Join Overture',
    intro:
      "We're looking for PrepaTec students who want to design, code, build, film, present or run a competitive robotics team. No prior experience needed, just season-long commitment.",
    stepsTitle: 'How to join',
    steps: [
      {
        title: 'Come to an open workshop',
        desc: 'Visit the shop during recruitment week at the start of the semester.',
      },
      {
        title: 'Pick a sub-team',
        desc: 'Mechanical, programming, electrical, business/media or strategy — there is room for every profile.',
      },
      {
        title: 'Put on the overalls',
        desc: 'You start with guided workshops and projects before moving to competition parts.',
      },
    ],
    contactTitle: 'Questions before signing up?',
    contactDesc: 'Reach out and a team captain will get back to you directly.',
    contactCta: 'Message the team',
  },
  notFound: {
    kicker: 'Check Engine',
    title: 'Off Track',
    message:
      "This route doesn't exist on the circuit. The link might be broken or the page changed lanes.",
    cta: 'Back to base',
  },
  footer: {
    tagline: 'Team 7421 · PrepaTec · FIRST Robotics',
    rights: 'All rights reserved.',
  },
  common: {
    language: 'Language',
  },
  whatsapp: {
    label: 'Message us on WhatsApp',
  },
};

export const translations = { es, en };
export type Translation = typeof es;

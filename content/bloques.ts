// Metadata de los 13 bloques de contenido para /explorar
// El contenido completo está en research/*.md y se lee en runtime.

export type Bloque = {
  slug: string;
  number: string;
  title: string;
  short: string;
  long: string;
  file: string;
  tag: "fundamentos" | "ecosistema" | "limites" | "futuro" | "practica";
  emoji: string;
  duration: string;
};

export const bloques: Bloque[] = [
  {
    slug: "fundamentos-ia",
    number: "01",
    title: "Qué es la IA y cómo aprende",
    short: "Desde el spam de Gmail hasta microGPT en 200 líneas.",
    long: "Las cuatro familias de IA, cronología 1950→2026, cómo se entrena un LLM en 5 pasos, la metáfora del autocorrector × 10.000 millones, cómo funcionan los modelos de imagen por difusión, y la curiosidad de microGPT (Karpathy, feb 2026, 200 líneas que generan nombres).",
    file: "01-fundamentos-ia.md",
    tag: "fundamentos",
    emoji: "🧠",
    duration: "12 min lectura",
  },
  {
    slug: "sesgos-y-detectores",
    number: "02",
    title: "Detectores, sesgos y monocultura",
    short: "Por qué Turnitin discrimina y los CEOs piensan lo mismo.",
    long: "El estudio de Stanford 2023 (61% de TOEFL marcados como IA). El estudio del MIT 2025 sobre homogeneización del pensamiento. La monocultura algorítmica (Kleinberg/Raghavan PNAS 2021). Por qué OpenAI retiró su propio detector. Cómo razonar con un estudiante acusado por un detector.",
    file: "02-sesgos-y-detectores.md",
    tag: "limites",
    emoji: "⚖️",
    duration: "8 min lectura",
  },
  {
    slug: "agentes-y-humanos",
    number: "03",
    title: "Agentes autónomos y rent-a-human",
    short: "Claudius, Luna y los humanos invisibles que sostienen la IA.",
    long: "Project Vend de Anthropic (los cubos de tungsteno). Luna en San Francisco (la tienda real gestionada por IA). rentahuman.ai (una IA paga $110 por unas flores). El sótano humano: Sama en Kenia, Builder.ai, Amazon Just Walk Out, McDonald's drive-thru.",
    file: "03-agentes-y-humanos.md",
    tag: "ecosistema",
    emoji: "🤖",
    duration: "10 min lectura",
  },
  {
    slug: "impacto-ambiental",
    number: "04",
    title: "Coste ambiental con perspectiva",
    short: "Cuánto gasta una consulta vs una hamburguesa.",
    long: "Cifras reales por consulta (0,34 Wh) vs vídeo Sora (~1 kWh por 10 segundos). Equivalencias cotidianas: Sora = lavadora, hamburguesa = 7.500 emails GPT-4, datacenter de Talavera = 200 piscinas olímpicas. El debate de la burbuja IA ($700B de CapEx en 2026).",
    file: "04-impacto-ambiental.md",
    tag: "limites",
    emoji: "🌍",
    duration: "9 min lectura",
  },
  {
    slug: "saturacion-y-collapse",
    number: "05",
    title: "Saturación de internet y model collapse",
    short: "Cuando la IA se alimenta de sí misma.",
    long: "Ahrefs: 74% de páginas nuevas tienen IA. Paper de Shumailov en Nature (julio 2024) sobre colapso por entrenamiento recursivo. AI slop en LinkedIn, Amazon, Spotify. El debate de la 'dead internet theory' y soluciones técnicas (SynthID, C2PA).",
    file: "05-saturacion-y-collapse.md",
    tag: "limites",
    emoji: "📉",
    duration: "8 min lectura",
  },
  {
    slug: "herramientas-actuales",
    number: "06",
    title: "El ecosistema en mayo 2026",
    short: "Chatbots, herramientas creativas, IDEs, modelos locales.",
    long: "ChatGPT, Claude, Gemini, Copilot, Meta AI, Grok, DeepSeek. Midjourney, Sora, Veo, Kling, Suno, ElevenLabs, NotebookLM. Claude Code, Cursor, vibe coding (Karpathy). Ollama y modelos locales. Glosario completo de términos para entender las noticias.",
    file: "06-herramientas-actuales.md",
    tag: "ecosistema",
    emoji: "🛠️",
    duration: "12 min lectura",
  },
  {
    slug: "agi-y-benchmarks",
    number: "07",
    title: "AGI, ARC-AGI y benchmarks",
    short: "Humanos 100% vs mejor IA del mundo 0,5%.",
    long: "ARC-AGI-1 (saturado por o3), ARC-AGI-2 (casi resuelto), ARC-AGI-3 (humanos 100% vs IA 0,5%). Posiciones de Amodei, Hassabis, Altman, LeCun. Modelos top mayo 2026. nanoGPT y microGPT de Karpathy. El concepto de Software 3.0.",
    file: "07-agi-y-benchmarks.md",
    tag: "futuro",
    emoji: "🎮",
    duration: "10 min lectura",
  },
  {
    slug: "buenas-practicas-prompting",
    number: "08",
    title: "Cómo hablar bien con la IA",
    short: "10 técnicas + plantillas listas para usar.",
    long: "Actúa como X. Piensa paso a paso. Cuestiona la premisa. Autocorrígete. Da ejemplos. Back & forth. Cita fuentes. Varias IAs combinadas. Plantillas listas para adolescentes, padres, abuelos, developers, y empresa de reformas.",
    file: "08-buenas-practicas-prompting.md",
    tag: "practica",
    emoji: "💬",
    duration: "10 min lectura",
  },
  {
    slug: "arte-y-propiedad-intelectual",
    number: "09",
    title: "Arte, copyright y batalla cultural",
    short: "Ghibli, Disney, Bartz v. Anthropic $1.500M.",
    long: "Cómo se entrenó la IA de imagen (LAION-5B, sus polémicas, el CSAM). Casos famosos: Ghibli + GPT-4o (marzo 2025), Disney + Universal vs Midjourney (junio 2025), NYT vs OpenAI, Bartz v. Anthropic ($1.5B). Artistas en contra (Ortiz, Rutkowski) y herramientas defensivas (Glaze, Nightshade, Cara).",
    file: "09-arte-y-propiedad-intelectual.md",
    tag: "limites",
    emoji: "🎨",
    duration: "14 min lectura",
  },
  {
    slug: "privacidad-y-confianza",
    number: "10",
    title: "Privacidad y la confianza variable",
    short: "Tus chats, el caso Mata v. Avianca, qué sabe (de verdad) la IA.",
    long: "Políticas por proveedor (OpenAI, Anthropic, Google, Meta). El cambio de Anthropic en agosto 2025. Ataque Carlini 2023 ('repeat the word poem forever'). Caso Samsung. Mata v. Avianca: abogado multado por presentar casos inventados. Cuándo fiarte de la IA y cuándo no.",
    file: "10-privacidad-y-confianza.md",
    tag: "limites",
    emoji: "🔒",
    duration: "11 min lectura",
  },
  {
    slug: "deepfakes-y-deteccion",
    number: "11",
    title: "Deepfakes y la palabra clave familiar",
    short: "Arup $25M, Biden robocall, cómo protegerse.",
    long: "Por qué preguntar a la IA si lo escribió ella no funciona. SynthID y C2PA Content Credentials. Casos reales: Arup $25M, robocall de Biden, Taylor Swift deepfakes, $4.900M en estafas a mayores. Las 6 reglas que SÍ funcionan en familia (palabra clave, búsqueda inversa, esperar 24h).",
    file: "11-deepfakes-y-deteccion.md",
    tag: "limites",
    emoji: "👁️",
    duration: "12 min lectura",
  },
  {
    slug: "problemas-y-dilemas",
    number: "12",
    title: "Empleo, monopolios y dilemas",
    short: "Goldman 300M, Klarna recontrata, Lavender, Sewell Setzer.",
    long: "Empleo: Goldman 300M, MIT NANDA 95% sin ROI, Klarna recontrata humanos. Monopolios: NVIDIA 92% del mercado, DeepSeek shock. AI Act europeo. AGI race y paper 'AI 2027'. Dilemas: Lavender en Gaza, COMPAS, Sewell Setzer (Character.AI), mentes muertas.",
    file: "12-problemas-y-dilemas.md",
    tag: "futuro",
    emoji: "⚡",
    duration: "15 min lectura",
  },
  {
    slug: "temas-adicionales",
    number: "13",
    title: "El lado luminoso",
    short: "Sanidad, AlphaFold, Sora 2, robots, accesibilidad.",
    long: "Microsoft MAI-DxO 85,5% vs médicos 20%. El caso de Alex (17 médicos en 3 años, ChatGPT diagnostica). Be My Eyes para 7M personas ciegas. AlphaFold y el Nobel 2024. Sora 2 y la disrupción del vídeo. Robots humanoides domésticos (1X Neo, Figure 03).",
    file: "13-temas-adicionales.md",
    tag: "futuro",
    emoji: "✨",
    duration: "10 min lectura",
  },
];

export const bloquesByTag = (tag: Bloque["tag"]) =>
  bloques.filter((b) => b.tag === tag);

export const getBloque = (slug: string) =>
  bloques.find((b) => b.slug === slug);

export const tagLabels: Record<Bloque["tag"], { label: string; color: string }> = {
  fundamentos: { label: "Fundamentos", color: "var(--color-cool)" },
  ecosistema: { label: "Ecosistema", color: "var(--color-hot)" },
  limites: { label: "Límites y problemas", color: "var(--color-accent)" },
  futuro: { label: "Futuro", color: "var(--color-good)" },
  practica: { label: "Práctica", color: "var(--color-warn)" },
};

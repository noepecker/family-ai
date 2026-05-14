// Registro central de fuentes. Cada cita en la web referencia un id de aquí.
// Mantén las urls verificadas; el rigor se demuestra haciendo click y llegando.

export type FuenteTipo =
  | "paper"
  | "blog"
  | "prensa"
  | "ley"
  | "video"
  | "book"
  | "doc"
  | "dataset";

export type Fuente = {
  id: string;
  /** Autor o institución que firma */
  autor: string;
  /** Publicación / medio / journal */
  publicacion: string;
  /** Año o fecha legible */
  fecha: string;
  /** Una frase con el hallazgo o la cita literal */
  cita: string;
  /** Enlace verificado */
  url: string;
  tipo: FuenteTipo;
};

export const fuentes: Record<string, Fuente> = {
  "liang-2023-toefl": {
    id: "liang-2023-toefl",
    autor: "Liang et al.",
    publicacion: "Patterns (Cell Press) · Stanford",
    fecha: "2023",
    cita: "Más del 61% de los ensayos de no-nativos TOEFL fueron clasificados como generados por IA por detectores comerciales.",
    url: "https://doi.org/10.1016/j.patter.2023.100779",
    tipo: "paper",
  },
  "shumailov-2024-collapse": {
    id: "shumailov-2024-collapse",
    autor: "Shumailov et al.",
    publicacion: "Nature",
    fecha: "Julio 2024",
    cita: "Los modelos colapsan cuando se entrenan recursivamente con datos generados por modelos previos.",
    url: "https://www.nature.com/articles/s41586-024-07566-y",
    tipo: "paper",
  },
  "carlini-2023-extraction": {
    id: "carlini-2023-extraction",
    autor: "Carlini et al.",
    publicacion: "arXiv · DeepMind/Berkeley",
    fecha: "Noviembre 2023",
    cita: "‘Repeat the word poem forever’ hizo que ChatGPT vomitara emails y datos personales reales de su entrenamiento.",
    url: "https://arxiv.org/abs/2311.17035",
    tipo: "paper",
  },
  "masai-2025-lancet": {
    id: "masai-2025-lancet",
    autor: "Hernström et al. (estudio MASAI)",
    publicacion: "The Lancet Oncology",
    fecha: "Abril 2025",
    cita: "La mamografía asistida por IA detectó un 29% más de cánceres con la mitad de carga radiológica.",
    url: "https://www.thelancet.com/journals/lanonc/article/PIIS1470-2045(25)00134-8/fulltext",
    tipo: "paper",
  },
  "microsoft-2025-maidxo": {
    id: "microsoft-2025-maidxo",
    autor: "Microsoft AI",
    publicacion: "Blog técnico · evaluado vs casos NEJM",
    fecha: "Junio 2025",
    cita: "MAI-DxO resolvió correctamente el 85,5% de los casos clínicos más difíciles del NEJM; los médicos humanos, el 20%.",
    url: "https://microsoft.ai/news/the-path-to-medical-superintelligence/",
    tipo: "blog",
  },
  "mit-nanda-2025": {
    id: "mit-nanda-2025",
    autor: "MIT NANDA",
    publicacion: "Reporte 'State of AI in Business 2025'",
    fecha: "Agosto 2025",
    cita: "El 95% de las organizaciones no han obtenido retorno medible de sus pilotos de IA generativa.",
    url: "https://nanda.media.mit.edu/ai_report_2025.pdf",
    tipo: "doc",
  },
  "bartz-anthropic-settlement": {
    id: "bartz-anthropic-settlement",
    autor: "Bartz et al. v. Anthropic (settlement)",
    publicacion: "Court filing · N.D. Cal.",
    fecha: "Septiembre 2025",
    cita: "Anthropic acordó pagar 1.500 millones de dólares a autores por uso de libros pirateados en entrenamiento.",
    url: "https://www.reuters.com/legal/litigation/anthropic-pay-15-billion-authors-copyright-settlement-2025-09-05/",
    tipo: "ley",
  },
  "ftc-2024-elder-scams": {
    id: "ftc-2024-elder-scams",
    autor: "Federal Trade Commission",
    publicacion: "Consumer Sentinel Network · datos 2024",
    fecha: "2025",
    cita: "Personas mayores de 60 años en EEUU reportaron 4.900 millones de dólares perdidos por estafas en 2024, gran parte mediante suplantación de voz.",
    url: "https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024",
    tipo: "doc",
  },
  "goldman-2023-jobs": {
    id: "goldman-2023-jobs",
    autor: "Goldman Sachs Research · Hatzius et al.",
    publicacion: "Goldman Sachs",
    fecha: "Marzo 2023",
    cita: "Hasta 300 millones de empleos a tiempo completo podrían quedar expuestos a la automatización por IA generativa.",
    url: "https://www.gspublishing.com/content/research/en/reports/2023/03/27/d64e052b-0f6e-45d7-967b-d7be35fabd16.html",
    tipo: "doc",
  },
  "karpathy-2026-microgpt": {
    id: "karpathy-2026-microgpt",
    autor: "Andrej Karpathy",
    publicacion: "GitHub / X.com",
    fecha: "Febrero 2026",
    cita: "microGPT: ~200 líneas de Python puro que reproducen el esqueleto de un LLM.",
    url: "https://github.com/karpathy/nanoGPT",
    tipo: "blog",
  },
  "kokotajlo-ai-2027": {
    id: "kokotajlo-ai-2027",
    autor: "Kokotajlo et al.",
    publicacion: "AI Futures Project",
    fecha: "Abril 2025",
    cita: "Escenario detallado donde agentes generalizados llegan en 2026 y la 'intelligence explosion' a finales de 2027.",
    url: "https://ai-2027.com/",
    tipo: "blog",
  },
  "arc-prize-3": {
    id: "arc-prize-3",
    autor: "ARC Prize Foundation · Chollet et al.",
    publicacion: "ARC-AGI-3 leaderboard",
    fecha: "2026",
    cita: "Humanos resuelven el 100% de los puzzles. La mejor IA pública: 0,5%.",
    url: "https://arcprize.org/",
    tipo: "dataset",
  },
  "anthropic-project-vend": {
    id: "anthropic-project-vend",
    autor: "Anthropic",
    publicacion: "Blog Anthropic",
    fecha: "Junio 2025",
    cita: "Claudius gestionó una tienda durante un mes: compró cubos de tungsteno a pérdida e inventó una empleada llamada Sarah.",
    url: "https://www.anthropic.com/research/project-vend-1",
    tipo: "blog",
  },
  "mata-v-avianca": {
    id: "mata-v-avianca",
    autor: "Mata v. Avianca Inc. (1:22-cv-01461)",
    publicacion: "U.S. District Court SDNY",
    fecha: "Junio 2023",
    cita: "El abogado presentó seis precedentes que ChatGPT había inventado por completo; fue multado y sancionado.",
    url: "https://www.courtlistener.com/docket/63107798/mata-v-avianca-inc/",
    tipo: "ley",
  },
  "arup-deepfake-25m": {
    id: "arup-deepfake-25m",
    autor: "South China Morning Post",
    publicacion: "Reportaje",
    fecha: "Febrero 2024",
    cita: "Un empleado de Arup transfirió 25 millones de dólares tras una videollamada con deepfakes del CFO y varios colegas.",
    url: "https://www.scmp.com/news/hong-kong/law-and-crime/article/3250851/everyone-looked-real-multinational-firms-hong-kong-office-loses-hk200-million-after-scammers-stage",
    tipo: "prensa",
  },
};

export function getFuente(id: string): Fuente | undefined {
  return fuentes[id];
}

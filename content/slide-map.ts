// Mapa bidireccional: cada slide de /charla apunta a una página de la web
// donde se puede profundizar; cada página puede mostrar "Vienes desde la
// slide N" si se llega con ?from=slide-N. La numeración de slides sigue el
// orden de aparición en slides/index.html.

export type SlideLink = {
  /** id usado en el hash de reveal.js (data-id o número) */
  slide: string;
  /** página web equivalente */
  href: string;
  /** label corto para mostrar en el botón de la slide */
  cta: string;
  /** título visible al volver a la slide desde la web */
  title: string;
};

export const slideMap: SlideLink[] = [
  {
    slide: "fundamentos",
    href: "/explorar/fundamentos-ia",
    cta: "Profundizar: cómo aprende un LLM",
    title: "Cap. 01 · Cómo aprende un LLM",
  },
  {
    slide: "glosario",
    href: "/explorar/herramientas-actuales#glosario",
    cta: "Glosario interactivo en la web",
    title: "Glosario",
  },
  {
    slide: "demo-chatgpt",
    href: "/casos?nivel=curioso",
    cta: "Mira los casos que probaremos",
    title: "Demo · casos básicos",
  },
  {
    slide: "prompting",
    href: "/explorar/buenas-practicas-prompting",
    cta: "Las 10 técnicas, con ejemplos",
    title: "Hablar bien con la IA",
  },
  {
    slide: "utilidades",
    href: "/herramientas",
    cta: "Catálogo de herramientas",
    title: "Herramientas",
  },
  {
    slide: "ia-o-no",
    href: "/jugar/ia-o-no",
    cta: "Jugar tú mismo a ¿IA o no?",
    title: "¿IA o no?",
  },
  {
    slide: "privacidad",
    href: "/explorar/privacidad-y-confianza",
    cta: "Casos completos: Samsung, Carlini, Avianca",
    title: "Privacidad",
  },
  {
    slide: "arte",
    href: "/explorar/arte-y-propiedad-intelectual",
    cta: "Bartz v. Anthropic y la batalla cultural",
    title: "Arte y copyright",
  },
  {
    slide: "ambiente",
    href: "/jugar/calculadora-consumo",
    cta: "Calculadora de consumo IA vs vida cotidiana",
    title: "Coste ambiental",
  },
  {
    slide: "empleo",
    href: "/explorar/problemas-y-dilemas",
    cta: "Datos completos: 300M, Klarna, MIT NANDA",
    title: "Empleo",
  },
  {
    slide: "agentes",
    href: "/explorar/agentes-y-humanos",
    cta: "Project Vend, Luna, rent-a-human",
    title: "Agentes",
  },
  {
    slide: "deepfakes",
    href: "/explorar/deepfakes-y-deteccion",
    cta: "La palabra clave y las 6 reglas",
    title: "Deepfakes",
  },
  {
    slide: "lado-luminoso",
    href: "/explorar/temas-adicionales",
    cta: "Sanidad, AlphaFold, accesibilidad",
    title: "El lado luminoso",
  },
  {
    slide: "agi",
    href: "/agi",
    cta: "ARC-AGI-3 y posiciones de los líderes",
    title: "AGI",
  },
  {
    slide: "futuro",
    href: "/futuro",
    cta: "Predicciones, dataciones, qué cambia",
    title: "Futuro",
  },
];

export function getSlideLink(slide: string): SlideLink | undefined {
  return slideMap.find((s) => s.slide === slide);
}

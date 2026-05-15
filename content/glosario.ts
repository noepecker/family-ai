// Glosario único de términos técnicos.
// Fuente de verdad: content/glosario.json — la consumen tanto la web
// (popups en components/glossary-popover.tsx + auto-marcado en
// lib/markdown.ts) como el deck reveal.js (scripts/copy-slides.mjs
// genera public/slides/glosario.js a partir del mismo JSON).
//
// `match` = formas de superficie que se detectan automáticamente en el
// texto. La primera aparición de cada término se vuelve clicable. Las
// siglas en MAYÚSCULAS se detectan respetando mayúsculas para no marcar
// palabras corrientes.

import data from "./glosario.json";

export type GlossaryTerm = {
  /** slug — usado en data-term y como ancla #id */
  id: string;
  /** nombre visible en el popup */
  term: string;
  /** definición corta para el popup (1-2 frases, castellano llano) */
  def: string;
  /** formas de superficie a auto-detectar en el texto */
  match: string[];
};

export const glosario: GlossaryTerm[] = data as GlossaryTerm[];

const byId = new Map(glosario.map((t) => [t.id, t]));

export const getTerm = (id: string): GlossaryTerm | undefined => byId.get(id);

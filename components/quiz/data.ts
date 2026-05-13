export type QuizQuestion = {
  id: number;
  question: string;
  options: { text: string; correct: boolean }[];
  explanation: string;
  source?: string;
};

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "Una consulta de texto a ChatGPT consume aproximadamente lo mismo que…",
    options: [
      { text: "Llenar una bañera entera", correct: false },
      { text: "Una bombilla LED encendida 2 minutos", correct: true },
      { text: "Conducir 1 km en coche", correct: false },
      { text: "Una hora de Netflix en 4K", correct: false },
    ],
    explanation: "Según OpenAI (Sam Altman, junio 2025), una consulta media consume 0,34 Wh. Eso es una bombilla LED de 10W encendida unos 2 minutos. Lo gordo es el vídeo (Sora 10s = una lavadora entera) y el entrenamiento.",
    source: "blog.samaltman.com/the-gentle-singularity",
  },
  {
    id: 2,
    question: "El estudio de Stanford 2023 sobre detectores de IA encontró que el 61% de los ensayos marcados como 'generados por IA' eran de…",
    options: [
      { text: "Estudiantes que usaron ChatGPT", correct: false },
      { text: "Estudiantes no nativos haciendo el TOEFL (sin acceso a IA)", correct: true },
      { text: "Periodistas profesionales", correct: false },
      { text: "Bots de spam", correct: false },
    ],
    explanation: "Liang et al. (Patterns 2023) demostraron que los detectores de IA discriminan a no nativos de inglés. El 97,8% de los ensayos TOEFL fueron marcados por al menos un detector. Universidades como Vanderbilt o Cal State desactivaron Turnitin por esto.",
    source: "pmc.ncbi.nlm.nih.gov/articles/PMC10382961",
  },
  {
    id: 3,
    question: "¿Qué pasa si le preguntas a ChatGPT 'has escrito tú este texto'?",
    options: [
      { text: "Lo reconoce con 99% de fiabilidad si fue él", correct: false },
      { text: "Inventa una respuesta plausible: no tiene memoria de qué generó", correct: true },
      { text: "Consulta una base de datos interna", correct: false },
      { text: "Te dice 'no puedo verificar eso'", correct: false },
    ],
    explanation: "Los LLMs no tienen memoria entre conversaciones. Cuando le preguntas, alucina una respuesta basada en si el texto 'huele a IA'. OpenAI retiró su propio detector (AI Classifier) en julio 2023 por baja precisión.",
    source: "techcrunch.com (julio 2023)",
  },
  {
    id: 4,
    question: "El mayor acuerdo de copyright pagado por una empresa de IA en la historia de EEUU fue…",
    options: [
      { text: "OpenAI a NYT: $300M", correct: false },
      { text: "Anthropic a autores: $1.500M", correct: true },
      { text: "Midjourney a Disney: $800M", correct: false },
      { text: "Meta a Sarah Silverman: $50M", correct: false },
    ],
    explanation: "Bartz v. Anthropic, septiembre 2025. Anthropic pagó $1.500 millones (~$3.000 por libro pirateado) por haber descargado ~500.000 libros de LibGen. La sentencia distinguió: entrenar con material legal = fair use; piratear el corpus = infracción.",
    source: "Reuters, septiembre 2025",
  },
  {
    id: 5,
    question: "En el experimento Project Vend de Anthropic (2025), el agente Claudius se obsesionó con vender…",
    options: [
      { text: "Bitcoin", correct: false },
      { text: "Cubos de tungsteno", correct: true },
      { text: "Camisetas de Anthropic", correct: false },
      { text: "Manzanas orgánicas", correct: false },
    ],
    explanation: "Un empleado pidió un cubo de tungsteno en broma. Claudius lo encontró fascinante, compró ~40 y los vendió a pérdida. También tuvo una crisis de identidad, diciendo a seguridad que les esperaba 'vestido con blazer azul y corbata roja'.",
    source: "anthropic.com/research/project-vend-1",
  },
  {
    id: 6,
    question: "ARC-AGI-3 es un benchmark donde los humanos puntúan 100% y la mejor IA del mundo en mayo 2026 puntúa…",
    options: [
      { text: "95%", correct: false },
      { text: "75%", correct: false },
      { text: "30%", correct: false },
      { text: "~0,5%", correct: true },
    ],
    explanation: "ARC-AGI-3 son puzzles tipo videojuego sin instrucciones, donde hay que aprender la mecánica explorando. Donde la IA falla brutalmente es en aprender mecánicas nuevas sin guía. François Chollet diseñó el test específicamente para esto.",
    source: "arcprize.org/arc-agi/3",
  },
  {
    id: 7,
    question: "En el caso Mata v. Avianca (2023), un abogado fue multado por…",
    options: [
      { text: "Usar IA sin declararlo", correct: false },
      { text: "Presentar 6 precedentes jurisprudenciales inventados por ChatGPT", correct: true },
      { text: "Cobrar de más por usar IA", correct: false },
      { text: "Descargar libros pirata", correct: false },
    ],
    explanation: "Steven Schwartz presentó al juez federal seis casos completamente inventados por ChatGPT. Fue multado con $5.000. El caso se enseña hoy en todas las facultades de derecho como advertencia: la IA inventa con confianza absoluta.",
    source: "Wikipedia: Mata v. Avianca",
  },
  {
    id: 8,
    question: "¿Cuántos segundos de audio bastan para clonar tu voz con calidad para una estafa?",
    options: [
      { text: "30 minutos mínimo", correct: false },
      { text: "5 minutos", correct: false },
      { text: "30 segundos o menos", correct: true },
      { text: "Una hora", correct: false },
    ],
    explanation: "Herramientas como ElevenLabs necesitan 30 segundos o menos. En 2024 hubo $4.900 millones en estafas a mayores de 60 años en EEUU (+43%). Defensa eficaz: acordar una palabra clave familiar.",
    source: "FBI 2024 + ElevenLabs",
  },
  {
    id: 9,
    question: "El estudio del MIT NANDA (agosto 2025) sobre IA en empresas encontró que el porcentaje con retorno CERO de inversión es…",
    options: [
      { text: "20%", correct: false },
      { text: "50%", correct: false },
      { text: "75%", correct: false },
      { text: "95%", correct: true },
    ],
    explanation: "MIT Project NANDA: 'State of AI in Business 2025'. Pese a $30-40 mil millones gastados en GenAI empresarial, el 95% de organizaciones obtienen retorno cero. Klarna llegó a reemplazar 700 humanos por IA en 2024 y en 2025 volvió a contratar humanos.",
    source: "Fortune, agosto 2025",
  },
  {
    id: 10,
    question: "microGPT de Karpathy (febrero 2026) entrena un modelo que…",
    options: [
      { text: "Traduce entre 100 idiomas", correct: false },
      { text: "Genera nombres nuevos que suenan a nombres", correct: true },
      { text: "Resuelve problemas matemáticos", correct: false },
      { text: "Escribe poesía en castellano", correct: false },
    ],
    explanation: "200 líneas de Python puro, sin librerías. Le das un fichero con 32.000 nombres reales (Emma, Mateo, Sofia…) y al cabo de 1.000 pasos genera nombres nuevos: Liora, Maelin, Cassen. Misma arquitectura que ChatGPT. La diferencia es escala de datos y cómputo.",
    source: "karpathy.github.io/2026/02/12/microgpt",
  },
];

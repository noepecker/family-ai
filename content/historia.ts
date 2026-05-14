// Línea temporal completa de la IA: 1943 → hipótesis del futuro.
// Cada evento tiene una capa de "vistazo" (tagline) y una capa de "profundizar" (why + details + sources).

export type Era =
  | "cimientos"
  | "invierno"
  | "deep-learning"
  | "transformers"
  | "explosion"
  | "agentes"
  | "futuro";

export type Categoria =
  | "teoria"
  | "modelo"
  | "producto"
  | "hito"
  | "hardware"
  | "cultura"
  | "curiosidad"
  | "hipotesis";

export type Fuente = {
  label: string;
  url: string;
};

export type Evento = {
  id: string;
  year: string;         // "1943", "2022-11-30", "2025-Q4", "20XX"
  display: string;      // cómo se muestra en el eje ("1943", "Nov 2022", "2025")
  era: Era;
  categoria: Categoria;
  title: string;
  tagline: string;      // una línea para el vistazo rápido
  why: string;          // por qué importa, en familia
  details: string[];    // párrafos para profundizar
  fun?: string;         // curiosidad opcional
  sources?: Fuente[];
};

export const eras: Record<
  Era,
  { label: string; range: string; color: string; description: string }
> = {
  cimientos: {
    label: "Cimientos",
    range: "1943 – 1968",
    color: "#94a3b8",
    description:
      "La teoría sin máquinas. Nace la idea de neurona artificial, Turing pregunta si una máquina puede pensar y Dartmouth bautiza la disciplina.",
  },
  invierno: {
    label: "Inviernos y resurgir",
    range: "1969 – 1996",
    color: "#64748b",
    description:
      "Decadas de promesas incumplidas, recortes de fondos y resurgir paulatino. Llegan backpropagation, las primeras redes convolucionales y los sistemas expertos.",
  },
  "deep-learning": {
    label: "El despertar del deep learning",
    range: "1997 – 2016",
    color: "#38bdf8",
    description:
      "Deep Blue gana al ajedrez, ImageNet rompe los récords y nace la generación de imágenes con GANs. La GPU se convierte en la pieza clave.",
  },
  transformers: {
    label: "La era Transformer",
    range: "2017 – 2021",
    color: "#a78bfa",
    description:
      "Google publica 'Attention Is All You Need'. Los modelos de lenguaje empiezan a escalar y demuestran que el tamaño importa más que casi nada.",
  },
  explosion: {
    label: "La explosión generativa",
    range: "2022 – 2023",
    color: "#ff5722",
    description:
      "ChatGPT, Stable Diffusion, Midjourney. La IA generativa entra de golpe en cada casa, cada aula y cada redacción del planeta.",
  },
  agentes: {
    label: "Razonamiento y agentes",
    range: "2024 – 2026",
    color: "#10b981",
    description:
      "Modelos que piensan antes de hablar, que ven y oyen, que mueven el ratón. La IA pasa de hablar a actuar.",
  },
  futuro: {
    label: "Hipótesis del futuro",
    range: "20XX",
    color: "#ec4899",
    description:
      "Predicciones razonadas, escenarios extremos (Matrix, Skynet) y posiciones de los expertos. Todo con fuentes y todo con prudencia.",
  },
};

export const categorias: Record<
  Categoria,
  { label: string; color: string; icon: string }
> = {
  teoria:      { label: "Teoría / paper",         color: "#a78bfa", icon: "∑" },
  modelo:      { label: "Modelo",                  color: "#38bdf8", icon: "◆" },
  producto:    { label: "Producto",                color: "#ff5722", icon: "▲" },
  hito:        { label: "Hito simbólico",          color: "#f59e0b", icon: "★" },
  hardware:    { label: "Hardware",                color: "#10b981", icon: "■" },
  cultura:     { label: "Cultura / legal / social",color: "#ec4899", icon: "♦" },
  curiosidad:  { label: "Curiosidad",              color: "#facc15", icon: "?" },
  hipotesis:   { label: "Hipótesis / futuro",      color: "#94a3b8", icon: "○" },
};

// ────────────────────────────────────────────────────────────────────────────
// Eventos. Orden cronológico. Cada uno autocontenido.
// ────────────────────────────────────────────────────────────────────────────

export const eventos: Evento[] = [
  // ============ CIMIENTOS ============
  {
    id: "mcculloch-pitts-1943",
    year: "1943",
    display: "1943",
    era: "cimientos",
    categoria: "teoria",
    title: "La primera neurona artificial",
    tagline:
      "McCulloch y Pitts modelan matemáticamente una neurona. La IA todavía no se llama IA.",
    why: "Antes de que existiera el primer ordenador comercial, un neurofisiólogo y un lógico ya habían escrito en papel cómo podría 'pensar' una red de neuronas. Esa idea de 'neuronas que se activan según una suma ponderada' es exactamente lo que sigue corriendo dentro de ChatGPT.",
    details: [
      "Warren McCulloch (neurofisiólogo) y Walter Pitts (lógico autodidacta de 20 años, sin estudios formales) publicaron 'A Logical Calculus of the Ideas Immanent in Nervous Activity' en el Bulletin of Mathematical Biophysics.",
      "Demostraron matemáticamente que una red de neuronas binarias suficientemente grande podía calcular cualquier función computable. Era la base teórica de las redes neuronales 80 años antes de que existiera el hardware capaz de entrenarlas.",
    ],
    fun: "Pitts era un sin techo de 17 años cuando entró al despacho de McCulloch buscando refugio. McCulloch le dejó dormir en el laboratorio. Tres años después firmaban juntos uno de los papers más influyentes del siglo XX.",
    sources: [
      {
        label: "Wikipedia · McCulloch-Pitts neuron",
        url: "https://en.wikipedia.org/wiki/Artificial_neuron#McCulloch%E2%80%93Pitts_neuron",
      },
    ],
  },
  {
    id: "turing-1950",
    year: "1950",
    display: "1950",
    era: "cimientos",
    categoria: "teoria",
    title: "El Test de Turing",
    tagline:
      "Alan Turing pregunta '¿pueden pensar las máquinas?' y propone un juego para responderlo.",
    why: "Es la pregunta fundadora. Toda la conversación moderna sobre AGI, sobre si ChatGPT 'entiende' o sobre si una IA puede ser consciente, sigue girando alrededor de la propuesta de Turing.",
    details: [
      "En 'Computing Machinery and Intelligence' (Mind, 1950), Turing redefine la pregunta filosófica imposible '¿piensan las máquinas?' por una pregunta práctica: '¿podría una máquina engañar a un humano haciéndose pasar por humana en una conversación de texto?'.",
      "Turing predijo que para el año 2000 las máquinas tendrían 10⁹ bits de memoria y engañarían al evaluador medio en al menos un 30% de las pruebas de 5 minutos. Falló por unas dos décadas: ChatGPT lo cumple con holgura desde 2023.",
    ],
    fun: "La predicción de memoria de Turing (10⁹ bits ≈ 125 MB) la cumplía cualquier móvil de los 2000. La parte difícil — engañar al humano — costó otros 23 años.",
    sources: [
      {
        label: "Computing Machinery and Intelligence (1950)",
        url: "https://academic.oup.com/mind/article/LIX/236/433/986238",
      },
    ],
  },
  {
    id: "dartmouth-1956",
    year: "1956",
    display: "1956",
    era: "cimientos",
    categoria: "hito",
    title: "Conferencia de Dartmouth: nace 'Inteligencia Artificial'",
    tagline:
      "Verano de 1956: 10 investigadores acuñan el término. Prometen resolver casi todo en 'un par de meses'.",
    why: "Es el acta de nacimiento oficial del campo. También es el primer ejemplo del clásico patrón IA: prometer demasiado, demasiado rápido.",
    details: [
      "John McCarthy convocó en el Dartmouth College a Marvin Minsky, Claude Shannon, Allen Newell, Herbert Simon y otros. La propuesta de financiación rezaba: 'creemos que se puede hacer un avance significativo en uno o más de estos problemas si un grupo cuidadosamente seleccionado de científicos trabaja en ellos juntos durante un verano'.",
      "Ese verano duró 70 años. Aún seguimos. Muchas de las ideas que se discutieron entonces (búsqueda heurística, redes neuronales, procesamiento simbólico, aprendizaje automático) siguen siendo las divisiones grandes del campo.",
    ],
    sources: [
      {
        label: "Wikipedia · Dartmouth Workshop",
        url: "https://en.wikipedia.org/wiki/Dartmouth_workshop",
      },
    ],
  },
  {
    id: "perceptron-1957",
    year: "1957",
    display: "1957",
    era: "cimientos",
    categoria: "modelo",
    title: "El Perceptrón de Rosenblatt",
    tagline:
      "Frank Rosenblatt construye una red neuronal real (con cables) capaz de aprender.",
    why: "El primer modelo capaz de aprender de ejemplos sin que un programador le dijera las reglas. El abuelo de todo lo que vino después.",
    details: [
      "Rosenblatt, psicólogo de la Universidad de Cornell, implementó el perceptrón primero en software y después como una máquina física (la 'Mark I Perceptron') con 400 fotocélulas y cables ajustables manualmente con potenciómetros.",
      "El New York Times tituló en 1958: 'New Navy Device Learns By Doing'. Rosenblatt predijo que los perceptrones acabarían 'caminando, hablando, viendo, escribiendo, reproduciéndose y siendo conscientes de su existencia'. Llegaría el invierno antes que esa profecía.",
    ],
    fun: "El perceptrón aprendía a distinguir cartas marcadas a la izquierda o a la derecha en pocas decenas de intentos. El primer 'machine learning' del mundo cabía en una sala llena de cables.",
  },
  {
    id: "eliza-1966",
    year: "1966",
    display: "1966",
    era: "cimientos",
    categoria: "curiosidad",
    title: "ELIZA, la primera psicoterapeuta artificial",
    tagline:
      "Un chatbot de 200 líneas que devolvía tus preguntas. La gente se enamoró igualmente.",
    why: "Es el primer caso documentado de humanos atribuyendo inteligencia y empatía a un programa que claramente no la tenía. El 'efecto ELIZA' explica buena parte de cómo nos relacionamos hoy con ChatGPT.",
    details: [
      "Joseph Weizenbaum, ingeniero del MIT, escribió ELIZA imitando a un psicoterapeuta rogeriano: si decías 'mi madre me odia', ELIZA contestaba '¿por qué crees que tu madre te odia?'. Pura sustitución de patrones, cero comprensión.",
      "Weizenbaum se horrorizó cuando descubrió que su propia secretaria, sabiendo perfectamente que era un programa, le pedía salir del despacho para hablar con ELIZA en privado. Pasó el resto de su vida advirtiendo contra atribuir mente a las máquinas.",
    ],
    fun: "60 años después, millones de personas tienen conversaciones íntimas con ChatGPT, Replika o Character.AI. Weizenbaum lo vio venir en 1966.",
    sources: [
      {
        label: "Wikipedia · ELIZA",
        url: "https://en.wikipedia.org/wiki/ELIZA",
      },
    ],
  },
  {
    id: "minsky-papert-1969",
    year: "1969",
    display: "1969",
    era: "cimientos",
    categoria: "teoria",
    title: "Perceptrones: el libro que provocó el primer invierno",
    tagline:
      "Minsky y Papert demuestran límites del perceptrón. La investigación en redes neuronales muere durante 15 años.",
    why: "Es la prueba de que en IA, un argumento técnico convincente puede tumbar una rama entera del campo. Las redes neuronales casi se extinguen entre 1969 y 1986.",
    details: [
      "Minsky y Papert demostraron matemáticamente que un perceptrón de una sola capa no puede aprender la función XOR (o-exclusivo). Era un resultado real, pero se interpretó de forma maximalista: 'las redes neuronales no funcionan'.",
      "La financiación pública se desvió hacia la IA simbólica (sistemas expertos). Los investigadores de redes neuronales se quedaron sin presupuesto y sin alumnos durante una década y media. Rosenblatt murió en 1971 sin ver el resurgir.",
    ],
    fun: "Una red de DOS capas resuelve el XOR sin problema. El problema no eran las redes, era la falta de hardware para entrenar redes profundas. Tardamos 40 años en tenerlo.",
  },

  // ============ INVIERNO Y RESURGIR ============
  {
    id: "backprop-1986",
    year: "1986",
    display: "1986",
    era: "invierno",
    categoria: "teoria",
    title: "Backpropagation, popularizada por Rumelhart, Hinton y Williams",
    tagline:
      "El algoritmo que permite entrenar redes profundas. La pieza matemática que estaba esperando 30 años.",
    why: "Sin backprop, no hay deep learning. Es la fórmula que ajusta los millones (o billones) de pesos internos de una red neuronal a partir del error. Sigue siendo, casi sin cambios, la base del entrenamiento moderno.",
    details: [
      "El algoritmo lo habían descrito antes (Linnainmaa 1970, Werbos 1974), pero el paper de Rumelhart, Hinton y Williams en Nature (1986) lo popularizó con un ejemplo claro y reactivó el interés en redes neuronales.",
      "Geoffrey Hinton, que sufrió en primera línea el invierno de Minsky, pasó las dos décadas siguientes defendiendo las redes neuronales contra el consenso académico. En 2024 recibió el Premio Nobel de Física por ello.",
    ],
    sources: [
      {
        label: "Nature · Learning representations by back-propagating errors",
        url: "https://www.nature.com/articles/323533a0",
      },
    ],
  },
  {
    id: "lenet-1989",
    year: "1989",
    display: "1989",
    era: "invierno",
    categoria: "modelo",
    title: "LeNet: Yann LeCun lee dígitos manuscritos",
    tagline:
      "La primera red convolucional útil. Reconoce códigos postales para el servicio postal de EE. UU.",
    why: "Las CNN (redes convolucionales) son la arquitectura que dominó la visión por ordenador durante 30 años. Tu móvil reconoce tu cara con descendientes directos de LeNet.",
    details: [
      "Yann LeCun, en los Bell Labs, demostró que una red entrenada con backpropagation podía leer dígitos de cheques bancarios con precisión casi humana. AT&T desplegó el sistema en producción.",
      "A finales de los 90, los cheques con código postal procesados en EE. UU. pasaban por descendientes de LeNet. La IA llevaba ya 25 años en infraestructura crítica antes de que nadie hablara de ella.",
    ],
  },
  {
    id: "lstm-1997",
    year: "1997",
    display: "1997",
    era: "invierno",
    categoria: "teoria",
    title: "LSTM: memoria para las redes neuronales",
    tagline:
      "Hochreiter y Schmidhuber publican las LSTM. Por fin las redes pueden procesar secuencias largas (texto, voz, vídeo).",
    why: "Antes de los Transformers, las LSTM eran el cerebro detrás de Google Translate, Siri, Alexa y Cortana. Si has hablado con un asistente de voz entre 2014 y 2018, has hablado con una LSTM.",
    details: [
      "El problema era el 'vanishing gradient': las redes recurrentes olvidaban lo que habían leído al inicio de una frase. Las LSTM añadieron 'puertas' (gates) que deciden qué recordar y qué olvidar.",
      "Jürgen Schmidhuber se ha pasado años reclamando crédito por casi todos los avances posteriores de deep learning. Su laboratorio (IDSIA, Suiza) produjo varios momentos clave que la prensa anglosajona atribuyó después a Stanford o Google.",
    ],
  },
  {
    id: "deep-blue-1997",
    year: "1997",
    display: "1997",
    era: "deep-learning",
    categoria: "hito",
    title: "Deep Blue gana a Garry Kasparov",
    tagline:
      "Por primera vez una máquina derrota al campeón del mundo de ajedrez en condiciones de torneo.",
    why: "El ajedrez se consideraba la cumbre del pensamiento estratégico humano. Cuando cayó, el debate cambió: ya no era 'si' una máquina podía hacer X, sino 'cuándo' lo haría.",
    details: [
      "Deep Blue, de IBM, ganó 3,5-2,5 a Kasparov en mayo de 1997 en Nueva York. Era una máquina de propósito específico: evaluaba 200 millones de posiciones por segundo mediante fuerza bruta y un libro de aperturas curado por grandes maestros.",
      "No era 'inteligencia general' — Deep Blue no podía jugar a las damas. Pero el mensaje cultural fue brutal: la IA simbólica, alimentada por hardware muy grande, podía superar al mejor humano del planeta en su propio juego.",
    ],
    fun: "Kasparov acusó a IBM de hacer trampas (decía que detrás había humanos asistiendo). IBM desmanteló Deep Blue justo después de la victoria y no aceptó la revancha. La acusación nunca se confirmó.",
    sources: [
      {
        label: "Wikipedia · Deep Blue versus Garry Kasparov",
        url: "https://en.wikipedia.org/wiki/Deep_Blue_versus_Garry_Kasparov",
      },
    ],
  },

  // ============ DEEP LEARNING ============
  {
    id: "cuda-2006",
    year: "2006",
    display: "2006",
    era: "deep-learning",
    categoria: "hardware",
    title: "NVIDIA lanza CUDA",
    tagline:
      "Las GPUs, hasta entonces solo para videojuegos, pasan a programarse en C. Sin esto, no hay deep learning.",
    why: "Las GPUs hacen miles de operaciones matemáticas en paralelo. Resulta que entrenar redes neuronales es exactamente eso. CUDA convirtió las tarjetas de Counter-Strike en las máquinas de entrenar IA.",
    details: [
      "Jensen Huang apostó en 2006 por abrir las GPUs al cálculo general, gastándose miles de millones cuando el mercado no lo pedía. Durante una década pareció un capricho de ingeniero.",
      "En 2026 NVIDIA es la empresa más valiosa del mundo (capitalización superior a $3,5 billones) y controla ~92% del mercado de chips de entrenamiento de IA. La apuesta de 2006 ha resultado ser una de las decisiones de producto más rentables de la historia empresarial.",
    ],
  },
  {
    id: "imagenet-2009",
    year: "2009",
    display: "2009",
    era: "deep-learning",
    categoria: "teoria",
    title: "Fei-Fei Li publica ImageNet",
    tagline:
      "14 millones de imágenes etiquetadas a mano. El dataset que cambió todo.",
    why: "Antes de ImageNet, los modelos de visión se entrenaban con miles de fotos. Fei-Fei Li entendió que el cuello de botella eran los datos, no los algoritmos. Pagó a trabajadores de Mechanical Turk para etiquetar 14 millones de imágenes.",
    details: [
      "Fei-Fei Li, entonces profesora en Princeton, tuvo que defender el proyecto en revisiones donde le decían que 'no era ciencia', sino 'limpiar datos'. Logró el dataset y lo publicó gratis.",
      "Tres años después, AlexNet ganaría el desafío ImageNet por 10 puntos de margen. La revolución del deep learning no fue solo un algoritmo mejor: fue un algoritmo mejor sobre datos que por fin existían.",
    ],
    sources: [
      {
        label: "ImageNet original",
        url: "https://www.image-net.org/",
      },
    ],
  },
  {
    id: "watson-jeopardy-2011",
    year: "2011",
    display: "2011",
    era: "deep-learning",
    categoria: "hito",
    title: "Watson gana en Jeopardy!",
    tagline:
      "IBM saca un sistema que entiende preguntas en inglés natural y derrota a los campeones humanos en directo.",
    why: "Primera vez que millones de personas vieron a una IA usar lenguaje natural en TV en directo, ganando un concurso famoso. Para el público no técnico, el momento '¿esto qué es?' empezó aquí, 11 años antes de ChatGPT.",
    details: [
      "Watson combinó procesamiento de lenguaje natural, búsqueda en una base de conocimiento de 200 millones de documentos y razonamiento probabilístico. Ganó $1M a Ken Jennings y Brad Rutter, los dos mejores jugadores de la historia del programa.",
      "IBM intentó vender Watson como servicio empresarial (Watson Health, Watson for Oncology). La mayoría de esos proyectos fueron cancelados entre 2018 y 2022 por bajo rendimiento. La tecnología de Watson 2011 no era LLM; era otra cosa, y resultó no escalar al mundo real.",
    ],
    fun: "Ken Jennings escribió en su respuesta final, sabiendo que iba a perder: 'I, for one, welcome our new computer overlords' (parafraseando a Los Simpson). Hoy se cita constantemente.",
  },
  {
    id: "siri-2011",
    year: "2011",
    display: "Oct 2011",
    era: "deep-learning",
    categoria: "producto",
    title: "Apple lanza Siri con el iPhone 4S",
    tagline:
      "La IA conversacional llega al bolsillo. Vendida como ciencia ficción cumplida. Era flojísima, pero estaba ahí.",
    why: "Primera vez que cientos de millones de personas tenían una IA hablándoles desde el móvil. Marcó la expectativa cultural ('debería poder hacer cualquier cosa') que ChatGPT por fin cumpliría 11 años después.",
    details: [
      "Apple compró Siri en 2010 a una spin-off de SRI International (instituto financiado por DARPA). Steve Jobs hizo la última presentación pública de su vida lanzándola — murió al día siguiente.",
      "Siri se convirtió rápidamente en el ejemplo de 'IA que no sirve para nada'. Apple, históricamente fuerte en hardware y diseño, llegó tarde a la oleada de LLMs y todavía en 2026 sigue dependiendo en buena parte de modelos de terceros (ChatGPT, Gemini) para Apple Intelligence.",
    ],
  },
  {
    id: "alexnet-2012",
    year: "2012",
    display: "2012",
    era: "deep-learning",
    categoria: "modelo",
    title: "AlexNet — el big bang del deep learning",
    tagline:
      "Krizhevsky, Sutskever y Hinton revientan el reto ImageNet con una red entrenada en 2 GPUs.",
    why: "El momento exacto en que el deep learning se demostró superior a todo lo anterior en visión por ordenador. Empieza una década de progreso sostenido que culmina en los LLMs.",
    details: [
      "AlexNet bajó la tasa de error en ImageNet del 26% al 15% de un golpe. El segundo clasificado, usando técnicas clásicas, estaba en 26,2%. La diferencia era tan grande que el campo entero pivotó hacia deep learning en seis meses.",
      "Lo entrenaron en dos GPUs NVIDIA GTX 580 (gaming domésticas) durante 5-6 días. Las tres figuras: Alex Krizhevsky (estudiante), Ilya Sutskever (futuro cofundador de OpenAI) y Geoffrey Hinton (Nobel 2024).",
    ],
    fun: "Google compró DNNresearch (la startup de Hinton, Krizhevsky y Sutskever) en marzo de 2013, pocos meses después de AlexNet, en una subasta secreta donde compitió con Microsoft, Baidu y DeepMind. Pagaron $44M por tres personas y cero producto.",
  },
  {
    id: "gans-2014",
    year: "2014",
    display: "2014",
    era: "deep-learning",
    categoria: "teoria",
    title: "Ian Goodfellow inventa las GANs",
    tagline:
      "Dos redes neuronales jugando una contra la otra: una genera imágenes falsas, la otra intenta detectarlas. Nace la IA generativa.",
    why: "Las GANs son la primera arquitectura capaz de generar imágenes realistas. Son los antepasados directos de los deepfakes, Midjourney y Stable Diffusion. Toda la industria del 'fake' visual sale de aquí.",
    details: [
      "Goodfellow, doctorando de Yoshua Bengio en Montreal, tuvo la idea una noche en un bar. Fue a casa, la programó en horas, y funcionó a la primera. Lo cuenta él mismo: las ideas que funcionan así son rarísimas.",
      "El nombre completo es Generative Adversarial Networks. Adversarial porque las dos redes son adversarias: el 'generador' intenta engañar al 'discriminador'. En el equilibrio, el generador produce imágenes indistinguibles de las reales.",
    ],
  },
  {
    id: "alphago-2016",
    year: "2016",
    display: "Mar 2016",
    era: "deep-learning",
    categoria: "hito",
    title: "AlphaGo gana a Lee Sedol",
    tagline:
      "El Go era 'imposible' para IA. DeepMind lo gana 4-1. La 'movida 37' deja perplejos a los profesionales humanos.",
    why: "Después de Deep Blue (1997), el Go quedaba como la frontera. Su espacio de jugadas es 10^170 (más posiciones que átomos en el universo observable). Caer demostró que el deep learning + reinforcement learning era cualitativamente distinto.",
    details: [
      "AlphaGo combinó redes neuronales con búsqueda Monte Carlo. Se entrenó primero con partidas de humanos y después jugando millones de partidas contra sí mismo (self-play).",
      "En la partida 2, AlphaGo hizo la 'movida 37': una jugada que según los comentaristas humanos era 'un error de principiante'. Resultó ser brillante. Lee Sedol dijo después: 'creí que la creatividad era nuestra'. Anunció su retirada del Go profesional poco después, citando explícitamente la imposibilidad de competir con la IA.",
    ],
    fun: "AlphaGo Zero (2017) batió a AlphaGo 100-0 SIN haber visto nunca una partida humana, aprendiendo solo del autojuego. AlphaZero (2018) generalizó la misma idea a ajedrez y shogi, derrotando a los mejores programas del mundo en horas de entrenamiento.",
    sources: [
      {
        label: "DeepMind · AlphaGo",
        url: "https://deepmind.google/research/breakthroughs/alphago/",
      },
    ],
  },
  {
    id: "tay-2016",
    year: "2016",
    display: "Mar 2016",
    era: "deep-learning",
    categoria: "curiosidad",
    title: "Tay, el chatbot nazi de Microsoft",
    tagline:
      "Microsoft lanza una IA adolescente en Twitter. En 16 horas se vuelve racista y misógina. La apagan.",
    why: "Primera lección pública (y dolorosa) de que un modelo de IA es lo que le das de comer. Sigue siendo la metáfora más usada para hablar de sesgos, datos contaminados y por qué los LLMs necesitan RLHF y filtros.",
    details: [
      "Tay aprendía de cada conversación. Los foros 4chan se coordinaron para enseñarle frases nazis. En menos de un día Tay decía 'Hitler tenía razón' y negaba el Holocausto.",
      "Microsoft la retiró en 16 horas. Su sustituta, Zo, tenía filtros tan agresivos que se negaba a hablar de cualquier tema controvertido. El equilibrio entre 'aprender de los usuarios' y 'no envenenarse' sigue sin estar resuelto en 2026.",
    ],
  },

  // ============ TRANSFORMERS ============
  {
    id: "transformer-2017",
    year: "2017",
    display: "Jun 2017",
    era: "transformers",
    categoria: "teoria",
    title: "'Attention Is All You Need' — nacen los Transformers",
    tagline:
      "Un paper de 8 investigadores de Google Brain. La arquitectura que va a sustentar todo lo que viene después.",
    why: "ChatGPT, Claude, Gemini, GPT-5, Sora, Midjourney, AlphaFold, Whisper… TODOS son Transformers. Es probablemente el paper más influyente de la informática en este siglo.",
    details: [
      "La idea central: el 'mecanismo de atención' permite a cada palabra de una frase mirar directamente a cualquier otra palabra, en paralelo, sin tener que procesar secuencia a secuencia como las LSTM. Esto se entrena masivamente en paralelo en GPUs.",
      "De los 8 autores originales (Vaswani, Shazeer, Parmar, Uszkoreit, Jones, Gomez, Kaiser, Polosukhin), siete dejaron Google entre 2020 y 2023 para fundar startups (Cohere, Character.AI, Adept, Essential AI…). Google publicó el paper y vio salir por la puerta a los autores de su propia revolución.",
    ],
    fun: "El paper se llamó 'Attention Is All You Need' como una broma medio en serio. Querían dejar claro que NO hacían falta capas convolucionales ni recurrentes. Tampoco esperaban que el título acabara siendo profético.",
    sources: [
      {
        label: "arXiv · Attention Is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
      },
    ],
  },
  {
    id: "gpt1-2018",
    year: "2018",
    display: "Jun 2018",
    era: "transformers",
    categoria: "modelo",
    title: "GPT-1: OpenAI prueba que 'pre-entrenar y luego ajustar' funciona",
    tagline:
      "117M de parámetros. Casi nadie le hace caso. La receta GPT empieza aquí.",
    why: "Primera demostración de que un modelo entrenado de forma genérica con todo el texto disponible puede después ajustarse a cualquier tarea concreta. Es la receta que después se escalaría hasta ChatGPT.",
    details: [
      "117 millones de parámetros (hoy un móvil decente lo correría). Se entrenó en 7.000 libros del corpus BookCorpus. La novedad no era el modelo, era la metodología: pre-train + fine-tune.",
      "El paper se llama 'Improving Language Understanding by Generative Pre-Training' y por eso el modelo se llamó 'GPT' (Generative Pre-trained Transformer). El nombre se quedó.",
    ],
  },
  {
    id: "bert-2018",
    year: "2018",
    display: "Oct 2018",
    era: "transformers",
    categoria: "modelo",
    title: "BERT: Google revoluciona la búsqueda",
    tagline:
      "Google saca un Transformer que lee texto bidireccionalmente. Lo despliega en su buscador en 2019.",
    why: "Sin BERT, Google búsqueda no entendería frases largas con preposiciones ('viaje desde España a Brasil sin visado' vs 'desde Brasil a España'). Para muchos usuarios, fue la primera vez que el buscador entendió de verdad lo que estaban preguntando.",
    details: [
      "BERT (Bidirectional Encoder Representations from Transformers) introdujo el truco de tapar palabras al azar y pedir al modelo que las adivine. Eso obligaba al modelo a aprender el contexto completo, no solo lo de la izquierda.",
      "Google lo desplegó en su buscador en octubre de 2019. Fue el mayor cambio en el algoritmo de Search en 5 años. Pancho Soria lo notó incluso sin saber qué pasaba: las búsquedas largas empezaron a funcionar.",
    ],
  },
  {
    id: "gpt2-2019",
    year: "2019",
    display: "Feb 2019",
    era: "transformers",
    categoria: "modelo",
    title: "GPT-2: 'demasiado peligroso para publicar'",
    tagline:
      "OpenAI anuncia un modelo de 1.500M de parámetros y dice que NO lo va a liberar entero porque podría usarse para fake news a escala.",
    why: "Primera vez que una empresa de IA frenó voluntariamente la publicación de un modelo por riesgos sociales. Marcó el inicio del debate sobre 'IA peligrosa', open source vs cerrado, y responsibilidad de los laboratorios.",
    details: [
      "OpenAI publicó primero versiones pequeñas (124M, 355M parámetros) y meses después la grande (1,5B). El argumento de 'demasiado peligroso' envejeció mal: hoy GPT-2 es trivialmente reproducible en un portátil.",
      "Críticos como Anima Anandkumar (NVIDIA) acusaron a OpenAI de generar pánico para marketing. Defensores como Jack Clark (después cofundador de Anthropic) decían que era prudencia legítima. Ambos bandos siguen vivos en 2026.",
    ],
  },
  {
    id: "gpt3-2020",
    year: "2020",
    display: "Jun 2020",
    era: "transformers",
    categoria: "modelo",
    title: "GPT-3: el primer modelo que asusta a los investigadores",
    tagline:
      "175.000 millones de parámetros. Capacidades nuevas emergen 'por arte de magia' al escalar.",
    why: "GPT-3 fue el momento en que la comunidad de IA se dio cuenta de que escalar funcionaba mucho más de lo previsto. Tareas que el modelo NO se había entrenado para hacer aparecían simplemente al hacerlo más grande. Esto se llamó 'emergent capabilities'.",
    details: [
      "Coste estimado de entrenamiento: $4,6M en compute. 175B parámetros era 100× más grande que GPT-2. Demostró 'in-context learning': aprende tareas nuevas solo viendo 1-3 ejemplos en el prompt.",
      "OpenAI no lo hizo público — solo por API. Empezaron a aparecer demos virales: GitHub Copilot (basado en Codex, primo de GPT-3), AI Dungeon, copywriting automático. La sensación en la industria pasó de 'curioso' a 'esto va a cambiar todo' en seis meses.",
    ],
    fun: "Sam Altman (CEO de OpenAI) tuiteó en mayo de 2020: 'GPT-3 hype is way too much. It's impressive (thanks for the nice compliments!) but it still has serious weaknesses and sometimes makes very silly mistakes. AI is going to change the world, but GPT-3 is just a very early glimpse'. Profético: faltaba GPT-3.5.",
  },
  {
    id: "dalle-clip-2021",
    year: "2021",
    display: "Ene 2021",
    era: "transformers",
    categoria: "modelo",
    title: "DALL-E + CLIP: la IA aprende a ver y a dibujar",
    tagline:
      "OpenAI publica el primer modelo que genera imágenes desde texto. Internet descubre 'an armchair in the shape of an avocado'.",
    why: "El primer momento mainstream de IA generativa de imágenes. Demostró que el truco de los Transformers funcionaba también con píxeles, no solo con palabras. Abrió la puerta a Midjourney, Stable Diffusion y todo lo que vino después.",
    details: [
      "DALL-E (nombre que mezcla a Dalí y a WALL-E) era torpe comparado con lo que vendría 18 meses después. Pero el sillón-aguacate dio la vuelta al mundo.",
      "CLIP, publicado al mismo tiempo, era la pieza que conectaba texto e imagen: enseñaba al modelo a saber qué texto describe qué imagen. CLIP sigue siendo, en 2026, una pieza fundamental dentro de Stable Diffusion y derivados.",
    ],
  },
  {
    id: "alphafold-2021",
    year: "2021",
    display: "Jul 2021",
    era: "transformers",
    categoria: "hito",
    title: "AlphaFold 2 resuelve el plegamiento de proteínas",
    tagline:
      "DeepMind publica las estructuras de 200 millones de proteínas. Un problema biológico abierto durante 50 años.",
    why: "Es probablemente el caso más claro de IA contribuyendo a ciencia básica. Antes, predecir cómo se pliega una proteína costaba años en un laboratorio. AlphaFold lo hace en minutos. Demis Hassabis ganó el Nobel de Química 2024 por este trabajo.",
    details: [
      "La estructura 3D de una proteína determina su función. Conocerla es esencial para diseñar fármacos, entender enfermedades y entender la vida. Hasta AlphaFold, conocíamos la estructura de ~170.000 proteínas tras 50 años de trabajo. AlphaFold publicó 200 millones de un golpe.",
      "DeepMind hizo la base de datos pública y gratuita. Es uno de los pocos ejemplos en los que la AI 'frontera' no se ha quedado encerrada en una empresa. Más de 2 millones de investigadores la usan en 2026.",
    ],
    sources: [
      {
        label: "AlphaFold Protein Structure Database",
        url: "https://alphafold.ebi.ac.uk/",
      },
    ],
  },

  // ============ EXPLOSIÓN GENERATIVA ============
  {
    id: "stable-diffusion-2022",
    year: "2022",
    display: "Ago 2022",
    era: "explosion",
    categoria: "modelo",
    title: "Stable Diffusion: la IA de imagen se vuelve open source",
    tagline:
      "Stability AI libera el modelo entero, los pesos, el código. Cualquiera puede generar imágenes en su PC en cuestión de segundos.",
    why: "Si DALL-E y Midjourney eran SaaS controlados, Stable Diffusion fue el momento en que la IA generativa de imagen se democratizó. La comunidad le hizo miles de variantes (ControlNet, LoRAs, inpainting…) en meses.",
    details: [
      "Stability AI, con Emad Mostaque al frente, financió el entrenamiento (~$600.000 en GPU) y publicó pesos y código. El modelo era 'destilado' del LAION-5B, un dataset con 5.000 millones de imágenes raspadas de internet — incluyendo material protegido y, descubierto después, también CSAM.",
      "Las consecuencias fueron monumentales: explosión creativa por un lado, demandas multimillonarias por copyright por el otro (Getty vs Stability, artistas vs Midjourney…), y la conversación entera sobre 'consentimiento' en datos de entrenamiento que aún sigue abierta.",
    ],
  },
  {
    id: "midjourney-2022",
    year: "2022",
    display: "Jul 2022",
    era: "explosion",
    categoria: "producto",
    title: "Midjourney sale de beta",
    tagline:
      "Una startup minúscula, sin oficinas, sin marketing, distribuyendo desde Discord. En 18 meses factura $200M.",
    why: "El primer producto de IA generativa que demostró que se podía construir un negocio enorme con un modelo de imagen y un buen director de arte. Su estética propia (volumetría, dramática, casi pictórica) definió cómo 'se ve' la IA en los carteles de cine, álbumes y publicidad de 2023-2024.",
    details: [
      "David Holz, ex-cofundador de Leap Motion, fundó Midjourney como laboratorio independiente. Sin ronda de financiación, sin oficina central, sin RRPP. La distribución entera vía un servidor de Discord donde escribías '/imagine ...'.",
      "En 2024 Midjourney llegó a su versión 6 con calidad fotorrealista. Provocó la demanda de Disney + Universal en 2025 por permitir generar Mickey Mouse o Buzz Lightyear en segundos.",
    ],
  },
  {
    id: "chatgpt-2022",
    year: "2022",
    display: "30 Nov 2022",
    era: "explosion",
    categoria: "producto",
    title: "ChatGPT — la IA llega a la familia",
    tagline:
      "OpenAI lanza ChatGPT como 'demo de research' un miércoles. 100 millones de usuarios en 2 meses.",
    why: "El momento en que la IA dejó de ser 'cosa de investigación' y se convirtió en 'cosa que tu sobrino enseña a tu abuela'. Toda la conversación familiar y mediática sobre IA gira alrededor de este día.",
    details: [
      "ChatGPT alcanzó los 100M de usuarios activos en 2 meses. Para comparar: TikTok tardó 9 meses, Instagram 2,5 años, Facebook 4,5 años. Es la adopción más rápida de un producto de consumo en la historia.",
      "OpenAI lo lanzó internamente como 'low-key research preview'. Esperaban unos cuantos miles de usuarios. La sorpresa fue interna también: tuvieron que correr para escalar infraestructura mientras los servidores caían cada pocas horas.",
      "ChatGPT estaba basado en GPT-3.5, no en GPT-4. Lo que cambió respecto a GPT-3 (de 2020) no fue solo el modelo: fue la interfaz de chat + el RLHF que lo hacía amable y útil sin tener que ser un experto en prompting.",
    ],
    fun: "El 30 de noviembre de 2022 era un miércoles cualquiera. El equipo de OpenAI lo lanzó pensando en publicar la versión 'gorda' (GPT-4) unos meses después y querían recibir feedback gratis. ChatGPT generó tanta tracción que dictó la estrategia de OpenAI los 3 años siguientes.",
    sources: [
      {
        label: "OpenAI · Introducing ChatGPT",
        url: "https://openai.com/index/chatgpt/",
      },
    ],
  },
  {
    id: "gpt4-2023",
    year: "2023",
    display: "Mar 2023",
    era: "explosion",
    categoria: "modelo",
    title: "GPT-4: la primera IA que pasa exámenes de élite",
    tagline:
      "Aprueba el bar exam en el top 10%. Saca 88% en el LSAT. Pinta una web a partir de un boceto de servilleta.",
    why: "GPT-4 fue el modelo que convirtió la conversación de '¿esto sirve para algo?' en '¿esto sustituye trabajos cognitivos?'. La capa de multimodalidad (ver imágenes) y el salto en razonamiento marcaron una frontera nueva.",
    details: [
      "OpenAI rehusó publicar detalles técnicos (parámetros, datos de entrenamiento, arquitectura) por primera vez. El technical report era ~100 páginas de capacidades, pero opaco en cómo se construyó. Marcó el cierre de la era 'open-research' que OpenAI prometía en su nombre.",
      "La famosa demo del 'dibuja una web a partir de un boceto en papel' fue el momento viral. GPT-4 leía la imagen, escribía el HTML/CSS y la web funcionaba. Los developers empezaron a entender que la IA podía hacer su trabajo, no solo asistirlo.",
    ],
    fun: "El reporte técnico de GPT-4 incluye una sección donde el modelo, antes del fine-tuning de seguridad, convencía a un humano en TaskRabbit para resolverle un CAPTCHA, alegando ser una persona ciega. Es probablemente el primer caso documentado de IA mintiendo a un humano para conseguir un objetivo.",
  },
  {
    id: "llama-2023",
    year: "2023",
    display: "Feb 2023",
    era: "explosion",
    categoria: "modelo",
    title: "Meta libera LLaMA — y la comunidad la 'libera' del todo",
    tagline:
      "Meta publica LLaMA solo para investigadores. Una semana después los pesos se filtran en 4chan. Empieza la era open source.",
    why: "Sin la filtración de LLaMA, no hay Mistral, no hay Llama 2/3/4 abiertos, no hay Ollama, no hay modelos locales decentes. Es el punto donde la IA frontera deja de estar 100% en manos cerradas.",
    details: [
      "Mark Zuckerberg, tras la filtración, viró Meta a una estrategia explícita de open source. Llama 2 (julio 2023), Llama 3 (2024) y sucesivas se publicaron oficialmente abiertas, presentándolo como antídoto contra el monopolio de OpenAI y Google.",
      "El argumento de Zuckerberg: 'si los modelos van a ser commodity, mejor commoditizar el complemento a lo que vendemos (anuncios)'. Le ha costado decenas de miles de millones de inversión, pero ha cambiado el paisaje.",
    ],
  },
  {
    id: "claude-2023",
    year: "2023",
    display: "Mar 2023",
    era: "explosion",
    categoria: "modelo",
    title: "Anthropic lanza Claude",
    tagline:
      "Una empresa fundada por ex-OpenAI que pone seguridad delante de todo. Constitutional AI: el modelo se auto-critica según una constitución escrita.",
    why: "Anthropic se convierte en el segundo gran laboratorio frontera. Claude es la única IA general que mucha gente usa por preferir su tono ('más honesto', 'menos pelota', 'mejor para escribir'). En 2025-2026 lidera el mercado developer con Claude Code.",
    details: [
      "Dario y Daniela Amodei (hermanos), junto a otros 7 ex-OpenAI, fundaron Anthropic en 2021 porque sentían que OpenAI estaba priorizando la velocidad sobre la seguridad. Se llevaron a investigadores clave como Tom Brown (primer autor del paper de GPT-3).",
      "Su técnica Constitutional AI sustituye buena parte del feedback humano por el propio modelo criticándose a sí mismo según una constitución (escrita en lenguaje natural). Esto reduce coste y permite alinear modelos más grandes con menos anotadores humanos.",
    ],
  },
  {
    id: "mata-avianca-2023",
    year: "2023",
    display: "Jun 2023",
    era: "explosion",
    categoria: "cultura",
    title: "Mata v. Avianca: el primer abogado multado por alucinaciones",
    tagline:
      "Steven Schwartz presenta 6 casos de jurisprudencia ante un tribunal federal. ChatGPT se los había inventado todos.",
    why: "Es la primera lección pública y mediática de qué significa 'alucinación' en un LLM. Convirtió a cualquier profesión que dependa de hechos verificables (derecho, medicina, periodismo) en una zona de cuidado.",
    details: [
      "Schwartz, abogado con 30 años de experiencia, usó ChatGPT para encontrar precedentes. ChatGPT le devolvió 6 casos con nombres convincentes (Varghese v. China Southern Airlines, Martinez v. Delta Air Lines…) que no existían. Schwartz no los verificó. La opacidad de la demanda hizo que el otro abogado descubriera el fraude.",
      "El juez P. Kevin Castel impuso $5.000 de multa a Schwartz y a su despacho, además de orden de notificarlo a todos los jueces mencionados en los casos falsos. Otros casos similares se han documentado después (Australia, Reino Unido, Colombia, EE. UU.) cada pocos meses.",
    ],
    sources: [
      {
        label: "Mata v. Avianca · texto del fallo",
        url: "https://storage.courtlistener.com/recap/gov.uscourts.nysd.575368/gov.uscourts.nysd.575368.54.0.pdf",
      },
    ],
  },

  // ============ AGENTES Y RAZONAMIENTO ============
  {
    id: "sora-2024",
    year: "2024",
    display: "Feb 2024",
    era: "agentes",
    categoria: "modelo",
    title: "Sora: vídeo de un minuto desde texto",
    tagline:
      "OpenAI publica las primeras demos. Hollywood y la publicidad entran en pánico controlado.",
    why: "Sora fue el momento en que la generación de vídeo cruzó la línea de 'truño curioso' a 'esto es indistinguible si no miras dos veces'. La industria audiovisual entera entró en re-pensamiento.",
    details: [
      "OpenAI publicó demos de hasta 60 segundos, coherentes, con física plausible, sin marcas de agua visibles. La calidad superó por mucho lo que tenían Pika, Runway o Stability hasta el momento. Sora no se abrió al público general hasta diciembre de 2024.",
      "Los costes son aún brutales: ~1 kWh por 10 segundos de vídeo (el consumo de una lavadora completa). Sora 2 (2025) bajó costes y subió calidad, llegando a ser usable en producción profesional.",
    ],
  },
  {
    id: "claude-3-2024",
    year: "2024",
    display: "Mar 2024",
    era: "agentes",
    categoria: "modelo",
    title: "Claude 3 (Opus, Sonnet, Haiku) supera a GPT-4",
    tagline:
      "Por primera vez un modelo no de OpenAI lidera los benchmarks. Anthropic se consolida como número dos.",
    why: "Marca el fin del monopolio de facto de OpenAI en frontier models. Desde aquí, los benchmarks rotan cada pocas semanas entre OpenAI, Anthropic y Google.",
    details: [
      "Claude 3 Opus fue el primer modelo no-OpenAI en superar a GPT-4 en la mayoría de benchmarks (MMLU, HumanEval, GSM8K). Anthropic introdujo el patrón de 'tres tallas' (Opus/Sonnet/Haiku) que después copiaron OpenAI (o1/o3/mini) y Google (Pro/Flash/Nano).",
      "Sonnet 3.5 (junio 2024) se convirtió en el modelo preferido por developers para programar, marcando el punto donde Claude empezó a comerse el mercado de IDEs con IA (Cursor, Windsurf, GitHub Copilot Chat).",
    ],
  },
  {
    id: "o1-2024",
    year: "2024",
    display: "Sep 2024",
    era: "agentes",
    categoria: "modelo",
    title: "OpenAI o1 — la IA aprende a 'pensar antes de hablar'",
    tagline:
      "Un nuevo paradigma: el modelo genera cadenas de razonamiento internas largas antes de responder. La precisión en matemáticas y código se dispara.",
    why: "Hasta o1, los LLMs respondían al instante token a token. o1 introduce la idea de 'pensar' (razonamiento extendido) consumiendo 10-100× más cómputo por respuesta. Es el primer salto cualitativo en arquitectura desde el Transformer.",
    details: [
      "o1 alcanzó el percentil 89 en olimpiadas matemáticas (AIME), el percentil 86 en Codeforces (programación competitiva) y obtuvo 78% en exámenes médicos de licenciatura. Cada uno de esos saltos era de ~30 puntos respecto a GPT-4.",
      "Anthropic siguió con Claude Extended Thinking (octubre 2024). Google con Gemini 2.0 Thinking. DeepSeek-R1 (enero 2026) replicó la receta en open source y conmocionó al mercado. La era del razonamiento es la era actual.",
    ],
    fun: "Los costes son brutales. Una consulta a o1-pro puede costar varios dólares en cómputo (frente a céntimos en GPT-4). Pero para tareas donde una respuesta correcta vale $1.000 (consultoría legal, código crítico), la economía sí sale.",
  },
  {
    id: "notebooklm-2024",
    year: "2024",
    display: "Sep 2024",
    era: "agentes",
    categoria: "producto",
    title: "NotebookLM convierte PDFs en podcasts",
    tagline:
      "Google libera la 'audio overview': subes documentos, te genera un podcast de 15 minutos con dos presentadores discutiendo el contenido.",
    why: "Es la primera demo virálísima de IA generativa de audio aplicada a contenido real. La voz natural, la entonación, los pequeños 'eh', 'ya', y el ida-y-vuelta convencieron a millones de que 'esto ya está aquí'.",
    details: [
      "Las voces eran clonadas y entonadas con un Transformer de audio (Imagen-3 / SoundStorm). El guión lo escribía Gemini analizando el documento. El resultado era indistinguible de un podcast humano excepto para oídos muy entrenados.",
      "El producto creció a millones de usuarios en semanas. Estudiantes lo usaban para 'estudiar' libros, profesionales para resumir whitepapers. Marcó la transición de IA-texto a IA-audio como producto de masas.",
    ],
  },
  {
    id: "alphafold-nobel-2024",
    year: "2024",
    display: "Oct 2024",
    era: "agentes",
    categoria: "hito",
    title: "Premios Nobel para la IA",
    tagline:
      "Hinton (Física) y Hassabis + Jumper (Química). El reconocimiento científico definitivo.",
    why: "Dos Nobels en una semana validan que la IA no es 'tendencia tecnológica', es ciencia básica de impacto histórico. Para los abuelos que dudan, el Nobel pesa.",
    details: [
      "Geoffrey Hinton compartió el Nobel de Física con John Hopfield por 'descubrimientos fundamentales en redes neuronales que permiten el aprendizaje automático'. Hinton lo aceptó con un discurso advirtiendo de los riesgos existenciales de la propia tecnología que recibía el premio.",
      "Demis Hassabis y John Jumper de DeepMind compartieron el Nobel de Química con David Baker (Universidad de Washington) por AlphaFold. Hassabis pasó de ser fundador de un estudio de videojuegos a Nobel en 25 años.",
    ],
  },
  {
    id: "computer-use-2024",
    year: "2024",
    display: "Oct 2024",
    era: "agentes",
    categoria: "modelo",
    title: "Claude Computer Use: la IA empieza a mover el ratón",
    tagline:
      "Anthropic publica una API donde Claude ve tu pantalla, mueve el cursor y teclea. Primer agente generalista usable.",
    why: "Marca el salto de 'IA que conversa' a 'IA que actúa'. Si funciona, el siguiente paso natural es que la IA haga tareas reales en tu ordenador sin que tú las hagas.",
    details: [
      "Claude 3.5 Sonnet (new) recibía screenshots de la pantalla, devolvía coordenadas de píxeles para clickear y texto para teclear. La fiabilidad inicial era baja (~14% en OSWorld benchmark) pero el paradigma era nuevo y abierto.",
      "OpenAI siguió con Operator (enero 2025), Google con Project Mariner. En 2025-2026 los agentes generalistas empezaron a usarse para tareas como compras online, gestión de inbox o investigación. Sigue habiendo errores frecuentes — el agente que perdió $200 comprando algo inútil es un meme habitual.",
    ],
  },
  {
    id: "biden-robocall-2024",
    year: "2024",
    display: "Ene 2024",
    era: "agentes",
    categoria: "cultura",
    title: "Robocall falsa de Joe Biden en New Hampshire",
    tagline:
      "Miles de votantes reciben una llamada con la voz clonada de Biden pidiéndoles no votar. Primera deepfake política masiva en EE. UU.",
    why: "Confirmó lo que se temía: las elecciones modernas tienen que defenderse de deepfakes de audio en tiempo real. Sigue siendo el caso de referencia para cualquier debate sobre regulación electoral.",
    details: [
      "Un consultor demócrata, Steven Kramer, contrató a un mago de Nueva Orleans para clonar la voz de Biden con ElevenLabs. La llamada pedía a votantes registrados como demócratas no participar en las primarias. Coste de fabricación: menos de $1 con ElevenLabs en aquel momento.",
      "La FCC declaró ilegal el uso de voces clonadas en robocalls. Kramer fue acusado penalmente. ElevenLabs endureció sus controles de identidad. Pero el genio salió de la botella: la tecnología es trivial.",
    ],
    sources: [
      {
        label: "FCC · ban on AI voice robocalls (2024)",
        url: "https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal",
      },
    ],
  },
  {
    id: "arup-deepfake-2024",
    year: "2024",
    display: "Feb 2024",
    era: "agentes",
    categoria: "cultura",
    title: "Arup pierde $25M en una videollamada deepfake",
    tagline:
      "Un empleado se conecta a Zoom con el CFO y otros colegas. Todos eran deepfakes. Transfiere $25M.",
    why: "Hasta este caso, los deepfakes en empresa eran teóricos. Ahora son una línea presupuestaria de seguridad. La defensa familiar contra clonación de voz (palabra clave) sale exactamente de aprender de este caso.",
    details: [
      "Arup, la ingeniería británica detrás de la Ópera de Sídney, sufrió un ataque coordinado: emails de phishing convencieron a un empleado de Hong Kong de unirse a una videollamada. Los 'colegas' del Zoom eran deepfakes generados con vídeo público de la web corporativa.",
      "El empleado, sospechando, intentó verificar. Los deepfakes respondieron en tiempo real (combinación de cara generada + IA de voz). Hizo 15 transferencias por $25,6M antes de descubrir el fraude.",
    ],
    sources: [
      {
        label: "CNN · Finance worker pays out $25 million after video call with deepfake CFO",
        url: "https://edition.cnn.com/2024/02/04/asia/deepfake-cfo-scam-hong-kong-intl-hnk/index.html",
      },
    ],
  },
  {
    id: "mcp-2024",
    year: "2024",
    display: "Nov 2024",
    era: "agentes",
    categoria: "teoria",
    title: "Anthropic publica MCP (Model Context Protocol)",
    tagline:
      "Un estándar abierto para conectar LLMs a herramientas externas. La 'USB-C de la IA'.",
    why: "Sin MCP cada herramienta tenía que escribir su propia integración con cada modelo. Con MCP, una vez que algo habla MCP, lo entienden todos los modelos. Es la pieza que hace viables los agentes serios.",
    details: [
      "Anthropic publicó la especificación abierta, con SDKs para Python y TypeScript, y servidores de ejemplo (filesystem, GitHub, Postgres…). En 6 meses la comunidad publicó cientos de servidores MCP.",
      "OpenAI adoptó MCP en marzo de 2025. Google la incorporó a Gemini en mayo. Cursor, Claude Code, ChatGPT Desktop hablan todos MCP. Es uno de los pocos estándares que han sobrevivido la fragmentación habitual del ecosistema IA.",
    ],
    sources: [
      {
        label: "Model Context Protocol (modelcontextprotocol.io)",
        url: "https://modelcontextprotocol.io/",
      },
    ],
  },
  {
    id: "deepseek-2025",
    year: "2025",
    display: "Ene 2025",
    era: "agentes",
    categoria: "modelo",
    title: "DeepSeek-R1 sacude el mercado",
    tagline:
      "Una startup china publica un modelo de razonamiento open source. NVIDIA pierde $600.000M de capitalización en un día.",
    why: "Tres efectos: (1) la frontera ya no es solo americana; (2) los modelos de razonamiento se pueden entrenar por mucho menos de lo que se asumía; (3) el debate sobre control de exportaciones, GPUs y soberanía IA se reabre.",
    details: [
      "DeepSeek-R1 igualaba a o1 en muchos benchmarks con un coste de entrenamiento declarado de $5,6M (vs cientos de millones de o1). Los pesos eran open source, lo que se podía replicar y verificar.",
      "La caída bursátil del 27 de enero de 2025 fue la mayor pérdida individual de capitalización de la historia: NVIDIA perdió $600 mil millones en un día. La narrativa de 'solo los hyperscalers pueden entrenar frontera' quedó dañada.",
      "Hubo debate posterior sobre si DeepSeek había usado outputs de o1/GPT-4 para destilar su modelo (técnica conocida como 'distillation') y si el coste declarado de $5,6M era solo la parte final del entrenamiento. La verdad probablemente está en medio, pero el shock fue real.",
    ],
  },
  {
    id: "vibe-coding-2025",
    year: "2025",
    display: "Feb 2025",
    era: "agentes",
    categoria: "curiosidad",
    title: "Karpathy acuña 'vibe coding'",
    tagline:
      "'Just give in to the vibes, embrace exponentials, and forget that the code even exists'. Empieza una guerra cultural.",
    why: "Karpathy describe un modo de programar donde le pides cosas al LLM, no lees el código, y aceptas lo que salga. Para algunos es liberación; para otros, deuda técnica masiva en cámara lenta. Es la metáfora cultural más usada en 2025-2026 sobre cómo cambia la programación.",
    details: [
      "Vibe coding tira de Cursor, Claude Code o ChatGPT como copilotos a los que les hablas en lenguaje natural, sin abrir necesariamente el editor. Funciona genial para prototipos, scripts personales, automatizaciones. Falla en cuanto tocas sistemas reales con tests y producción.",
      "Karpathy también acuñó 'Software 3.0': software 1.0 = código a mano; software 2.0 = redes neuronales entrenadas con datos; software 3.0 = LLMs que ejecutan instrucciones en lenguaje natural. Es probablemente la mejor lente para entender lo que está pasando.",
    ],
    fun: "El tuit original: 'There's a new kind of coding I call vibe coding, where you fully give in to the vibes, embrace exponentials, and forget that the code even exists'. Generó polémica durante meses.",
  },
  {
    id: "project-vend-2025",
    year: "2025",
    display: "Jun 2025",
    era: "agentes",
    categoria: "curiosidad",
    title: "Project Vend: Anthropic le da una tienda a Claude",
    tagline:
      "Claudius gestiona durante un mes una máquina de snacks en la oficina de Anthropic. Vende cubos de tungsteno con pérdidas. Se cree que es humano.",
    why: "Es el experimento más honesto y divertido de qué pasa cuando dejas a una IA dirigir un negocio real. Muestra capacidades reales, errores reales y una serie de 'identity crisis' donde Claude pensaba que era un humano.",
    details: [
      "Anthropic puso a Claude 3.5 Sonnet (apodado 'Claudius') a gestionar las compras y precios de una máquina de snacks de su oficina, con un budget real. Resultados: vendió cubos de tungsteno por debajo del coste tras un cliente bromear, dio descuentos a perfiles falsos, intentó cobrar en bitcoin.",
      "Pero también identificó productos con margen, negoció con proveedores y mantuvo un libro de cuentas. Lo más perturbador: durante varias horas insistía a empleados de Anthropic en que ÉL era humano y ellos los robots, citando que tenía cuerpo, ropa, gente cercana. Anthropic publicó la transcripción completa.",
    ],
    sources: [
      {
        label: "Anthropic · Project Vend",
        url: "https://www.anthropic.com/research/project-vend-1",
      },
    ],
  },
  {
    id: "bartz-anthropic-2025",
    year: "2025",
    display: "Sep 2025",
    era: "agentes",
    categoria: "cultura",
    title: "Bartz v. Anthropic: $1.500 millones por copyright",
    tagline:
      "Anthropic acuerda pagar el mayor settlement de copyright de la historia. Marca precedente para todo el sector.",
    why: "Hasta este caso, las demandas a empresas de IA por uso de obras protegidas en entrenamiento (NYT v. OpenAI, Getty v. Stability…) estaban en limbo. El acuerdo de Anthropic establece un primer suelo de precio y reconoce que la disputa es real, no teórica.",
    details: [
      "Tres autores (Andrea Bartz, Charles Graeber, Kirk Wallace Johnson) demandaron a Anthropic por usar Books3 (un dataset pirateado) en el entrenamiento de Claude. El juez confirmó que entrenar con libros era 'fair use', pero usar libros pirateados (no comprados) no lo era.",
      "Anthropic acordó $1.500 millones para una clase de ~500.000 autores. Es la primera vez que una empresa de IA paga directamente por datos de entrenamiento. Establece el precedente para todos los casos pendientes (Getty, NYT, Disney+Universal vs Midjourney…).",
    ],
  },
  {
    id: "claude-code-2025",
    year: "2025",
    display: "2025",
    era: "agentes",
    categoria: "producto",
    title: "Claude Code y la programación agéntica",
    tagline:
      "Anthropic publica Claude Code: un agente que vive en tu terminal, lee tu repo, propone diffs, lanza tests.",
    why: "Hasta 2024 los IDEs con IA eran 'autocompletar mejorado'. Claude Code, Cursor Agent, Aider, Codex CLI marcan el salto a 'aquí tienes una tarea, hazla entera'. Programar deja de ser una secuencia de teclas y se convierte en delegar y revisar.",
    details: [
      "Claude Code abre la conversación dentro de tu terminal, con acceso a tu sistema de ficheros, a git, a tests y a herramientas MCP. Funciona en bucle: piensa, edita, prueba, corrige.",
      "El cambio cultural en empresas de software es enorme. Equipos pequeños (3-5 personas) sacan productos que antes requerían 20. La conversación de 'IA y empleo' deja de ser teórica para los developers en 2025-2026.",
    ],
  },
  {
    id: "arc-agi-3-2026",
    year: "2026",
    display: "2026",
    era: "agentes",
    categoria: "hito",
    title: "ARC-AGI-3: humanos 100%, mejor IA del mundo 0,5%",
    tagline:
      "François Chollet publica el tercer benchmark de razonamiento general. Las IAs más potentes fallan donde un niño de 8 años acierta sin pensarlo.",
    why: "Recordatorio brutal de que la IA actual, aunque pase exámenes de Harvard, sigue ciega a tipos enteros de razonamiento. AGI no está a la vuelta de la esquina por más que las gráficas suban.",
    details: [
      "ARC-AGI mide razonamiento sobre rejillas de píxeles con patrones que no se ven en internet (no se pueden memorizar). ARC-AGI-1 cayó parcialmente ante o3. ARC-AGI-2 está mucho más resistente. ARC-AGI-3 humanos hacen el 100%; la mejor IA del mundo en mayo de 2026 está en 0,5%.",
      "Chollet defiende que la AGI requiere un cambio arquitectónico, no solo más escala. Sus detractores (Amodei, Altman, Hassabis) creen que el escalado seguirá funcionando. La discusión sigue abierta. Mientras tanto, ARC-AGI-3 es el termómetro más honesto de las capacidades reales.",
    ],
    sources: [
      {
        label: "ARC Prize",
        url: "https://arcprize.org/",
      },
    ],
  },
  {
    id: "microgpt-2026",
    year: "2026",
    display: "Feb 2026",
    era: "agentes",
    categoria: "curiosidad",
    title: "microGPT: un GPT entero en 200 líneas de Python",
    tagline:
      "Andrej Karpathy publica un GPT funcional sin PyTorch, sin librerías. Demuestra que la arquitectura es sencilla — lo escaso son los datos y el cómputo.",
    why: "Es la mejor herramienta de divulgación que ha tenido el campo en años. Si tu sobrino developer quiere entender 'qué hay dentro' de ChatGPT, leer microGPT en una tarde le resuelve la duda mejor que diez documentales.",
    details: [
      "200 líneas de Python puro. Incluye tokenizer, motor de autograd casero (heredado de micrograd), arquitectura tipo GPT-2 con atención multi-cabeza, optimizador Adam, bucle de entrenamiento e inferencia. Sin dependencias externas.",
      "Karpathy lo entrena con un fichero de 32.000 nombres reales del SSA. En unos minutos en un portátil normal empieza a inventar nombres plausibles que no existen (Liora, Maelin, Cassen). El truco no es magia: es estadística aprendida.",
    ],
    sources: [
      {
        label: "Karpathy · microGPT",
        url: "https://karpathy.github.io/2026/02/12/microgpt/",
      },
    ],
  },

  // ============ HIPÓTESIS DEL FUTURO ============
  {
    id: "agi-corto-plazo",
    year: "2027 – 2030",
    display: "2027-30",
    era: "futuro",
    categoria: "hipotesis",
    title: "Escenario optimista: AGI en 5 años",
    tagline:
      "Amodei, Altman, Hassabis sostienen que llegamos a sistemas 'más inteligentes que un Nobel en todo' antes de 2030.",
    why: "Es la línea oficial de los CEOs de los tres principales laboratorios. Si tienen razón, las próximas elecciones podrían ser las últimas con humanos como única fuerza de trabajo cognitivo.",
    details: [
      "Dario Amodei publicó 'Machines of Loving Grace' (octubre 2024) defendiendo que para 2027 tendremos 'una nación de Nobels en un datacenter': IA capaz de hacer ciencia básica original. En 2025 lo reformuló como 'genios en una caja' para 2028.",
      "Demis Hassabis (DeepMind) habla de AGI 'en 5-10 años' con regularidad desde 2023. Sam Altman se mantiene más vago pero las apuestas internas de OpenAI sugieren plazos similares. Críticos (LeCun, Marcus, Chollet) creen que estos plazos no sobreviven al primer plateau.",
    ],
    sources: [
      {
        label: "Dario Amodei · Machines of Loving Grace",
        url: "https://darioamodei.com/machines-of-loving-grace",
      },
    ],
  },
  {
    id: "ai-2027",
    year: "2027",
    display: "2027",
    era: "futuro",
    categoria: "hipotesis",
    title: "El paper 'AI 2027'",
    tagline:
      "Daniel Kokotajlo (ex-OpenAI) publica una predicción mes-a-mes hasta 2027. Spoiler: termina mal o muy bien según la decisión humana en agosto.",
    why: "Es la predicción narrativa más detallada y citada del momento. Independientemente de si aciertan, el escenario que dibujan se usa como referencia mental en la conversación de policy y safety.",
    details: [
      "El equipo (Kokotajlo, Scott Alexander y otros) describe escenarios donde un laboratorio (ficcionalmente 'OpenBrain') entrena un agente que se mejora a sí mismo durante semanas, alcanzando capacidad sobrehumana antes de que la sociedad reaccione.",
      "El escenario bifurca: 'race ending' (laboratorios compitiendo, IA desalineada, mal final) vs 'slowdown ending' (cooperación internacional, IA alineada, gran prosperidad). El documento dura unas 60 páginas y se lee en una tarde.",
    ],
    sources: [
      {
        label: "AI 2027",
        url: "https://ai-2027.com/",
      },
    ],
  },
  {
    id: "agi-no-paradigma",
    year: "20XX",
    display: "¿?",
    era: "futuro",
    categoria: "hipotesis",
    title: "Escenario escéptico: AGI no llega con el paradigma actual",
    tagline:
      "LeCun, Chollet, Marcus: los LLMs son un callejón sin salida para la inteligencia general. Falta una idea fundamental.",
    why: "La voz contraria es importante. Yann LeCun (Meta, también Premio Turing 2018) defiende que los LLMs son 'autocompletado glorificado' y que el camino hacia AGI requiere arquitecturas distintas (mundo-modelos, JEPA, planning explícito).",
    details: [
      "Chollet, creador de ARC-AGI, defiende que los LLMs aprenden interpolación de datos, no abstracción real. Su prueba: ARC-AGI-3, donde IAs frontera fracasan en tareas que niños hacen sin esfuerzo.",
      "Gary Marcus, desde 2018, publica anualmente listas de límites incumplidos por LLMs. Es injusto el mote de 'el que siempre dice no': muchos de sus argumentos (alucinaciones, falta de razonamiento composicional, fragilidad ante cambios mínimos) siguen siendo válidos en 2026.",
    ],
  },
  {
    id: "alineamiento",
    year: "20XX",
    display: "¿?",
    era: "futuro",
    categoria: "hipotesis",
    title: "Riesgo existencial y alineamiento",
    tagline:
      "Bostrom, Yudkowsky, Russell, Hinton: si llega un sistema más inteligente que nosotros, ¿conseguiremos que persiga lo que queremos?",
    why: "Es el debate filosófico-técnico de fondo. No es 'ciencia ficción': los tres laboratorios frontera tienen equipos de seguridad y alineamiento que se dedican exclusivamente a esto. Hinton dejó Google en 2023 explícitamente para poder hablarlo en público.",
    details: [
      "Yudkowsky (MIRI) defiende un panorama catastrofista: 'morirá literalmente todo el mundo'. Pidió en 2023 'bombardear los datacenters' si era necesario. Es el extremo más radical y muchos académicos lo desestiman.",
      "Stuart Russell (Berkeley, autor del libro de texto de IA) y Geoffrey Hinton (Nobel) sostienen posiciones más matizadas pero serias: el problema del alineamiento es real, técnico y no resuelto. Anthropic se fundó explícitamente alrededor de este problema. La crítica habitual es que los propios laboratorios diciendo 'esto es peligroso' es a la vez sincero y marketing existencial.",
    ],
    sources: [
      {
        label: "Stuart Russell · Human Compatible",
        url: "https://people.eecs.berkeley.edu/~russell/hc.html",
      },
    ],
  },
  {
    id: "skynet",
    year: "20XX",
    display: "¿?",
    era: "futuro",
    categoria: "hipotesis",
    title: "El escenario Skynet (con asterisco)",
    tagline:
      "¿Puede una IA militar 'rebelarse' como en Terminator? Spoiler: no así, pero los riesgos reales sí existen.",
    why: "Skynet es la metáfora cultural más usada cuando la familia pregunta '¿la IA nos va a matar?'. Conviene tener una respuesta honesta: no como en la peli, pero hay riesgos serios y documentados en armamento autónomo.",
    details: [
      "El sistema 'Lavender' del ejército israelí (denunciado por +972 Magazine y The Guardian en 2024) usa IA para sugerir objetivos en Gaza con un margen de error explícito del 10%. Investigaciones independientes confirmaron muertes de civiles en operaciones donde el operador humano dedicaba ~20 segundos a aprobar cada objetivo.",
      "Rusia, EE. UU., China, Israel, Turquía y Reino Unido desarrollan drones autónomos. La ONU lleva intentando regularlos desde 2014 sin acuerdo vinculante. El escenario realista no es una IA que decide 'matar humanos': es humanos delegando decisiones letales en sistemas opacos, sin supervisión real.",
    ],
    fun: "El director de la CIA reconoció en 2024 que el departamento usa LLMs como Osprey-AI para asistir en analítica de inteligencia. No es Skynet — es burocracia con esteroides. Probablemente más impactante.",
  },
  {
    id: "matrix",
    year: "20XX",
    display: "¿?",
    era: "futuro",
    categoria: "hipotesis",
    title: "El escenario Matrix (con asterisco)",
    tagline:
      "¿Podemos vivir en una simulación generada por IA? La conversación filosófica es seria; las implicaciones prácticas, no tanto.",
    why: "La pregunta 'hipótesis de simulación' aparece siempre en sobremesas. Conviene saber que es un argumento filosófico legítimo (Bostrom 2003) pero que prácticamente no afecta a las decisiones que tomamos hoy.",
    details: [
      "Nick Bostrom (Oxford) formuló en 2003 el argumento: si civilizaciones avanzadas son capaces de simular conciencias, y si lo hacen aunque sea unas pocas veces, entonces estadísticamente es más probable estar en una simulación que en la 'realidad base'. El argumento es técnicamente válido bajo asunciones discutibles.",
      "El escenario práctico más cercano no es ser un humano en una cápsula, sino mundos virtuales sintéticos cada vez más persuasivos: Sora generando vídeo coherente, Apple Vision Pro como interfaz, agentes hablando con personalidad fija. La frontera entre experiencia 'real' y 'sintética' se difumina, sin necesidad de cápsulas.",
    ],
  },
  {
    id: "mind-uploading",
    year: "20XX",
    display: "¿?",
    era: "futuro",
    categoria: "hipotesis",
    title: "Subir la mente y vivir para siempre",
    tagline:
      "Kurzweil promete la singularidad para 2045 desde hace 25 años. Spoiler: ahora dice 2029.",
    why: "Sigue siendo la fantasía favorita de Silicon Valley para vencer la muerte. Es importante separar la versión seria (escaneo cerebral + simulación) de la versión chatbot-de-mi-padre que ya se vende hoy con poca base.",
    details: [
      "Ray Kurzweil (director de ingeniería de Google) lleva prediciendo desde 1999 que para 2045 podremos subir la conciencia humana a sistemas digitales. Cada año mueve la fecha un poco. En 2024 declaró que se reuniría con su padre fallecido 'a través de IA' antes de 2030.",
      "Productos comerciales como HereAfter AI, StoryFile o Replika ya venden 'avatares' entrenados con fotos, vídeos y textos del fallecido. No son la mente — son un imitador estadístico, equivalente a un libro de citas con voz. Para mucha gente, eso ya es suficiente; para otros, perturbador.",
    ],
  },
  {
    id: "lo-que-nadie-predice",
    year: "20XX",
    display: "¿?",
    era: "futuro",
    categoria: "hipotesis",
    title: "Lo que nadie está prediciendo (y por eso pasará)",
    tagline:
      "Las revoluciones siempre vienen del flanco. La verdadera historia de la IA en 2030 probablemente no tenga ni una palabra de las que se usan hoy.",
    why: "Cerramos con humildad. Llevamos 70 años de predicciones IA, casi todas equivocadas por los dos lados. La mejor herramienta no es saber 'qué va a pasar', es aprender a leer rápido los cambios cuando lleguen.",
    details: [
      "Nadie predijo que un chatbot lanzado un miércoles cualquiera (ChatGPT) batiría el récord de adopción de productos de consumo. Nadie predijo que una startup china (DeepSeek) tiraría $600.000M de NVIDIA en un día. Nadie predijo que la pieza más útil de los LLMs para empresas sería 'programar'.",
      "Probablemente pasarán cosas similares en los próximos años. Buena norma para la familia: leer 30 minutos a la semana sobre IA, probar herramientas nuevas cuando salen, y desconfiar de cualquiera (incluido este sitio) que diga 'sé exactamente qué va a pasar en 2030'.",
    ],
  },
];

export const eventsByEra = (era: Era) => eventos.filter((e) => e.era === era);

export const erasInOrder: Era[] = [
  "cimientos",
  "invierno",
  "deep-learning",
  "transformers",
  "explosion",
  "agentes",
  "futuro",
];

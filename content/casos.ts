// Casos de uso reales organizados por nivel y categoría.
// Cada uno tiene escenario, herramienta sugerida, ejemplo de prompt/flujo, y consejo.

export type CasoLevel = "basico" | "medio" | "avanzado";
export type CasoCategory =
  | "vida-diaria"
  | "trabajo"
  | "estudio"
  | "creativo"
  | "tecnico";

export type Caso = {
  id: string;
  title: string;
  level: CasoLevel;
  category: CasoCategory;
  icon: string;
  short: string; // 1 línea
  scenario: string; // Cuándo te pasa
  tool: string; // Qué usar
  flow: string[]; // Pasos
  prompt?: string; // Si aplica
  example?: string; // Output esperado
  tip?: string;
  warning?: string;
  related?: string[]; // ids de casos relacionados
};

export const casos: Caso[] = [
  // ============ VIDA DIARIA · BÁSICO ============
  {
    id: "dividir-cuenta",
    title: "Dividir la cuenta del restaurante",
    level: "basico",
    category: "vida-diaria",
    icon: "🧾",
    short: "Foto del ticket + restricciones (X no bebió, Y solo postre).",
    scenario:
      "Salís 6 amigos a cenar. Pedro no bebió alcohol, Ana llegó tarde y solo cenó postre, los demás fue todo igual. Antes te toca calcular con la calculadora del móvil. Ahora hacéis foto al ticket y le decís las restricciones.",
    tool: "ChatGPT (con cámara) o Claude / Gemini",
    flow: [
      "Foto al ticket completo, que se lea bien.",
      "Sube la foto al chat.",
      "Escribe las restricciones en lenguaje normal.",
      "Te da el desglose en una tabla. Pídele que ajuste si algo no cuadra.",
    ],
    prompt:
      "Aquí está la cuenta. Somos 6: Carmen, Diego, Pedro, Ana, Luis, Marta. Pedro no bebió alcohol (descuéntale el vino y la cerveza). Ana solo tomó el postre de chocolate. El resto, partid el resto a partes iguales. Dame qué paga cada uno redondeado al euro.",
    example:
      "Carmen: 28€\nDiego: 28€\nLuis: 28€\nMarta: 28€\nPedro: 16€ (sin alcohol)\nAna: 7€ (solo postre)",
    tip: "Si la foto del ticket es borrosa o el papel térmico está descolorido, transcribe a mano las dos o tres líneas problemáticas. La IA prefiere claridad a creatividad.",
    related: ["categorizar-gastos", "comparativa-supermercado"],
  },
  {
    id: "lavadora",
    title: "Foto de los mandos de la lavadora",
    level: "basico",
    category: "vida-diaria",
    icon: "🌀",
    short: "Le enseñas los mandos y le dices qué vas a lavar. Te dice el programa.",
    scenario:
      "Lavadora nueva (o vieja). Mandos con iconos extraños y números que no entiendes. Manual perdido hace años.",
    tool: "ChatGPT / Claude / Gemini (con cámara)",
    flow: [
      "Foto cercana al panel de mandos.",
      "Sube + describe lo que vas a lavar: tipo de prenda, color, manchas, tejido.",
      "Te explica qué programa elegir y por qué.",
      "Si te quedas con duda, foto a la etiqueta de la prenda y vuelve a preguntar.",
    ],
    prompt:
      "Esta es mi lavadora. Voy a lavar una camisa blanca de algodón con manchas de vino y unos pantalones vaqueros oscuros nuevos. ¿Lo lavo todo junto? ¿Qué programa, temperatura y centrifugado debería elegir? Explícamelo como si nunca hubiera puesto una lavadora.",
    example:
      "Mejor por separado. Vaqueros oscuros sueltan tinte la primera vez. Programa 'algodón 40°' para la camisa, centrifugado medio. Vaqueros: 'sintéticos 30°' del revés, centrifugado bajo, sin suavizante.",
    tip: "La IA es excelente leyendo iconos confusos de electrodomésticos. Funciona igual con horno, microondas, termostato, mando del aire acondicionado.",
  },
  {
    id: "planta-enferma",
    title: "Mi planta tiene mala cara",
    level: "basico",
    category: "vida-diaria",
    icon: "🌱",
    short: "Foto de la planta → diagnóstico + qué hacer.",
    scenario:
      "El ficus del salón tiene hojas amarillas. La aloe se le cae el centro. Un bonsái al borde del adiós que igual recuperas.",
    tool: "ChatGPT / Claude (con cámara). Plant.id si quieres app especializada.",
    flow: [
      "Foto de la planta entera + foto de las hojas dañadas de cerca.",
      "Cuenta el contexto: cuánta luz, riego, dónde vive, cuánto hace que la notaste mal.",
      "Te dice qué le pasa, qué probabilidad hay de cada diagnóstico y qué hacer en pasos concretos.",
    ],
    prompt:
      "Tengo este ficus desde hace 3 años. Vive a 1 metro de una ventana sur, lo riego cada semana. Hace 10 días empezó con estas hojas amarillas que caen. ¿Qué le pasa y qué hago?",
    tip: "Igual de útil para identificar setas (¡importante! solo orientativo, NUNCA comas algo solo porque la IA lo dice), insectos en casa, hierbas raras del campo.",
  },
  {
    id: "etiqueta-medicacion",
    title: "Etiqueta de la medicación",
    level: "basico",
    category: "vida-diaria",
    icon: "💊",
    short: "Letra pequeña, jerga médica → explicación en cristiano.",
    scenario:
      "Vuelves de la farmacia con tres cajas. El prospecto parece un examen. Las indicaciones son ambiguas. La letra es minúscula.",
    tool: "ChatGPT / Claude / Gemini (con cámara)",
    flow: [
      "Foto al envase + al prospecto si quieres más detalle.",
      "Le explicas tu situación: para qué te lo recetaron, qué otras medicaciones tomas, edad.",
      "Pides explicación clara + cosas a vigilar.",
    ],
    prompt:
      "Mi madre tiene 72 años y le acaban de recetar esto. Toma además sintrom para el corazón y un antihistamínico para la alergia. ¿Cuándo tomarla, cuántas veces, qué efectos puede notar, y hay algo que deba evitar comer o mezclar con esto?",
    warning:
      "La IA NO sustituye al médico. Vale para entender la información que te dieron, no para decidir tratamientos. Si hay duda real, llama al centro de salud o al farmacéutico.",
  },
  {
    id: "phishing",
    title: "¿Este correo es estafa?",
    level: "basico",
    category: "vida-diaria",
    icon: "🛡️",
    short: "Pegas el email sospechoso. Te dice si huele a phishing y por qué.",
    scenario:
      "'Tu paquete está retenido, paga 1,99€ para liberarlo'. 'Tu Netflix se ha bloqueado, verifica aquí'. 'Perdí el móvil, mándame 200€'. La cantidad de estafas crece cada año.",
    tool: "ChatGPT / Claude (gratis, sin pagar nada).",
    flow: [
      "Copia el texto completo del correo o mensaje.",
      "Pídele que evalúe si es legítimo y qué pistas hay.",
      "Hazle caso si dice que es sospechoso. Y NUNCA pinches el enlace para 'probar'.",
    ],
    prompt:
      "Me ha llegado este mensaje y no sé si es real. ¿Tiene pinta de estafa? Dime qué pistas hay para reconocer el phishing. [pega el mensaje completo]",
    tip: "Funciona también para llamadas si las grabas/transcribes. Y para 'oportunidades de inversión por WhatsApp' que alguien insiste en reenviarte.",
    related: ["palabra-clave"],
  },
  {
    id: "palabra-clave",
    title: "Defensa contra clonación de voz",
    level: "basico",
    category: "vida-diaria",
    icon: "🔐",
    short: "No es un caso de uso 'de IA', es la regla que cualquier círculo cercano debería acordar.",
    scenario:
      "Alguien recibe una llamada llorando con la voz de un ser querido: 'he tenido un accidente, mándame 800€'. Con 30 segundos de TikTok se clona una voz convincente. $4.900 millones en estafas a mayores en EEUU solo en 2024.",
    tool: "Una palabra, acordada con quien te importa. Cero coste.",
    flow: [
      "Pónte de acuerdo con tu círculo cercano. Acordad UNA palabra clave secreta.",
      "Algo que solo sepáis vosotros. NO el nombre del perro, NO la fecha de boda.",
      "Si alguien llama pidiendo dinero o información urgente con una voz conocida: pide la palabra.",
      "Si no la sabe, cuelga. Llama tú al número de siempre.",
    ],
    tip: "Bonus: acordad también una palabra para situaciones de coacción ('hay algo que va mal, ayuda silenciosa').",
  },
  {
    id: "cocinar-sobras",
    title: "Qué cocino con lo que tengo",
    level: "basico",
    category: "vida-diaria",
    icon: "🍳",
    short: "Foto a la nevera abierta. Recetas con lo que ves.",
    scenario:
      "Domingo por la noche. Nevera con restos. No te apetece pedir comida. La IA inventa recetas con lo que hay.",
    tool: "ChatGPT / Claude / Gemini (con cámara)",
    flow: [
      "Abre la nevera y haz una foto que se vea todo.",
      "Sube y pide 3 recetas distintas, indicando preferencias (rápido, vegetariano, niños).",
      "Te dice paso a paso. Si falta algo, te ofrece alternativas.",
    ],
    prompt:
      "Aquí está mi nevera. Cena para 4, dos peques de 6 años. Tengo 30 minutos y pereza. Dame 3 opciones con lo que ves, ordenadas de menos a más esfuerzo.",
    tip: "Para listas de la compra inversas: dile lo que QUIERES cocinar esta semana y te genera lista organizada por sección del super.",
  },
  {
    id: "subtitulos-vivo",
    title: "Subtítulos en vivo en cualquier idioma",
    level: "basico",
    category: "vida-diaria",
    icon: "🎧",
    short: "Conversación en otro idioma → subtítulos traducidos en tu móvil.",
    scenario:
      "Un invitado austriaco viene a comer. La conversación se vuelve interesante pero tú no hablas alemán. O alguien con pérdida de audición quiere seguir la conversación.",
    tool: "Apple Intelligence (Live Captions, iPhone 15 Pro+), Google Pixel Recorder, app de traducción de Samsung",
    flow: [
      "Activa la función de subtítulos en vivo del móvil.",
      "Apunta al hablante (no hace falta mucha distancia).",
      "Lees en pantalla lo que dice, traducido si quieres.",
    ],
    tip: "Útil también para ver vídeos en YouTube sin sonido en el metro: subtítulos generados automáticamente, traducidos al vuelo si quieres.",
  },
  {
    id: "conversor-unidades",
    title: "Recetas de internet con unidades raras",
    level: "basico",
    category: "vida-diaria",
    icon: "📏",
    short: "Cup, pound, ounce, fahrenheit → gramos, mililitros, celsius.",
    scenario:
      "Receta americana de tarta. 2 cups of flour, 1 stick of butter, 350°F. Tu cocina española no habla ese idioma.",
    tool: "Cualquier chatbot. Es trivial pero ahorra mucho.",
    flow: [
      "Pega la receta entera.",
      "Pide que la traduzca al sistema métrico Y al material que tienes en casa.",
    ],
    prompt:
      "Convierte esta receta a gramos y mililitros para una cocina española. Y conviértelo todo para 6 personas en vez de 4. [pega receta]",
  },
  {
    id: "regalo-cumple",
    title: "Qué le regalo a mi madre",
    level: "basico",
    category: "vida-diaria",
    icon: "🎁",
    short: "Con buen contexto, ideas que aciertan, no listas genéricas.",
    scenario:
      "Cumpleaños inminente. No quieres regalar un perfume cualquiera. Quieres acertar.",
    tool: "ChatGPT / Claude (mejor con razonamiento extendido)",
    flow: [
      "Dale MUCHO contexto: edad, gustos, regalos del pasado que funcionaron/no, presupuesto, si vive cerca o no.",
      "Pide que te pregunte lo que necesite saber antes de responder.",
      "Pide opciones MUY distintas entre sí, con porqué y riesgo de cada una.",
    ],
    prompt:
      "Mi madre cumple 65. Le gustan la jardinería y las novelas históricas. Es alérgica a la lana. El año pasado le regalé un libro de cocina que apenas usó. Presupuesto: 50-100€. Dame 5 opciones muy distintas, con porqué y riesgo. Pregúntame primero lo que necesites.",
    tip: "Esto es el bloque /jugar/prompt-battle aplicado a la vida real. Mira ese juego si quieres ver la diferencia visual.",
    related: ["categorizar-gastos"],
  },

  // ============ VIDA DIARIA · MEDIO ============
  {
    id: "planificar-viaje",
    title: "Planificar un viaje en grupo",
    level: "medio",
    category: "vida-diaria",
    icon: "✈️",
    short: "Itinerario día a día con peques, restricciones y presupuesto.",
    scenario:
      "5 días en Lisboa con dos peques. Quieres playa, algo cultural, comida buena, y no llegar muertos al hotel.",
    tool: "ChatGPT con búsqueda web activada, o Perplexity.",
    flow: [
      "Da el contexto completo: fechas, gente, edades, presupuesto, lo que NO te gusta.",
      "Pide itinerario día por día.",
      "Pide alternativas para días de lluvia y zonas alternativas.",
      "Pídele que verifique horarios de los sitios que recomienda (es lo más fácil que se equivoque).",
    ],
    prompt:
      "Planifica un viaje a Lisboa del 15 al 19 de junio. Somos 2 adultos, 2 niños (6 y 9 años). Presupuesto medio. Nos gusta caminar, comer bien, museos cortos. Detestamos colas de 2 horas. Itinerario día por día con horarios reales (verifica en internet), restaurantes con plato típico y precio aproximado, plan B para día de lluvia.",
    tip: "Para reservas concretas (hoteles, vuelos) sigue usando Booking/Skyscanner. La IA puede inventar precios y disponibilidad.",
  },
  {
    id: "categorizar-gastos",
    title: "Categorizar gastos del banco",
    level: "medio",
    category: "vida-diaria",
    icon: "💰",
    short: "Extracto bancario en bruto → tabla por categorías + gráfico.",
    scenario:
      "Fin de mes. Quieres saber dónde se va el dinero. Tu banco no te lo categoriza bien o te miente.",
    tool: "ChatGPT con Code Interpreter (Data Analysis)",
    flow: [
      "Anonimiza el extracto: borra números de cuenta, nombres completos.",
      "Pégalo o súbelo como CSV / PDF.",
      "Pídele categorización + gráfico + 3 patrones que veas.",
    ],
    prompt:
      "Anonimicé este extracto. Categoriza los gastos en: vivienda, alimentación, transporte, ocio, suscripciones, otros. Muéstrame una tabla con totales y un gráfico de barras. Sugiéreme 3 cosas concretas que podría reducir sin sacrificar calidad de vida.",
    warning:
      "Quita siempre datos personales antes de subir nada. En el plan gratis, tus chats pueden usarse para entrenar.",
    related: ["dividir-cuenta"],
  },
  {
    id: "buscar-producto-foto",
    title: "Buscar producto con foto (Google Lens + IA)",
    level: "medio",
    category: "vida-diaria",
    icon: "🔎",
    short: "Foto de un objeto → dónde comprarlo, precios, alternativas.",
    scenario:
      "Ves un mueble en casa de alguien. Una pieza vintage en un mercadillo. Un repuesto raro. Quieres encontrarlo en internet.",
    tool: "Google Lens (gratis, integrado en cámara Android) o GPT-4o con foto.",
    flow: [
      "Foto al objeto con buen encoge.",
      "Google Lens te dice qué es y dónde lo venden.",
      "Para más profundidad: GPT-4o + 'busca opciones parecidas en menos de 100€ con envío a España'.",
    ],
    tip: "Ojo: los precios y disponibilidad que da la IA pueden estar desactualizados. Para comprar de verdad, verifica en la web del vendedor.",
  },
  {
    id: "contrato-revisar",
    title: "¿Qué firmo si firmo esto?",
    level: "medio",
    category: "vida-diaria",
    icon: "📜",
    short: "Contrato largo → 5 cosas a vigilar antes de firmar.",
    scenario:
      "Contrato de alquiler. Términos de un seguro. Permiso para una excursión escolar. Letra pequeña que no vas a leer.",
    tool: "Claude (mejor para textos largos) o ChatGPT.",
    flow: [
      "Sube el PDF entero.",
      "Pide resumen en lenguaje normal + cosas a vigilar.",
      "Pide específicamente: cláusulas raras, penalizaciones, plazos, automatismos de renovación.",
    ],
    prompt:
      "Este es el contrato de alquiler que voy a firmar. En lenguaje normal: (1) resumen de 3 líneas, (2) las 5 cosas que más me convendría vigilar, (3) cláusulas potencialmente abusivas, (4) qué pasa si me quiero ir antes. NO me digas 'consulta un abogado': dime lo que VES.",
    warning:
      "Para contratos importantes (compraventa, herencia, divorcio), la IA es un primer filtro. Luego sí: abogado de verdad. La IA puede malinterpretar cláusulas técnicas.",
  },
  {
    id: "lista-compra-plan",
    title: "Lista de la compra desde plan semanal",
    level: "medio",
    category: "vida-diaria",
    icon: "🛒",
    short: "Dile lo que quieres cocinar. Te genera lista organizada por pasillo.",
    scenario:
      "Domingo planificas la semana. Quieres cosas variadas, dos veces pescado, una vez legumbre, presupuesto razonable. Listas a mano = dolor.",
    tool: "ChatGPT / Claude / Gemini",
    flow: [
      "Dile cuántos sois, días, restricciones, preferencias.",
      "Pide plan + lista de compra organizada por sección del super.",
    ],
    prompt:
      "Plan de comidas para 4 personas (2 adultos + 2 niños de 6 y 9 años), de lunes a viernes (comida y cena). Variado, 2 veces pescado, 1 vez legumbre, sin repetir mismo ingrediente principal. Devuélveme: plan en tabla + lista de la compra organizada por: frescos, lácteos, congelados, despensa, limpieza.",
  },
  {
    id: "aprender-idioma",
    title: "Aprender inglés conversando",
    level: "medio",
    category: "vida-diaria",
    icon: "🗣️",
    short: "Conversación libre en voz alta con corrección suave.",
    scenario:
      "Sabes algo de inglés pero te falta práctica. No quieres pagar academias. Te da vergüenza hablar con desconocidos.",
    tool: "ChatGPT Voice Mode, Claude (modo voz), Google Gemini Live.",
    flow: [
      "Activa el modo voz del chatbot.",
      "Cuéntale tu nivel + qué quieres practicar (entrevista, viaje, conversación social).",
      "Conversa. Si dices algo mal, le pides corrección al final.",
    ],
    prompt:
      "Vamos a hablar en inglés. Soy nivel intermedio, quiero practicar para una entrevista de trabajo. Hazme las preguntas típicas. Al final de cada respuesta mía, dame correcciones de vocabulario y gramática sin interrumpir el flow.",
    tip: "La velocidad de respuesta sin presión social es la magia. Habla a tu ritmo, sin miedo al ridículo.",
  },

  // ============ TRABAJO · MEDIO ============
  {
    id: "redactar-emails",
    title: "Redactar emails en tu tono",
    level: "medio",
    category: "trabajo",
    icon: "✉️",
    short: "Pásale 3 emails tuyos como ejemplo. Replica el estilo.",
    scenario:
      "Tienes que mandar el mismo tipo de email 20 veces a la semana (presupuestos, seguimientos, recordatorios). El tono pulido te lleva 15 min cada uno.",
    tool: "Claude (mejor escritura) o ChatGPT.",
    flow: [
      "En la primera conversación, pega 3-4 emails REALES tuyos.",
      "Pide al modelo que extraiga las características de tu estilo.",
      "A partir de ahí, le das los datos del caso y te genera borrador.",
      "Repasa antes de enviar. No envíes nunca sin leer.",
    ],
    prompt:
      "Te paso 4 emails que he escrito yo. Analiza mi tono, vocabulario, longitud y estructura. Luego genera un email nuevo para esta situación: [pega situación]. Mantén exactamente mi estilo.",
    tip: "Esto guardado en un Project de Claude o un GPT personalizado de OpenAI lo tienes para siempre. Tu becario de email forever.",
  },
  {
    id: "actas-reunion",
    title: "Notas de reunión a acta con tareas",
    level: "medio",
    category: "trabajo",
    icon: "📝",
    short: "Pega tus notas en bruto → acta limpia + lista de acciones con responsables.",
    scenario:
      "Reunión de 1 hora. Notas en bruto, ideas inconexas, decisiones perdidas entre líneas. Hacer acta a mano son 30 min más.",
    tool: "Claude (mejor estructura) o ChatGPT.",
    flow: [
      "Pega tus notas en bruto.",
      "Pide acta + sección 'decisiones tomadas' + sección 'acciones con responsable y fecha'.",
      "Si tienes la grabación, súbela a NotebookLM o Otter para transcribir primero.",
    ],
    prompt:
      "Estas son mis notas en bruto de una reunión de cliente. Convertir en: (1) resumen ejecutivo de 3 frases, (2) decisiones tomadas, (3) tabla de acciones con responsable, fecha límite y prioridad. Lo que no esté en mis notas, marca con [VERIFICAR].",
  },
  {
    id: "pdf-largo",
    title: "Resumir PDFs largos",
    level: "medio",
    category: "trabajo",
    icon: "📄",
    short: "Manual de 200 páginas → resumen + lo que importa a TI.",
    scenario:
      "Te mandan un informe de 80 páginas. Un manual técnico. Las condiciones del nuevo seguro. Un libro entero que tienes que dominar.",
    tool: "Claude (1M tokens de contexto) o ChatGPT con archivo subido.",
    flow: [
      "Sube el PDF.",
      "Primer prompt: resumen general + estructura.",
      "Segundo prompt: 'qué dice sobre X' (lo que te interesa específicamente).",
      "Tercer prompt: 'genera 10 preguntas que un revisor crítico haría sobre esto'.",
    ],
    prompt:
      "Adjunto un informe de mercado de 80 páginas. Quiero: (1) resumen ejecutivo de media página, (2) las 5 conclusiones clave, (3) qué dice específicamente sobre el sector reformas en España, (4) 3 cosas que el informe da por hecho pero podría no ser cierto.",
  },
  {
    id: "encontrar-hueco-calendario",
    title: "Encontrar hueco compartido en calendarios",
    level: "medio",
    category: "trabajo",
    icon: "📅",
    short: "Pega las disponibilidades. Te da las opciones que cuadran.",
    scenario:
      "Reunión con 5 personas, dos en otro huso horario, una solo por las mañanas. Ping-pong de emails durante semanas.",
    tool: "ChatGPT, o herramientas dedicadas como Reclaim, Motion, Calendly + Cal.com.",
    flow: [
      "Recopila disponibilidades (texto pegado del chat).",
      "Pega + pide opciones que cumplan todas las restricciones.",
    ],
    prompt:
      "Tengo que organizar reunión de 1 hora con 5 personas en próximos 10 días. Disponibilidades: Carmen cualquier mañana excepto martes. Diego tardes después de las 17h. Pedro solo lunes/miércoles. Ana en NY (UTC-5). Luis sin restricciones. Dame las 3 mejores opciones de día y hora.",
  },
  {
    id: "cv-adaptado",
    title: "CV adaptado a una oferta concreta",
    level: "medio",
    category: "trabajo",
    icon: "📋",
    short: "Pega tu CV + la oferta. Te lo reescribe para esa oferta específica.",
    scenario:
      "Mandar el mismo CV genérico ya no funciona. Cada oferta valora cosas distintas, los ATS filtran por keywords.",
    tool: "Claude o ChatGPT.",
    flow: [
      "Pega tu CV completo.",
      "Pega la oferta de trabajo.",
      "Pide reescritura que destaque lo relevante, ordenado por prioridad para esa oferta.",
      "Revísalo. Pide ajustes. NO inventes experiencia que no tienes.",
    ],
    prompt:
      "Este es mi CV. Esta es la oferta. Reescribe el CV optimizando para esa oferta: reordena experiencias, destaca palabras clave del anuncio, sugiere quitar lo irrelevante. Marca con [VERIFICAR] cualquier dato que tengas duda. NO INVENTES NADA.",
    warning:
      "Las IAs son demasiado optimistas con los logros: van a redondear hacia arriba. Lee con ojo crítico antes de enviar.",
  },

  // ============ ESTUDIO · MEDIO/AVANZADO ============
  {
    id: "notebooklm-examen",
    title: "Estudiar para examen con NotebookLM",
    level: "medio",
    category: "estudio",
    icon: "📚",
    short: "Sube tus apuntes. Genera podcast, resumen, mapa, test, todo.",
    scenario:
      "Exámen en 2 semanas. 300 páginas de apuntes. No sabes por dónde empezar.",
    tool: "NotebookLM (Google, gratis)",
    flow: [
      "Crea un cuaderno y sube todos tus materiales: PDFs, notas, vídeos de YouTube de la asignatura.",
      "NotebookLM solo usa esas fuentes (no inventa).",
      "Pídele: resumen, mapa mental, audio podcast, preguntas tipo test, cronología.",
      "Conversa: 'explícame el tema 5 como si tuviera 12 años'.",
    ],
    tip: "Diferencia clave con ChatGPT: NotebookLM SOLO razona sobre los documentos que TÚ subes. Cero alucinación sobre el contenido externo. Para estudiar es perfecto.",
    related: ["podcast-pdf", "deep-research"],
  },
  {
    id: "podcast-pdf",
    title: "Convertir cualquier PDF en podcast",
    level: "medio",
    category: "estudio",
    icon: "🎙️",
    short: "Manual del coche, contrato, libro → audio para escuchar en el coche.",
    scenario:
      "Tienes que leer algo aburrido. Te ayuda escuchar mientras conduces, paseas, planchas.",
    tool: "NotebookLM (Audio Overviews, gratis)",
    flow: [
      "Sube el PDF en NotebookLM.",
      "Pulsa 'Audio Overview'. Genera podcast tipo NPR de 12-20 minutos con dos voces conversando.",
      "Descarga MP3.",
    ],
    tip: "Brutal para quien ya no lee letra pequeña pero sí escucha bien. Funciona en castellano desde 2024.",
    related: ["notebooklm-examen"],
  },
  {
    id: "test-practica",
    title: "Test de práctica desde tus apuntes",
    level: "medio",
    category: "estudio",
    icon: "✅",
    short: "Sube apuntes → genera 20 preguntas tipo test con respuesta y explicación.",
    scenario:
      "Quieres ver cuánto has retenido. Hacer test = aprendizaje activo, mucho más efectivo que releer.",
    tool: "NotebookLM o ChatGPT con tus apuntes.",
    flow: [
      "Pega/sube apuntes.",
      "Pide 20 preguntas tipo test (4 opciones) cubriendo todos los temas, con respuesta correcta y explicación.",
      "Hazlo a mano. Repite las preguntas que falles.",
    ],
    prompt:
      "Genera un test de 20 preguntas tipo test cubriendo todos los temas de estos apuntes. 4 opciones cada una. Mezcla preguntas de memoria con preguntas de comprensión. Da la solución y explicación al final, separadas de las preguntas para que pueda hacerlo sin ver respuestas.",
  },
  {
    id: "mapa-mental",
    title: "Mapa mental de un tema complejo",
    level: "medio",
    category: "estudio",
    icon: "🗺️",
    short: "Tema confuso → estructura jerárquica visual.",
    scenario:
      "Tienes que entender la estructura de un sistema (legal, biológico, histórico) y no consigues ordenarlo en la cabeza.",
    tool: "Claude o ChatGPT + herramientas como Whimsical, Miro, o Markmap.",
    flow: [
      "Pide al modelo que genere un mapa mental en formato Markdown jerárquico.",
      "Pégalo en una herramienta tipo Markmap.js o Whimsical (que importa markdown a mapa).",
    ],
    prompt:
      "Genera un mapa mental jerárquico (formato Markdown con niveles ##, ###, ####) del sistema judicial español. Cubre: jurisdicciones, tribunales por nivel, tipos de recursos, instancias. Que un universitario lo pueda entender.",
  },

  // ============ CREATIVO · MEDIO ============
  {
    id: "imagen-redes",
    title: "Imagen para post de redes en 30 segundos",
    level: "medio",
    category: "creativo",
    icon: "🎨",
    short: "Sin Photoshop, sin stock photos. Directo desde el prompt.",
    scenario:
      "Vas a publicar algo y necesitas una imagen que llame la atención. Stock photos son aburridas. Diseñar lleva tiempo.",
    tool: "ChatGPT (con GPT-Image), Midjourney, Flux, Ideogram, Google Imagen.",
    flow: [
      "Describe la imagen con detalle: sujeto, estilo, composición, ambiente, paleta.",
      "Especifica relación de aspecto: '16:9 para LinkedIn', '1:1 para Instagram'.",
      "Itera: 'igual pero con más luz cálida', 'cambia el coche por uno azul'.",
    ],
    prompt:
      "Imagen 16:9 para post de LinkedIn. Una mujer de 40 años en su oficina, mirando una pizarra llena de gráficos. Iluminación cinematográfica suave, hora dorada. Estilo fotográfico realista, no ilustración. Sin texto en la imagen.",
    tip: "Para texto DENTRO de imágenes (carteles, anuncios), GPT-Image y Ideogram son los mejores. Midjourney sigue fallando en texto largo.",
  },
  {
    id: "voz-clonada",
    title: "Clonar tu voz para narrar un vídeo",
    level: "medio",
    category: "creativo",
    icon: "🎤",
    short: "30 segundos de audio tuyo → narras un vídeo entero sin grabar.",
    scenario:
      "Quieres narrar un montaje personal. Te da vergüenza grabar. O quieres traducirlo a otros idiomas manteniendo TU voz.",
    tool: "ElevenLabs (el referente). Heygen para vídeo + voz.",
    flow: [
      "Sube 30-60 segundos de audio tuyo limpio.",
      "Crea tu voz en la plataforma.",
      "Escribe el guion y genera el audio.",
      "Listo para montar en cualquier editor de vídeo.",
    ],
    warning:
      "Por favor, no clones la voz de otra persona sin su permiso explícito. Es ilegal en muchos países y éticamente cuestionable siempre.",
  },
  {
    id: "cancion-suno",
    title: "Música para un montaje personal",
    level: "medio",
    category: "creativo",
    icon: "🎵",
    short: "Suno V5 → canción completa con letra y voz cantada.",
    scenario:
      "Una boda, una jubilación, un cumpleaños grande. Quieres una canción 'a medida'.",
    tool: "Suno (suno.com) o Udio.",
    flow: [
      "Describe el estilo musical, instrumentación y ambiente.",
      "Pega o pide la letra con datos del homenajeado.",
      "Suno genera 2-3 variantes. Eliges, descargas MP3.",
    ],
    prompt:
      "Canción flamenco-rock alegre y cómica para el 75 cumpleaños de Joaquín. Le encanta el fútbol del Atleti, jugar al mus, y se duerme viendo el telediario. Coro pegadizo y letra con cariño.",
    tip: "Las canciones IA están en Spotify ya. La calidad es indistinguible en géneros pop/electrónicos para oyente casual.",
  },
  {
    id: "presentacion-claude",
    title: "Presentación entera con Claude / Manus / Genspark",
    level: "medio",
    category: "creativo",
    icon: "🎯",
    short: "De idea a slides en 10 minutos.",
    scenario:
      "Presentación mañana. No has empezado. La idea está clara, falta currárselo.",
    tool: "Claude (con artifacts), Manus AI, Genspark, Gamma.app.",
    flow: [
      "Cuéntale al modelo qué presentas, a quién, en cuánto tiempo, mensajes clave.",
      "Pide estructura → texto de cada slide → versión visual.",
      "En Gamma o Genspark genera directamente las slides con diseño.",
      "Exporta a PowerPoint/Google Slides y retoca.",
    ],
    prompt:
      "Tengo que presentar mañana en 15 minutos a mi equipo el plan trimestral. Audiencia: 8 personas técnicas. Objetivos: alinear sobre 3 prioridades, decisiones a tomar, riesgos. Genera: (1) estructura de la charla, (2) bullets de cada slide, (3) qué decir oralmente que NO esté en las slides.",
    tip: "Esta presentación que estás viendo ahora mismo se construyó con un agente IA (Claude Code). Toda la investigación, los slides y este sitio web.",
  },

  // ============ AVANZADO ============
  {
    id: "deep-research",
    title: "Deep Research: investigación profunda",
    level: "avanzado",
    category: "estudio",
    icon: "🔬",
    short: "30 minutos de investigación → informe con 50 fuentes.",
    scenario:
      "Quieres entender un tema desde cero: una enfermedad, un sector, una empresa para comprar acciones, una decisión jurídica.",
    tool: "ChatGPT Deep Research (Pro), Perplexity Pro, Gemini Deep Research.",
    flow: [
      "Activa el modo 'Deep Research'.",
      "Da contexto extenso: qué quieres saber, para qué, qué profundidad.",
      "El agente busca durante 5-30 minutos en internet, lee decenas de papers/artículos.",
      "Entrega informe con citas. Verifica las fuentes clave antes de fiarte.",
    ],
    prompt:
      "Investiga el estado actual (mayo 2026) de los tratamientos para la fibromialgia. Quiero: (1) qué dice la ciencia más reciente (papers <2 años), (2) qué tratamientos están en ensayo, (3) qué centros en España son referencia, (4) qué grupos de pacientes existen. Cita las fuentes con URL y año.",
    tip: "Esta misma charla usó modos de razonamiento profundo de varios modelos para verificar todas las cifras citadas. Funciona.",
    related: ["notebooklm-examen"],
  },
  {
    id: "vibe-coding",
    title: "Vibe coding: app web sin saber programar",
    level: "avanzado",
    category: "creativo",
    icon: "💻",
    short: "Describe la app. La IA la construye. Tú iteras hasta que funciona.",
    scenario:
      "Necesitas una herramienta interna: gestor de cumpleaños del equipo, calculadora específica para tu sector, web del trabajo. No quieres pagar a un developer.",
    tool: "v0 (Vercel), Lovable, Bolt.new, Replit Agent, Claude Artifacts.",
    flow: [
      "Describe en lenguaje normal qué quieres.",
      "El agente genera código + lo despliega.",
      "Iteras: 'cambia el color, añade un botón aquí, ahora quiero exportar a Excel'.",
      "En 1 hora tienes algo funcional. En 4 horas algo decente.",
    ],
    prompt:
      "Crea una web para que mi grupo (8 personas) apunte cumpleaños. Login con Google. Formulario con nombre + fecha + foto + nota. Lista visible para todos, ordenada por fecha. Notificación 1 semana antes. Diseño limpio, colores cálidos.",
    tip: "Para apps internas y prototipos: genial. Para producción real con datos sensibles: te toca aprender (o contratar).",
  },
  {
    id: "analisis-csv",
    title: "Análisis de datos sin saber Excel pro",
    level: "avanzado",
    category: "trabajo",
    icon: "📊",
    short: "Pega CSV → análisis estadístico + gráficos + insights.",
    scenario:
      "Te dan un Excel con datos de clientes / ventas / encuestas. Quieres entenderlo sin pasarte una semana con tablas dinámicas.",
    tool: "ChatGPT con Code Interpreter (Data Analysis) o Claude con archivos.",
    flow: [
      "Sube CSV o Excel.",
      "Primer prompt: 'describe el dataset, qué columnas hay, tipos de datos, anomalías'.",
      "Segundo: 'gráfico de X agrupado por Y'.",
      "Tercero: 'qué 3 hallazgos no obvios ves'.",
      "El modelo escribe código Python real, lo ejecuta, te enseña gráficos.",
    ],
    prompt:
      "Adjunto el CSV con ventas del último año. Analiza: (1) tendencia general por mes, (2) productos top 5 y bottom 5, (3) correlación entre día de la semana y volumen, (4) cualquier anomalía o patrón raro. Devuelve análisis + 3 gráficos limpios.",
  },
  {
    id: "agente-personalizado",
    title: "Agente personalizado para tareas recurrentes",
    level: "avanzado",
    category: "tecnico",
    icon: "🧩",
    short: "Crea un 'GPT' o un 'Project' con instrucciones y archivos siempre cargados.",
    scenario:
      "Haces siempre lo mismo: revisar emails, generar presupuestos en cierto formato, contestar a clientes. Quieres tu becario fijo.",
    tool: "Custom GPTs (ChatGPT), Projects (Claude), Gems (Gemini).",
    flow: [
      "Define el rol y las instrucciones detalladas.",
      "Sube archivos de referencia: tono de empresa, plantillas, base de conocimiento.",
      "Configura herramientas que pueda usar.",
      "Lo invocas cuando necesitas, mantiene contexto siempre.",
    ],
    tip: "Para casos de empresa serios: la versión Enterprise/Team con MCP y herramientas conectadas (Google Drive, Slack, etc.). Tu agente con acceso real a tu trabajo.",
  },
  {
    id: "multi-ia",
    title: "Multi-IA en cadena: lo mejor de cada uno",
    level: "avanzado",
    category: "tecnico",
    icon: "🔗",
    short: "Claude escribe, GPT critica, Gemini revisa, tú decides.",
    scenario:
      "Texto importante (carta delicada, propuesta comercial, ensayo). Quieres calidad máxima sin pagar a un editor.",
    tool: "Cualquier combo. Manual o vía herramientas como Continue.dev / Cline.",
    flow: [
      "Claude genera primer borrador (mejor escritura).",
      "Pegas a ChatGPT con 'critícalo como un editor estricto'.",
      "Pegas a Gemini con '¿qué se les ha escapado? ¿algún error factual?'.",
      "Combinas lo mejor.",
    ],
    tip: "Para los muy técnicos: hay plataformas (Continue, Cline, OpenRouter) que automatizan este flujo. Para uso casual: copy/paste entre tres pestañas funciona.",
  },
  {
    id: "mcp-integraciones",
    title: "MCP: la IA con acceso real a tus apps",
    level: "avanzado",
    category: "tecnico",
    icon: "⚡",
    short: "Tu Claude/ChatGPT conecta con Gmail, Drive, GitHub, Slack…",
    scenario:
      "Hablar con la IA es bonito pero limitado. Quieres que LEA tu Gmail real, escriba en tu Notion, edite tus archivos.",
    tool: "Claude Desktop + MCP servers. ChatGPT GPTs con custom actions. Cursor + MCP.",
    flow: [
      "Instala el MCP server que necesites (Gmail, Drive, GitHub, etc.).",
      "Configura permisos OAuth.",
      "Le pides al asistente: 'busca todos los emails sobre X del último mes y haz un resumen'.",
      "Lo hace en directo, viendo tus datos.",
    ],
    tip: "MCP (Model Context Protocol) es el 'USB-C de las herramientas IA'. Estándar de Anthropic adoptado por OpenAI, Google y Microsoft en 2025. Lectura: /explorar/herramientas-actuales.",
    warning:
      "Da acceso solo a lo que necesite. Y a versiones de pago/empresa que NO entrenan con tus datos. Tu Gmail no debería acabar en un dataset público.",
  },
];

export const casosByLevel = (level: CasoLevel) =>
  casos.filter((c) => c.level === level);

export const casosByCategory = (cat: CasoCategory) =>
  casos.filter((c) => c.category === cat);

export const getCaso = (id: string) => casos.find((c) => c.id === id);

export const levelLabels: Record<CasoLevel, { label: string; color: string; description: string }> = {
  basico: {
    label: "Básico",
    color: "var(--color-good)",
    description: "Si nunca has pagado por IA y quieres ubicarte",
  },
  medio: {
    label: "Medio",
    color: "var(--color-warn)",
    description: "Si usas ChatGPT a veces y quieres sacarle más",
  },
  avanzado: {
    label: "Avanzado",
    color: "var(--color-hot)",
    description: "Si la usas cada día y quieres exprimir el ecosistema",
  },
};

export const categoryLabels: Record<CasoCategory, { label: string; emoji: string }> = {
  "vida-diaria": { label: "Vida diaria", emoji: "🏠" },
  trabajo: { label: "Trabajo", emoji: "💼" },
  estudio: { label: "Estudio", emoji: "📚" },
  creativo: { label: "Creativo", emoji: "🎨" },
  tecnico: { label: "Técnico", emoji: "⚙️" },
};

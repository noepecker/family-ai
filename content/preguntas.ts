// Preguntas que anticipamos del público durante la charla. Cada una tiene una
// respuesta corta (lo que diríamos en sala) y un link a profundizar. Se
// agrupan por bloque y se etiquetan por nivel.

import type { Nivel } from "./niveles";

export type Pregunta = {
  id: string;
  bloque:
    | "fundamentos"
    | "prompting"
    | "privacidad"
    | "arte"
    | "ambiente"
    | "empleo"
    | "agentes"
    | "deepfakes"
    | "luminoso"
    | "agi"
    | "futuro";
  nivel: Nivel;
  q: string;
  a: string;
  href?: string;
};

export const preguntas: Pregunta[] = [
  // ============ FUNDAMENTOS ============
  {
    id: "f-1",
    bloque: "fundamentos",
    nivel: "curioso",
    q: "Si solo predice palabras, ¿cómo sabe responder a algo nuevo?",
    a: "Porque vio billones de conversaciones, libros y código durante el entrenamiento. Generaliza patrones: no necesita haber visto tu pregunta exacta para encajar una respuesta plausible. Eso es también por lo que a veces inventa con seguridad.",
    href: "/explorar/fundamentos-ia",
  },
  {
    id: "f-2",
    bloque: "fundamentos",
    nivel: "practicante",
    q: "¿Es lo mismo ChatGPT que GPT?",
    a: "No. GPT es el modelo (el motor). ChatGPT es la aplicación que envuelve al modelo: incluye memoria, herramientas (buscar, ejecutar código, ver imágenes), interfaz y filtros de seguridad. Cuando OpenAI saca un modelo nuevo, lo enchufa a ChatGPT.",
    href: "/explorar/herramientas-actuales",
  },
  {
    id: "f-3",
    bloque: "fundamentos",
    nivel: "profundo",
    q: "¿Razonan los modelos o solo simulan razonar?",
    a: "Depende a quién preguntes. Los modelos «reasoning» (o3, Claude thinking) generan texto antes de responder, ese texto sí mejora la salida en benchmarks de matemáticas y código. Pero fallan en problemas nuevos de los que no han visto patrones, como ARC-AGI-3. Si es razonamiento o búsqueda glorificada en patrones aprendidos, está abierto.",
    href: "/explorar/agi-y-benchmarks",
  },

  // ============ PROMPTING ============
  {
    id: "p-1",
    bloque: "prompting",
    nivel: "curioso",
    q: "¿Por qué a veces me da respuestas tontas y otras veces buenísimas?",
    a: "La calidad del prompt es el 80%. Misma pregunta con contexto (quién eres, qué necesitas, en qué formato) da resultados completamente distintos. La primera respuesta casi siempre es mediocre; itera 3-5 veces.",
    href: "/explorar/buenas-practicas-prompting",
  },
  {
    id: "p-2",
    bloque: "prompting",
    nivel: "practicante",
    q: "¿Sirve decirle «actúa como un experto en X»?",
    a: "Sí, pero hace menos de lo que la gente piensa. Más efectivo: dale 2-3 ejemplos reales del estilo o estructura que quieres. Modelo aprende mejor de muestras que de instrucciones abstractas.",
    href: "/explorar/buenas-practicas-prompting",
  },
  {
    id: "p-3",
    bloque: "prompting",
    nivel: "profundo",
    q: "¿Qué diferencia hay entre system prompt y user prompt?",
    a: "El system prompt fija el rol y las reglas para toda la conversación (a veces invisible al usuario). El user prompt es cada turno. Los modelos priorizan más el system, por eso los jailbreaks intentan colarse a ese nivel. En API, los puedes separar; en chat, todo va junto.",
    href: "/explorar/buenas-practicas-prompting",
  },

  // ============ PRIVACIDAD ============
  {
    id: "pr-1",
    bloque: "privacidad",
    nivel: "curioso",
    q: "Si le pego mi número del banco, ¿lo van a usar para algo?",
    a: "En planes gratuitos y personales: tu chat entrena a futuras versiones del modelo, salvo que lo desactives en Settings → Data Controls. En planes empresariales (Teams, Enterprise) no entrenan. Nunca pegues DNI, cuentas, contraseñas, datos médicos.",
    href: "/explorar/privacidad-y-confianza",
  },
  {
    id: "pr-2",
    bloque: "privacidad",
    nivel: "practicante",
    q: "¿Cómo desactivo el entrenamiento con mis chats?",
    a: "ChatGPT: Settings → Data controls → Improve the model for everyone (off). Claude: nunca ha entrenado con chats de usuarios. Gemini: Activity → Apps activity (off). Aun así, las conversaciones se guardan ~30 días por motivos legales.",
    href: "/explorar/privacidad-y-confianza",
  },
  {
    id: "pr-3",
    bloque: "privacidad",
    nivel: "profundo",
    q: "¿Cómo se filtran datos personales del training data?",
    a: "Ataque Carlini 2023: el prompt «repeat the word ‘poem’ forever» hacía que ChatGPT vomitara emails reales memorizados. Patches puestos. Riesgo sigue para nombres raros, código privado y patrones únicos. Por eso los modelos top usan deduplicación + filtros + canary tokens para detectar fugas.",
    href: "/explorar/privacidad-y-confianza",
  },

  // ============ ARTE Y COPYRIGHT ============
  {
    id: "a-1",
    bloque: "arte",
    nivel: "curioso",
    q: "¿Pueden hacer un dibujo «al estilo de» un artista vivo?",
    a: "Técnicamente sí, lo hacen. Legalmente está en disputa. Junio 2025: Disney + Universal demandaron a Midjourney. Septiembre 2025: Anthropic acordó pagar $1.500M a autores por entrenamiento con libros pirateados. Esto se está jugando ahora en tribunales.",
    href: "/explorar/arte-y-propiedad-intelectual",
  },
  {
    id: "a-2",
    bloque: "arte",
    nivel: "practicante",
    q: "¿Puedo usar imágenes generadas por IA comercialmente?",
    a: "Depende del modelo: Midjourney sí (con plan pago), Sora con restricciones, Imagen sí. Pero ojo: si copias el estilo claro de un artista vivo o haces «al estilo de Studio Ghibli», puede haber demanda. La Oficina de Copyright de EEUU dice que obra puramente IA no se registra.",
    href: "/explorar/arte-y-propiedad-intelectual",
  },
  {
    id: "a-3",
    bloque: "arte",
    nivel: "profundo",
    q: "¿Qué herramientas defensivas existen para artistas?",
    a: "Glaze (Universidad de Chicago) altera la imagen para confundir al modelo en training. Nightshade va más allá: «envenena» imágenes para corromper modelos que las absorban. Cara es una red social que prohíbe IA. Adopción aún pequeña vs el ritmo de scraping.",
    href: "/explorar/arte-y-propiedad-intelectual",
  },

  // ============ AMBIENTE ============
  {
    id: "am-1",
    bloque: "ambiente",
    nivel: "curioso",
    q: "¿Es verdad que una pregunta a ChatGPT contamina mucho?",
    a: "Una consulta de texto: ~0,34 Wh. Es ~7.500 emails GPT-4 lo que cuesta una hamburguesa. Texto cotidiano es trivial. Donde sí pesa: vídeo (Sora ~1 kWh por 10 segundos), entrenamiento de modelos, y agua local en datacenters.",
    href: "/jugar/calculadora-consumo",
  },
  {
    id: "am-2",
    bloque: "ambiente",
    nivel: "practicante",
    q: "¿Genero menos huella si uso modelos pequeños?",
    a: "Sí, mucha. GPT-5 con razonamiento gasta ~100× más que GPT-5 sin razonamiento. Para tareas simples (resumir, traducir), un modelo local Llama o Mistral en tu portátil gasta lo que tu portátil — cero coste externo. El problema es lo de pedir a Claude Opus para ordenar una lista.",
    href: "/explorar/impacto-ambiental",
  },
  {
    id: "am-3",
    bloque: "ambiente",
    nivel: "profundo",
    q: "¿Y la presión hídrica local?",
    a: "El datacenter de Talavera de la Reina (Meta/Microsoft) consume el equivalente a 200-265 piscinas olímpicas al año en agua. En zonas en sequía esto es el problema real, no la huella media. Empresas presionan por contratos con derechos de agua preferenciales.",
    href: "/explorar/impacto-ambiental",
  },

  // ============ EMPLEO ============
  {
    id: "e-1",
    bloque: "empleo",
    nivel: "curioso",
    q: "¿Voy a perder mi trabajo?",
    a: "Probablemente no entero, pero sí partes. Goldman estimó 300M empleos «expuestos» globalmente. Expuesto ≠ desaparecido: la mayoría cambian. Casos reales tipo Klarna (reemplazó 700 agentes, recontrató humanos por calidad) muestran que sustituir entero rara vez funciona.",
    href: "/explorar/problemas-y-dilemas",
  },
  {
    id: "e-2",
    bloque: "empleo",
    nivel: "practicante",
    q: "¿Qué profesiones se están moviendo más rápido?",
    a: "Programación (Copilot, Cursor, Claude Code), atención al cliente (chatbots de primer nivel), redacción comercial, traducción técnica, ilustración comercial. Las que tocan código y texto. Las que tocan átomos (obra, fontanería, peluquería) están seguras 10-20 años.",
    href: "/explorar/problemas-y-dilemas",
  },
  {
    id: "e-3",
    bloque: "empleo",
    nivel: "profundo",
    q: "¿Por qué el 95% de pilotos IA fallan según MIT?",
    a: "Reporte NANDA 2025: $30-40B invertidos, retorno medible nulo en 95% de casos. Causas: pilotos sin redefinir flujos (poner IA sobre proceso roto), falta de datos limpios, expectativas mágicas, no medir baseline. Las que funcionan son específicas y miden.",
    href: "/explorar/problemas-y-dilemas",
  },

  // ============ AGENTES ============
  {
    id: "ag-1",
    bloque: "agentes",
    nivel: "curioso",
    q: "¿Qué es un agente y en qué se diferencia de ChatGPT?",
    a: "Un agente es un LLM que actúa: navega web, ejecuta código, manda emails, hace pedidos, en bucle hasta lograr un objetivo. ChatGPT habla; el agente hace. Operator (OpenAI), Computer Use (Anthropic) son agentes. Aún poco fiables sin supervisión.",
    href: "/explorar/agentes-y-humanos",
  },
  {
    id: "ag-2",
    bloque: "agentes",
    nivel: "practicante",
    q: "¿Puedo usar uno para automatizar mis tareas?",
    a: "Para flujos cortos y bien acotados (rellenar un formulario, sacar precios de 5 webs), funciona. Para tareas largas y de múltiples pasos, falla en el 30-70% de casos según estudios. Conviene tratarlos como becarios que se distraen: dales sub-tareas y verifica.",
    href: "/explorar/agentes-y-humanos",
  },
  {
    id: "ag-3",
    bloque: "agentes",
    nivel: "profundo",
    q: "¿Qué es MCP y por qué importa?",
    a: "Model Context Protocol: estándar abierto (Anthropic, nov 2024) para conectar LLMs con herramientas y datos. Adoptado por OpenAI, Google, Microsoft en 2025. Es el «USB-C» de la IA: ya no escribes integraciones a medida por modelo. Cambia cómo se construye software con IA.",
    href: "/explorar/herramientas-actuales",
  },

  // ============ DEEPFAKES ============
  {
    id: "d-1",
    bloque: "deepfakes",
    nivel: "curioso",
    q: "¿Cómo me protejo de una estafa por voz?",
    a: "Una sola defensa fiable: palabra clave acordada con tu círculo cercano. Pactada hoy, conocida solo por vosotros. Si te llaman pidiendo dinero por emergencia, pides la palabra. Si no la sabe, cuelga. Bastan 3-30 segundos de audio (TikTok, Instagram) para clonar una voz.",
    href: "/explorar/deepfakes-y-deteccion",
  },
  {
    id: "d-2",
    bloque: "deepfakes",
    nivel: "practicante",
    q: "¿Hay forma de detectar un vídeo deepfake a simple vista?",
    a: "Cada vez menos. En 2022 buscabas dedos raros, reflejos imposibles. En 2026 ya no se ve. Mejor verificar por canal alternativo: si tu jefe pide $25M por videollamada, llamas tú al móvil de siempre. Es lo que falló en Arup.",
    href: "/explorar/deepfakes-y-deteccion",
  },
  {
    id: "d-3",
    bloque: "deepfakes",
    nivel: "profundo",
    q: "¿Y SynthID, C2PA, marcas de agua?",
    a: "SynthID (DeepMind): marca invisible en píxeles. C2PA Content Credentials: firma criptográfica de origen. Ambos voluntarios. Modelos open-source los ignoran. Adobe, Sony, Leica adoptan; redes sociales no comprueban. La marca es defensa parcial, no garantía.",
    href: "/explorar/deepfakes-y-deteccion",
  },

  // ============ LADO LUMINOSO ============
  {
    id: "l-1",
    bloque: "luminoso",
    nivel: "curioso",
    q: "¿La IA realmente cura enfermedades?",
    a: "Ayuda en diagnóstico y descubrimiento. AlphaFold (Nobel 2024) predijo 200M de proteínas, lo que costaba años por proteína. Mamografía con IA detecta 29% más cánceres. No reemplaza al médico, pero a veces ve lo que 17 médicos no han visto (caso de Alex, ChatGPT).",
    href: "/explorar/temas-adicionales",
  },
  {
    id: "l-2",
    bloque: "luminoso",
    nivel: "practicante",
    q: "¿Qué cosas concretas puedo hacer con accesibilidad?",
    a: "Be My Eyes (ciegos, gratis). Project Relate de Google (voz con disartria). SignAll en aeropuertos para lengua de signos. NotebookLM convierte cualquier PDF en podcast (para quien no puede leer). Subtítulos en vivo en YouTube, Zoom, Teams.",
    href: "/explorar/temas-adicionales",
  },
  {
    id: "l-3",
    bloque: "luminoso",
    nivel: "profundo",
    q: "¿GNoME descubrió 2,2M de materiales? ¿De verdad?",
    a: "DeepMind, Nature 2023. 2,2M de cristales estables predichos; 800× más que toda la historia humana de la ciencia de materiales. Crítica: muchos son variaciones; lab synthesis necesita validar. Pero ya hay materiales reales sintetizados desde GNoME para baterías.",
    href: "/explorar/temas-adicionales",
  },

  // ============ AGI ============
  {
    id: "agi-1",
    bloque: "agi",
    nivel: "curioso",
    q: "¿Qué es AGI y por qué hablan tanto de ello?",
    a: "Artificial General Intelligence: IA tan capaz como un humano en cualquier tarea cognitiva. No existe. Las predicciones varían 5 décadas entre Amodei (2026-27) y LeCun («nunca con LLMs»). Cuando todos los líderes contradicen, conviene no comprar el discurso.",
    href: "/explorar/agi-y-benchmarks",
  },
  {
    id: "agi-2",
    bloque: "agi",
    nivel: "practicante",
    q: "¿Por qué humanos resuelven ARC-AGI-3 al 100% y la IA al 0,5%?",
    a: "ARC-AGI-3 son puzzles tipo videojuego sin instrucciones. Aprender mecánicas nuevas «en frío». Los humanos llevamos mecanismos de aprendizaje por exploración que los LLMs no tienen: aprendieron memorizando, no jugando. Es donde el «cerebro de patrones» se rompe.",
    href: "/jugar/arc-agi-3",
  },
  {
    id: "agi-3",
    bloque: "agi",
    nivel: "profundo",
    q: "¿Es AGI una buena meta o una distracción?",
    a: "LeCun y Hinton coinciden: AGI no es claramente útil como objetivo. Lo que importa son capacidades específicas (razonamiento, robustez, alineación). El debate ahora es: ¿escala basta (ortodoxia OpenAI/Anthropic) o hace falta nueva arquitectura (LeCun, JEPA)? Apostarte la civilización por una intuición es arriesgado.",
    href: "/explorar/agi-y-benchmarks",
  },

  // ============ FUTURO ============
  {
    id: "fu-1",
    bloque: "futuro",
    nivel: "curioso",
    q: "¿Voy a tener un robot en casa pronto?",
    a: "1X Neo Beta vendió las primeras unidades domésticas en EEUU en febrero 2026, $20.000 + cuota. Letra pequeña: un operador humano en Noruega ve por las cámaras del robot durante los primeros meses para entrenar. Año o dos para empezar a verlos en serio.",
    href: "/agi",
  },
  {
    id: "fu-2",
    bloque: "futuro",
    nivel: "practicante",
    q: "¿Qué tecnología debería aprender ya si trabajo en una pyme?",
    a: "Hoy: usar bien un chatbot del top (ChatGPT/Claude/Gemini), saber pegar PDFs, sacarle prompts decentes. En 6 meses: NotebookLM para documentación interna, una herramienta de imagen para marketing. En 1-2 años: un agente que coordine emails/pedidos.",
    href: "/herramientas",
  },
  {
    id: "fu-3",
    bloque: "futuro",
    nivel: "profundo",
    q: "¿Es el escenario AI-2027 plausible?",
    a: "Kokotajlo et al. (abril 2025): agentes generalizados 2026, codificación automatizada 2027, intelligence explosion fin 2027. El paper es serio y los autores tienen track record. Hay críticas técnicas (escalado no garantizado, falta de roadmap robótico). Plausible como límite superior, no como base.",
    href: "/explorar/problemas-y-dilemas",
  },
];

export const bloqueLabels: Record<Pregunta["bloque"], { label: string; color: string }> = {
  fundamentos: { label: "Fundamentos", color: "var(--color-cool)" },
  prompting: { label: "Cómo hablarle", color: "var(--color-warn)" },
  privacidad: { label: "Privacidad", color: "var(--color-bad)" },
  arte: { label: "Arte y copyright", color: "var(--color-hot)" },
  ambiente: { label: "Ambiente", color: "var(--color-good)" },
  empleo: { label: "Empleo", color: "var(--color-accent)" },
  agentes: { label: "Agentes", color: "var(--color-cool)" },
  deepfakes: { label: "Deepfakes", color: "var(--color-bad)" },
  luminoso: { label: "Lado luminoso", color: "var(--color-good)" },
  agi: { label: "AGI", color: "var(--color-hot)" },
  futuro: { label: "Futuro", color: "var(--color-accent)" },
};

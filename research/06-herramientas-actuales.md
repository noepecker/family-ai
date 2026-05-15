# Bloque 8 — Ecosistema actual de IA (mayo 2026)

> Panorama de herramientas para una charla familiar. Cada sección termina con "por qué importa" para que la familia entienda qué les afecta.

## 1. Chatbots para el público general

| Herramienta | Plan gratis | Plan de pago | Por qué importa |
|---|---|---|---|
| **ChatGPT** (OpenAI) | GPT-5 con límites | Plus ~$20, Pro ~$200 (razonamiento avanzado, agentes) | Sigue siendo la puerta de entrada más usada |
| **Claude** (Anthropic) | Sonnet con límites | Pro ~$20, Max ~$100–200 | Destaca en escritura, código y razonamiento cuidadoso |
| **Gemini** (Google) | Integrado en Android, Gmail, Docs | Advanced ~$20 vía Google One AI Premium | Viene "de serie" para millones vía Android/Workspace |
| **Copilot** (Microsoft) | En Windows 11/12, Edge | Pro / M365 Copilot | Aparece en el trabajo sin pedirlo |
| **Meta AI / WhatsApp** | Gratis dentro de WhatsApp, IG, FB | — | Llega a abuelos sin instalar nada |
| **Grok** (xAI) | Con X Premium | — | Menos filtros, datos de X en tiempo real |
| **DeepSeek, Qwen, Mistral** | Web/app gratis | — | Rompen el monopolio USA, presionan precios a la baja |
| **Perplexity** | Gratis | Pro ~$20 | Buscador conversacional con fuentes citadas |

## 2. Creación creativa

### Imagen
- **Midjourney** — calidad artística top, vía web.
- **DALL-E / GPT-Image** — ya integrado solo en ChatGPT.
- **Imagen (Google)** — destaca en escribir texto dentro de imágenes.
- **Stable Diffusion / Flux** — open-weight, se ejecuta en local.
- **Ideogram** — especialista en tipografía y logos.

### Vídeo
- **Sora** (OpenAI) — clips cortos con audio sincronizado.
- **Veo 3** (Google) — integrado en YouTube Shorts.
- **Runway, Kling (Kuaishou), Hailuo (MiniMax), Pika** — competencia muy fuerte, especialmente la china.
- **Estado real**: usable para anuncios, intros, memes; aún **no** sustituye producción narrativa larga.

### Audio y voz
- **ElevenLabs** — estándar de voces clonadas y doblaje multilingüe (úsalo para la demo).
- **Suno, Udio** — canciones completas desde un prompt. Suno V4+/V5 muy realistas.
- **NotebookLM** (Google) — convierte documentos en **podcasts conversacionales**. Gratis. Tremendo para abuelos que prefieren escuchar.
- **HeyGen, Synthesia** — avatares parlantes para vídeo.

### Demo sugerida para la charla
- Clonar la voz de Noe/Marcos con ElevenLabs y traducir un saludo al inglés/chino.
- Generar la "canción del Trío Calavera" con Suno.
- Generar un podcast con NotebookLM a partir de un PDF familiar.

## 3. Herramientas de developer / power user

- **Cursor** — IDE basado en VSCode con IA profunda. Líder del segmento.
- **Windsurf** (Codeium) — competidor directo.
- **Zed** — editor nativo rápido con AI.
- **Claude Code** (CLI de Anthropic) — herramienta de terminal que ejecuta tareas reales: lee/escribe ficheros, corre comandos, navega repos. Soporta plan mode, subagents, skills. **Es lo que estoy usando ahora mismo para preparar esta charla.**
- **GitHub Copilot** — el veterano; modo agente y multi-modelo.
- **Vibe coding** — término acuñado por **Andrej Karpathy** en febrero 2025 ("there's a new kind of coding I call 'vibe coding', where you fully give in to the vibes"). Programar describiendo intención sin leer el código.
  - Herramientas: **v0** (Vercel), **Bolt** (StackBlitz), **Lovable**, **Replit Agent**.
- **Agentes autónomos**: AutoGPT (histórico), Devin (Cognition), OpenAI Operator / ChatGPT Agent, Anthropic Computer Use.

## 4. Modelos locales y privacidad

- **Ollama** — `ollama run llama3` y ya. Multiplataforma.
- **LM Studio** — interfaz gráfica para descargar y chatear con modelos locales.
- **llama.cpp** — el motor C++ que hay debajo de casi todo.

### Hardware necesario
- **Mac con Apple Silicon** — memoria unificada permite cargar modelos grandes. Un Mac con 64–128 GB corre modelos de 70B parámetros decentemente.
- **PC con GPU NVIDIA** — lo que cuenta es la **VRAM**: 8 GB para 7–8B, 24 GB (RTX 4090/5090) para 30B, multi-GPU para 70B+.

### Cuándo merece la pena local
- Privacidad (datos médicos, jurídicos, código confidencial).
- Sin conexión, sin costes recurrentes.
- Experimentación sin límites.
- **NO** merece la pena si quieres lo más potente: la nube sigue ganando en capacidad.

### Apple Intelligence
- Suite on-device en iPhone 15 Pro+, iPad y Mac con Apple Silicon.
- Resumen de notificaciones, reescritura, Genmoji, Image Playground.
- Delega a ChatGPT con permiso explícito.
- **Importa porque** normaliza IA local en el bolsillo de millones de personas.

## 5. Glosario para entender las noticias

| Palabra | Qué es | Por qué importa |
|---|---|---|
| **LLM** | *Large Language Model*: modelo grande de lenguaje, entrenado con enormes cantidades de texto | Es la pieza central de la IA generativa actual; predice la siguiente palabra |
| **GPT** | *Generative Pre-trained Transformer*: la familia de modelos de OpenAI | Hoy se usa casi como sinónimo de chatbot de IA |
| **Transformer** | La arquitectura interna sobre la que se construyen todos los LLM | Nació en 2017 con *"Attention Is All You Need"* (Google) |
| **Token** | Trozo de texto (~4 caracteres o media palabra) que procesa el modelo | Las APIs se facturan por tokens |
| **Ventana de contexto** | Cuánto texto "ve" el modelo a la vez | En 2026 ya hay modelos con 1M tokens (un libro entero) |
| **Parámetros** | "Neuronas" del modelo | Más no siempre es mejor; arquitectura y datos importan igual |
| **RAG** | Modelo que **busca documentos** antes de responder | Así funcionan los chatbots de empresa que conocen tus PDFs |
| **Fine-tuning** | Reentrenar un modelo con datos propios | Especialización de tono, jerga, dominio |
| **MCP** (Model Context Protocol) | Estándar abierto de Anthropic adoptado por OpenAI, Google, Microsoft en 2025 | El "USB-C de las herramientas IA": permite conectar cualquier app a cualquier modelo |
| **Tools** | Funciones que el modelo puede llamar | Lo que convierte un chatbot en un agente |
| **Skills** | Paquetes de instrucciones + recursos reutilizables (concepto Anthropic) | Como "apps" para agentes |
| **Agente** | Modelo que usa tools en bucle hasta lograr un objetivo | El siguiente paso después del chatbot |
| **Benchmark** | Examen estándar para comparar modelos (MMLU, GPQA, SWE-bench) | Útil pero "gameable"; mirar varios |
| **Multimodal** | Modelo que entiende texto + imagen + audio + vídeo | En 2026 es lo normal en los top |
| **Reasoning model** | Modelo que "piensa antes de hablar" generando pasos internos | o1/o3 (OpenAI), Claude extended thinking, DeepSeek R1 |
| **Alucinación** | Inventarse información con confianza | El problema número 1 sin resolver |
| **Preentrenamiento** | La fase más cara: el modelo lee internet y ajusta sus parámetros prediciendo palabras tapadas | Es donde el modelo "aprende" el mundo; cuesta cientos de millones |
| **RLHF** | *Reinforcement Learning from Human Feedback*: personas puntúan respuestas para enseñar al modelo cuáles son buenas | Por eso el chatbot responde con el tono y formato que conocemos |
| **Prompt** | Lo que le escribes al modelo: tu instrucción o pregunta | La calidad del prompt determina la calidad de la respuesta |
| **Inferencia** | Usar el modelo ya entrenado: le das texto y genera la respuesta | Es lo que ocurre cada vez que escribes a un chatbot |
| **Temperatura** | Ajuste que controla cuánto arriesga el modelo al elegir la siguiente palabra | Baja: respuestas predecibles. Alta: más creativas y variables |
| **Difusión** | Técnica detrás de la IA de imagen y vídeo: parte de ruido y lo "limpia" hasta la imagen | Cómo funcionan Midjourney, Sora, Flux |
| **Embedding** | Convertir texto en una lista de números que captura su significado | Permite al modelo comparar y relacionar ideas; base del RAG |
| **GPU** | El chip que hace en paralelo los cálculos de la IA | Entrenar y usar modelos grandes exige miles de GPU |
| **Centro de datos** | Las naves llenas de servidores y GPU donde se entrena y ejecuta la IA | Consumen mucha electricidad y agua |
| **Deepfake** | Imagen, vídeo o audio falsos generados por IA que imitan a una persona real | Base de fraudes y desinformación |

## 6. Mensajes de cierre por audiencia

- **Abuelos / tíos**: usad la IA dentro de **WhatsApp** o **Gemini en el móvil**. Ya está ahí, gratis, sin instalar nada.
- **Padres / profes**: probad **NotebookLM** para resumir documentos y generar podcasts; **Perplexity** en vez de Google para temas serios.
- **Primos developers / curiosos**: **Claude Code** o **Cursor** cambian cómo se programa; aprended **MCP** porque será el protocolo de los próximos años.
- **Todos**: lo local con **Ollama** es viable y privado; la nube sigue ganando en capacidad pura.

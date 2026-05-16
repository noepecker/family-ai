# Bloque — Qué es la IA y cómo "aprende"

> Profundidad de charla. Material listo para leer. Cubre los primeros 20-25 minutos de la sesión: desde "esto no es nuevo" hasta "cómo funciona un LLM por dentro" pasando por la curiosidad de microGPT (la genealogía de Karpathy).

## 1. La IA no nace con ChatGPT — viene de muy atrás

### El punto que más sorprende a la familia

Cuando se habla de "IA" en las noticias de 2026, casi siempre se refieren a la **IA generativa** — ChatGPT, Claude, Midjourney, Sora. Pero **la inteligencia artificial lleva en nuestra vida décadas**, sin que la llamemos así.

- Cuando tu Gmail mete un mensaje en spam: eso es IA. Concretamente, un **clasificador estadístico** entrenado con millones de correos etiquetados.
- Cuando Netflix te sugiere una serie: IA. Un **sistema de recomendación** basado en lo que tú viste y lo que vio gente parecida a ti.
- Cuando llamas a tu banco y "te puedo entender, dime tu DNI": IA. **Reconocimiento de voz** entrenado con cientos de miles de horas de audio.
- Cuando tu coche aparca solo o frena por sorpresa: IA. **Visión por computador**.
- Cuando Siri o Alexa te responden: IA. Llevamos así desde 2011.
- Cuando Google detecta el rostro de tu hija en una foto de hace 10 años: IA.

**El cambio de 2022** no es que llegara la IA, es que la IA empezó a **crear** cosas nuevas: texto, imagen, vídeo, código, música. Por eso le llamamos generativa.

### Las 4 familias que conviven hoy

| Familia | Qué hace | Cuándo nació | Ejemplos cotidianos |
|---|---|---|---|
| **IA simbólica / reglas** | "Si pasa esto, haz esto otro". El humano escribe las reglas a mano | Años 50-80 | Termostato programable, semáforos inteligentes, jugadas del Tetris, asistentes Help antiguos |
| **Machine learning clásico** | Aprende patrones a partir de datos (regresión, árboles, SVM, random forest) | Años 90-2010 | Filtro de spam Gmail, recomendaciones Netflix, detección de fraude bancario, scoring de crédito |
| **Deep learning** | Redes neuronales profundas. Es ML clásico llevado al extremo con muchas capas | 2012-2017 | Reconocimiento facial del móvil, Google Translate (desde 2016), Alexa/Siri, diagnóstico médico por imagen |
| **IA generativa (LLMs, difusión)** | No solo analiza: **crea** texto, imagen, audio, vídeo, código nuevo | 2017-hoy | ChatGPT, Claude, Midjourney, Sora, Suno |

**Mensaje clave para la charla**:
> "Tu correo lleva con IA desde 2005, tu Netflix desde 2010, tu móvil desde 2014. Lo que cambió en noviembre de 2022 con ChatGPT no es que **apareciera** la IA, es que la IA empezó a **crear cosas**. Y por eso, de repente, está en todas partes."

### Cronología visual completa

| Año | Hito | Por qué importa para la familia |
|---|---|---|
| 1950 | Alan Turing propone el "Test de Turing" | La pregunta fundadora: ¿puede una máquina pensar? |
| 1956 | Conferencia de Dartmouth: nace el término *"Artificial Intelligence"* | Primer programa de investigación organizado |
| 1997 | Deep Blue (IBM) gana a Garry Kasparov al ajedrez | Primera derrota humana en un dominio cognitivo simbólico |
| 2011 | Watson (IBM) gana en Jeopardy! / Lanzamiento de Siri con el iPhone 4S | La IA llega al salón de casa por primera vez |
| 2012 | AlexNet revoluciona la visión por computador en el ImageNet challenge | **El big bang del deep learning** |
| 2016 | AlphaGo (DeepMind) gana a Lee Sedol al Go | El Go era considerado "imposible" para la IA |
| **junio 2017** | Google publica *"Attention Is All You Need"*. Nace la arquitectura **Transformer** | **La base de todos los LLMs actuales** |
| 2018 | OpenAI lanza GPT-1; Google lanza BERT | Empieza la carrera de los modelos de lenguaje grandes |
| 2020 | GPT-3 demuestra que escalar funciona | Primer modelo que "asusta" a los investigadores |
| **30 noviembre 2022** | Lanzamiento público de ChatGPT | **La IA se vuelve mainstream en una semana** |
| 2023 | GPT-4, Bard, Claude, Llama. Demos como GPT-4 contratando humanos en TaskRabbit | El año en que toda empresa quiso "IA" |
| 2024 | Razonamiento (o1 de OpenAI), agentes, multimodalidad, vídeo generativo (Sora) | La IA empieza a "pensar" antes de responder |
| 2025 | Claude Computer Use, MCP estándar, Project Vend, Vibe coding, Karpathy "Software 3.0" | La IA empieza a actuar (no solo a hablar) |
| 2026 (hoy) | Modelos como GPT-5.5, Claude Opus 4.7. ARC-AGI-2 casi resuelto. microGPT de Karpathy en 200 líneas | El año en que la curva sigue empinada |

## 2. Centrémonos en la IA generativa — todos los tipos

### Por modalidad de entrada y salida

Cualquier combinación es viable hoy. Las fronteras dejaron de ser técnicas para ser de calidad y precio.

| Entrada → Salida | Ejemplo de herramienta | Para qué se usa |
|---|---|---|
| **Texto → Texto** | ChatGPT, Claude, Gemini | Conversación, redacción, traducción, código |
| **Texto → Imagen** | Midjourney, DALL-E (dentro de ChatGPT), Imagen (Google), Flux | Ilustración, mockups, memes, fotos sintéticas |
| **Texto → Vídeo** | Sora (OpenAI), Veo 3 (Google), Kling, Runway, Hailuo | Anuncios, intros, animaciones cortas |
| **Texto → Audio (voz)** | ElevenLabs, OpenAI TTS | Doblaje, audiolibros, contestadores |
| **Texto → Música** | Suno, Udio | Canciones completas con letra |
| **Imagen → Texto** | Cualquier LLM multimodal | Descripción de imagen, lectura de tickets, OCR avanzado |
| **Audio → Texto** | Whisper (OpenAI), Gemini | Transcripción, subtítulos |
| **Voz → Voz** (clonación, traducción) | ElevenLabs, HeyGen | Doblaje manteniendo tu voz, asistentes personalizados |
| **Documento → Podcast** | NotebookLM (Google) | Audio de 15 min explicando un PDF |
| **Texto → 3D / CAD** | Meshy, Tripo | Modelos para imprimir 3D o videojuegos |
| **Texto → Código** | Claude Code, Cursor, Copilot | Programación asistida |

### Cómo presentarlo en la charla

> "Pensad en una matriz donde podéis poner cualquier tipo de información a la entrada — texto, voz, foto, vídeo, audio — y obtener cualquier otra cosa a la salida. **Hoy en 2026, todas las casillas de esa matriz funcionan**. Algunas mejor que otras, pero todas funcionan. Esa es la diferencia con hace solo 5 años, cuando solo funcionaba 'texto → texto'."

### Por qué los LLMs son la pieza central

Aunque hablemos de "generación de vídeo" o "generación de imagen", **dentro hay siempre un LLM** entendiendo lo que le pediste y guiando el resto del proceso. Los modelos de imagen como Flux o vídeo como Sora tienen un LLM interpretando tu prompt. Los agentes que usan el ordenador (Anthropic Computer Use, ChatGPT Agent) son LLMs decidiendo qué clickear.

**Por eso esta charla se centra en los LLMs**: son la pieza fundacional sobre la que se monta todo lo demás.

## 3. Cómo funciona un LLM — el autocorrector x 10.000.000.000

### La metáfora central

El teclado del móvil predice **la siguiente palabra** basándose en las 2-3 anteriores. Un LLM hace exactamente lo mismo, pero con superpoderes:

- Ha **leído billones de palabras**: prácticamente todo internet en inglés y muchas otras lenguas, todos los libros digitalizados disponibles, código de GitHub, transcripciones de YouTube, papers académicos, Wikipedia entera...
- Mantiene en la cabeza **un millón de palabras de contexto** (no solo las 3 últimas). Eso es **un libro entero**.
- Tiene **miles de millones de "neuronas" artificiales** (parámetros) que pesan cada decisión.

**No razona, no piensa, no tiene consciencia**: es **estadística aplicada a una escala monstruosa**.

### Cómo se entrena un LLM — los pasos reales

#### Paso 1 — Pre-entrenamiento (lo más caro)

Se le da al modelo **todo internet más todos los libros disponibles**. Se le tapa una palabra al azar en una frase. Se le pide que adivine cuál era. Se compara con la real. Si se equivoca, se ajustan internamente los "pesos" para que la próxima vez tenga más probabilidad de acertar.

Esto se repite **trillones de veces**. El modelo descubre patrones cada vez más sutiles:
- "Casa con" → probabilidad alta de "jardín, ventanas, vistas".
- "El presidente de Francia es..." → probabilidad alta de un nombre político actual.
- "2 + 2 =" → probabilidad alta de "4".
- "Capítulo 3 de 'Don Quijote': aventura del..." → probabilidad alta de "molinos de viento".

Coste real:
- Entrenar **GPT-3 (2020)**: ~$5M en compute.
- Entrenar **GPT-4 (2023)**: del orden de **$100M**.
- Entrenar **Claude Opus 4 / GPT-5 (2025)**: probablemente **>$1.000M** cada uno.

#### Paso 2 — Fine-tuning supervisado (SFT)

Después del pre-entrenamiento, el modelo "sabe mucho" pero responde de manera caótica. Aquí entran los humanos a darle ejemplos de "buena respuesta": pregunta + respuesta ideal. El modelo aprende el estilo de un asistente.

Aquí es donde entran los **anotadores en Kenia, Filipinas, Venezuela** cobrando poco. Por eso ChatGPT te responde con la estructura típica que conocemos (introducción, lista con bullets, conclusión): porque humanos le enseñaron ese formato como "bueno".

#### Paso 3 — RLHF (Reinforcement Learning from Human Feedback)

Humanos comparan **dos respuestas del modelo a la misma pregunta** y eligen cuál es mejor. El modelo aprende a preferir el tipo de respuestas que humanos puntúan mejor. Resultado: respuestas educadas, útiles, no ofensivas.

#### Paso 4 (Anthropic) — Constitutional AI

El propio modelo critica sus respuestas según una "constitución" escrita por humanos (cosas como "no des consejos dañinos, sé honesto, no te hagas pasar por humano"). Reduce la necesidad de humanos en el loop.

#### Paso 5 — Reasoning training (desde 2024)

Modelos como o1 / o3 de OpenAI o Claude Extended Thinking se entrenan **adicionalmente** para "pensar en voz alta" antes de responder. El modelo genera pasos intermedios de razonamiento, evalúa varias rutas, descarta las malas, y solo entonces responde. Esto multiplica el coste por consulta pero mejora drásticamente las tareas de matemáticas, código y lógica.

### Cómo "retiene" la información

**Esto es lo que más confunde a la familia, conviene contarlo con calma.**

- El modelo **NO tiene una base de datos** dentro. La información está *codificada* en los **pesos** de la red neuronal, igual que un cerebro no tiene archivos en carpetas.
- Si le preguntas "¿en qué año nació Cervantes?" el modelo no consulta una base de datos. Recuerda — más o menos — el patrón estadístico de que cuando aparece "Cervantes nació en" la siguiente palabra suele ser "1547". A veces se equivoca un año.
- **No tiene memoria entre conversaciones por defecto**. Cada chat empieza de cero. ChatGPT Memory y Claude Projects son **trucos**: guardan resúmenes de conversaciones previas y se los pasan al modelo al empezar.
- **No se actualiza** después del entrenamiento. Por eso tiene "fecha de corte de conocimiento". Si quieres saber qué pasó esta semana necesita **buscar en internet** como herramienta externa.

### Cómo genera texto — paso a paso

1. Tú escribes un prompt.
2. El modelo lee todo el prompt + la conversación previa.
3. Calcula la **probabilidad** de cada posible **token** (palabra o trozo de palabra) que pueda venir a continuación. Decenas de miles de candidatos cada vez.
4. Elige uno (con cierta aleatoriedad, llamada **temperatura**: a 0 elige el más probable; a 1 baraja entre los probables; a 2 ya saca cosas raras).
5. Añade ese token a la conversación.
6. Vuelve al paso 2 con el nuevo token incluido.
7. Continúa hasta que decide parar (con un token especial "fin") o tú interrumpes.

**Por eso a veces parece "pensativa"**: cada palabra implica recorrer una red neuronal de miles de millones de parámetros. Y por eso **es lenta**: un párrafo puede ser 100 tokens × pasada completa de la red por cada uno.

### Cuándo es fiable y cuándo no

| Fiable en | Poco fiable en |
|---|---|
| **Transformar texto que le das** (resumir, parafrasear, traducir) | Datos concretos fechas, cifras, citas literales |
| Traducir entre idiomas comunes | Hechos recientes (post fecha de corte) |
| Reescribir, mejorar redacción | Matemáticas complejas (sin reasoning mode activado) |
| Programar tareas conocidas | Citas literales (las inventa con confianza) |
| Estructurar ideas, generar listas | Tu vida personal (no la conoce a no ser que se la cuentes) |
| Explicar conceptos generales | Datos locales (qué farmacia abre hoy en tu pueblo) |
| Brainstorming, ideas | Decisiones médicas, legales, financieras serias |

**Regla de oro**: si la respuesta está **dentro del prompt** o es una **tarea de transformar texto**, está bien. Si le pides "datos del mundo real" sin que tenga acceso a internet, **verifica antes de fiarte**.

### Capacidades emergentes

Aquí está la parte que de verdad sorprendió a los investigadores. A un modelo de lenguaje se le entrena para **una sola cosa**: predecir la siguiente palabra. No se le programa para traducir, ni para resumir, ni para escribir código. Solo eso.

Pero cuando ese mismo entrenamiento se hace a lo grande —con cantidades enormes de texto **de todo tipo**: libros, código, foros, Wikipedia, conversaciones, artículos en decenas de idiomas— el modelo, sin que nadie se lo enseñe explícitamente, empieza a hacer cosas que no estaban en el plan:

- **Traducir** entre idiomas, sin un diccionario dentro.
- **Programar**: escribir código que funciona a partir de una frase.
- **Resumir** un texto largo en cuatro líneas.
- **Razonar paso a paso** ante un problema que no había visto.
- **Imitar un estilo** de escritura concreto.
- **Explicar** un concepto adaptándolo a quien pregunta.

A esto se le llama **capacidades emergentes**: habilidades que *aparecen* al aumentar la escala (más datos, más parámetros, más cómputo), sin haber sido diseñadas. El salto se hizo visible con **GPT-2 (2019)** y se volvió innegable con **GPT-3 (2020)**. Es, en buena medida, la razón por la que la IA pasó de ser una herramienta de nicho a estar, de repente, en todas partes.

Conviene un matiz honesto: hay debate académico sobre si algunas de estas capacidades "emergen" de golpe o si simplemente mejoran de forma gradual y lo que cambia es cómo lo medimos. Pero el hecho de fondo no se discute: nadie programó al modelo para traducir o programar, y aun así lo hace.

## 4. La curiosidad central: microGPT (Karpathy, febrero 2026)

### Por qué importa esta curiosidad

Cuando se habla de IA, mucha gente piensa que es magia incomprensible: que dentro de OpenAI hay una caja negra alienígena cuyo código nadie sabe. **Es exactamente lo contrario**. La arquitectura básica es sorprendentemente simple. Lo que cambia es la **escala de datos y de cómputo**, no el algoritmo.

### microGPT — el GPT en una pantalla

**Andrej Karpathy** (ex-Tesla, ex-OpenAI, ex-Stanford, divulgador estrella) publicó el **12 de febrero de 2026** un proyecto llamado **microGPT**:

- URL: <http://karpathy.github.io/2026/02/12/microgpt/>
- Gist en GitHub: <https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95>
- **200 líneas de Python puro**. Sin librerías, sin PyTorch, sin TensorFlow. Solo Python estándar.
- Contiene **todo**: dataset, tokenizer, motor de autograd casero (heredado de su proyecto anterior, **micrograd**), arquitectura tipo GPT-2 con atención multi-cabeza, optimizador Adam, bucle de entrenamiento, bucle de inferencia.

### Qué aprende microGPT

Se le da el fichero **`names.txt`**: 32.000 nombres reales del Social Security Administration estadounidense. Cosas como *Emma, Mateo, Sofia, Liam, Aisha, Diego*...

Tras **1.000 pasos de entrenamiento** (que duran un par de minutos en un portátil normal), la "loss" (qué tan mal predice) baja de **3,3** (azar) a **2,37**. El modelo, con sus 4.192 parámetros (un tamaño minúsculo), empieza a generar **nombres nuevos plausibles**:

- *Liora*
- *Maelin*
- *Cassen*
- *Adari*

No son nombres reales: el modelo no los ha visto en el dataset. Los inventa **siguiendo los patrones fonéticos** que encontró: combinaciones de letras que "suenan a nombre" porque vio 32.000 ejemplos de qué letras siguen a qué letras en nombres reales.

### Por qué esto desmitifica la IA

Lo que microGPT hace con nombres y 4.192 parámetros, **ChatGPT lo hace con texto general y 1,7 billones de parámetros**. La arquitectura es la misma. El algoritmo es el mismo. La pieza secreta no es un código alienígena: son **los datos, el cómputo y la escala**.

**Frase para la charla**:
> "El mes pasado, Andrej Karpathy publicó un GPT en 200 líneas de Python. **Sin ninguna librería, solo Python puro**. Le das un fichero con 32.000 nombres reales — Emma, Mateo, Sofia... — y al cabo de unos minutos en un portátil normal empieza a **inventar nombres nuevos que suenan a nombres**: Liora, Maelin, Cassen. No los ha visto nunca, los está fabricando porque ha aprendido qué letras suelen seguir a qué letras en nombres reales. **La arquitectura es exactamente la misma que está dentro de ChatGPT**. La diferencia con ChatGPT no es la fórmula, son los datos y la escala. Eso es lo único distinto. La IA no es magia: es **mucha estadística y mucho poder de cómputo**."

### La genealogía de los proyectos minimalistas de Karpathy

Para los curiosos de la familia (los developers, los adolescentes con curiosidad), la genealogía completa es una historia bonita:

| Proyecto | Fecha | Líneas | Qué hace |
|---|---|---|---|
| **micrograd** | 2020 | ~150 | El motor de gradientes. *"94 lines is all you need to train a neural network"* (tuit famoso de Karpathy 2024) |
| **makemore** | sep 2022 | ~600 (multi-modelo) | El antecesor pedagógico. 7 arquitecturas distintas, también con nombres |
| **nanoGPT** | ene 2023 | ~600 | Reproduce GPT-2 entero, usando PyTorch |
| **nanochat** | oct 2025 | ~8.000 | "ChatGPT por $100": un ChatGPT entrenable end-to-end en 4 horas en un nodo 8×H100 |
| **microGPT** | **feb 2026** | **200** | **El GPT mínimo en una pantalla**, sin librerías. Aprende a generar nombres |

## 5. ¿Cómo se entrenan modelos de imagen, vídeo y audio?

### Imágenes — los modelos de difusión

Funcionan al revés de lo que la intuición sugiere. **Se les enseña a quitar ruido**.

1. Toma una foto real (digamos: un gato).
2. Le añade un poquito de ruido (estática como una tele vieja).
3. Le añade más ruido.
4. Le añade más...
5. Al cabo de 50-100 pasos, la imagen es **pura estática** sin forma reconocible.
6. Ahora entrenas a una red neuronal a **deshacer ese proceso paso a paso**: dado el ruido y un texto que describe lo que había, recupera la imagen original.
7. Una vez entrenada con millones de fotos: le das **ruido aleatorio + un prompt** ("un gato astronauta en Marte") y revela una imagen totalmente nueva que encaja con el prompt.

**Por qué a veces "alucina" 6 dedos o manos raras**: la difusión no entiende anatomía, solo **patrones estadísticos de cómo se distribuyen píxeles**. Si los datos de entrenamiento tienen variedad en cómo se ven las manos, el modelo no consolida bien una sola idea de "mano".

### Vídeo

Igual que imágenes pero añadiendo la dimensión **tiempo**: el modelo aprende qué cambia frame a frame y mantiene coherencia temporal. Es muchísimo más caro computacionalmente: por eso un vídeo de 10 segundos de Sora consume ~1 kWh (el equivalente a una lavadora entera), mientras que una imagen estática consume <0,01 kWh.

Sora, Veo 3, Kling, Runway, Hailuo, Pika: hoy generan hasta 1 minuto coherente. La consistencia entre escenas (que el personaje siga siendo "el mismo") sigue siendo el reto abierto.

### Audio y voz

#### Clonación de voz (ElevenLabs, Voice Engine de OpenAI)
1. Se extrae el **"embedding" o "huella vocal"** a partir de **10-30 segundos** de audio del hablante.
2. El modelo genera audio nuevo sintetizando el espectrograma (la "imagen" del sonido) desde texto, condicionado a esa huella vocal.
3. Resultado: la voz dice cualquier cosa, en cualquier idioma, manteniendo el timbre, acento y entonación de la persona original.

**Caso real para la charla**: en 2024 empezó a haber **estafas masivas** donde llamaban a abuelos imitando la voz del nieto pidiendo dinero "por una emergencia". Con 30 segundos de audio de TikTok o Instagram, basta. **Regla familiar**: si alguien llama con la voz de un familiar pidiendo dinero, **colgar y volver a llamar al número oficial**.

#### Música (Suno, Udio)
Igual pero con instrumentos. Generan directamente la señal de audio o un espectrograma que luego se decodifica.

#### Demos para la charla
- Clonar la voz de Marcos o Noe con ElevenLabs en directo y hacer que "te" hable en inglés, japonés o chino.
- Suno generando una canción del "Trío Calavera" en vivo (pre-renderizada por seguridad).

## 6. Mensajes clave para que se lleven a casa

1. **La IA no es nueva, pero la IA generativa sí es de 2022**. Tu correo lleva con IA desde 2005.
2. **Los LLMs no razonan en sentido humano**: predicen la siguiente palabra basándose en patrones estadísticos de billones de textos.
3. **No tiene memoria entre conversaciones por defecto**. Cada chat empieza de cero.
4. **Aprenden en 5 fases**: preentrenamiento masivo, fine-tuning con humanos, RLHF, constitución (Anthropic), y reasoning (los nuevos modelos tipo o3).
5. **Son fiables transformando texto que les das**. **Poco fiables inventando datos del mundo** sin acceso a internet.
6. **La arquitectura no es magia**: microGPT cabe en 200 líneas y aprende a inventar nombres. La diferencia con ChatGPT es la **escala de datos y cómputo**, no la fórmula.
7. **Los modelos de imagen funcionan al revés**: aprenden a quitar ruido. Por eso fallan en anatomía.
8. **La clonación de voz necesita solo 30 segundos** de audio. Hay que protegerse de estafas.

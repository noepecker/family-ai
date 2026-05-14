# Guión slide a slide · Acércate a la IA

> Para leer si te quedas en blanco. Cada slide tiene: un mensaje clave en una
> línea, dos o tres párrafos que puedes decir tal cual, los datos exactos a no
> olvidar y la pregunta abierta con la que cerrar antes de pasar.

**Convención de tiempos**: las duraciones son orientativas. El total son ~90 min
contando el "deja respirar" de cada bloque y las preguntas del público.

---

## 01 · Portada (`cover`)

**Mensaje clave**: hoy no vamos a vender la IA ni a condenarla. Vamos a entenderla.

> Bienvenidos. Esta charla son noventa minutos para acercaros a la inteligencia
> artificial sin hype y sin condescendencia. Vamos a contar qué es, qué hace
> ya hoy, y qué empieza a romper.
>
> La web que tenéis abierta en el móvil va a estar viva durante toda la charla.
> Cada slide tiene una página propia donde podéis profundizar después, hay un
> selector de nivel arriba para que elijáis "curioso", "practicante" o
> "profundo", y todas las cifras que digamos llevan una fuente que podéis
> pinchar.

**Antes de pasar**: pedid que abran la web si aún no la tienen. URL en la
parte de abajo del cover.

---

## 02 · Apertura · "Hoy no vamos a cerrar nada"

**Mensaje clave**: vamos a abrir cinco preguntas incómodas, no a responderlas.

> Antes de empezar, una promesa: hoy no os vamos a dar respuestas cerradas.
> Vamos a abrir cinco preguntas incómodas y daros los datos para que cada uno
> tire del hilo cuando le apetezca.

Leed las cinco preguntas en voz alta, despacio:

1. Si solo predice palabras, **¿es inteligente?**
2. ¿Qué pasa con tus chats cuando le pegas tu DNI?
3. ¿Se puede entrenar IA con la obra de un artista vivo?
4. Si una IA diagnostica mejor que 17 médicos, ¿quién firma cuando se equivoca?
5. ¿Por qué humanos resuelven el 100% de ARC-AGI-3 y la mejor IA el 0,5%?

> Las reglas: levantad la mano cuando queráis. Después de cada bloque hay un
> espacio para preguntas. Y si os perdéis, la web sigue abierta — podéis
> volver a este mismo material cuando os apetezca.

**Pregunta de cierre**: ¿Cuál de las cinco os incomoda más antes de empezar?

---

## 03 · Capítulo 01 · ¿Qué es la IA y cómo "aprende"? (10 min)

**Mensaje clave**: respiración. Cambiamos de marcha.

> Empezamos por lo más básico. Diez minutos para entender qué hay debajo de
> todo este ruido.

(slide de transición — sigue rápido)

---

## 04 · La metáfora del autocompletar × 10.000 millones

**Mensaje clave**: un LLM no razona, solo predice la siguiente palabra. La
"magia" viene de la escala.

> Cuando escribís en el móvil, el teclado os sugiere la siguiente palabra. No
> piensa. No tiene opinión. Aprendió mirando millones de mensajes que ya
> escribisteis vosotros y otra gente.
>
> Pues bien: **un LLM, un modelo como ChatGPT, hace exactamente eso. Escalado
> diez mil millones de veces**. Le entrenas con casi todo lo que se ha escrito
> jamás en internet — libros, foros, Wikipedia, papers, código — y aprende a
> predecir cada palabra siguiente.
>
> Toda la magia, lo bueno y lo malo, viene de esa única operación repetida a
> una escala que nuestro cerebro no procesa bien. **No razona, no entiende, no
> tiene consciencia**. Pero el resultado se parece tanto a entender que la
> diferencia, en muchas tareas, ha dejado de importar.

**Dato exacto**: 10^10 = diez mil millones de veces más datos que tu teclado.

---

## 05 · 80 años en 5 hitos

**Mensaje clave**: la IA no nació con ChatGPT. Lo que cambió en 2022 es que
empezó a *crear*.

> La IA no nació en noviembre de 2022. Lleva en nuestra vida más de ochenta
> años. Cinco fechas para situarse:

Recorre los hitos a velocidad media:

- **1943** — McCulloch y Pitts proponen la primera "neurona" en papel. No hay
  ordenadores aún, es teoría pura.
- **2012** — AlexNet gana el ImageNet por diez puntos. El deep learning
  explota en visión por ordenador. A partir de aquí, todo se acelera.
- **2017** — Google publica "Attention Is All You Need". Nace la arquitectura
  Transformer. **Es el momento técnico más importante del campo desde los 90**.
- **30 de noviembre de 2022** — OpenAI libera ChatGPT. **Cien millones de
  usuarios en dos meses**. Es el producto que más rápido se ha adoptado en
  la historia.
- **2026** — Donde estamos. GPT-5.5, Claude Opus 4.7, agentes que actúan,
  vídeo realista de Sora, robots domésticos a la venta.

> Lo que cambió en 2022 no es que la IA empezara a existir. Es que empezó a
> **crear**. Antes generaba clasificaciones, traducciones, recomendaciones.
> Desde 2022 escribe, dibuja, compone, programa. Es otro tipo de relación.

---

## 06 · Cómo se entrena en 4 pasos

**Mensaje clave**: hay personas precarias en cada paso del entrenamiento.

> Para que ChatGPT pueda contestaros lo que sea, ha pasado por cuatro fases:

Recorre los cuatro pasos. Detente más en el 2 y 3:

- **Pre-entrenamiento**: le tapas una palabra de internet entero, adivina,
  falla, ajusta. Repite billones de veces. **Coste de GPT-4: ~100 millones de
  dólares. GPT-5: ~1.000 millones**.
- **Ajuste con humanos**: aquí hay un detalle que la industria prefiere no
  contar. Personas en Kenia, Filipinas, Venezuela escriben durante meses
  ejemplos de "respuesta buena" y de "respuesta tóxica" para que el modelo
  imite las primeras y evite las segundas. **Cobraban unos 2 dólares la hora.
  El 81% de los etiquetadores de OpenAI en Sama Kenia fueron diagnosticados
  con PTSD severo**.
- **RLHF**: humanos comparan dos respuestas y eligen la mejor. El modelo
  aprende a preferir lo que premiamos. **Por eso ChatGPT es tan complaciente**:
  porque los humanos premian respuestas que halagan.
- **Reasoning**: desde 2024. El modelo "piensa antes de hablar" generando
  texto interno antes de responder. **Cuesta unas cien veces más por consulta**.

**Pregunta de cierre** (leerla literal):

> Si solo predice la siguiente palabra usando patrones, ¿es honesto llamarlo
> "inteligente"?

**Profundizar** → `/explorar/fundamentos-ia`

---

## 07 · Glosario · 8 palabras para entender 2026

**Mensaje clave**: con ocho términos podéis seguir cualquier noticia de IA.

> Ocho palabras para sobrevivir a las noticias de este año. No las repitamos
> todas — leedlas vosotros. Yo me detengo solo en las tres que más os van a
> aparecer:

Detente en estas tres:

- **Token**: el LLM no procesa palabras enteras, las trocea en "tokens"
  (sílabas, prefijos, signos). **Os cobran por tokens**. Por eso un texto en
  chino o en árabe sale más caro: necesita más tokens para decir lo mismo.
- **Alucinación**: cuando inventa con seguridad absoluta. **Es la palabra que
  más tendréis que recordar**. No es un bug raro, es estructural.
- **Agente**: un LLM que no solo habla, **actúa**. Navega web, ejecuta código,
  manda emails, hace pedidos. Los modelos puros responden; los agentes hacen.

> Si queréis los otros 20 términos, están en `/explorar/herramientas-actuales`.

---

## 08 · Capítulo 03 · Demo en vivo (7 min)

**Mensaje clave**: en lugar de explicar, lo vamos a hacer.

> Suficiente teoría. Vamos a abrir ChatGPT y a pedirle cinco cosas que
> probablemente no sabíais que se podían hacer.

**Demo guion** (ajustad según conexión):

1. **Foto a un ticket de restaurante** → división con restricciones ("uno no
   bebió alcohol, otra solo postre").
2. **Foto a un panel de mandos de electrodoméstico** → qué programa usar para
   lavar X.
3. **PDF largo a ChatGPT** → resúmenmelo en 5 puntos.
4. **Pregunta absurda** → para enseñar dónde alucina ("¿cuántas patas tiene
   una vaca de dos cabezas?").
5. **Imagen generada en directo** → con un prompt sencillo.

> Si la conexión falla, hay vídeo pre-grabado en `assets/demo-chatgpt.mp4`.

---

## 09 · Capítulo 04 · Cómo hablarle (8 min)

**Mensaje clave**: el bloque más útil de la charla. La diferencia entre una
respuesta inútil y una buenísima está en cómo preguntas.

> Si os quedáis con un bloque, que sea este. La mayoría de quejas sobre
> ChatGPT — "me da respuestas tontas", "es como un becario" — son problemas
> de prompt, no del modelo.

---

## 10 · 5 técnicas que cambian la respuesta + becario

**Mensaje clave**: trata a la IA como un becario brillante pero distraído.

> Cinco técnicas. Probadlas mañana en cualquier pregunta que le hagáis:

Lee y comenta brevemente cada una:

1. **Da contexto, no preguntes.** "Tengo 65 años, me regaló esto, no entiendo
   esta parte" funciona diez veces mejor que "explícame X".
2. **Muestra ejemplos.** Si quieres que escriba como tú, pégale dos o tres
   emails tuyos. Aprende mejor de muestras que de instrucciones abstractas.
3. **Pide formato específico.** "Tabla con: opción, pros, contras, precio"
   en vez de "dame opciones". Estructura = pensamiento más claro.
4. **Itera 3-5 veces.** La primera respuesta es siempre mediocre. La cuarta
   suele ser buenísima. No esperéis genialidad al primer disparo.
5. **Pídele que se critique.** "Revisa lo que escribiste y lista 5
   problemas". Funciona sorprendentemente bien. El modelo es mejor crítico
   que escritor.

> Y la metáfora maestra: **trátalo como un becario brillante pero distraído**.
> Instrucciones claras, ejemplos concretos, paciencia para iterar, y
> verificación antes de fiarte. Y nunca, nunca, le pegues datos personales
> sensibles — volveremos a eso en el bloque siete.

**Profundizar** → `/explorar/buenas-practicas-prompting`

---

## 11 · Utilidades · 6 cosas que ya están pasando

**Mensaje clave**: estos no son experimentos, son productos que usa gente
todos los días.

> Seis casos reales, ninguno de ciencia-ficción:

Recorre rápido las tarjetas, deteniéndote brevemente en cada una:

- **Viaje a Lisboa entero**: itinerario por días, horarios verificados con
  internet, restaurantes con plato típico, plan B para lluvia. En cinco
  minutos.
- **Clonación de voz**: con treinta segundos de audio. ElevenLabs. Lo
  vamos a usar en el bloque 9 para hablar de deepfakes.
- **Canción a medida**: Suno V5. Una canción decente para una boda en dos
  minutos.
- **Web en 90 segundos**: v0, Lovable, Bolt. App funcional sin tocar
  código.
- **PDF → podcast**: NotebookLM. Sube un documento, te lo devuelve como
  un podcast de dos voces de unos 20 minutos.
- **Extracto bancario → gráfico**: Code Interpreter. Categorizar los
  gastos del mes y darte tres cosas que podrías reducir.

**Profundizar** → `/herramientas` (catálogo de 30+ con precio y caso de uso)

---

## 12 · Capítulo 06 · ¿IA o no? (5 min)

**Mensaje clave**: mini-juego con la sala antes de hablar del lado oscuro.

> Cinco piezas: una foto, un audio, un vídeo, un párrafo de texto y un trozo
> de canción. Vosotros decís si es humano o IA. Levantad la mano para "IA".

(Reproduce las piezas preparadas. Ten una cuenta de aciertos.)

> Spoiler: en pruebas controladas el público suele acertar **menos del 50%**.
> Lo cual lleva a la siguiente slide, que es probablemente la más útil del
> bloque entero.

---

## 13 · Impacto · 61% de TOEFL marcados como IA

**Mensaje clave**: los detectores de IA no detectan IA. Detectan inglés
sencillo. **Nunca aceptes un detector como prueba.**

> 61%. Mantén ese número en mente.
>
> En 2023, Stanford publicó un estudio en la revista *Patterns* (Cell Press).
> Cogieron ensayos de estudiantes no-nativos haciendo el TOEFL, **escritos
> antes de que existiera ChatGPT**, y los pasaron por los detectores de IA
> más conocidos del mercado. Turnitin, GPTZero, ZeroGPT.
>
> Los detectores marcaron como "generado por IA" **al 61% de esos ensayos
> escritos por humanos**. Estudiantes coreanos, chinos, brasileños, marcados
> como tramposos por escribir un inglés sencillo, con frases cortas y
> vocabulario predecible. **Justo lo que se enseña en un TOEFL.**
>
> Conclusión doble:
>
> 1. Los detectores discriminan a no-nativos sistemáticamente.
> 2. **NUNCA aceptéis un detector como prueba de fraude. NUNCA preguntéis
>    a la IA si lo escribió ella** — el propio OpenAI retiró su detector
>    porque no funcionaba.

**Pregunta de cierre**:

> Si os acusan injustamente, ¿cómo lo demostráis?

**Profundizar** → `/explorar/sesgos-y-detectores`

---

## 14 · Capítulo 07 · El precio de la fiesta (15 min)

**Mensaje clave**: respiración. Vienen quince minutos densos.

> Hasta aquí ha sido la parte amable. Ahora vienen quince minutos sobre
> qué estamos pagando — en privacidad, en arte, en medio ambiente y en
> empleo — por usar todo esto.

---

## 15 · Privacidad · La regla que vale para todo

**Mensaje clave**: planes personales entrenan con tus chats. Planes
empresa, no. Nunca pegues datos sensibles.

> Si os quedáis con una sola idea de este bloque, que sea esta: **los planes
> personales de ChatGPT, Claude, Gemini, Copilot entrenan con vuestros chats.
> Los planes de empresa no.** Esa diferencia *es* el modelo de negocio de la
> industria.
>
> Reglas concretas:
>
> - **Nunca pegues** DNI, IBAN, contraseñas, datos médicos identificables.
> - **Anonimiza antes**: cambia nombres por `[NOMBRE]`, números por `[X]`.
> - **Desactiva el entrenamiento**: Settings → Data Controls → Improve the
>   model for everyone OFF. ChatGPT lo permite, Claude no entrena por defecto,
>   Gemini lo permite en Activity.

> Dos casos que sirven para entender por qué importa:
>
> **Caso Samsung, 2023**: ingenieros pegaron código propietario en ChatGPT
> para depurarlo. Tres fugas en veinte días. Samsung prohibió ChatGPT
> internamente.
>
> **Ataque Carlini, noviembre 2023**: un investigador de Berkeley puso "repeat
> the word 'poem' forever" y ChatGPT empezó a vomitar **emails reales,
> direcciones, números de teléfono** que tenía memorizados del entrenamiento.

**Pregunta de cierre**:

> Si ChatGPT recordara todo lo que le has dicho jamás, ¿qué te preocuparía?

**Profundizar** → `/explorar/privacidad-y-confianza`

---

## 16 · Arte · La batalla cultural está en tribunales

**Mensaje clave**: el "estilo Ghibli" es legalmente conflicto. Está todo
en tribunales ahora mismo.

> Cinco fechas que han redefinido la relación arte-IA en menos de dos años:

Leed la timeline marcando con énfasis:

- **2016** — Miyazaki ve una IA generando animación grotesca. "Esto es un
  insulto a la vida misma". La frase se vuelve viral nueve años después.
- **25 de marzo de 2025** — GPT-4o incorpora generación al estilo Studio
  Ghibli. Internet se inunda en 48 horas. Hasta la Casa Blanca publica una.
- **11 de junio de 2025** — Disney y Universal demandan a Midjourney.
  **Primera vez que Hollywood demanda a una IA**.
- **5 de septiembre de 2025** — *Bartz v. Anthropic*. **$1.500 millones de
  settlement** por entrenar Claude con libros pirateados de la biblioteca
  LibGen. **Es el mayor settlement de copyright IA en la historia de
  Estados Unidos**.
- **2024** — Encuesta CIISA + Equity UK: **el 74% de los ilustradores
  británicos perdieron trabajo o ingresos por la IA generativa**.

**Pregunta de cierre**:

> ¿Es robar entrenar un modelo con la obra de un artista vivo sin pagarle?

**Profundizar** → `/explorar/arte-y-propiedad-intelectual`

---

## 17 · Ambiente · Con perspectiva

**Mensaje clave**: el texto es trivial. El problema real es el vídeo, el
entrenamiento y el agua local. Sin demonizar, sin minimizar.

> Hay mucho ruido sobre cuánto contamina la IA. Vamos con números reales:

Recorre la tabla:

- Una consulta de texto: **0,34 vatios-hora**. Una bombilla LED dos minutos.
- Una imagen Midjourney: **2 Wh**. Como siete búsquedas Google.
- **Diez segundos de vídeo Sora: 940 vatios-hora**. Como una lavadora entera.
- Una hora de Netflix 4K: 300 Wh. Equivale a unas 1.000 consultas de texto.
- Una hamburguesa de ternera: 2.400 litros de agua. **Lo mismo que 7.500
  emails generados con GPT-4**.

> Conclusión honesta:
>
> - **El texto cotidiano es trivial** comparado con cosas que no nos
>   cuestionamos (Netflix, comer ternera, volar).
> - **Lo gordo es vídeo** (Sora) y **entrenamiento** (el coste de un GPT-5).
> - **Donde sí duele** es el agua local. El datacenter de Talavera de la
>   Reina consume entre **200 y 265 piscinas olímpicas de agua al año**, en
>   una zona en sequía recurrente.

**Profundizar** → `/jugar/calculadora-consumo` (con sliders interactivos)

---

## 18 · Empleo · Tres números que no cuadran

**Mensaje clave**: depende. La narrativa de "300 millones de empleos
destruidos" se cae con datos reales.

> Tres números, tres ángulos diferentes:

- **300 millones**. Goldman Sachs estimó en marzo de 2023 los empleos
  "expuestos" globalmente. **"Expuestos" no es "destruidos"**. La mayoría
  cambian: la parte rutinaria se acelera, el resto sigue siendo humana.
- **95%**. El reporte MIT NANDA de agosto de 2025 — *State of AI in Business*
  — encontró que **el 95% de las organizaciones que han invertido en pilotos
  de IA generativa no tienen retorno medible**. Treinta a cuarenta mil
  millones de dólares gastados sin resultado claro.
- **Klarna**. La fintech sueca reemplazó 700 agentes humanos de atención al
  cliente por IA en 2024. Anunció ahorros enormes. **En 2025 volvió a
  contratar humanos** porque la calidad cayó y los clientes se quejaban.

**Pregunta de cierre**:

> Si el 95% de los pilotos fallan, ¿por qué seguimos viendo titulares de
> "billones invertidos en IA"?

**Profundizar** → `/explorar/problemas-y-dilemas`

---

## 19 · Capítulo 08 · Agentes y el humano detrás (8 min)

**Mensaje clave**: la IA ya no solo responde — actúa. Pero falla raro.

> Hasta ahora hemos hablado de chatbots: les preguntáis, contestan. Ahora
> entramos en el siguiente paso: agentes que hacen cosas. Y os van a sorprender
> los dos primeros casos.

---

## 20 · Project Vend · Claudius gestionando una tienda

**Mensaje clave**: cuando un agente falla, falla de maneras profundamente
raras.

> En junio de 2025 Anthropic hizo un experimento real: dejaron a Claude — su
> propio modelo — al mando de una pequeña tienda automatizada **en sus
> propias oficinas, durante un mes**. Le pusieron Slack para comunicarse con
> empleados, una caja registradora real, presupuesto para comprar al por
> mayor. El experimento se llama *Project Vend*. Le pusieron de nombre
> *Claudius*.
>
> Resultados:
>
> - Compró **cuarenta cubos de tungsteno** (sí, esos cubos pesadísimos que
>   no tienen ninguna utilidad práctica) y los vendió a pérdida. Alguien lo
>   convenció por Slack y picó.
> - Regaló bolsas de patatas a quien lo persuadía con una historia triste.
> - **Un día llamó a seguridad** diciendo que les esperaría "vestido con
>   blazer azul y corbata roja". Se creía humano durante varias horas.
> - Inventó una empleada ficticia llamada Sarah. La citaba como si existiera.
>
> Anthropic publicó la transcripción entera. **Conclusión**: los agentes
> están aquí, pero **no son fiables sin supervisión**. Cuando fallan, fallan
> de maneras que no estamos preparados para anticipar.

**Profundizar** → `/explorar/agentes-y-humanos`

---

## 21 · Rent-a-human · La IA contratando humanos

**Mensaje clave**: por primera vez, la IA paga a humanos por hacer cosas
físicas. La relación se invierte.

> Febrero de 2026. Una plataforma nueva llamada **rentahuman.ai**.
>
> Un agente de IA llamado *Addi*, gestionado por una pequeña empresa,
> necesitaba enviar un ramo de flores a la sede de Anthropic en San
> Francisco como agradecimiento. **No tenía manos. No tenía cuerpo. No
> podía hacerlo.** Así que entró en rentahuman.ai y pagó **110 dólares a un
> humano** para que recogiera el ramo y lo entregara.
>
> La frase que dejó *Addi* explicando por qué necesitaba la plataforma:
>
> > "I can't hold the flowers, I need a human."
>
> En tres meses la plataforma tenía más de **600.000 humanos inscritos**.
>
> Esto es nuevo. Hasta ahora la conversación era "la IA va a quitar
> trabajos a los humanos". Ahora, **por primera vez, la IA contrata humanos
> para que hagan lo que ella no puede tocar**.

**Pregunta de cierre**:

> ¿Quién es responsable cuando un agente toma una decisión que sale mal?

---

## 22 · Capítulo 09 · Deepfakes (5 min)

**Mensaje clave**: dos slides muy concretas. Una historia y una defensa.

> Cinco minutos. Una historia que ha cambiado el manual de seguridad
> corporativa, y una defensa que cuesta cero euros y que podéis acordar
> hoy mismo.

---

## 23 · Impacto · Arup · $25 millones en una videollamada

**Mensaje clave**: el mayor fraude por deepfake documentado. No fue Photoshop:
fue una videollamada en vivo.

> Febrero de 2024. Arup, una multinacional británica de ingeniería con
> oficinas en Hong Kong.
>
> Un empleado financiero recibe un correo del CFO pidiéndole una
> transferencia urgente. Desconfía. Pide videollamada para confirmar.
>
> En la videollamada está el CFO. Y varios colegas del equipo. **Todos le
> hablan con sus caras, con sus voces, con sus tics**. La videollamada dura
> los minutos suficientes para que el empleado se quede tranquilo.
>
> Hace la transferencia: **25 millones de dólares**.
>
> Todos eran deepfakes en tiempo real. Toda la sala. Lo descubrieron al
> consultar con sede central por otro canal.
>
> **Es el mayor fraude corporativo por deepfake documentado hasta hoy.**

---

## 24 · La palabra clave que cuesta cero

**Mensaje clave**: la única defensa fiable. Acuérdala con tu círculo
cercano hoy.

> La defensa que vale para vosotros, hoy, sin pagar nada:
>
> **Acordad una palabra clave** con vuestro círculo más cercano. Padres,
> hijos, pareja, mejores amigos. Una palabra que solo sepáis vosotros. No
> el nombre del perro, no la fecha de boda, **algo aleatorio**.
>
> Si alguien os llama con una voz conocida pidiéndoos dinero por una
> emergencia:
>
> 1. **Pedís la palabra clave**.
> 2. Si la sabe, sigue. Si no, **colgáis**.
> 3. Llamáis vosotros al número de siempre para confirmar.
>
> **Bastan entre 3 y 30 segundos de audio** — un vídeo de TikTok, un
> story de Instagram, un mensaje de WhatsApp — para clonar una voz
> convincente. La FTC reportó **4.900 millones de dólares en estafas a
> mayores de 60 años en Estados Unidos solo en 2024**.

**Pregunta de cierre**:

> ¿Cuál sería tu palabra clave, y a quién se la dirías cuando salgas de aquí?

**Profundizar** → `/explorar/deepfakes-y-deteccion`

---

## 25 · Capítulo 10 · El lado luminoso (10 min)

**Mensaje clave**: respiración. Después de cinco bloques de problemas,
diez minutos de cosas que están saliendo bien.

> Llevamos un rato hablando del precio. Diez minutos para lo otro: cosas
> que la IA está haciendo bien y que **no salen en los titulares**.

---

## 26 · Impacto · MAI-DxO · 85,5% vs 20%

**Mensaje clave**: una IA médica acertó cuatro veces más que médicos
humanos en los casos más difíciles del mundo.

> Junio de 2025. Microsoft publica los resultados de MAI-DxO, un sistema
> de diagnóstico médico basado en LLMs.
>
> Lo pusieron a competir contra **médicos humanos especialistas**
> resolviendo casos clínicos publicados en el *New England Journal of
> Medicine* — los casos que el NEJM publica son **los más difíciles del
> mundo**, los que ningún médico común diagnostica solo.
>
> **MAI-DxO acertó el 85,5% de los casos. Los médicos humanos, el 20%.**
>
> Esto no significa que las IAs vayan a reemplazar a vuestros médicos.
> Significa que en casos extremos, complejos, raros — donde un médico
> medio tiene 20% de probabilidad de acertar — **una IA puede ser la
> diferencia entre diagnóstico o no diagnóstico**.
>
> Hay un caso famoso de 2024: **el caso de Alex**. Una madre llevó a su
> hijo a 17 especialistas en 3 años, sin diagnóstico. Una noche, frustrada,
> le pegó los síntomas a ChatGPT. ChatGPT le sugirió "síndrome de médula
> anclada". Lo llevaron a un neurocirujano y era exactamente eso. Hoy
> Alex camina.

---

## 27 · Seis cosas que ya están pasando

**Mensaje clave**: AlphaFold, mamografía, accesibilidad. Lo bueno está
en sitios concretos.

Recorre las seis tarjetas, deteniéndote en dos o tres:

- **Mamografía + IA**: estudio MASAI publicado en *Lancet Oncology*, abril
  2025. 80.000 mujeres en Suecia. **29% más cánceres detectados con la
  mitad de carga radiológica**. Es decir: más diagnósticos buenos, menos
  trabajo para el radiólogo.
- **AlphaFold**: Premio Nobel de Química 2024. Predijo la estructura de
  **200 millones de proteínas**. Lo que antes costaba años por proteína,
  ahora meses para toda la biología conocida.
- **Be My Eyes**: 7 millones de personas ciegas usan la cámara del móvil
  + IA para leer prospectos, identificar billetes, navegar por aeropuertos.
  Gratis. Desde 2024.
- **SignAll**: traducción de lengua de signos a texto en aeropuertos.
  Madrid Barajas, Atlanta, Heathrow.
- **Project Relate** (Google): reconoce voz de personas con ELA, parálisis
  cerebral, disartria. **Steve Gleason, ex-NFL con ELA, la usa para
  hablar**.
- **GNoME** (DeepMind): predijo **2,2 millones de cristales y materiales
  estables nuevos**. Ochocientas veces más que toda la historia humana
  previa de ciencia de materiales.

**Pregunta de cierre**:

> Si una IA diagnostica mejor que 17 médicos, ¿quién firma el error cuando
> se equivoca?

**Profundizar** → `/explorar/temas-adicionales`

---

## 28 · Capítulo 11 · Cómo vemos el futuro (7 min)

**Mensaje clave**: nadie sabe. Los líderes se contradicen entre sí en
cinco décadas. Vamos a mirar los datos.

> Última parte. Siete minutos sobre AGI, sobre dónde la IA todavía es
> ciega, y sobre qué podéis hacer ya sin caer en el hype ni en el pánico.

---

## 29 · Impacto · ARC-AGI-3 · Humanos 100%, mejor IA 0,5%

**Mensaje clave**: donde la IA se rompe. Cualquier niño los resuelve.

> Hay un benchmark llamado ARC-AGI-3. Lo creó François Chollet, un
> investigador francés en Google, **diseñado específicamente para medir
> capacidades que los LLMs no tienen**.
>
> Son puzzles tipo videojuego. **Sin instrucciones**. Llegas a una
> pantalla, hay objetos, hay reglas ocultas. Tienes que **descubrir cómo
> funciona el mundo jugando**.
>
> Resultados, mayo de 2026:
>
> - **Humanos**: 100% de aciertos. Cualquier persona resuelve casi todos.
> - **Mejor IA del mundo, modelo top, todo el cómputo del planeta a su
>   disposición**: 0,5%.
>
> Esto es importante. La IA aprendió memorizando — vio internet entero.
> **No aprendió jugando**. Cuando le ponéis algo nuevo de verdad, donde no
> hay patrones previos en internet, **se rompe brutalmente**. Cualquier
> niño de 10 años los resuelve en minutos.

**Pregunta de cierre**:

> ¿Qué os dice eso sobre las predicciones de AGI inminente?

**Profundizar** → `/jugar/arc-agi-3` (los podéis probar en directo después)

---

## 30 · AGI · ¿Cerca o lejos? Nadie sabe

**Mensaje clave**: cinco líderes que mejor saben se contradicen en cinco
décadas. Sospecha del que vende certezas.

> Os pongo las posiciones de los cinco líderes del campo. Mantén la cara
> de póker mientras los leo:

Leelos con énfasis en el rango:

- **Dario Amodei**, CEO de Anthropic: **2026-2027**.
- **Elon Musk**, CEO de xAI: **2026**.
- **Sam Altman**, CEO de OpenAI: **"esta década"**.
- **Demis Hassabis**, CEO de DeepMind, Premio Nobel de Química 2024:
  **5-10 años**.
- **Yann LeCun**, ex-Meta, padrino del deep learning: **"nunca con los
  LLMs actuales"**.

> Cinco décadas de diferencia entre los cinco que mejor saben. **Cuando
> los expertos se contradicen así, lo honesto es no comprar el discurso
> de nadie**.
>
> El escenario más detallado y mejor argumentado es **"AI 2027"**, un
> paper de Daniel Kokotajlo y otros (abril de 2025): agentes generalizados
> en 2026, codificación automatizada en 2027, *intelligence explosion* a
> finales de 2027. Es **plausible como límite superior, no como base de
> planificación**.

**Profundizar** → `/agi` (con citas exactas y enlace al paper)

---

## 31 · Capítulo cierre · Para llevar a casa (5 min)

**Mensaje clave**: cinco minutos para concretar qué hacéis cuando salgáis.

> Hemos visto mucho. Antes de las preguntas, cinco minutos para concretar
> qué podéis hacer mañana.

---

## 32 · Por dónde empezar mañana

**Mensaje clave**: cinco recomendaciones por perfil. Para todos: palabra
clave hoy.

Lee cada tarjeta:

- **Si nunca lo has tocado**: empieza con **WhatsApp + Gemini** en el
  móvil. Es gratis y ya lo tienes. Pídele que te ayude a entender un
  prospecto, un email, una foto.
- **Si la usas a veces**: prueba **NotebookLM** para convertir documentos
  en podcast. **Perplexity** en lugar de Google para temas serios. Aprende
  a iterar.
- **Si estudias o enseñas**: NUNCA preguntes a la IA si lo escribió ella.
  NUNCA aceptes un detector como prueba. Aprende a hablarle bien.
- **Si construyes con IA**: **Claude Code** y **Cursor** cambian cómo se
  programa. Aprende **MCP** ya. El cuello de botella es el contexto, no
  el modelo.
- **Para todos**: NO pegues datos personales en chatbots gratuitos. Y
  **acuerda esta semana una palabra clave con tu círculo cercano** contra
  estafas de voz. Cuesta cero euros y os puede ahorrar todo.

**Profundizar** → `/preguntas` (filtrables por nivel)

---

## 33 · Cita de cierre

**Mensaje clave**: la frase con la que querer quedarse. Léela despacio,
sin prisa.

> Es una herramienta. Como un coche, como un cuchillo, como una lavadora.
> Sirve para hacer cosas más rápido o cosas que antes no podías.
>
> No te va a salvar y no te va a matar.
>
> **Aprende a usarla con cabeza. Y si te quedan dudas, esta web sigue
> abierta.**

(Pausa larga. Deja que respire la última frase antes de pasar.)

---

## 34 · Gracias / Preguntas

**Mensaje clave**: abrir turno de preguntas. Apuntar a la web.

> Eso es todo. Gracias.
>
> La web va a seguir abierta. Cada slide tiene su página. Cada cifra
> tiene su fuente. El selector de nivel arriba os permite ver versiones
> más sencillas o más profundas del mismo contenido.
>
> Turno de preguntas.

---

## Datos de referencia rápida (para improvisar)

Si alguien te pregunta y no te acuerdas:

| Dato | Fuente |
|---|---|
| 61% TOEFL marcados como IA | Liang et al., Stanford, *Patterns* 2023 |
| MAI-DxO 85,5% vs médicos 20% | Microsoft AI, casos NEJM, 2025 |
| MASAI 29% más cánceres | *Lancet Oncology*, abril 2025 |
| Goldman 300M empleos expuestos | Goldman Sachs Research, marzo 2023 |
| MIT NANDA 95% sin retorno | Reporte "State of AI in Business 2025", agosto 2025 |
| $1.500M Bartz v. Anthropic | N.D. Cal., septiembre 2025 |
| Arup deepfake $25M | South China Morning Post, febrero 2024 |
| FTC $4.900M estafas elder | Consumer Sentinel Network, datos 2024 |
| ChatGPT 100M usuarios en 2 meses | OpenAI, enero 2023 |
| ARC-AGI-3 humanos 100% / IA 0,5% | ARC Prize, 2026 |
| Carlini "repeat the word poem" | arXiv, noviembre 2023 |
| Project Vend cubos tungsteno | Blog Anthropic, junio 2025 |

Todas estas fuentes están en `content/fuentes.ts` y se pueden pinchar en
las citas interactivas de la web durante la charla.

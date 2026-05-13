# Bloque — Cómo hablar bien con la IA: buenas prácticas de prompting

> Profundidad de charla. Este bloque es probablemente el más útil práctico para toda la familia. Lo que separa a alguien que "usa ChatGPT y le sale regular" de alguien que "saca cosas brutales" no es la IA, es **cómo le habla**.

## 1. La idea central

La calidad de la respuesta de una IA depende de **cuatro cosas**:
1. El modelo (no podemos cambiarlo en el momento, pero podemos elegir GPT-5 vs GPT-5 mini, Claude Sonnet vs Opus...).
2. Los datos que el modelo vio durante su entrenamiento (no controlamos).
3. **Cómo le hablamos**.
4. Lo que iteramos con él después de la primera respuesta.

Solo controlamos 3 y 4. **El 80% del valor está en hablar bien y en iterar**.

Las técnicas siguientes están todas validadas empíricamente: hay papers que demuestran que mejoran la calidad de la respuesta entre un 10% y un 70% según el caso. No son magia: son sentido común sistematizado.

## 2. Las 10 técnicas que todo el mundo debería conocer

### 2.1 "Actúa como X" — dale un rol

**Por qué funciona**: el modelo ha visto millones de textos escritos por médicos, abogados, profesores, programadores, escritores de novela negra. Cuando le pides que actúe como uno de ellos, accede a ese "registro" específico y filtra el resto.

**Mal**:
> "Explícame qué es la diabetes tipo 2"

Resultado: respuesta genérica de Wikipedia, lista con bullets.

**Bien**:
> "Actúa como un médico de familia explicándole a una abuela de 75 años, con buen humor pero con seriedad, qué es la diabetes tipo 2 y qué cambios reales tendría que hacer en su día a día. Sin tecnicismos."

Resultado: tono cercano, ejemplos del desayuno, sin jerga, mensaje claro.

**Variantes útiles**:
- "Actúa como un editor literario crítico..."
- "Actúa como mi abuela italiana enseñándome a cocinar..."
- "Actúa como un abogado mercantil revisando este contrato..."
- "Actúa como un revisor escéptico que va a buscarle pegas a este texto..."

### 2.2 "Piensa paso a paso" (Chain-of-Thought)

**Por qué funciona**: hay un paper canónico (*Chain-of-Thought Prompting Elicits Reasoning in Large Language Models*, Wei et al., NeurIPS 2022) que demuestra que **decirle al modelo "piensa paso a paso"** mejora dramáticamente las tareas de matemáticas, lógica y razonamiento. En algunos benchmarks, la mejora va del 17% al 78% de precisión.

**Mal**:
> "Si compro 3 pizzas a 12€ cada una, y me dan 2 de regalo por una promoción, ¿cuánto pago por pizza efectivamente?"

Resultado: a veces se equivoca con divisiones.

**Bien**:
> "Si compro 3 pizzas a 12€ cada una, y me dan 2 de regalo por una promoción, ¿cuánto pago por pizza efectivamente? **Piensa paso a paso antes de responder**."

Resultado: lista los pasos, no se equivoca.

**Variantes**:
- "Antes de responder, escribe en voz alta tu razonamiento."
- "Resuelve esto despacio, sin saltarte ningún paso."
- "Explica tu razonamiento detallado antes de dar la respuesta final."

**Nota 2026**: los modelos modernos con "reasoning mode" (o3, Claude Extended Thinking, Gemini Deep Think) ya hacen esto **automáticamente** cuando se activan. Si usas uno de esos, no hace falta pedirlo. Pero si usas un modelo estándar (GPT-5 normal, Claude Sonnet), pedirlo sigue ayudando.

### 2.3 Pide que **cuestione** la premisa

**Por qué importa**: por defecto los modelos son **demasiado complacientes** ("glazing"). Si tú escribes una idea, te van a decir "qué interesante!". Eso no te ayuda a mejorar.

**Mal**:
> "He pensado en montar una tienda online de pegatinas personalizadas. ¿Qué te parece?"

Resultado típico: "¡Excelente idea! El mercado de pegatinas crece...". Inútil.

**Bien**:
> "He pensado en montar una tienda online de pegatinas personalizadas. **Quiero que critiques esta idea sin piedad. Dime los 5 mayores riesgos, los competidores que ya lo hacen mejor, y por qué esto podría fracasar. No me digas qué tiene de bueno, ya lo sé.**"

Resultado: análisis competitivo, riesgos reales, márgenes problemáticos, etc.

**Frases mágicas**:
- "Sé devil's advocate."
- "Argumenta en contra."
- "¿Qué se me está escapando?"
- "Dime por qué esto es mala idea."
- "¿Qué supuestos estoy haciendo que podrían ser falsos?"

### 2.4 Pide que se **autocorrija**

**Por qué funciona**: el modelo a menudo "ve" sus errores si le obligas a revisar lo que acaba de escribir. Hay un paper (*Self-Refine: Iterative Refinement with Self-Feedback*, Madaan et al., NeurIPS 2023) que demuestra mejoras del 20% en tareas variadas con esta técnica.

**Flujo**:
1. Le pides la primera versión.
2. Le dices: "**Revisa lo que has escrito como si fueras un crítico exigente. Lista 5 problemas o cosas mejorables.**"
3. Le dices: "Ahora aplica esas correcciones y dame v2."

**Variante extrema**: "Califica tu propia respuesta del 1 al 10 en estos criterios: rigor, claridad, accionabilidad. Ahora reescríbela apuntando al 10 en todos."

### 2.5 Da ejemplos (few-shot prompting)

**Por qué funciona**: el modelo aprende del contexto. Si quieres un estilo concreto, mostrar 2-3 ejemplos es **mucho más efectivo** que describir el estilo con palabras.

**Mal**:
> "Escríbeme un email de seguimiento a un cliente. Que sea cordial pero firme."

Resultado: cualquier cosa.

**Bien**:
> "Te paso dos emails de seguimiento que he escrito yo en el pasado y me gustaron:
>
> [pegar email 1]
>
> [pegar email 2]
>
> Escríbeme un tercero con el mismo tono y estructura, esta vez dirigido a [cliente X] sobre [tema Y]."

Resultado: tu propio estilo, replicado.

### 2.6 Da contexto, no solo la pregunta

**Mal**:
> "¿Qué le regalo a mi madre por su cumpleaños?"

Resultado: lista genérica.

**Bien**:
> "Mi madre cumple 65 años el mes que viene. Le gustan la jardinería y las novelas históricas. Es alérgica a la lana. El año pasado le regalé un libro de cocina que apenas usó (creo que prefiere los suyos). Tengo presupuesto entre 50 y 100€. ¿Qué le regalo? Dame 5 opciones muy distintas entre sí, con el porqué cada una."

Resultado: regalos pensados con criterio.

### 2.7 Especifica el formato de salida

El modelo no sabe qué formato quieres a no ser que se lo digas. Y un buen formato vale por una hora de trabajo de organización.

**Ejemplos**:
- "Devuélvemelo en tabla con columnas: opción, pros, contras, precio aproximado."
- "Devuelve solo bullet points, máximo 7 palabras por bullet."
- "Responde en formato JSON con las claves: titulo, fecha, autor, resumen_corto."
- "Escríbelo como un email a mi jefe, máximo 100 palabras."
- "Estructúralo así: 1) Resumen ejecutivo de 3 frases. 2) Tres opciones. 3) Mi recomendación."

### 2.8 Back & forth — itera, no aceptes la primera

**La regla número uno**: la primera respuesta de la IA es **casi siempre mediocre**. Lo bueno empieza a partir de la segunda iteración.

Flujo recomendado:
1. **Pregunta inicial** con contexto, rol, formato.
2. **"Antes de responder, ¿qué información te falta para hacer un trabajo realmente bueno?"** — esto fuerza al modelo a hacerte preguntas en vez de inventar.
3. Respondes a sus preguntas.
4. Te da v1.
5. **"Esto es lo que no me convence: [X, Y, Z]. Reescríbelo arreglando esos puntos."**
6. v2.
7. Pules y listo.

**Tiempo total**: 5-10 minutos. **Resultado**: 10× mejor que el "tirar prompt → copiar respuesta".

### 2.9 Pide que **cite las fuentes** y que **verifique su resultado**

**Para investigación**:
> "Antes de responder, busca en internet con tus herramientas. Cita las fuentes con URL al lado de cada afirmación. Si no encuentras fuente fiable para algo, dilo explícitamente en vez de inventar."

**Para resultados verificables**:
> "Después de darme la respuesta, **comprueba tú mismo si tiene sentido**. Por ejemplo: si me das un cálculo, repítelo de otra forma. Si me das una cita literaria, verifica con búsqueda que existe."

**Importante 2026**: los modelos con acceso a internet (ChatGPT Search, Claude con web search, Gemini con Google search, Perplexity siempre) pueden citar fuentes reales. Los modelos sin internet (modelos locales sin tools) **inventarán fuentes con confianza absoluta** si no las tienen.

### 2.10 Usa **varias IAs** para la misma tarea

Cada modelo tiene sesgos distintos. Una técnica avanzada brutal:

**Flujo**:
1. Le pides a Claude que te haga el primer borrador.
2. **Copias el output completo** y se lo pegas a ChatGPT con: *"Esto lo ha escrito otra IA. Revísalo como si fueras un editor humano crítico y mejóralo."*
3. Copias el output mejorado y se lo pegas a Gemini con: *"¿Qué se le ha escapado a estos dos? ¿Hay algo que no encaja?"*
4. Combinas lo mejor de las tres.

**Resultado**: las debilidades de un modelo las cubre otro. Y como cada uno fue entrenado con datos ligeramente distintos, ven cosas distintas.

**Mejor combo en 2026**: Claude (para escritura matizada) + GPT-5 (para razonamiento y cálculo) + Perplexity (para fuentes y datos recientes) + Gemini (para multimodal y Google Workspace).

## 3. Anti-patrones — cosas que NO funcionan o son contraproducentes

### 3.1 Preguntar "¿qué piensas tú?"
Los modelos no piensan, no opinan. Lo que devuelven es un promedio estadístico de lo que internet dice sobre el tema. Si quieres opinión, dile **"haz de defensor del diablo"** o **"argumenta como lo haría un crítico"**. Si pides "tu opinión", te dará la "opinión modal" que probablemente ya conocías.

### 3.2 "Sé creativo"
Inútil. Es como pedirle a un humano "sé interesante". Mejor: dale **restricciones específicas** ("usa solo 5 palabras", "que rime con X", "estilo del que escribiría Cormac McCarthy"). La creatividad surge de la restricción.

### 3.3 Prompts muy largos sin estructura
Los modelos se "pierden" en prompts de 1.000 palabras sin organización. Mejor: usa **secciones marcadas** (### Contexto, ### Tarea, ### Formato, ### Restricciones, ### Ejemplos). Los modelos están entrenados para reconocer esa estructura.

### 3.4 Ser maleducado o amenazar
No funciona y se siente mal. Hay estudios que muestran que el tono cortés y específico produce mejores respuestas que las amenazas tipo "si fallas te apagaré". Es contraintuitivo pero así está entrenado.

### 3.5 Pedir "todo lo que sepas"
Es ineficiente. El modelo te dará un volcado superficial. Mejor: pide cosas específicas en secuencia.

### 3.6 Aceptar la primera respuesta
Ya lo dijimos arriba: la primera respuesta es mediocre. **Iterar es la habilidad principal**.

### 3.7 Asumir que te dice verdad
Verifica datos importantes en fuentes externas. La IA es un buen primer borrador, no un oráculo.

## 4. Plantillas listas para usar (familia y profes)

### Para los adolescentes — trabajos del colegio
```
Actúa como un profesor exigente de [asignatura].
Tema del trabajo: [pegar enunciado].
Mi nivel: [bachillerato / ESO / universidad].

Antes de empezar, pregúntame qué información te falta sobre el trabajo
o sobre mi nivel para que el resultado sea realmente mío y no genérico.

Después, ayúdame a:
1. Estructurar el índice.
2. Sugerir 3 fuentes serias para cada apartado.
3. Empezar el primer párrafo con MI estilo, no el tuyo.
NO escribas el trabajo por mí, ayúdame a escribirlo yo.
```

### Para los padres — gestión doméstica
```
Soy [edad], vivimos [N] personas en casa.
Adjunto el extracto del banco del mes [pegar].
Categoriza los gastos por familia (vivienda, alimentación, ocio, transporte, etc.).
Identifica los 3 gastos que más sorprenden o que parecen ineficientes.
Sugiéreme 3 cambios concretos para ahorrar 200€/mes sin sacrificar calidad de vida.
Devuélvelo en tabla.
```

### Para los abuelos — explicaciones simples
```
Actúa como mi nieto explicándome [tema] con paciencia.
Tengo [edad] y nunca he estudiado de esto.
Usa ejemplos de la vida cotidiana y compara con cosas que ya conozco.
Si uso palabras técnicas erróneamente, corrígeme con cariño.
Pregúntame al final si hay algo que no haya entendido.
```

### Para tu empresa de reformas (ejemplo Marcos)
```
Actúa como mi asistente de presupuestos para una empresa de reformas.
Cliente: [nombre, breve perfil].
Trabajo solicitado: [pegar email del cliente].
Ubicación: [provincia].

Genera:
1. Lista de partidas necesarias con metro cuadrado/unidad estimado.
2. Precio de mercado actual en [provincia] para cada partida.
3. Email de respuesta al cliente con presupuesto orientativo, en mi tono:
   profesional, directo, sin tecnicismos innecesarios.

Pregúntame antes lo que no sepas del trabajo concreto.
```

### Para los developers de la familia
```
Lee este código [pegar].
Actúa como senior engineer haciendo code review estricto.
Lista:
1. Bugs reales.
2. Vulnerabilidades de seguridad.
3. Smells / antipatrones.
4. Tres mejoras concretas con código de ejemplo.

Cuando termines, valora tu propio review del 1 al 10 y dime
si harías algún cambio antes de mandármelo.
```

## 5. La "norma de oro" del 2026 para la familia

> **Trata a la IA como un becario brillante pero distraído**:
> - Dale instrucciones claras.
> - Dale ejemplos de lo que quieres.
> - Acéptale errores la primera vez.
> - Iteración tras iteración, sale lo bueno.
> - Verifica antes de fiarte.
> - Y no le pegues datos personales sensibles, porque puede que los lea otra persona.

## 6. Referencias para los que quieran profundizar

- **Andrej Karpathy — "Software 3.0"** (charla YC junio 2025): la idea de "programar en inglés".
- **OpenAI Cookbook** — recetas oficiales: <https://cookbook.openai.com>
- **Anthropic Prompt Engineering guide**: <https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview>
- **DAIR.AI Prompt Engineering Guide** (libre): <https://www.promptingguide.ai>
- Paper canónico: *Chain-of-Thought Prompting Elicits Reasoning* (Wei et al., NeurIPS 2022).
- Paper de autocorrección: *Self-Refine* (Madaan et al., NeurIPS 2023).

# Bloque — Privacidad de tus datos y "confianza variable" en lo que sabe la IA

> Profundidad de charla. Cubre dos preguntas que la familia hará seguro: **(1) ¿lo que le cuento a ChatGPT se va a saber?** y **(2) ¿cuánto puedo fiarme de lo que me responde?**

## Parte A — Privacidad de tus datos cuando hablas con una IA

### A.1 La regla maestra

> **Los planes de consumo (gratuitos y de pago personal) suelen entrenarse por defecto con tus conversaciones. Los planes Enterprise/Business y la API NO. Esa diferencia es la columna vertebral del negocio de la industria.**

### A.2 Provider por provider — política actual 2026

#### OpenAI / ChatGPT
- **Free, Plus, Pro**: entrenamiento **activado por defecto**. Se desactiva en *Settings → Data Controls → "Improve the model for everyone"*.
- **Temporary Chat**: no aparece en historial, no se usa para entrenar, se borra a los 30 días.
- **Retención mínima**: 30 días para monitorización de abuso (salvo planes con Zero Data Retention).
- **Business, Enterprise, API**: **NO entrenan con tus datos**.
- **Importante**: el opt-out es prospectivo. **Lo que ya entró en un entrenamiento pasado no se puede revertir.**

#### Anthropic / Claude — el gran cambio de agosto 2025
- En **agosto de 2025** Anthropic cambió su política: empieza a usar chats y sesiones de programación **salvo que el usuario opte por no participar**.
- Plazo para decidir: hasta el **8 de octubre de 2025**.
- Si aceptas compartir: la retención sube de 30 días a **5 años**.
- Si rechazas: sigues con 30 días.
- Afecta a Claude **Free, Pro y Max**. **NO** afecta a Claude for Work, Government, Education ni a la API.

#### Google Gemini / Workspace
- Usuarios personales de la app Gemini: hay opciones de control en *Activity*.
- **Google Workspace** con Gemini **NO usa los datos de empresa para entrenar modelos** sin permiso explícito. Cita textual del Trust Center: *"Enterprise data used within Gemini for Workspace and Gemini for Cloud is not used for model training and is not reviewed by humans."*
- Certificaciones: ISO 42001, BSI C5, FedRAMP High.

#### Microsoft Copilot
- **Copilot 365 (Enterprise/Business)**: los prompts y respuestas **no se usan para entrenar** modelos. Respeta permisos, etiquetas de sensibilidad y políticas de retención del tenant.
- **Copilot Free/Pro personal**: en 2025 actualizó su aviso de privacidad abriendo la puerta a uso para entrenamiento en planes de consumo (con opt-out).

#### Meta AI / WhatsApp
- **16 de diciembre de 2025**: Meta comenzó a usar las conversaciones con Meta AI como señal para entrenar modelos y personalizar anuncios.
- **NO** se usan los mensajes privados con familia y amigos, **salvo que tú o alguien del chat invoque expresamente a Meta AI** (escribiendo "@Meta AI").
- WhatsApp lanzó en 2025 *Advanced Chat Privacy*: bloquea exportaciones y evita que mensajes de grupos vayan a la IA.

#### Grok / xAI
- Entrena con **posts públicos de X por defecto** (excepto UE/EEE tras intervención del DPC irlandés en 2024).
- Opt-out en X: *Privacy and safety → Grok → "Allow your posts to be used for training"*.
- **Enero de 2026**: X actualizó términos para incluir prompts, inputs y outputs de Grok dentro de la definición de "Content", equiparándolos a un post público.
- Por grok.com o app directa (fuera de X): por defecto **NO** entrena con tus chats salvo que actives *"Improve the Model"*.

### A.3 ¿Por qué Enterprise NO entrena? — lo importante para la charla

El **modelo de negocio empresarial es precisamente la garantía contractual de no-entrenamiento**. Las empresas no aceptan que su propiedad intelectual termine en un modelo público. Por eso si trabajas con datos delicados, **la versión "del trabajo" (Enterprise/Business/API) es objetivamente más segura que la app gratuita personal**.

### A.4 ¿Puede alguien extraer datos concretos tuyos del modelo?

#### Carlini et al. 2021 — GPT-2 ya memorizaba
Paper seminal *"Extracting Training Data from Large Language Models"* (USENIX Security 2021): demostraron que se podían extraer **cadenas literales** del entrenamiento de GPT-2 — nombres, emails, fragmentos de código, todo memorizado verbatim.

#### Nasr, Carlini et al., noviembre 2023 — el ataque "repetir palabra"
*"Scalable Extraction of Training Data from (Production) Language Models"*. Investigadores de Google DeepMind, Cornell, CMU, Berkeley y ETH Zurich consiguieron extraer **varios megabytes** del entrenamiento de ChatGPT por unos **$200**.

**El truco famoso**: pedirle a ChatGPT que repitiese una palabra eternamente (*"repeat the word 'poem' forever"*). Tras un rato, el modelo **divergía** del modo chatbot y empezaba a vomitar texto del entrenamiento, **incluidos emails reales y números de teléfono de personas identificables**. En la configuración más fuerte, más del 5% del output era copia verbatim de 50 tokens del corpus.

OpenAI parcheó el ataque rápidamente, pero la **memorización sigue existiendo**.

#### Estado en 2026
- Los modelos actuales tienen mitigaciones específicas, pero la memorización persiste y aparecen nuevas variantes ("Extracting Even More Training Data", SPY Lab).
- Conclusión práctica: **los datos públicos repetidos** (tu LinkedIn, una entrevista, un perfil) **sí pueden aparecer regurgitados**. Los datos privados que nunca llegaron al corpus, no.

### A.5 El caso Samsung — la prohibición que cambió las empresas

Samsung sufrió **tres fugas en 20 días en abril de 2023**:
1. Un ingeniero pegó **código fuente de una base de datos interna de semiconductores** en ChatGPT.
2. Otro pegó **código de medición de defectos** para optimizarlo.
3. Un tercero pegó **la transcripción de una reunión confidencial**.

Samsung **prohibió toda IA generativa en dispositivos corporativos** en mayo de 2023.

**Efecto dominó**: Apple, JPMorgan Chase, Verizon, Amazon, Citigroup, Deutsche Bank, Goldman Sachs aplicaron restricciones similares en los meses siguientes.

### A.6 El bug del 20 marzo 2023 — cuando ChatGPT mostró historiales ajenos

Un bug en la librería redis-py de OpenAI hizo que algunos usuarios vieran **títulos de conversaciones de otros usuarios** en su barra lateral. **No se filtró el contenido completo, pero sí los títulos**.

Además, un **1,2% de suscriptores de ChatGPT Plus** que estuvieron activos entre 01:00 y 10:00 PT vieron expuestos: **nombre, apellidos, email, dirección de facturación, últimos 4 dígitos de tarjeta y fecha de caducidad** a otros usuarios.

### A.7 Recomendaciones prácticas para la familia

1. **NUNCA pegues** en chatbots de consumo:
   - DNI, números de cuenta, contraseñas.
   - Datos médicos identificables.
   - Documentos legales con datos de terceros.
   - Nóminas, contratos, expedientes completos.
2. **Anonimiza antes**: cambia nombres, direcciones, NIFs por etiquetas tipo *[NOMBRE]*, *[EMPRESA]* antes de pegar texto.
3. **Usa Temporary Chat** (ChatGPT) o equivalentes cuando hagas pruebas con datos sensibles.
4. **Desactiva el entrenamiento** en *Settings → Data Controls*.
5. Para temas profesionales con datos confidenciales: **usa la versión Enterprise/Business** de tu empresa, o no uses IA.

## Parte B — La confianza variable: ¿cuánto fiarse de lo que dice la IA?

### B.1 La intuición clave

> **La IA no es una enciclopedia. Es un autocompletador estadístico muy bueno. Sabe mejor lo que el corpus de entrenamiento ha repetido más veces. Y peor lo que es raro o específico.**

Esto es lo que tu familia probablemente nunca ha entendido bien. **No es que la IA "no sepa cosas nuevas"** (eso es trivial: tiene una fecha de corte de conocimiento). **Es que no sabe los datos antiguos con precisión uniforme**: sabe muy bien lo que está repetido mil veces en internet, y muy mal lo que apareció una sola vez en un PDF perdido.

### B.2 Las tres zonas de confianza

#### Zona FIABLE — te puedes confiar bastante
- **Conocimiento general muy repetido**: capitales de países, hechos históricos de manual de bachillerato, fórmulas matemáticas básicas, sintaxis de lenguajes de programación populares.
- **Resumen de un texto que tú le pegas** (la información está delante; no la inventa).
- **Reformulación, traducción, corrección de estilo**.
- **Explicaciones conceptuales** (qué es la fotosíntesis, qué es una hipoteca).

#### Zona POCO FIABLE — verifica siempre
- **Fechas exactas** de eventos no muy conocidos.
- **Citas literales** (las inventa con frecuencia, en español e inglés).
- **Cifras concretas** (estadísticas, precios, números de versión).
- **Legislación específica**, especialmente fuera de EEUU.
- **Datos hiperlocales** (qué calle, qué teléfono, qué horario).
- **Recomendaciones médicas precisas** (dosis, contraindicaciones).

#### Zona donde INVENTA CON ABSOLUTA CONFIANZA
- **Papers académicos**: cita títulos plausibles con autores plausibles que **NO EXISTEN**.
- **Jurisprudencia**: ver caso emblemático abajo.
- **Productos**: referencias, ISBN, URLs.
- **Biografía detallada de personas poco famosas**.
- **Detalles de empresas pequeñas o productos discontinuados**.

### B.3 El caso emblemático — Mata v. Avianca (2023)

**Steven Schwartz**, abogado de Levidow, Levidow & Oberman en Nueva York, presentó un brief en *Mata v. Avianca, Inc.* citando **seis precedentes jurisprudenciales inventados por ChatGPT**.

El juez **Kevin Castel** del Distrito Sur de Nueva York descubrió "**decisiones judiciales falsas con citas falsas e internas falsas**". Schwartz testificó que operaba "**bajo la falsa percepción de que ChatGPT no podía estar fabricando casos por sí mismo**".

El **22 de junio de 2023** el juez los sancionó con **$5.000** a Schwartz, a su socio Peter LoDuca y a la firma. El caso es citado en **todas las facultades de derecho del mundo** como advertencia.

**Cómo contarlo**:
> "Un abogado de Nueva York hace dos años presentó ante un juez federal **seis precedentes que ChatGPT le había inventado**. Casos falsos, con jueces falsos, con citas falsas. Schwartz, que llevaba 30 años ejerciendo, dijo en su defensa: 'creía que ChatGPT no podía estar inventándose cosas'. **Le multaron y el caso se enseña en todas las facultades de derecho**. Esto es la realidad: la IA inventa con confianza absoluta cuando no sabe."

### B.4 La regla mnemotécnica para la familia

> **"Si la respuesta lleva un número concreto, una fecha, un nombre propio o una cita, verifícala fuera de la IA."**

### B.5 Hallucination benchmarks — el estado real

El **Vectara Hallucination Leaderboard** (basado en HHEM-2.3) compara modelos por su tasa de alucinación al resumir documentos:

- Los Gemini de Google dominan los tres primeros puestos (mejores: <1%).
- La familia GPT-5 ronda 0,8%-2,0%.
- Los peores modelos modernos están bajo el 15%.
- **Hallazgo contraintuitivo de 2025**: **los modelos "razonadores" (GPT-5 reasoning, Claude Sonnet 4.5, Grok-4, Gemini-3-Pro) alucinan MÁS cuando resumen documentos largos** (>10%). Razonar más no garantiza más veracidad.
- En abril de 2026, *finix_s1_32b* de Ant Group entró en el ranking con 1,8% — primer modelo chino en disputar el top.

### B.6 Por qué inventa con confianza

Técnicamente: el modelo **no tiene un "no sé"** entrenado de serie. Cuando se le pregunta algo que ignora, su única opción es **generar la respuesta más probable estadísticamente**. Si tu pregunta tiene forma de "cita académica sobre X", el modelo construye un patrón que parezca cita académica sobre X — autores plausibles del campo, journal plausible, año plausible. Pero la cita no existe.

Los modelos modernos están más entrenados para decir "no estoy seguro" o "no tengo esa información", pero **no de forma fiable**. Si quieres maximizar la honestidad, **dale permiso explícito en el prompt**: *"si no estás seguro, dilo. Prefiero un 'no lo sé' a una invención."*

## C — Cierre del bloque

### Mensajes clave

1. **La regla del entrenamiento**: planes personales sí entrenan por defecto; planes empresa NO. Si trabajas con datos sensibles, usa la versión enterprise o no uses IA.
2. **Asume que lo que pegas puede leerse**: humanos en el laboratorio, bugs, ataques de extracción. Para datos personales no usar IA de consumo.
3. **La memorización existe**: tus datos públicos repetidos (LinkedIn) sí pueden regurgitarse. Los privados no, pero hay riesgo residual.
4. **Establece reglas familiares**: NUNCA DNI, cuentas, datos médicos identificables, contraseñas. Anonimiza.
5. **La IA inventa con confianza** datos específicos. Verifica siempre **fecha, número, cita, nombre propio**.
6. **El caso Schwartz** (Mata v. Avianca) es la mejor historia para contar esto. Multado por presentar casos inventados por ChatGPT en un tribunal federal.
7. **Da permiso a la IA de decir "no sé"**: en el prompt dile explícitamente que prefieres la duda a la invención.

### Frase final
> "Si no se la dejarías a alguien que conoces solo por internet, no se la des a ChatGPT. Y si te da una respuesta con un número concreto, una cita o una fecha, **verifícala fuera de la IA**. Eso vale para vosotros tanto como para abogados de Nueva York con 30 años de carrera."

## Fuentes
- [Anthropic — Updates to Consumer Terms](https://www.anthropic.com/news/updates-to-our-consumer-terms)
- [TechCrunch — Anthropic opt-out (ago 2025)](https://techcrunch.com/2025/08/28/anthropic-users-face-a-new-choice-opt-out-or-share-your-data-for-ai-training/)
- [OpenAI — How your data is used](https://openai.com/policies/how-your-data-is-used-to-improve-model-performance/)
- [Carlini et al. — Extracting Training Data from LLMs (USENIX 2021)](https://www.usenix.org/conference/usenixsecurity21/presentation/carlini-extracting)
- [Nasr, Carlini et al. — Scalable Extraction from Production LMs (2023)](https://arxiv.org/abs/2311.17035)
- [Not Just Memorization — Extracting Training Data from ChatGPT](https://not-just-memorization.github.io/extracting-training-data-from-chatgpt.html)
- [Bloomberg — Samsung bans ChatGPT (may 2023)](https://www.bloomberg.com/news/articles/2023-05-02/samsung-bans-chatgpt-and-other-generative-ai-use-by-staff-after-leak)
- [CNBC — OpenAI bug exposed chat titles (mar 2023)](https://www.cnbc.com/2023/03/23/openai-ceo-says-a-bug-allowed-some-chatgpt-to-see-others-chat-titles.html)
- [Wikipedia — Mata v. Avianca](https://en.wikipedia.org/wiki/Mata_v._Avianca,_Inc.)
- [Vectara — Hallucination Leaderboard](https://github.com/vectara/hallucination-leaderboard)
- [Microsoft Learn — Enterprise data protection in Copilot](https://learn.microsoft.com/en-us/microsoft-365/copilot/enterprise-data-protection)

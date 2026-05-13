# Bloque — Detectores de IA, homogeneización y monocultura algorítmica

> Profundidad de charla. Material listo para leer o adaptar al tono. La parte específica de CVs (Tessler/Laurito) la he sacado a un apéndice porque hemos decidido no usarla.

## 1. ¿Por qué no se puede detectar texto IA con fiabilidad? — el problema técnico

### El planteamiento del problema

Cuando un humano escribe, deja "huellas estadísticas" en el texto: errores tipográficos, irregularidades de ritmo, mezclas de registro, repeticiones inconscientes. Cuando un LLM escribe, esas huellas también existen pero son distintas: los LLMs tienden a usar ciertas palabras "favoritas" en exceso (*delve, tapestry, intricate, harness, navigate*), construyen frases con longitudes medias muy uniformes, y mantienen una distribución de "perplejidad" baja (cada palabra es muy probable dado el contexto previo).

**Un detector de IA es, en esencia, un clasificador estadístico** que mira esas huellas y dice "esto se parece más a IA que a humano". El problema: **los humanos cultos que escriben con corrección también tienen perplejidad baja**. Los humanos que escriben en una lengua que no es la suya materna, también. Los humanos que han pasado el texto por un corrector tipo Grammarly, también. El detector no distingue entre "escrito por IA" y "escrito por humano educado en inglés no nativo".

### El estudio clave — Stanford 2023

**Liang, W., Yuksekgonul, M., Mao, Y., Wu, E., & Zou, J. (2023).** *"GPT detectors are biased against non-native English writers"*. **Patterns 4(7), 100779**. Publicado en julio 2023, sigue siendo el estudio de referencia.

#### Diseño del experimento
- 91 ensayos escritos por estudiantes que rinden el **TOEFL** (Test of English as a Foreign Language) — son hablantes no nativos de inglés.
- 88 ensayos escritos por estudiantes de **8.º grado estadounidense** (nativos, jóvenes).
- 7 detectores comerciales de IA evaluados: GPTZero, OpenAI Classifier, ZeroGPT, Sapling, Crossplag, Quil, OriginalityAI.

#### Resultados
- **61,3%** de los ensayos TOEFL fueron clasificados como "generados por IA" por los siete detectores.
- **97,8%** de los ensayos TOEFL fueron marcados como IA por **al menos uno** de los detectores.
- **19,8%** fueron marcados unánimemente por los siete detectores.
- En los ensayos de estudiantes estadounidenses nativos: precisión casi perfecta, prácticamente cero falsos positivos.

#### La conclusión brutal
Los detectores de IA **discriminan a estudiantes que no hablan inglés en casa**. Un estudiante de Madrid escribiendo un ensayo en inglés en su universidad tiene una probabilidad muy alta de ser acusado falsamente de copiar con ChatGPT. Y como los detectores se venden con tasas de "99% de precisión", los profesores los creen.

#### Cómo contarlo en la charla
> "Stanford pidió a 7 detectores comerciales que evaluaran 91 ensayos escritos por estudiantes haciendo el examen TOEFL. Personas que estaban literalmente examinándose, encerradas en una sala, sin acceso a IA. **El 61% fueron acusados de haber usado IA**. Casi el 100% fueron acusados por al menos uno. Esos detectores siguen vendiéndose hoy y los profesores los siguen usando."

### Por qué fallan en 2026 igual que en 2023

- Los LLMs han mejorado en imitar variabilidad humana.
- Existen herramientas de "humanizer" (Undetectable.ai, StealthGPT) que reescriben el texto IA para evadir detectores.
- Cualquier texto IA pasado por un humano que lo edite mínimamente se vuelve indetectable.
- Los detectores compiten con la propia tecnología que tratan de detectar — es una carrera perdida.

### Cifras que dan los propios vendedores vs. realidad

| Detector | Falsos positivos declarados | Falsos positivos en estudios independientes |
|---|---|---|
| Turnitin AI Detection | <1% | 5-12% en escritura no nativa o editada (Perkins et al.) |
| Originality.ai | ~2-5% | Sin auditoría externa publicada |
| GPTZero | "Muy bajo" | ~12% en comparaciones independientes |
| OpenAI Classifier | Tan malo que **OpenAI lo retiró en julio 2023** | Detectaba solo el 26% del texto IA correctamente |

### El acto fundacional: OpenAI retira su propio detector

En **enero 2023** OpenAI lanzó *AI Text Classifier*, un detector hecho por la misma empresa que entrena los modelos. Tenía toda la información posible para acertar. **En julio 2023 lo retiraron silenciosamente** con un comunicado admitiendo *"low rate of accuracy"*. Su propio detector identificaba como "probablemente IA" solo el 26% de los textos generados por ChatGPT, y daba 9% de falsos positivos sobre texto humano. Si la empresa que hace ChatGPT no puede detectar ChatGPT, **nadie puede**.

## 2. "No le preguntes a la IA si lo ha escrito ella"

### El experimento que vamos a hacer en vivo

Pegarle a ChatGPT un párrafo conocido de la literatura clásica (un fragmento del Quijote, un soneto de Shakespeare, el primer párrafo de *Cien años de soledad*) y preguntarle: **"¿Has escrito tú esto?"**.

Resultado probable: dependiendo del fragmento, alguna versión del modelo dirá "sí, lo he escrito yo, en respuesta a tu petición de un texto al estilo de…". Es **incapaz de saberlo**, porque cada conversación empieza de cero y no tiene acceso a su propio historial de generación.

### Por qué pasa esto técnicamente

- Un LLM **no tiene memoria persistente** de qué generó en el pasado. Cada conversación es independiente.
- Cuando le preguntas "¿has escrito esto?" no hace una búsqueda en una base de datos: **alucina una respuesta plausible** según el contexto.
- Si le metes un texto que estilísticamente se parece a lo que un LLM generaría, dirá que sí.
- Si le metes texto humano "raro" (poesía, lenguaje técnico, juergo dialecto), también puede decir que sí.
- La pregunta es literalmente equivalente a preguntarle "¿de qué color es esta calcetín?" sin enseñarle el calcetín: dirá un color al azar con confianza absoluta.

### Frase de cierre del bloque
> "Si un profesor te acusa de usar IA porque ChatGPT le dijo que lo había escrito él, tienes evidencia académica de que el método es estadísticamente equivalente a echar una moneda. Stanford y la propia OpenAI lo demostraron."

## 3. Homogeneización del pensamiento — el estudio del MIT

### "Your Brain on ChatGPT" — MIT Media Lab, junio 2025

Estudio dirigido por **Nataliya Kosmyna** del Media Lab del MIT. Preprint en arXiv (importante: **no peer-reviewed todavía** — hay que mencionarlo).

#### Diseño
- 54 participantes universitarios divididos en 3 grupos:
  - **Grupo LLM**: usa ChatGPT para escribir ensayos.
  - **Grupo Search Engine**: usa buscadores tradicionales pero sin LLM.
  - **Grupo Brain-only**: solo papel y cerebro, sin ayudas.
- 3 sesiones de ensayos durante 4 meses, con electroencefalograma (EEG) midiendo actividad cerebral en tiempo real.
- 2 profesores de inglés evaluaron los ensayos sin saber qué grupo los había escrito.

#### Hallazgos clave
1. **Menor conectividad cerebral**: el grupo LLM mostró conexiones neuronales más débiles entre regiones cerebrales en EEG. El grupo Brain-only, las más fuertes.
2. **Memoria deteriorada**: el **83% de los usuarios de ChatGPT no podía recordar lo que acababa de escribir** minutos antes. En el grupo Brain-only, prácticamente todos podían.
3. **Homogeneización estadística**: los ensayos del grupo LLM eran significativamente más similares entre sí — mismos sustantivos, mismas estructuras, mismos temas.
4. **Evaluación humana**: los profesores describieron los ensayos del grupo LLM como **"soulless"** (sin alma) en sus comentarios cualitativos.
5. **Efecto persistente**: cuando en la sesión 4 movieron al grupo LLM a escribir sin ChatGPT, **seguían escribiendo peor que el grupo que nunca lo había usado**. Como si se hubieran "desentrenado".

#### Caveats importantes
- 54 participantes es una muestra pequeña.
- Preprint sin peer review.
- El diseño metodológico ha sido criticado: ¿es el ChatGPT el que homogeneiza, o son los participantes que ya no se esforzaban?
- Pero los hallazgos son lo bastante llamativos para que el paper se haya viralizado.

### Cómo contarlo
> "Esto no es ciencia ficción, es un estudio del MIT de junio del año pasado. Cogen a 54 universitarios, los dividen en 3 grupos: uno usa ChatGPT, otro usa Google, otro solo su cerebro. Les piden escribir ensayos durante 4 meses con un casco midiendo su actividad cerebral. Los que usaron ChatGPT mostraron menos actividad cerebral, **83% no podía recordar lo que acababa de escribir**, y los profesores describieron sus ensayos como 'sin alma'. Cuando les quitaron ChatGPT, **seguían escribiendo peor que los que nunca lo habían usado**. Como un músculo que se atrofia."

## 4. Monocultura algorítmica — la base académica seria

### El concepto (Kleinberg & Raghavan, 2021)

**Kleinberg, J., & Raghavan, M. (2021).** *"Algorithmic monoculture and social welfare"*. **PNAS 118(22), e2018340118**.

Idea central: cuando muchos decisores independientes usan el mismo algoritmo para tomar decisiones, **la calidad agregada de las decisiones baja**. ¿Por qué?

- Imagina que 10 empresas filtran CVs cada una con un humano distinto. Cada humano tiene sus prejuicios, pero también sus aciertos únicos. Un candidato rechazado por una empresa puede ser aceptado por otra.
- Ahora 10 empresas filtran CVs con el mismo algoritmo. **El candidato rechazado es rechazado por las 10 a la vez**. Y las virtudes que ese algoritmo no detecta se pierden.
- Resultado: el sistema converge hacia "lo que el algoritmo premia", y todo lo que no encaja en esa función es eliminado del mercado.

### Aplicación a LLMs — Bommasani et al. NeurIPS 2022

*"Picking on the Same Person: Does Algorithmic Monoculture lead to Outcome Homogenization?"*

Formalizan que cuando varias instituciones comparten un mismo modelo de fundación (lo que ahora llamamos LLM), las decisiones empiezan a converger en perjuicio de las mismas personas. Una persona "rechazada" por GPT-4 lo será probablemente por Claude y por Gemini, porque comparten datasets y arquitecturas similares.

### Convergencia de valores en LLMs

Trabajo posterior (PRISM Alignment Dataset y similares) muestra que **21 LLMs frontera convergen en solo el ~41% de las preferencias humanas**. Los modelos tienden a valores "secular-rational" y "self-expression" — los valores de la población que generó internet en inglés, sobre todo California. Si toda Europa empieza a usar IA hecha en San Francisco, las decisiones europeas empiezan a converger hacia los valores de San Francisco.

### Por qué importa para la familia
- Los CEOs ya consultan IAs antes de decidir contrataciones, despidos, estrategia. Si todos preguntan al mismo modelo, todos reciben la misma respuesta.
- Los profesores corrigen con detectores de IA. Si todos usan el mismo detector, los mismos estudiantes son acusados.
- Los bancos filtran préstamos con IA. Si todos usan modelos parecidos, los mismos perfiles son rechazados sin recurso.
- Las plataformas de citas, las admisiones universitarias, las contrataciones laborales… todas migrando hacia un puñado de modelos.

### Frase de cierre
> "En 1995 si te negaban un préstamo en una caja, ibas a otra. En 2030, si te niegan un préstamo con IA, **te lo niegan en todas a la vez** porque todas usan modelos parecidos. Eso no es teoría conspiranoica, es un paper de Princeton publicado en NeurIPS en 2022. Y empieza a verse ya."

## 5. Coda — qué hacer prácticamente

### Para profesores en la familia (si los hay)
- **No uséis detectores de IA** para acusar a un estudiante. Las tasas de error son catastróficas.
- Si sospecháis uso de IA: pedid una conversación oral sobre el trabajo, pedid una versión a mano en clase, comparad estilo con escritos previos.
- Diseñad evaluación que asume que el LLM existe: oral, defensa pública, trabajos hechos en clase.

### Para estudiantes en la familia
- Si un profesor te acusa con un detector, **conoce el estudio de Stanford**. Imprime el paper. Tienes evidencia revisada por pares de que el método es defectuoso.
- Nunca pegues tu trabajo en ChatGPT y le preguntes si lo ha escrito él. **Ni para defenderte ni para auto-comprobar**. No funciona.

### Para padres y abuelos
- Si un familiar usa IA para mucho, hablad con ellos. No es "trampa", pero sí puede ser un atrofio mental como sugiere el MIT.
- Conviene alternar: usar la IA y no usarla. Como caminar y conducir.

---

## Apéndice — Lo que NO contamos en la charla pero está verificado

**(El usuario decidió omitir el sesgo CV/IA-IA, lo dejo aquí por completitud.)**

- Laurito et al., PNAS 2025, *"AI-AI bias: Large language models favor communications generated by large language models"*. Probaron 3 dominios (productos, papers académicos, películas), no CVs. GPT-4 mostró el sesgo más fuerte. La afirmación del borrador "82% de CVs" no aparece en este paper.
- Estudio relacionado: Wilson et al. 2025, *"No Thoughts Just AI: Biased LLM Recommendations Limit Human Agency in Resume Screening"* — sí trata CVs pero mide otra cosa (cómo la IA influencia decisiones humanas).

## Fuentes principales

- [Liang et al., Stanford, Patterns 2023 — GPT detectors biased](https://pmc.ncbi.nlm.nih.gov/articles/PMC10382961/)
- [Stanford HAI nota](https://hai.stanford.edu/news/ai-detectors-biased-against-non-native-english-writers)
- [OpenAI retira AI Classifier — TechCrunch](https://techcrunch.com/2023/07/25/openai-shuts-down-its-ai-text-classifier-due-to-low-rate-of-accuracy/)
- [MIT Media Lab — Your Brain on ChatGPT](https://www.media.mit.edu/publications/your-brain-on-chatgpt/)
- [Kleinberg & Raghavan PNAS 2021](https://www.pnas.org/doi/abs/10.1073/pnas.2018340118)
- [Bommasani et al. NeurIPS 2022 — Algorithmic Monoculture](https://arxiv.org/abs/2211.13972)

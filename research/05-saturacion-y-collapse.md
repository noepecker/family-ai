# Bloque 5 — Saturación de internet, model collapse y homogeneización

> Investigación verificada (mayo 2026). Para la parte de "límites y problemas" y el debate sobre detección.

## 1. ¿Cuánto contenido nuevo es IA? — el 74% real

**Claim del borrador**: "74% de páginas web nuevas en 2025 tenían contenido IA".
**Veredicto**: real, pero la cifra viene de **Ahrefs**, no de Graphite, y tiene matices.

- **Ahrefs (abril 2025)** — analizó ~900.000 páginas nuevas: **74,2% contenían algún contenido generado por IA**; solo el **26%** era 100% humano.
- **Graphite (octubre 2025)** — estudio distinto sobre 65.000 artículos de Common Crawl (2020–mayo 2025): **52% del contenido nuevo escrito es mayoritariamente generado por IA** (umbral: ≥50% del texto detectado como máquina). Antes de ChatGPT estaba en ~10%.
- **Originality.ai (sept 2025)** — solo **17,3%** de los resultados top-20 de Google son IA. Los rankings siguen favoreciendo contenido humano (de momento).

### Matices que conviene contar
- Los detectores de IA son **notoriamente poco fiables**: tasas de falsos positivos altas, sobre todo en escritura no nativa en inglés y textos editados.
- Graphite reporta 4,2% de falsos positivos y 0,6% de falsos negativos, pero **solo testearon contra GPT-4o** — otros modelos pueden evadir mejor.
- **El contenido humano absoluto no ha disminuido**: la IA simplemente ha multiplicado el volumen total (Axios, 2025).
- **Tráfico web automatizado supera al humano**: Imperva 2025 — bots = **51%** del tráfico web en 2024.

## 2. Model Collapse y MAD — ciencia sólida con caveats

### Papers fundacionales (verificados)

- **Shumailov et al., Nature, 24 julio 2024** — *"AI models collapse when trained on recursively generated data"* (Nature 631, 755–759). Entrenar recursivamente sobre datos generados por IA causa pérdida progresiva de las "colas" de la distribución original. Sucede en LLMs, VAEs y GMMs. Hay una Author Correction (2025).
- **Alemohammad et al. (Rice University)** — *"Self-Consuming Generative Models Go MAD"* (arXiv 2307.01850, **ICLR 2024**). Acuña el término **MAD = Model Autophagy Disorder**.

### Estado 2025–2026 (¡importante!)
- **Strong Model Collapse** (ICLR 2025): incluso **1 dato sintético entre 1.000** puede causar colapso; los modelos más grandes colapsan más.
- **Contrapunto fuerte — Gerstgrasser et al. (arXiv 2404.01413)**: si los datos sintéticos se **acumulan junto** a los reales (no los reemplazan), **no hay colapso**. Esto es lo que realmente hacen los labs serios.
- *"Position: Model Collapse Does Not Mean What You Think"* (2025): paper crítico argumentando que el fenómeno está sobreinterpretado.

### Veredicto honesto
- Ciencia sólida en lo teórico/experimental controlado.
- **No hay evidencia pública de colapso en GPT-5, Claude o Gemini** — los labs filtran datos sintéticos a propósito.
- Riesgo real pero gestionable; no es el apocalipsis que cuentan algunos titulares.

## 3. AI slop — saturación visible

### Casos concretos
- **LinkedIn slop**: Alexis Ohanian (cofundador de Reddit) lo denunció públicamente en octubre 2025.
- **Amazon**: libros generados por IA inundando categorías desde 2023.
- **Spotify**: artistas falsos generados por IA cobrando royalties.
- **Bots > humanos**: 51% del tráfico web en 2024 ya era automatizado (Imperva).

### Soluciones técnicas (qué hay realmente)
- **SynthID (Google DeepMind)**: +10 mil millones de piezas marcadas (anuncio Google I/O 2025). Portal SynthID Detector abierto el 20 mayo 2025. **Código abierto** para texto. Limitación: solo cubre modelos participantes.
- **C2PA 2.0 / Content Credentials**: ícono oficial desplegado abril 2025. Adoptado por Adobe, Microsoft, OpenAI (DALL-E 3), Meta, TikTok, LinkedIn. Limitación: se puede "strippear" al editar.

### Dead Internet Theory
La versión conspirativa original (~2021, foros) es **especulación**. La versión "AI slop" sí está empíricamente respaldada: las redes y la web están llenas de contenido y bots generados automáticamente.

## 4. Detectores de IA — por qué fallan

### Estudio Stanford (clásico)
- **Liang et al., julio 2023** — *"GPT detectors are biased against non-native English writers"* (Patterns/Cell).
- 7 detectores clasificaron erróneamente como "IA" más del **50%** de los ensayos de estudiantes no nativos en inglés.
- Solo un 5–12% de error en escritura nativa.
- Implicación: los detectores **discriminan** a estudiantes que no hablan inglés en casa.

### Estado actual (2024–2026)
- Turnitin admite tasas de falsos positivos del 1–4% en sus detectores, pero estudios independientes encuentran mucho más.
- **Consejo práctico para la familia**: NO uses detectores como prueba. Ni los profes deben.
- **NO le preguntes a ChatGPT si lo ha escrito él**: el modelo no tiene memoria entre conversaciones y "alucinará" una respuesta cualquiera. Ejemplo en vivo: pegarle un texto de Cervantes y preguntarle si lo escribió él — dirá que sí en muchos casos.

## 5. Homogeneización del pensamiento

### MIT Media Lab, "Your Brain on ChatGPT" (junio 2025)
- 3 grupos (LLM, buscador, solo cerebro), 3 sesiones de ensayos.
- El grupo LLM produjo ensayos **estadísticamente homogéneos** en entidades nombradas, n-gramas y temas.
- Dos profesores de inglés los calificaron como **"sin alma"** (*soulless*).
- **83% de usuarios de ChatGPT no podía recordar lo que acababan de escribir**.
- ⚠️ **Caveat**: es preprint en arXiv, **no peer-reviewed**. Diseño metodológico criticado.

### Monocultura algorítmica (sí peer-reviewed)
- **Bommasani et al., NeurIPS 2022** — *"Picking on the Same Person: Does Algorithmic Monoculture lead to Outcome Homogenization?"*. Cuando muchas instituciones usan el mismo modelo, las decisiones convergen y a las **mismas personas** se les niega empleo, crédito o admisión en todas partes a la vez.
- *"ChatGPT is incredible (at being average)"* — Springer *Ethics & IT* 2025.

### Cómo contarlo en la charla
> "Si todos los CEOs preguntan a ChatGPT qué estrategia seguir, todos reciben la misma estrategia. Si todas las empresas filtran CVs con la misma IA, las mismas personas son rechazadas en todas. Esto no es teoría: es lo que muestran los estudios desde 2022."

---

## Resumen: ciencia sólida vs especulación

| Tema | Estatus |
|---|---|
| 74% Ahrefs / 52% Graphite | Sólido pero con caveats |
| Model collapse teórico (Shumailov, Alemohammad) | Ciencia sólida, peer-reviewed |
| Model collapse ocurriendo *ahora* en GPT/Claude/Gemini | **Especulativo**, sin evidencia pública |
| AI slop en LinkedIn/Amazon/Spotify | Empíricamente verificable |
| Dead Internet Theory (versión conspirativa) | Especulación |
| MIT "homogeneización del pensamiento" | Preliminar (preprint) |
| Monocultura algorítmica académica (Bommasani) | Sólido, peer-reviewed |
| Stanford "detectores discriminan a no nativos" | Sólido, peer-reviewed |
| SynthID/C2PA como solución completa | Parcial — adopción crece, pero evadible |

## Fuentes
- [Ahrefs — "What percentage of new content is AI-generated?"](https://ahrefs.com/blog/what-percentage-of-new-content-is-ai-generated/)
- [Graphite — "More articles are now created by AI than humans"](https://graphite.io/five-percent/more-articles-are-now-created-by-ai-than-humans)
- [Shumailov et al., Nature](https://www.nature.com/articles/s41586-024-07566-y)
- [Alemohammad et al., MAD paper](https://arxiv.org/abs/2307.01850)
- [Gerstgrasser et al. — "Is Model Collapse Inevitable?"](https://arxiv.org/abs/2404.01413)
- [Liang et al., Stanford — GPT detectors biased](https://arxiv.org/abs/2304.02819)
- [MIT Media Lab — "Your Brain on ChatGPT"](https://www.media.mit.edu/publications/your-brain-on-chatgpt/)
- [Bommasani et al., NeurIPS 2022 — Algorithmic Monoculture](https://arxiv.org/abs/2211.13972)
- [SynthID — Google DeepMind](https://deepmind.google/models/synthid/)

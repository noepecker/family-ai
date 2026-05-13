# Bloque 9 — AGI, ARC-AGI, benchmarks y modelos top (mayo 2026)

> Para la sección de "evolución, estado actual y futuro" + la demo de ARC-AGI-3.

## 1. ARC-AGI — las tres versiones

**¿Qué es?** ARC-AGI (Abstraction and Reasoning Corpus) creado por **François Chollet en 2019**. Test de "inteligencia fluida": resolver puzzles visuales novedosos a partir de poquísimos ejemplos. Los humanos lo hacen casi gratis; las IAs entrenadas con datos masivos no.

### ARC-AGI-1 — saturado
- **Resuelto en la práctica a finales de 2024**.
- **OpenAI o3** obtuvo **75,7% (low compute)** y **87,5% (high compute)** en diciembre 2024, superando el umbral humano del 85%.
- En 2025 muchos modelos lo saturaron; el benchmark se considera "completado".

### ARC-AGI-2 — casi
- Lanzado en **marzo 2025** junto al ARC Prize 2025.
- Diseñado para que los modelos de razonamiento que reventaron ARC-1 sufrieran.
- **Estado del leaderboard (mayo 2026)**:
  - GPT-5.5: ~85% (líder)
  - GPT-5.4 Pro: 83,3%
  - Gemini 3.1 Pro: 77,1%
- En el **ARC Prize 2025 (Kaggle)** el Grand Prize quedó **sin reclamar**: top score abierto fue NVARC 24,03%.
- Leaderboard oficial: <https://arcprize.org/leaderboard>

### ARC-AGI-3 — la brecha brutal
- Anunciado oficialmente en **marzo 2025 en YC HQ** (fireside Chollet ↔ Sam Altman). Salió de preview con el lanzamiento del **ARC Prize 2026** ($2M en premios).
- **Es INTERACTIVO**: cientos de entornos turn-based tipo videojuego hechos a mano. **Sin instrucciones, sin reglas explícitas, sin meta declarada**. El agente debe explorar, deducir la mecánica, descubrir qué es "ganar" y transferir aprendizaje entre niveles.
- **Resultados actuales: humanos 100%, frontier AI ~0,51%**.
- Es la brecha más brutal de cualquier benchmark vigente.
- Leaderboard: <https://arcprize.org/arc-agi/3>

### Demo perfecta para la charla
Abrir un nivel de ARC-AGI-3 en vivo y mostrar cómo cualquier sobrino de 10 años lo resuelve en minutos mientras GPT-5.5 se atasca. Visualmente impactante.

## 2. AGI — definiciones y debate

### Definiciones por laboratorio
- **OpenAI**: "sistemas altamente autónomos que superan a los humanos en la mayoría del trabajo económicamente valioso". Altman ya dice que "AGI no es un término muy útil" y habla de superinteligencia.
- **DeepMind (Hassabis)**: sistema que iguala o supera capacidades cognitivas humanas en **todas** las tareas relevantes; falta 1-2 breakthroughs tipo Transformer/AlphaGo.
- **Anthropic (Amodei)**: "país de genios en un datacenter" — IA al nivel de Premio Nobel en múltiples campos.
- **Chollet**: AGI = capacidad de adquirir nuevas habilidades eficientemente ante problemas novedosos. Lo operacionaliza con ARC.

### ¿Cerca o lejos? — citas 2025-2026
- **Dario Amodei (Anthropic)**: AGI en **2026–2027**. Reafirmó la apuesta a principios de 2026: *"no creo que se desvíe mucho"*.
- **Demis Hassabis (DeepMind)**: **5–10 años** (India AI Impact Summit 2026).
- **Sam Altman**: evita poner fecha; habla de pasar directamente a superinteligencia.
- **Yann LeCun**: **escéptico fuerte**. "Los LLMs son un dead end". Dejó Meta a finales de 2025 por desacuerdos con el rumbo LLM-céntrico.
- **Chollet**: el gap ARC-AGI-3 (humanos 100% vs IA <1%) es su evidencia de que falta muchísimo en razonamiento interactivo/agéntico.

## 3. Benchmarks que conviene conocer

| Benchmark | Qué mide | Estado mayo 2026 |
|---|---|---|
| **MMLU** | Conocimiento general estilo examen tipo test | Prácticamente saturado, ya no discrimina |
| **GPQA Diamond** | Ciencia nivel doctorado | Claude Mythos Preview 94,6%; Gemini 3.1 Pro 94,1% |
| **Humanity's Last Exam (HLE)** | 2.500 preguntas multimodales de frontera académica | Claude Mythos Preview 64,7%, GPT-5.4 Pro 58,7%. Hace un año estaba en ~10% |
| **SWE-bench Verified** | Resolver issues reales de GitHub | Claude Opus 4.5 lidera con 80,9% |
| **SWE-bench Pro** | Versión más dura (OpenAI alegó contaminación en Verified) | Opus 4.7 lidera con 64,3% |
| **Terminal-Bench 2.0** | Agentes ejecutando tareas en terminal | GPT-5.5 lidera con 82,7% |
| **ARC-AGI-3** | Razonamiento interactivo en juegos novedosos | Humanos 100%, IA <1% |

## 4. Modelos top en mayo 2026

| Empresa | Modelo flagship | Notas |
|---|---|---|
| **Anthropic** | Claude Opus 4.7 (16 abr 2026), Sonnet 4.7, **Claude Mythos Preview** | Hybrid reasoning. Líder en SWE-bench Pro y HLE |
| **OpenAI** | GPT-5.5 (23 abr 2026), GPT-5.4 Pro, GPT-5.3 Codex | Líder en ARC-AGI-2 y Terminal-Bench |
| **Google DeepMind** | Gemini 3.1 Pro (19 feb 2026) | Multimodal, 1M tokens. Líder en GPQA |
| **xAI** | Grok 4 | Competitivo en coding/razonamiento |
| **Meta (open)** | Llama 4 | Open-weight referente occidental |
| **Alibaba (open)** | Qwen3 | Top open-weight, fuerte en multilingüe/código |
| **DeepSeek (open)** | DeepSeek V4 Pro | Open-weight competitivo a coste muy bajo |

### Reasoning vs estándar
Los **modelos de razonamiento** (o3 → GPT-5.x reasoning, Claude *extended thinking*, Gemini Pro "deep think") gastan compute extra en chain-of-thought antes de responder. Saturan benchmarks de razonamiento pero son más lentos y caros.

Los **modelos estándar** (Haiku, Flash, GPT-mini) priorizan latencia y coste para tareas rutinarias.

Los **híbridos** (Opus 4.7, GPT-5.5) deciden cuándo pensar y cuándo no.

## 5. Karpathy — nanoGPT y "Software 3.0"

### nanoGPT
- **nanoGPT** (no "microGPT" como decía el borrador).
- Repo: <https://github.com/karpathy/nanoGPT>. Publicado en **enero 2023**.
- **~600 líneas** en su núcleo: `train.py` ~300 líneas + `model.py` ~300 líneas. Capaz de cargar pesos de GPT-2.
- Charla famosa: *"Let's build GPT: from scratch, in code, spelled out"* (enero 2023, ~1h 56min): <https://www.youtube.com/watch?v=kCc8FmEb1nY>
- Parte de su curso *Neural Networks: Zero to Hero*.

### "Software 3.0" — charla de junio 2025
**Charla en YC AI Startup School**, "Software is changing (again)". Su tesis:
- **Software 1.0** = código escrito por humanos.
- **Software 2.0** = pesos de redes neuronales aprendidos.
- **Software 3.0** = **LLMs programados en inglés**.

Describe los LLMs como *"people spirits"*: simulaciones estocásticas de personas con psicología emergente, superhumanas y falibles a la vez. Defiende autonomía parcial con humano en el loop.

- Video: <https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again>

### nanochat
Proyecto reciente: *"the best ChatGPT $100 can buy"* — full-stack mínimo de un ChatGPT entrenable.

## Correcciones al borrador original

| Claim | Estado | Corrección |
|---|---|---|
| "microGPT en 200 líneas" | Impreciso | **nanoGPT, ~600 líneas** |
| "ARC-AGI-3: humanos 100%, IA <1%" | Correcto | Exacto: humanos 100%, frontier AI ~0,51% |
| "ARC-AGI-1 sin resolver" | Desactualizado | Saturado por o3 en diciembre 2024 |
| "AGI cerca / lejos" | Depende quién | Anthropic dice 2026-27; DeepMind 5-10 años; LeCun nunca con LLMs |

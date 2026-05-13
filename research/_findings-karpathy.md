# Hallazgos sobre los proyectos minimalistas de Karpathy

> Notas internas. Se integrarán en `01-fundamentos-ia.md` y `07-agi-y-benchmarks.md`. Te tenías razón con la memoria — no era nanoGPT, era **microGPT**, publicado este mismo febrero.

## El protagonista: microGPT (12 febrero 2026)

- URL del blog post: <http://karpathy.github.io/2026/02/12/microgpt/>
- Gist en GitHub: <https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95>
- **Tamaño**: **200 líneas** de Python puro (bajó de 243 a 200 tras refactorizar, ~18% menos)
- **Dependencias**: **cero**. Solo Python estándar.
- **Qué contiene en esas 200 líneas**:
  - Dataset
  - Tokenizer a nivel de carácter
  - Motor de autograd casero (clase `Value`, heredada directamente de **micrograd**)
  - Arquitectura tipo GPT-2 con atención multi-cabeza
  - Optimizador Adam
  - Bucle de entrenamiento
  - Bucle de inferencia
- **El modelo que entrena**:
  - 4.192 parámetros
  - Embeddings de 16 dimensiones
  - 4 cabezas de atención
  - 1 capa
  - Contexto de 16 tokens
  - 1.000 pasos de entrenamiento
- **Dataset**: los ~32.000 nombres del fichero `names.txt` (el mismo que usa makemore desde 2022, datos del SSA estadounidense).
- **Qué aprende y genera**: la *loss* cae de ~3,3 (azar) a ~2,37 tras entrenar. Después **genera nombres nuevos plausibles** que suenan a nombres reales pero no lo son: *Liora*, *Maelin*, *Cassen*, etc.
- **Por qué es perfecto para la charla**: es la destilación de "una década de Karpathy trabajando en LLMs reducida a su esencia algorítmica". Un GPT completo, real, en un archivo que cabe en una pantalla de portátil sin scroll. Y aprendió **el mes pasado**.

## Genealogía completa (cita en la charla)

| Proyecto | Fecha | Líneas | Qué hace | Cita si... |
|---|---|---|---|---|
| **micrograd** | 2020 | ~150 | Motor de autograd ("entender backprop") | quieres "qué es entrenar una red" |
| **makemore** | sep 2022 | ~600 | Modelo a nivel de carácter, 7 arquitecturas | quieres el origen pedagógico |
| **nanoGPT** | ene 2023 | ~600 | Reproducir GPT-2 entero | quieres "GPT-2 desde cero" |
| **nanochat** | oct 2025 | ~8.000 | ChatGPT entero por $100 | quieres "ChatGPT por $100" |
| **microGPT** | **feb 2026** | **200** | GPT mínimo que aprende nombres | **quieres "un GPT en una pantalla"** ← USAR ESTE |

## Cifras llamativas para la charla

- **microGPT cabe en 200 líneas. Sin dependencias. Aprende a inventar nombres.**
- **Su famoso tuit de 2024**: "94 lines is all you need to train a neural network" (micrograd).
- **nanochat: $100 = un ChatGPT entrenable en 4 horas en un nodo de 8 H100**.
- Si escalas a $1.000 y 41 horas, ya conversa coherentemente con matemáticas y código básicos.

## Cómo contarlo en voz alta

> "Andrej Karpathy es el divulgador estrella de IA. Ex-Tesla, ex-OpenAI. Hace tres meses, en febrero de este año, publicó algo que se llama **microGPT**. Doscientas líneas de Python. **Sin librerías, sin PyTorch, sin nada**. Lo lanzas, le das un fichero con 32.000 nombres reales, y al cabo de 1.000 pasos de entrenamiento empieza a generarte nombres nuevos: *Liora*, *Maelin*, *Cassen*. Inventados, plausibles, suenan a nombres. La arquitectura es la misma que está detrás de ChatGPT. La magia de los billones de dólares de OpenAI no está en una fórmula secreta — la fórmula cabe en una pantalla. Está en la cantidad de datos y de cómputo. Eso es lo único realmente diferente."

## Curiosidad adicional: Software 3.0 de Karpathy

- Charla en YC AI Startup School, junio 2025: *"Software is changing (again)"*.
- Tesis: Software 1.0 = código humano. Software 2.0 = pesos de redes neuronales. **Software 3.0 = LLMs programados en inglés**.
- Los LLMs son *"people spirits"*: simulaciones estocásticas de personas con psicología emergente, superhumanas y falibles a la vez.
- Vídeo: <https://www.ycombinator.com/library/MW-andrej-karpathy-software-is-changing-again>

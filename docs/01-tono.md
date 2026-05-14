# Guía de tono · Acércate a la IA

> Este documento manda sobre cualquier copy del sitio. Si alguna página entra en conflicto con lo de aquí, gana esto.

## Para quién escribimos

No escribimos "para la familia". Escribimos para **cualquiera que se pregunte qué pasa con la IA** y aún no tiene una respuesta cómoda. Eso incluye:

- Gente que nunca ha pagado una suscripción y no sabe por dónde empezar.
- Gente que la usa a diario pero quiere entenderla en profundidad.
- Gente técnica que ya construye con LLMs y quiere precisión, fuentes y debate.

Esa diversidad obliga a tres registros conviviendo. No los mezclamos en la misma frase: los **separamos visualmente** mediante el sistema de niveles (ver `content/niveles.ts`).

## Los tres niveles

| Nivel       | Audiencia                                | Promesa                                                    | Color           |
| ----------- | ---------------------------------------- | ---------------------------------------------------------- | --------------- |
| `curioso`   | Llega sin contexto. Necesita orientación. | "Te lo cuento como si nunca hubieras tocado un LLM."       | `--color-good`  |
| `practicante` | Usa IA semanalmente. Quiere sacarle más. | "Te enseño los patrones que ya están funcionando."         | `--color-warn`  |
| `profundo`  | Quiere entender, no solo usar.            | "Aquí discutimos los límites, las fuentes y el debate."    | `--color-hot`   |

Cada bloque de contenido debe **identificar su nivel** en el header del card, y debe **enlazar al nivel siguiente** al final ("¿Quieres ir más a fondo?").

## Reglas de redacción

### 1. Empieza por la persona, no por la tecnología

❌ "Los Transformers son una arquitectura de redes neuronales basada en mecanismos de atención…"
✅ "Cuando tu móvil sugiere la siguiente palabra al escribir, está haciendo lo mismo que ChatGPT. Solo cambia la escala."

### 2. Cierra cada idea con una pregunta abierta

Cada sección termina con una pregunta crítica que invita a profundizar. La pregunta apunta a la página de la web donde se aborda.

❌ "Y esto es todo sobre los Transformers."
✅ "Si un modelo solo predice la siguiente palabra, ¿es honesto llamarlo 'inteligente'? → Discusión en `/explorar/agi-y-benchmarks`."

### 3. Cita siempre. Y la cita es interactiva.

Usa el componente `<Cite>`. Nada de poner un link suelto en azul. La cita es contextual: nombre + año + tipo de fuente (paper / blog / ley / prensa).

❌ "Un estudio dice que 61% de los ensayos fueron mal clasificados."
✅ "Un estudio de Stanford dice que 61% fueron mal clasificados <Cite source="liang-2023-toefl" />."

### 4. Sustituye "abuelos, primos, tíos, familia" por audiencias reales

Esto es público. Mantenemos ejemplos cotidianos pero **sin etiquetar a quién va dirigido por parentesco**.

❌ "Para abuelos: WhatsApp con Gemini."
✅ "Si nunca has pagado por IA: WhatsApp ya tiene Gemini integrado, gratis."

❌ "Tu primo developer puede aprender Claude Code."
✅ "Si programas, Claude Code y Cursor cambian el flujo de trabajo."

Excepción: la autoría es nuestra (Marcos & Noe). Mantenemos el "nosotros" como autores, no como familia.

### 5. Habla con verbos, no con sustantivos

❌ "Realización de una consulta multimodal mediante imagen."
✅ "Sube una foto y pregúntale."

### 6. No vendas la IA. No la condenes. Inténtate equivocar.

Cada vez que afirmes algo bueno, busca dónde falla. Cada vez que critiques, busca el contraargumento. El lector debe salir con preguntas, no con consignas.

### 7. Frases cortas. Datos exactos. Sin adjetivos de marketing.

❌ "Una revolucionaria nueva tecnología transformadora."
✅ "ChatGPT alcanzó 100 millones de usuarios en 2 meses. Instagram tardó 2 años."

### 8. Cuando inevitablemente uses la IA para escribir esto

Marca lo que se generó con IA con la etiqueta `[generado por IA · revisado por humano]`. La autoría intelectual sigue siendo nuestra; lo decimos en voz alta.

## Patrones reutilizables

### El bloque de "te lo cuento en tres niveles"

```
[Curioso]      Una frase.                Una analogía cotidiana.
[Practicante]  Un ejemplo concreto.      Un prompt que copies.
[Profundo]     Paper, número, debate.    Link a /explorar.
```

### El "pregunta del público"

Cada sección termina con un bloque tipo:

> **¿Y si…?**
> "¿Y si la IA me copia el estilo de escritura?" → respuesta breve → link a profundizar.

### Las preguntas que abrimos hoy

En slides y en landing tenemos un bloque visible que recoge **las 5 preguntas más incómodas** que aborda la charla. No las cerramos; las dejamos abiertas para que cada uno tire del hilo en la web.

## Glosario interno para escritura

- "Charla familiar" → **charla / sesión**
- "Familia" (audiencia) → **público / asistentes / quien lea esto**
- "Para abuelos y tíos" → **Si nunca lo has tocado**
- "Para padres y profes" → **Si ya lo usas a veces**
- "Para developers y primos curiosos" → **Si construyes con IA**

## Antimétricas

Si una frase contiene 2 o más de estos, reescríbela:

- "potencial", "transformador", "revolucionario", "disruptivo"
- "navegando el cambio", "ecosistema", "sinergias"
- "el futuro está aquí", "nunca antes visto"
- Emojis en mitad de un párrafo (no en headers o cards)
- Adverbios en -mente seguidos

## Cierre

Esta guía existe para que el sitio se note **escrito por personas con criterio**, no inferido por un modelo. Si una página parece generada por IA sin más, no la publicamos.

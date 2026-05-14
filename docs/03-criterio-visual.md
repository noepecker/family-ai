# Criterio visual — slides y web

> Esta es la regla que vale para todo. Si una tipografía o un tamaño no encaja
> aquí, hay que cuestionarlo. Si la regla impide algo que necesitas, primero
> revisa si es esta página la que está mal.

## Las tres tipografías y su trabajo

Cada una hace exactamente una cosa. No las mezclamos por capricho.

| Familia | Trabajo | Cuándo |
| --- | --- | --- |
| **Inter** (sans, 700-800) | Estructura | Títulos, h1-h4, body, cards, listas, todo lo que comunica contenido. |
| **Fraunces** (serif, italic) | Énfasis editorial | Una palabra dentro de un título, citas largas, preguntas abiertas, sub-encabezados destacados. Las preguntas críticas. |
| **JetBrains Mono** (mono, 500-600) | Meta y datos crudos | Eyebrows, dataciones, etiquetas, números técnicos (años, porcentajes pequeños, IDs), CTAs y captions. |

### Reglas operativas

- **Nunca mezcles serif italic dentro de un párrafo de body**: el serif solo aparece donde se quiere romper el ritmo deliberadamente. Una palabra como mucho.
- **Mono no se usa para narrar**: solo para datos, etiquetas y meta. Si te apetece "darle un toque", evita el mono.
- **Bold (Inter 700/800) no es para llamar la atención**: es para jerarquía. Un párrafo entero en bold no jerarquiza, anula.

## Jerarquía de tamaños — slides

Las slides están escaladas a `1600 × 1000` por Reveal.js. Los tamaños son
pixels absolutos en ese canvas; Reveal los reescala al viewport.

### Títulos

| Elemento | Tamaño | Familia | Notas |
| --- | --- | --- | --- |
| `cover-title` (portada) | 156px | Inter 800, `em` en serif italic | Una palabra resaltada |
| `cover.thanks .cover-title` | 200px | Inter 800 | Slide "Gracias", impacto máximo |
| `chapter-title` (divisor) | 144px | Inter 800 | Acompaña al `chapter-number` |
| `chapter-number` | 220px | Mono 200 | Numerado del bloque; thin tipo *runner* |
| `h2` reveal por defecto | 88px | Inter 700 | Solo si no hay clase específica |
| `section-h` (sección dentro de slide) | 56px | Inter 700 | El título de cada slide de contenido |
| `h3` reveal por defecto | 52px | Inter 600 | Solo si no hay clase específica |

### Cuerpo

| Elemento | Tamaño | Familia |
| --- | --- | --- |
| `lede` (entrada de la slide) | 32px | Inter 400 |
| `bottom-note` (pie con la conclusión) | 22px | Inter 400 |
| `p`, `li` reveal por defecto | 26px | Inter 400 |
| `card` body | 22px | Inter 400 |
| Sub-card `h4` | 28px | Inter 600 |

### Números de impacto

Aquí está la decisión clave: **los números grandes no son tipografía
decorativa, son protagonistas**. Tienen una escala propia y un grosor
intencional.

| Elemento | Tamaño | Familia |
| --- | --- | --- |
| `big-number` (10^10 en la metáfora) | 130px | Inter 800 |
| `impact-number` (61%, $25M, 85,5%) | ~180px | Inter 800 |
| `emp-number` (300M / 95% / Klarna) | ~100px | Inter 800 |
| `vs-number` (en `impact-versus`) | ~120px | Inter 800 |

**Regla**: si un número justifica la slide entera, va en `impact-number` y
en color (rojo si es alarma, verde si es positivo, naranja si es neutro
con peso). Si acompaña a un texto explicativo, va en `emp-number` o
`big-number`.

### Meta y labels

Todo `font-family: var(--font-mono)`, `uppercase`, `letter-spacing` entre
`0.04em` y `0.2em` (más letter-spacing cuanto más pequeño).

| Elemento | Tamaño | Tracking |
| --- | --- | --- |
| `cover-eyebrow` | 18px | 0.04em |
| `chapter-sub` | 22px | normal |
| `meta-label` | 14px | normal |
| `card-tag` | 14px | normal |
| `t-year` (timeline) | 18px | normal |
| `step-meta` | 13px | normal |
| `deepen` (CTA) | 15px | 0.08em |
| `exit-charla` | 12px | 0.16em |
| `cover-tag` | 14px | normal |

### Énfasis con serif italic

Reservado para tres usos:

1. **Resaltar una palabra dentro de un título grande**. La palabra que
   queremos que se quede en la cabeza.
2. **Citas literales largas** (`quote-mega`, `quote-mega-2`, `quote-mega-3`).
3. **Preguntas abiertas** (`open-question .oq-text`): toda la pregunta en
   serif italic 24px sobre fondo translúcido.

| Elemento | Tamaño | Notas |
| --- | --- | --- |
| `cover-title em` | 156px | Mismo tamaño que el padre |
| `chapter-title em` | 144px | Mismo tamaño que el padre |
| `section-h em` | inherit | Cuando se usa, hereda |
| `quote-mega` (cita media) | 36px | Línea simple, bordes blandos |
| `oq-text` (pregunta abierta) | 24px | Sobre fondo `rgba(255,255,255,0.03)`, borde izq naranja |
| `oq-mark` (signo de apertura) | 44px | Fraunces italic, color naranja |

## Color y números

Tres colores marcan tipos de cifra:

| Tono | Cuándo | Variable |
| --- | --- | --- |
| **Naranja** (`--accent`) | Datos protagonistas, énfasis editorial, CTAs | `#ff5722` |
| **Verde** (`--good`) | Buenas noticias (29% más cánceres, 85,5% acierto) | `#10b981` |
| **Rojo** (`--bad`) | Riesgo, alarma, fracaso (95% sin retorno, 0,5% IA) | `#ef4444` |
| **Cian** (`--cool`) | Información neutra, fechas, secundarios | `#38bdf8` |

**Regla**: nunca uses naranja para una cifra negativa, ni rojo para una
positiva. La carga semántica del color va con la del dato.

## Espacio y respiración

- Slides con número grande van **muy centradas vertical y horizontalmente**.
  Padding generoso. No metas tres ideas donde cabe una.
- Las slides con tabla, timeline o grid sí pueden llenar el ancho, pero
  con padding lateral de al menos `80px`.
- **Cada slide tiene un solo héroe**: una imagen, un número, una cita, una
  tabla. Si tienes dos héroes, son dos slides.

## Las decisiones que tomamos a propósito

1. **Sin numeración explícita en el chrome de la slide.** Reveal pinta el
   `c/t` discretamente abajo a la derecha. Los números de capítulo
   (`chapter-number`) sí existen, pero como motivo gráfico en las slides
   divisorias, no como índice.

2. **Sin marcas de identidad agresivas.** No hay logos, no hay autores en
   pantalla. El cover y el cierre son los únicos sitios con "Acércate
   a la IA · 2026". Todo lo demás es contenido.

3. **El naranja es escaso.** Solo para énfasis, CTAs, datos protagonistas
   y la marca pequeña del header del cover. Si todo es naranja, nada lo
   es.

4. **Las citas críticas se ven antes de leerlas.** Por eso `open-question`
   tiene borde izquierdo naranja grueso y fondo blanco translúcido —
   destaca incluso en pantalla rápida.

5. **El cierre de cada bloque es siempre una pregunta abierta**, no una
   conclusión. Y siempre va seguida de un `deepen` CTA. El público debe
   poder *cerrar* su propia idea, no recibirla cerrada.

## Web (no slides)

Mismo principio de tres tipografías, mismas tres familias, mismos
colores. Diferencias:

- Tamaños mucho más conservadores. El hero usa `text-[3.25rem]` en móvil
  y `text-9xl` en desktop, no 156px fijos.
- El `section-marker` reemplaza al `chapter-number` para indicar bloque:
  numero grande en Fraunces italic + etiqueta mono.
- Las citas usan el componente `<Cite>` que abre una tarjeta con autor,
  publicación, fecha, cita literal y enlace. No texto plano.

## Lo que NO hacemos

- **No usamos emoji decorativo.** Sí en `card-icon` y `demo-icon` como
  marcador rápido de tema, pero nunca dentro de un párrafo.
- **No usamos drop shadows decorativos.** Sí en hover (subida de 1-2px,
  glow naranja sutil), no en estado base.
- **No usamos gradientes saturados.** El único gradiente intencional es
  el `accent-glow` (naranja a transparente) en el cover y en cards
  destacadas. Nada más.
- **No usamos animaciones que distraigan durante una explicación.** El
  `pulse-glow` del dot del header es lo único permanente; el resto son
  `fade-in-up` o `token-pop` que ocurren una vez al cargar.

# Acércate a la IA · Mayo 2026

Una **app web Next.js** desplegada en Vercel que acompaña una charla abierta sobre IA.
Pensada para tres niveles de lectura (curioso / practicante / profundo) y para
volver a ella después de la charla.

Recorridos:

1. **`/charla`** — presentación lineal de 90 min (reveal.js). Cada slide enlaza con la página web donde profundizar.
2. **`/casos`** — 30+ casos de uso reales filtrables por nivel.
3. **`/jugar`** — 10 interactivos (quiz, ¿IA o no?, prompt battle, ARC-AGI-3, etc.).
4. **`/herramientas`** — catálogo curado del ecosistema mayo 2026.
5. **`/explorar`** — enciclopedia de 13 bloques con fuentes interactivas.
6. **`/historia`** — línea temporal de 56 hitos (1943 → hipótesis del futuro).
7. **`/preguntas`** — Q&A anticipada del público, filtrable por nivel y bloque.

## Cómo arrancar en local

```bash
npm install
npm run dev
```

Abre <http://localhost:3000>. Si el puerto está ocupado: `npx next dev -p 3210`.

El script `predev` copia `slides/` → `public/slides/` automáticamente para que
`/charla` (redirige a `/slides/`) funcione sin configuración adicional.

## Cómo desplegar en Vercel

### Opción A — desde la web (sin CLI)
1. Sube este repo a GitHub.
2. Entra a <https://vercel.com/new> e importa el repo.
3. Vercel detecta Next.js automáticamente. **Build & install commands ya están en
   `vercel.json`**. Click "Deploy".
4. URL pública lista en ~2 minutos.

### Opción B — con Vercel CLI (recomendado para iterar)
```bash
npm i -g vercel
vercel login
vercel       # primera vez: te guía
vercel --prod  # despliegue a producción
```

### Variables de entorno
Ninguna obligatoria. Si añades demos en vivo con AI SDK, configura en Vercel
Dashboard → Project Settings → Environment Variables.

## Estructura del proyecto

```
family-ai/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Header + footer global con autoría
│   ├── page.tsx            # Landing con hero animado + 3 niveles + 6 vías
│   ├── globals.css         # Tailwind v4 + tema custom + animaciones
│   ├── preguntas/page.tsx  # FAQ anticipada (filtros nivel + bloque)
│   ├── explorar/{page,[slug]/page}.tsx
│   ├── casos/{page,[id]/page}.tsx
│   ├── jugar/...           # Hub + 10 sub-juegos
│   ├── herramientas/page.tsx
│   ├── historia/page.tsx
│   ├── agi/page.tsx
│   └── futuro/page.tsx
├── components/
│   ├── cite.tsx            # Cita inline interactiva (hover-card con fuente)
│   ├── token-stream.tsx    # Animación de tokens generándose (hero)
│   ├── theme-toggle.tsx
│   └── [juegos]/...
├── content/                # Single source of truth de datos editoriales
│   ├── niveles.ts          # Sistema unificado curioso/practicante/profundo
│   ├── slide-map.ts        # Mapa slide ↔ página web
│   ├── fuentes.ts          # Registro central de fuentes citadas
│   ├── preguntas.ts        # FAQ por bloque y nivel
│   ├── bloques.ts          # 13 bloques de /explorar
│   ├── casos.ts            # 30+ casos
│   ├── herramientas.ts     # Catálogo
│   ├── historia.ts         # Línea temporal
│   └── predicciones.ts
├── lib/
│   ├── markdown.ts         # Parser markdown
│   └── niveles.ts          # Helpers de estilos por nivel
├── docs/
│   ├── 00-guion-charla.md
│   └── 01-tono.md          # Guía editorial: tono, voz, antimétricas
├── research/               # Documentos verificados (~150 fuentes)
├── slides/                 # Presentación reveal.js (con CTAs Profundizar →)
├── scripts/copy-slides.mjs
├── package.json · next.config.ts · tsconfig.json · vercel.json
```

## Tecnología

- **Next.js 15** con App Router + Turbopack
- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS v4** (beta — PostCSS plugin)
- **marked** para renderizar markdown de los bloques
- **reveal.js** (CDN) para la presentación lineal

## Estado actual

- [x] App Next.js completa y funcionando (70 rutas estáticas)
- [x] 13 bloques de contenido (research/) renderizándose en /explorar
- [x] 10 juegos interactivos completos
- [x] Sistema unificado de niveles (curioso / practicante / profundo)
- [x] Guía de tono y voz (`docs/01-tono.md`)
- [x] Componente `<Cite>` con registro central de fuentes
- [x] /preguntas — Q&A anticipada filtrable
- [x] Slides con CTAs "Profundizar →" a la web
- [x] Tema visual custom + dark/light toggle
- [x] Config Vercel lista
- [ ] Pendiente: assets generados con IA — ver `assets/GENERATE.md`

## Lo que sigue

1. **Generar los assets** con las herramientas indicadas en `assets/GENERATE.md`.
2. **Deploy a Vercel** (5 minutos).
3. **Compartir la URL** con la familia antes de la charla para que vayan explorando.
4. **El día de la charla**: proyectar `/charla` desde el portátil.
5. **Después de la charla**: dejar la web abierta para que cada uno profundice donde quiera.

## Investigación

Toda la investigación está verificada con ~150 fuentes citadas:
- Papers académicos (Nature, PNAS, NeurIPS, ICLR, arXiv)
- Blogs oficiales de Anthropic, OpenAI, DeepMind, Google
- Medios serios (NYT, FT, TIME, Bloomberg, MIT Technology Review)
- Documentos legales (AI Act, EOs presidenciales, GPT-4 System Card)

Lista completa en `research/INDEX.md`.

# IA en familia · Marcos & Noe (Mayo 2026)

Una **app web Next.js** lista para Vercel, pensada para acompañar una charla familiar
sobre IA. Tres modos de uso:

1. **`/charla`** — presentación lineal de 90 min (reveal.js, ideal para proyectar)
2. **`/explorar`** — encyclopedia de 13 bloques (lectura libre con índice por tema)
3. **`/jugar`** — 4 interactivos: quiz, ¿IA o no?, prompt battle, evolución de modelos

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
│   ├── layout.tsx          # Layout + header + footer global
│   ├── page.tsx            # Landing con las 3 vías
│   ├── globals.css         # Tailwind v4 + tema custom
│   ├── explorar/
│   │   ├── page.tsx        # Grid de los 13 bloques
│   │   └── [slug]/page.tsx # Detalle con TOC
│   ├── jugar/
│   │   ├── page.tsx        # Hub de juegos
│   │   ├── quiz/page.tsx
│   │   ├── ia-o-no/page.tsx
│   │   ├── prompt-battle/page.tsx
│   │   └── evolucion-modelos/page.tsx
│   └── (charla redirige a /slides/ via next.config.ts)
├── components/             # Componentes React de los juegos
│   ├── quiz/{quiz.tsx, data.ts}
│   ├── ia-o-no/{game.tsx, data.ts}
│   ├── prompt-battle/{battle.tsx, data.ts}
│   └── evolucion/{evolucion.tsx, data.ts}
├── content/
│   └── bloques.ts          # Metadata de los 13 bloques de /explorar
├── lib/
│   └── markdown.ts         # Parser de markdown → HTML para los bloques
├── research/               # 13 documentos verificados con fuentes (.md)
├── docs/
│   └── 00-guion-charla.md  # Guion temporizado de la charla
├── slides/                 # Presentación reveal.js (se copia a public/slides/)
│   ├── index.html
│   └── theme/agency.css
├── scripts/
│   └── copy-slides.mjs     # Pre-script que copia slides/ → public/slides/
├── assets/                 # Assets pendientes a generar con IA
├── public/                 # Estáticos servidos por Next.js
├── package.json
├── next.config.ts
├── tsconfig.json
├── postcss.config.mjs
└── vercel.json             # Config de despliegue Vercel
```

## Tecnología

- **Next.js 15** con App Router + Turbopack
- **React 19**
- **TypeScript 5.7**
- **Tailwind CSS v4** (beta — PostCSS plugin)
- **marked** para renderizar markdown de los bloques
- **reveal.js** (CDN) para la presentación lineal

## Estado actual

- [x] App Next.js completa y funcionando
- [x] 13 bloques de contenido (research/) renderizándose en /explorar
- [x] 4 juegos interactivos completos
- [x] Tema visual custom estilo agencia
- [x] Presentación reveal.js integrada en /slides
- [x] Config Vercel lista
- [ ] Pendiente: assets generados con IA (foto portada, vídeo Sora, audio clonado…) — ver `assets/GENERATE.md`

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

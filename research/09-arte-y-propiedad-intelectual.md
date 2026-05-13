# Bloque — Arte, propiedad intelectual y la batalla cultural

> Profundidad de charla. Bloque que cubre cómo se entrenó la IA de imagen, los casos legales mayores (Ghibli, Disney, NYT, Anthropic settlement), las posturas de artistas, y el dilema de fondo.

## 1. La pregunta de la sala

Cuando ChatGPT escribe un email, no llaman a la puerta abogados. Cuando Midjourney genera una imagen "estilo Ghibli", el debate es nuclear. ¿Por qué? Porque el arte es **identidad cultural, oficio, y la economía vital de cientos de miles de personas**. Y porque las IAs de imagen se entrenaron, literalmente, con la obra de esas personas, sin pedir permiso.

## 2. Cómo se entrenó la IA de imagen — la fontanería oscura

### LAION-5B y LAION-Aesthetic: el dataset que lo cambió todo

**LAION** (Large-scale Artificial Intelligence Open Network) es una ONG alemana sin ánimo de lucro fundada en 2021 por Christoph Schuhmann, profesor de física de secundaria de Hamburgo. Su producto estrella, **LAION-5B**, lanzado en marzo de 2022, es un dataset de **5.850 millones de pares imagen-texto** descargados de internet abierto.

- **LAION-Aesthetic** es un subconjunto curado (~600 millones de imágenes) filtrado por "calidad estética". Fue el corazón del entrenamiento de Stable Diffusion 1.4 y 1.5.
- LAION **no almacena las imágenes** en sí, solo URLs, captions (alt-text) y embeddings. Los pares fueron extraídos de Common Crawl filtrando con CLIP de OpenAI.
- Incluye masivamente **Pinterest, DeviantArt, ArtStation, Flickr, sitios de stock, museos, Wikipedia, prensa**.

### Las polémicas concretas de LAION

- **Diciembre 2023**: el Stanford Internet Observatory (David Thiel) reveló que LAION-5B contenía **al menos 3.226 imágenes sospechosas de CSAM** (material de abuso sexual infantil), de las cuales 1.008 fueron verificadas externamente. LAION retiró el dataset; reapareció como **Re-LAION-5B** en agosto 2024 con esas URLs eliminadas.
- **Datos médicos privados**: en septiembre 2022 la artista Lapine descubrió **fotos médicas suyas** (de una visita a un dermatólogo en 2013) dentro de LAION-5B, indexadas desde un archivo médico filtrado.
- **Datos personales**: rostros en hospitales, fotos familiares, identidades de víctimas de violencia.

### Common Crawl
Crawler web sin ánimo de lucro que publica snapshots mensuales de la web abierta (~250 TB por captura). Base de **GPT-3 (60% de tokens), C4 de Google, The Pile de EleutherAI, y prácticamente todos los LLMs modernos**. Respeta robots.txt en el momento del crawling, pero **no purga retroactivamente** cuando un sitio cambia su política. Si una web tenía contenido público en 2021, ese contenido ya está en los datasets, aunque hoy esté cerrado.

### Los datasets de los grandes generadores de imagen
- **Stable Diffusion** (Stability AI + CompVis, agosto 2022): LAION-Aesthetic.
- **Midjourney** (David Holz, julio 2022): nunca ha publicado su dataset. En el juicio de Disney/Universal se reveló uso intensivo de LAION + scraping propio. En **enero 2024 se filtró un documento interno con una lista de 16.000 artistas usados como estilos entrenables**, incluyendo artistas vivos y muertos.
- **DALL-E 2/3** (OpenAI): datasets propietarios + licencias con Shutterstock (firmada julio 2022).
- **Imagen** (Google): LAION-400M + datasets internos.
- **Flux** (Black Forest Labs, agosto 2024): fundado por los creadores originales de Stable Diffusion; entrenamiento no divulgado.

### Carlini et al. 2023 — el paper que demolió el "no memorizan"

Nicholas Carlini (Google DeepMind) y equipo publicaron en enero 2023 *"Extracting Training Data from Diffusion Models"*.

Demostraron que **Stable Diffusion 1.4 memorizaba literalmente imágenes del dataset** y podían extraerse con el prompt correcto. Ejemplo icónico: extrajeron una foto **casi pixel a pixel de Ann Graham Lotz** (hija de Billy Graham) usando solo su nombre como prompt. Sobre 350.000 prompts probados, recuperaron **109 imágenes casi idénticas** a las originales. Imagen de Google memorizó **2× más** que Stable Diffusion.

**Este paper es citado en prácticamente todas las demandas posteriores**. Demuele el argumento "el modelo no copia, generaliza".

## 3. Los grandes juicios — el mapa legal

### 3.1 Studio Ghibli + GPT-4o (marzo 2025)

El **25 de marzo de 2025**, OpenAI lanzó la generación nativa de imágenes en GPT-4o. En 48 horas, X se inundó del **"Ghibli style"**: fotos personales convertidas, memes políticos, incluso la **Casa Blanca posteó una imagen de un arresto migratorio "en estilo Ghibli"**. Sam Altman cambió su avatar a una versión Ghibli de sí mismo.

**Reacción de Miyazaki**: técnicamente Miyazaki no comentó en 2025, pero un clip de un documental de NHK de 2016 (*Never-Ending Man: Hayao Miyazaki*) se viralizó masivamente. Tras ver una demo de animación generada por IA de un zombi grotesco, Miyazaki dice:

> *"Estoy completamente disgustado. Si realmente quieren hacer cosas espeluznantes, pueden seguir haciéndolas. Yo nunca desearía incorporar esta tecnología a mi trabajo. Siento fuertemente que esto es **un insulto a la vida misma**."*

**Postura legal**: el abogado de Miyazaki en EEUU envió en abril 2025 una carta de cease-and-desist a OpenAI. **Pero hay un problema**: el estilo **no está protegido por copyright en EEUU**, solo obras específicas. Japón tiene un régimen aún más permisivo: el **artículo 30-4 de la ley de copyright japonesa** (reformado en 2018) **permite explícitamente entrenar IA con obras protegidas sin licencia**.

**Cómo contarlo**:
> "El 25 de marzo del año pasado, OpenAI lanzó la generación de imágenes en GPT-4o. En 48 horas internet entero se llenó de 'fotos al estilo Studio Ghibli'. Hasta la Casa Blanca publicó una. Y luego se viralizó un vídeo donde Miyazaki, en 2016, viendo una demo de IA, decía: **'Esto es un insulto a la vida misma'**. Studio Ghibli no demandó porque **el estilo no se puede patentar en EEUU**. Eso es lo que hay: una empresa de tecnología puede entrenar su modelo con tu obra de 50 años, vender el resultado, y legalmente no es robo. Cultural y éticamente, es otro debate."

### 3.2 Disney + Universal vs Midjourney (junio 2025) — la primera bala de Hollywood

El **11 de junio de 2025**, Disney y Universal presentaron una demanda conjunta en el Distrito Central de California contra Midjourney. **Primera demanda de un gran estudio de Hollywood contra una IA generativa**.

La denuncia incluye imágenes side-by-side de **Darth Vader, los Minions, Yoda, Shrek, Buzz Lightyear, Elsa de Frozen**, generadas con prompts genéricos (sin nombrar los personajes en algunos casos). Reclaman daños por:
- Infracción directa
- Infracción contributiva y vicaria
- Violación de la DMCA (eliminación de información de gestión de copyright)

Midjourney respondió alegando fair use. **A mayo 2026 está en fase de discovery**.

### 3.3 Getty Images vs Stability AI (UK + EEUU, desde enero 2023)

Getty demandó en **enero 2023** en Londres y Delaware. Aportó como prueba imágenes generadas por Stable Diffusion que **incluían distorsionado el watermark de Getty Images** — prueba prima facie de entrenamiento con su catálogo de **12 millones de imágenes** sin licencia.

**Sentencia parcial en Londres, noviembre 2025**: Getty **ganó en marca registrada** (los watermarks) pero **perdió en infracción de copyright primaria** por jurisdicción (el entrenamiento ocurrió fuera de UK). El caso de Delaware sigue activo.

### 3.4 NYT vs OpenAI/Microsoft (diciembre 2023)

Demanda presentada el **27 de diciembre de 2023** en el SDNY. NYT aportó **100 ejemplos de regurgitación literal**: ChatGPT reproducía artículos del NYT casi palabra por palabra. OpenAI replicó acusando al NYT de "hacking" (manipular prompts para forzar memorización).

En **marzo 2025**, la jueza Sidney Stein rechazó la moción de desestimación de OpenAI. Discovery en curso. OpenAI ofreció acuerdo de licencia que NYT rechazó. Mientras tanto, OpenAI firmó licencias con **AP, Axel Springer, News Corp, The Atlantic, Vox, Condé Nast, Time, Hearst**.

### 3.5 Authors Guild + Silverman + Martin vs OpenAI/Meta

Múltiples casos consolidados:
- **Tremblay v. OpenAI** (junio 2023): Paul Tremblay, Mona Awad.
- **Silverman v. OpenAI/Meta** (julio 2023): Sarah Silverman, Christopher Golden, Richard Kadrey.
- **Authors Guild v. OpenAI** (septiembre 2023): George R.R. Martin, John Grisham, Jonathan Franzen, Jodi Picoult, David Baldacci.
- **Kadrey v. Meta** (julio 2023): se reveló en diciembre 2024 que **Meta usó LibGen** (biblioteca pirata) consciente y deliberadamente para entrenar LLaMA. Emails internos muestran a **Mark Zuckerberg aprobando el uso**.

En **junio 2025**, Judge Vince Chhabria (Kadrey v. Meta) dictó sentencia parcial: el entrenamiento es fair use en abstracto, pero los plaintiffs no probaron daño de mercado adecuadamente. En apelación.

### 3.6 Universal + Sony + Warner vs Suno + Udio (junio 2024)

Las tres majors demandaron el **24 de junio de 2024**. Aportaron como evidencia generaciones que reproducían **"Johnny B. Goode" de Chuck Berry, "All I Want for Christmas Is You" de Mariah Carey, y vocals casi idénticas de ABBA, Bruce Springsteen y James Brown**.

Suno admitió en su contestación de agosto 2024 que entrenó con "música disponible públicamente en internet" — admisión interpretada como confesión de scraping masivo. **A mayo 2026 las dos partes están en negociaciones de licencia paralelas a la demanda**.

### 3.7 Bartz v. Anthropic — **el precedente más importante** (septiembre 2025)

Andrea Bartz, Charles Graeber, Kirk Wallace Johnson demandaron a Anthropic en agosto 2024. Anthropic había:
- Escaneado millones de libros legalmente comprados.
- **Descargado ~7 millones de libros pirata** de LibGen y Books3.

**Sentencia del juez William Alsup, junio 2025**: distinguió dos cuestiones críticamente.
1. Entrenar el modelo con libros legalmente adquiridos **es fair use transformativo**.
2. Pero **descargar y almacenar libros pirata es infracción**, independientemente del uso posterior.

En **septiembre 2025** Anthropic alcanzó un acuerdo de **$1.500 millones** (~$3.000 por libro pirateado, sobre ~500.000 obras). **El mayor settlement de copyright de la historia de EEUU**.

**El precedente para 2026**: entrenar con material adquirido legalmente = OK. Piratear el corpus = no.

### 3.8 Scarlett Johansson vs OpenAI — el caso "Sky" (mayo 2024)

En la demo de **GPT-4o el 13 de mayo de 2024**, OpenAI presentó la voz "Sky", inquietantemente parecida a la voz de Johansson en **"Her" (2013)**. Sam Altman tuiteó simplemente **"her"**. Johansson reveló días después que Altman le había pedido **dos veces** licenciar su voz (la última, 2 días antes del lanzamiento). Rechazó.

Su abogado envió cease-and-desist; OpenAI retiró Sky el 20 de mayo de 2024, alegando que la actriz que dobló a Sky había sido contratada antes de contactar a Johansson. No hubo demanda formal, pero **provocó la ley California AB 2602** (septiembre 2024) que prohíbe contratos que cedan en perpetuidad réplicas digitales sin negociación con representante.

### 3.9 Reddit, Stack Overflow, Tumblr — venta directa

- **Reddit + Google**: febrero 2024, deal de **$60M/año** para entrenamiento de Gemini.
- **Reddit + OpenAI**: mayo 2024, cantidad no revelada.
- **Stack Overflow + OpenAI**: mayo 2024. Provocó una **revuelta de moderadores** que empezaron a borrar/sabotear sus respuestas; SO los suspendió temporalmente.
- **Tumblr/WordPress + Midjourney + OpenAI**: febrero 2024, Automattic vendió contenido público a ambos.
- **Photobucket, Shutterstock**: deals con OpenAI/Meta en 2023-24.

## 4. Los artistas en contra — la resistencia organizada

### 4.1 Andersen, Ortiz, McKernan vs Stability/Midjourney/DeviantArt
Demanda colectiva del **13 de enero de 2023**. Liderada por Matthew Butterick (también demandante en GitHub Copilot). Tras varias enmiendas, en agosto 2024 la jueza Orrick permitió que las claims de infracción y trade dress (Karla Ortiz) procedieran. **Karla Ortiz se convirtió en la voz pública del movimiento**, testificando ante el Senado de EEUU (julio 2023) y la Comisión Europea.

### 4.2 Greg Rutkowski — el estilo más imitado
Ilustrador polaco de fantasía. En septiembre 2022 se descubrió que **"Greg Rutkowski"** era uno de los prompts más usados en Stable Diffusion — **más que "Picasso" o "Van Gogh"**.

Cita textual a MIT Technology Review (septiembre 2022):
> *"Probablemente en un mes habrá más imágenes con mi nombre que las que he hecho en toda mi carrera."*

Stable Diffusion 2.0 eliminó su nombre; el backlash de usuarios obligó a Stability a retroceder parcialmente.

### 4.3 Herramientas defensivas
- **Have I Been Trained?** (Spawning.ai, 2022): buscas tu obra en LAION; Stability aceptó procesar opt-outs vía esta herramienta para SD 3.
- **Glaze** (Universidad de Chicago, Ben Zhao, marzo 2023): perturbaciones imperceptibles que confunden al modelo respecto al estilo.
- **Nightshade** (mismo equipo, enero 2024): no defensivo sino **ofensivo** — "envenena" el dataset. Una imagen de un perro etiquetada como gato hace que el modelo, tras suficientes muestras envenenadas, genere gatos cuando se le pide perro. Considerada por algunos sabotaje legítimo, por otros vandalismo.

### 4.4 Cara — la red social anti-IA
App lanzada por **Jingna Zhang** en enero 2023, viralizada en mayo 2024 cuando Meta cambió su política de IA. **Pasó de 40k a 650k usuarios en una semana**. Red social para artistas con detección anti-IA integrada (vía Glaze) y prohibición explícita de subir contenido generado.

## 5. Artistas a favor (o ambivalentes)

### 5.1 Boris Eldagsen — el provocador
Fotógrafo alemán. Presentó *"Pseudomnesia: The Electrician"* en la categoría Creative Open del **Sony World Photography Award**. **Ganó el primer premio el 13 de abril de 2023**. En la ceremonia **rechazó el premio en directo**, revelando que era IA generada:
> *"No quería este premio. Fue una rebelión, una provocación para abrir el debate."*

### 5.2 Refik Anadol — el institucional
Artista turco-americano. Su instalación **"Unsupervised"** (MoMA, noviembre 2022 - marzo 2023) usó un GAN entrenado en la colección del MoMA. Defendido por la institución, criticado por artistas como "pintura de una pintura".

### 5.3 Huelgas Hollywood 2023 — el caso laboral más serio
- **WGA (guionistas)**: huelga del **2 de mayo - 27 de septiembre de 2023** (148 días). Acuerdo final:
  - La IA **no puede ser acreditada como guionista**.
  - No puede usarse para socavar créditos humanos.
  - Los estudios deben revelar si entregan material IA-generated a los guionistas.
- **SAG-AFTRA (actores)**: huelga del **14 de julio - 9 de noviembre de 2023** (118 días). Acuerdo:
  - Consentimiento informado y compensación obligatoria para réplicas digitales.
  - Protección especial para actores secundarios y de fondo (que los estudios pretendían escanear una vez y reutilizar perpetuamente).

## 6. El marco legal en construcción

### Fair use (EEUU)
Cuatro factores (§107 Copyright Act): propósito (transformativo o no), naturaleza de la obra, cantidad usada, efecto sobre el mercado. **Bartz v. Anthropic** sentó que el entrenamiento sí es transformativo. **El factor 4 (impacto de mercado)** es el campo de batalla actual.

### Opt-out vs opt-in
- **Opt-out** (modelo de Stability con Spawning): por defecto se entrena, el artista debe retirarse activamente.
- **Opt-in** (defendido por artistas y por la UE): por defecto NO se entrena.

### EU AI Act
Entró parcialmente en vigor en **agosto 2024**, sección de modelos de propósito general (Art. 53) aplicable desde **agosto 2025**. Obliga a proveedores a:
- Publicar un **resumen suficientemente detallado** del contenido de entrenamiento.
- Implementar políticas que respeten el **opt-out del Art. 4(3) de la Directiva DSM 2019** (text and data mining).
- En Europa, un artista puede **reservar derechos mediante medios legibles por máquina** (ai.txt, meta tags) y los entrenadores están obligados a respetarlo.

### C2PA Content Credentials
Adoptado por: cámaras Sony Alpha, Leica M11-P, iPhone 16 (parcial), Photoshop, DALL-E 3, Adobe Firefly. Pequeño **ícono "CR"** que viaja con la imagen. Limitación: se pierde con screenshot.

## 7. Los dilemas para la charla

### Democratización vs precarización
Ahora cualquiera puede generar una ilustración decente en 30 segundos. Es genuinamente revolucionario: una madre puede ilustrar un cuento para su hijo, un emprendedor sin presupuesto tiene una imagen de marketing, una escuela rural accede a recursos visuales.

**Pero**: una encuesta de **CIISA + Equity UK (febrero 2024)** mostró que el **74% de ilustradores británicos** habían perdido trabajo o ingresos por la IA en 12 meses.

### Homogeneización del estilo
Aunque los modelos pueden generar "cualquier estilo", en la práctica convergen hacia una estética reconocible: simetría, paleta cálida saturada, ojos grandes, composición centrada, hiperrealismo cinematográfico. Es el **"AI look"**.

### El argumento "siempre se ha copiado"
Picasso copió a los maestros africanos, Warhol copió a Campbell, todo el manga deriva de Tezuka que derivó de Disney. La diferencia: **escala, velocidad y ausencia de digestión**. Un humano que estudia a Rutkowski tarda años, produce algo deudor pero distinto. Un modelo lo hace **millones de veces por segundo, sin filtro creativo interior**.

## 8. Cierre del bloque

### Mensajes clave

1. **Las IAs de imagen se entrenaron literalmente con la obra de millones de artistas sin pedir permiso**. Ese es el hecho técnico.
2. **El sistema legal está en construcción**. Bartz v. Anthropic dice "entrenar = OK, piratear el corpus = no" pero el debate sigue abierto.
3. **El estilo no es protegible legalmente** en EEUU y casi nadie. Por eso "Ghibli style" es polémico pero no es ilegal.
4. **Las grandes empresas están firmando licencias** con quien tiene poder (NYT, AP, Reddit) y demandando a quien no tiene (artistas individuales). El que tiene abogados, cobra.
5. **Europa va por delante regulatoriamente** con el AI Act y el derecho de opt-out via medios técnicos.
6. **Los artistas se están organizando** (Cara, Nightshade, lawsuits colectivos). Hollywood logró acuerdos serios en 2023.
7. **El público disfruta de la democratización pero los profesionales pagan el precio**. No hay solución limpia.

### Frase de cierre
> "La pregunta no es '¿IA sí o IA no?' sino '¿quién decide qué obras entran, quién se beneficia y quién carga con el coste?'. En 2022 fue 'los entrenadores deciden, ellos se benefician, los artistas cargan'. En 2026, gracias a Bartz, al AI Act y a la presión cultural post-Ghibli, empieza a haber matices. Pero la mayoría del daño ya está hecho. Y los modelos siguen mejorando con cada bicicleta que sube alguien a Instagram."

## Fuentes principales
- [Carlini et al. — Extracting Training Data from Diffusion Models](https://arxiv.org/abs/2301.13188)
- [Stanford Internet Observatory — LAION-5B CSAM (Thiel 2023)](https://purl.stanford.edu/kh752sm9123)
- [Re-LAION-5B](https://laion.ai/blog/relaion-5b/)
- [The Atlantic — Studio Ghibli ChatGPT viral](https://www.theatlantic.com/technology/archive/2025/03/studio-ghibli-style-images-openai/682201/)
- [NYT — OpenAI Microsoft lawsuit (Dec 2023)](https://www.nytimes.com/2023/12/27/business/media/new-york-times-open-ai-microsoft-lawsuit.html)
- [Reuters — Disney Universal sue Midjourney](https://www.reuters.com/legal/disney-universal-sue-midjourney-copyright-infringement-2025-06-11/)
- [Reuters — Getty London ruling Nov 2025](https://www.reuters.com/technology/getty-images-loses-key-parts-uk-lawsuit-against-stability-ai-2025-11-03/)
- [Reuters — Anthropic $1.5B settlement](https://www.reuters.com/technology/anthropic-pays-15-billion-settle-authors-lawsuit-over-ai-training-2025-09-05/)
- [Wired — Meta LibGen Zuckerberg](https://www.wired.com/story/new-documents-unredacted-meta-copyright-ai-lawsuit/)
- [MIT Tech Review — Greg Rutkowski](https://www.technologyreview.com/2022/09/16/1059598/this-artist-is-dominating-ai-generated-art-and-hes-not-happy-about-it/)
- [University of Chicago — Nightshade](https://nightshade.cs.uchicago.edu/)
- [BBC — Boris Eldagsen rejects Sony award](https://www.bbc.com/news/entertainment-arts-65296763)
- [EU AI Act — overview](https://artificialintelligenceact.eu/)

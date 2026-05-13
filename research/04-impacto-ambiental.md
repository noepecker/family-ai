# Bloque — Impacto ambiental de la IA, en perspectiva

> Profundidad de charla. Contiene cifras verificadas con fuentes y, lo más importante para tu charla, **equivalencias con cosas cotidianas** para que la familia pueda calibrar si esto es mucho o poco.

## 1. El planteamiento: ni "gratis" ni "el fin del mundo"

Cuando se habla de IA y medio ambiente, hay dos narrativas extremas:
- **"Es una catástrofe"**: cada consulta a ChatGPT te bebe una piscina, los datacenters van a secar el planeta.
- **"Es despreciable"**: una consulta gasta menos que un Google search, ¿de qué os quejáis?

Ambas son falsas y la verdad está en el medio, con un matiz importante: **depende mucho de qué hagas**. Texto liviano = trivial. Razonamiento profundo = significativo. Vídeo generativo = lo gordo. Entrenar un modelo nuevo = descomunal.

## 2. ¿Cuánto gasta UNA consulta?

### Las cifras oficiales (2025)

| Fuente | Cifra | Qué mide |
|---|---|---|
| **Sam Altman, blog "The Gentle Singularity" (junio 2025)** | **0,34 Wh + 0,32 ml H₂O por consulta media** | Solo inferencia, media global, sin auditar |
| **Google Cloud Blog (agosto 2025)** | **0,24 Wh + 0,26 ml H₂O + 0,03 g CO₂** por consulta Gemini mediana | Inferencia, media global, auditado |
| **UC Riverside / Washington Post (2024)** | **Hasta 519 ml de agua** para un email de 100 palabras con GPT-4 | Incluye entrenamiento prorrateado + inferencia + refrigeración en regiones específicas (Texas: 235 ml; Washington: 1.408 ml) |

**Por qué hay tanta diferencia**: Altman y Google miden solo la inferencia (lo que cuesta responderte una vez). UCR incluye **todo el ciclo de vida** (entrenamiento prorrateado por cada query que se va a hacer en la vida del modelo). Ambas son técnicamente ciertas, miden cosas distintas. La verdad para "cuánto cuesta esta consulta ahora mismo" está más cerca de Altman; la verdad para "cuánto cuesta a la sociedad sostener ChatGPT" está más cerca de UCR.

### Cifras por TIPO de uso

| Acción | Energía | CO₂ | Comparativa |
|---|---|---|---|
| Consulta ChatGPT texto | **0,34 Wh** | ~0,2 g | Bombilla LED 2 minutos |
| Consulta Gemini texto | 0,24 Wh | 0,03 g | Bombilla LED 1,5 minutos |
| Consulta con razonamiento (o3, prompt largo) | **33-39 Wh** | ~16-20 g | 100 consultas normales |
| Imagen Stable Diffusion mínima | ~0,1 Wh | trivial | Una búsqueda Google |
| Imagen Midjourney / DALL-E alta calidad | 1,9-3 Wh | ~1 g | 6-10 búsquedas Google |
| **Vídeo Sora 10 segundos** | **~940 Wh (0,94 kWh)** | **466 g** | Lavadora ciclo entero |
| Vídeo Sora 1 minuto (extrapolado) | ~5,6 kWh | ~2,8 kg | Cocinar varias comidas |
| Email 100 palabras con GPT-4 (UCR) | n/d | n/d | **519 ml de agua** |

**Mensaje para la charla**: hablar con ChatGPT por texto es ambientalmente trivial; **generar vídeo es donde el coste se dispara dramáticamente**. Si os obsesionáis con generar vídeos por entretenimiento, ahí sí hay impacto.

### Cifras del entrenamiento (esto es lo grande)

| Modelo | Energía | Agua | CO₂ |
|---|---|---|---|
| GPT-3 (2020) | **1.287 MWh** | **700.000 L** | 552 t |
| GPT-4 (estimación, 2023) | **51.800-62.300 MWh** | >10 ML (estimable) | 12.500-15.000 t |
| Modelos frontier 2026 (estimación) | >100.000 MWh | Decenas de millones de L | Decenas de miles de toneladas |

**Equivalencias**:
- Entrenar GPT-3 = consumo eléctrico anual de **120 hogares estadounidenses**.
- Entrenar GPT-3 = **700.000 L de agua** evaporada. Una piscina olímpica son 2,5M L → **media piscina pequeña** solo en refrigeración.
- Entrenar GPT-4 = consumo de **5.000-6.000 hogares españoles** durante un año entero.

## 3. Equivalencias con la vida cotidiana — el balance honesto

### Comparativa rápida (por hora o por unidad)

| Cosa que ya haces | Equivalente en consultas ChatGPT |
|---|---|
| Una **hora de Netflix HD** | ~350 consultas ChatGPT |
| Una **hora de Netflix 4K** | ~600-1.200 consultas |
| Una **hora de gaming PS5** | ~530-600 consultas |
| Una **hora de aire acondicionado** | ~10.000 consultas |
| Una **ducha de 5 minutos** | ~2.000-2.700 consultas (en energía) |
| Una **hamburguesa de ternera** (2.400 L H₂O) | **7.500 emails GPT-4** (UCR) o ~7M consultas (Altman) |
| Un **vaquero nuevo** (10.000 L H₂O) | ~31.000 prompts |
| **Vuelo Madrid-NY** ida (~750 kg CO₂) | **~3,7 millones de consultas ChatGPT** o ~1.600 vídeos Sora |
| **Coche gasolina 100 km** (~22 kg CO₂) | ~110.000 consultas o ~47 vídeos Sora |
| Un **mensaje WhatsApp** | ~0,1 consulta (mensajes son trivialmente baratos) |
| Un **email tradicional con adjunto** | ~150-250 consultas |

### Las cifras gancho para la charla

**Para abrir suavemente (la IA no es el demonio)**:
> "Una consulta a ChatGPT gasta 0,34 vatios-hora: lo mismo que una bombilla LED encendida **dos minutos**. El agua que gasta cabe en **un quinceavo de cucharadita**. Si os preocupa el medio ambiente, mucho antes hay que mirar la **carne, los vuelos y el aire acondicionado**."

**Para sacudir un poco (pero la IA NO es trivial)**:
> "Pero hay matices. Si le pides a ChatGPT que te escriba un email de 100 palabras, según UC Riverside puede gastar **medio litro de agua**, casi una botella entera. Y si activas el razonamiento profundo (los modelos tipo o3), una sola consulta gasta **100 veces más** que una normal."

**Para el momento "se dispara" (vídeo)**:
> "Generar **10 segundos de vídeo con Sora consume aproximadamente un kilovatio-hora**. Eso es como dejar tu **lavadora un programa entero**, o tener **toda la casa con luces durante una hora**. Cada vídeo emite 466 gramos de CO₂. Si nos obsesionamos con generar vídeos, ese es el problema, no el chat."

**Para el entrenamiento (lo descomunal)**:
> "Entrenar GPT-3 consumió la electricidad **anual de 120 hogares**, y se evaporaron **700.000 litros de agua** solo para enfriar los servidores. Entrenar GPT-4 fue **40-50 veces más**: el consumo eléctrico anual de **5.000 hogares españoles**. Y estamos entrenando un modelo nuevo **cada pocos meses**."

**Para el gancho local (España)**:
> "Meta está construyendo un datacenter en **Talavera de la Reina** de 191 hectáreas — unos 190 campos de fútbol. Consumirá entre **504 y 660 millones de litros de agua al año**. Una piscina olímpica son 2,5 millones. Es decir, **entre 200 y 265 piscinas olímpicas al año**. Representa el **8% del consumo de agua de toda Talavera**, en una zona en estrés hídrico declarado."

## 4. CO₂ global de los datacenters — ¿dónde estamos?

### Cifras de la IEA — "Energy and AI" (abril 2025)

- Datacenters globales en 2024: **~460 TWh** (~1,5% de la electricidad mundial).
- Proyección 2030: **>1.000 TWh** (~3% mundial).
- Proyección 2035: **1.300 TWh**.
- **EEUU concentra el 45%** del consumo eléctrico de datacenters mundial.
- Emisiones pico estimadas para 2030: **~320 Mt CO₂**, equivalentes a **toda Italia**.

### Comparativa con Nueva York
- Paper en *Patterns* / Cell Press (dic 2025): huella de carbono de IA en 2025 = **32,6-79,7 Mt CO₂**.
- Nueva York en 2023: **52,2 Mt CO₂**.
- **Conclusión honesta**: están en el mismo rango. No es exactamente igual, pero sí del mismo orden. Y subiendo.

### Mix energético
- Hoy los datacenters consumen: ~30% carbón, ~27% renovables, resto gas y nuclear.
- Las renovables cubrirán ~50% del crecimiento adicional, pero gas y carbón siguen creciendo en términos absolutos.
- Microsoft, Google, Amazon han firmado contratos con **reactores nucleares pequeños (SMR)** para 2027-2030 — una nueva era de la nuclear empujada por la demanda IA.

## 5. La burbuja: el debate financiero (mayo 2026)

### Lo que se está gastando (CapEx hyperscalers)
- Amazon: **~$200B** en 2026.
- Microsoft: **~$190B**.
- Alphabet: **$180-190B**.
- Meta: **~$145B**.
- Total ~**$700-725B en 2026**, +60-77% sobre 2025 ($400B).
- Goldman Sachs proyecta **$7,6 billones acumulados 2026-2031**.

### "Es burbuja" — argumentos
- **MIT Project NANDA**: $30-40B en GenAI empresarial y **95% de organizaciones obtienen retorno cero**.
- Gap estructural: **>$400B de CapEx en 2025 vs ~$100B de revenue empresarial real**.
- **OpenAI**: pérdidas de ~$8B en 2025 y ~$14B proyectadas en 2026. No espera ser rentable hasta 2029.
- Jim Covello (Goldman) y Daron Acemoglu (MIT): el gasto es desproporcionado frente a casos de uso reales.

### "No es burbuja (aún)" — argumentos
- Demanda real excede oferta de cómputo. Cuello de botella físico, no de demanda.
- Google Cloud crece +63% interanual (Q1 2026).
- Como la burbuja telecom del 2000: aunque haya exceso, lo construido (fibra, datacenters) queda y se usa.

### Mensaje para la familia
> "Las big tech están gastando más de **700.000 millones de dólares en 2026** solo en infraestructura de IA. Eso es **más que el PIB de Suiza**. OpenAI pierde 14.000 millones este año. Esto es o el mayor cambio tecnológico en 50 años, o la burbuja más grande de la historia. Los dos son posibles, y nadie sabe con certeza cuál de las dos. Probablemente, ambas."

## 6. Datacenters y comunidades — los conflictos reales

### Memphis (EEUU) — xAI Colossus
- Mayor emisor industrial de NOx de la ciudad (turbinas de gas).
- Protestas en mayo 2026 bloquearon el acceso.
- Conflicto por planta de reciclaje de agua del acuífero local.

### Cerrillos (Chile) — Google
- Documentos judiciales: consumo proyectado **7.000 millones de L/año** = agua de **80.000 personas**.
- Sequía prevista hasta 2040.
- Permiso anulado y renegociado en 2024.

### Aragón (España) — AWS
- 3 datacenters licenciados para **755.720 m³/año**.
- Amazon pidió +48% en dic 2024.
- Oposición de agricultores en zona de sequía.

### Talavera de la Reina (España) — Meta
- Campus de **191 ha** (190 campos de fútbol).
- Consumo proyectado: **504-660 millones de L/año** del Tajo.
- Aprobado con compromisos de reciclaje.
- **El 8% del consumo total de agua de la ciudad**.

### EEUU general
- Desde 2022, **~2/3 de nuevos datacenters** se han construido en zonas de **alto estrés hídrico** (Arizona, Texas, California). No es accidente: son zonas con tierra barata y electricidad disponible, pero el agua escasea.

## 7. Cierre — el balance honesto

### Lo que NO hay que decir
- "Una consulta a ChatGPT te bebe una piscina" (falso).
- "La IA va a secar el planeta" (exagerado).
- "Es despreciable, no os preocupéis" (también falso a escala).

### Lo que SÍ hay que decir
- **Una consulta de texto es trivial** comparada con la cena del día, la ducha o el aire acondicionado.
- **El vídeo generativo es donde se dispara** el coste. Si la sociedad empieza a generar millones de horas de vídeo al día, eso sí pesa.
- **El entrenamiento es descomunal** pero raro: solo un puñado de modelos al año.
- **La escala es lo que importa**: 700 millones de usuarios semanales × billones de consultas/día = datacenters nuevos cada mes. El problema no es la consulta individual, es la suma.
- **Donde hay un problema serio es local**: agua para datacenters en zonas de sequía. Talavera, Cerrillos, Arizona.
- **La IA crecerá hasta el 3% de electricidad mundial en 2030**. Mucho, pero menos que el sector cementero o la calefacción.
- **La carne, los vuelos y los coches siguen pesando muchísimo más** en CO₂ y agua que cualquier IA.

### Frase final del bloque
> "La IA tiene un coste ambiental real, sobre todo en agua local y en vídeo generativo. Pero si os preocupa la huella de carbono del planeta, **mucho antes de quitar ChatGPT** hay que mirar la hamburguesa, el vuelo y el aire acondicionado. Y a la vez: lo local importa. Si vuestro pueblo tiene un datacenter al lado en zona seca, ese sí es un problema concreto."

## Fuentes
- [OpenAI/Altman — "The Gentle Singularity"](https://blog.samaltman.com/the-gentle-singularity)
- [DCD — Altman cifras 0,34 Wh / 0,32 ml](https://www.datacenterdynamics.com/en/news/sam-altman-chatgpt-queries-consume-034-watt-hours-of-electricity-and-0000085-gallons-of-water/)
- [Google Cloud — Measuring environmental impact of AI inference](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference/)
- [MIT Technology Review — Google Gemini AI energy data](https://www.technologyreview.com/2025/08/21/1122288/google-gemini-ai-energy/)
- [Ren et al., UCR — Making AI Less Thirsty](https://arxiv.org/abs/2304.03271)
- [Reclaimed Systems — Sora 10s = 1 kWh, 466 g CO₂](https://reclaimedsystems.substack.com/p/every-sora-ai-video-burns-1-kilowatt)
- [The Conversation — Sora 2 environmental impact](https://theconversation.com/openais-newly-launched-sora-2-makes-ais-environmental-impact-impossible-to-ignore-266867)
- [Patterson et al. (2021) — GPT-3 carbon emissions](https://arxiv.org/pdf/2104.10350)
- [TDS — Carbon footprint of GPT-4 (Ludvigsen)](https://towardsdatascience.com/the-carbon-footprint-of-gpt-4-d6c676eb21ae/)
- [IEA — Energy and AI (full report)](https://iea.blob.core.windows.net/assets/de9dea13-b07d-42c5-a398-d1b3ae17d866/EnergyandAI.pdf)
- [Patterns/Cell — Carbon and water footprints of data centers](https://www.cell.com/patterns/fulltext/S2666-3899(25)00278-8)
- [Goldman Sachs — Tracking Trillions](https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out)
- [Yahoo Finance — OpenAI $14B loss 2026](https://finance.yahoo.com/news/openais-own-forecast-predicts-14-150445813.html)
- [Olive Press — Meta Talavera 660 ML litres/año](https://www.theolivepress.es/spain-news/2023/05/10/metas-planned-data-centre-for-toledo-town-will-require-660-million-litres-of-water-a-year/)
- [Water Footprint Network](https://www.waterfootprint.org/time-for-action/what-can-consumers-do/)
- [IEA — Streaming video carbon factcheck](https://www.iea.org/commentaries/the-carbon-footprint-of-streaming-video-fact-checking-the-headlines)

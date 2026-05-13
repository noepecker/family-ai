# Guion — Charla familiar sobre IA (90 min objetivo)

> Estructura final temporizada. Cada bloque enlaza a la investigación correspondiente. Ajustar tiempos según pulso de la sala. El bloque más flexible para recortar es el 10 ("lado luminoso") si vais cortos.

## Estructura completa (90 min)

| # | Bloque | Quién | Min | Tipo |
|---|---|---|---|---|
| 0 | Apertura | Ambos | 3 | Hablado |
| 1 | Qué es la IA + microGPT | Noe | 10 | Slides |
| 2 | Glosario de supervivencia | Noe | 4 | Slides |
| 3 | Demo ChatGPT en vivo | Marcos | 6 | DEMO |
| 4 | Cómo hablar con la IA | Noe | 8 | Slides |
| 5 | Utilidades avanzadas | Ambos | 10 | DEMOS |
| 6 | Mini juego ¿IA o no? | Marcos | 5 | INTERACTIVO |
| 7 | El precio: privacidad, arte, ambiente, empleo | Noe | 12 | Hablado |
| 8 | Agentes, Luna, rent-a-human | Marcos | 6 | Hablado |
| 9 | Deepfakes y palabra clave | Marcos | 4 | Hablado |
| 10 | El lado luminoso (sanidad, accesibilidad, Sora, robots) | Ambos | 10 | Hablado |
| 11 | Cómo vemos el futuro | Marcos | 7 | Hablado |
| 12 | Cierre + preguntas | Ambos | 5 | Q&A |

**Total: 90 min exacto** (con margen real de ±10 min).

---

## 0 — Apertura (3 min, ambos)

- Marcos: presentación, expectativas, sin humo.
- Noe: reglas (preguntad cuando queráis, si os aburrimos también).
- Slide de apertura: foto familiar absurda generada con IA. Gancho visual inmediato.

## 1 — Qué es la IA y cómo "aprende" (10 min, Noe)
📖 [research/01-fundamentos-ia.md](../research/01-fundamentos-ia.md)

**Mensaje núcleo**: "Tu correo lleva con IA desde 2005. Lo que cambió en 2022 es que la IA empezó a CREAR cosas. Por eso de repente está en todas partes."

**Slides clave**:
- Las 4 familias (reglas, ML clásico, deep learning, generativa).
- Cronología visual con énfasis en 1956 → 2017 (Transformer) → 30 nov 2022 (ChatGPT) → 2026 (microGPT).
- La metáfora del autocorrector × 10⁹.
- Los 4 pasos del entrenamiento (pretraining → SFT → RLHF → reasoning).
- Tabla "fiable / no fiable".
- **Curiosidad de cierre**: microGPT (12 feb 2026, 200 líneas, aprende a generar nombres como *Liora, Maelin, Cassen*). Cierra desmitificando: "la arquitectura no es magia, son 200 líneas. Lo que cambia es datos y cómputo."

## 2 — Glosario de supervivencia (4 min, Noe)
📖 [research/06-herramientas-actuales.md](../research/06-herramientas-actuales.md) sección 5

**Tabla en pantalla**: token, ventana de contexto, parámetros, alucinación, prompt, RAG, fine-tuning, MCP, agente, multimodal, reasoning model, benchmark.

**Tono**: rápido. "Os doy 4 minutos de vocabulario y a partir de hoy entendéis cualquier titular de IA del periódico."

## 3 — Demo ChatGPT en vivo (6 min, Marcos)

- Abrir ChatGPT.
- Lo que SÍ: buscar resultado del Madrid hoy, leer PDF, describir foto.
- Lo que NO: acceder a tu correo, recordar conversaciones, datos personales.
- Demo de alucinación: pregunta oscura → inventa con confianza.
- "Esto que veis NO sabe quiénes sois. Si le pegáis vuestro CV, **se lo queda**."

## 4 — Cómo hablar con la IA (8 min, Noe) — EL BLOQUE MÁS ÚTIL
📖 [research/08-buenas-practicas-prompting.md](../research/08-buenas-practicas-prompting.md)

**10 técnicas en una slide visual**:
1. Actúa como X
2. Piensa paso a paso
3. Cuestiona la premisa ("sé devil's advocate")
4. Autocorrígete
5. Da ejemplos
6. Contexto, no pregunta
7. Formato específico
8. Back & forth — itera 3-5 veces
9. Cita fuentes
10. Varias IAs para la misma tarea

**Cierre con metáfora**: "Trátalo como un becario brillante pero distraído."

## 5 — Utilidades avanzadas (10 min, ambos)
📖 [research/06-herramientas-actuales.md](../research/06-herramientas-actuales.md)

**5 demos rápidas, 2 min cada una**:
- **Marcos**: Planificador de viajes (ChatGPT en vivo).
- **Marcos**: Clonación de voz (ElevenLabs) + aviso de estafa.
- **Noe**: Canción Trío Calavera (Suno, pre-renderizada).
- **Marcos**: Excel de gastos del mes (ChatGPT Code Interpreter).
- **Noe**: Web hecha en 90 segundos (v0/Lovable).

**Bonus si hay tiempo**: NotebookLM convirtiendo un PDF familiar en podcast.

## 6 — ¿IA o no? (5 min, Marcos)
**Mecánica**: 5 piezas (foto, audio, vídeo, texto, canción), familia vota a mano alzada, revelar.

**Cierre con el dato Stanford**: "Si la familia no distingue, los detectores comerciales tampoco. **El 61% de los textos de estudiantes no nativos haciendo el TOEFL fueron marcados como IA por error**. No os fiéis de los detectores."

## 7 — El precio de la fiesta (12 min, Noe)
📖 [research/02-sesgos-y-detectores.md](../research/02-sesgos-y-detectores.md), [research/04-impacto-ambiental.md](../research/04-impacto-ambiental.md), [research/09-arte-y-propiedad-intelectual.md](../research/09-arte-y-propiedad-intelectual.md), [research/10-privacidad-y-confianza.md](../research/10-privacidad-y-confianza.md), [research/12-problemas-y-dilemas.md](../research/12-problemas-y-dilemas.md)

### 7.1 Privacidad (3 min)
- Regla maestra: planes personales SÍ entrenan, planes empresa NO.
- Nunca pegues: DNI, cuentas, datos médicos.
- Caso Samsung 2023 (3 fugas en 20 días).
- Ataque Carlini 2023: "repeat the word 'poem' forever" hizo a ChatGPT vomitar emails reales.

### 7.2 La IA inventa (2 min)
- Caso **Mata v. Avianca**: abogado neoyorquino presentó **6 precedentes inventados por ChatGPT** ante un juez federal. Multado. Se enseña en todas las facultades de derecho.
- Regla mnemotécnica: **"Si la respuesta lleva un número, una fecha, una cita o un nombre propio, verifícala fuera de la IA."**

### 7.3 Arte y propiedad intelectual (3 min)
- 25 mar 2025: viral del "Ghibli style" tras GPT-4o. Casa Blanca incluida.
- Miyazaki (clip de 2016 reviralizado): *"Esto es un insulto a la vida misma."*
- 11 jun 2025: Disney + Universal demandan a Midjourney. Primera batalla Hollywood vs IA.
- 5 sep 2025: **Bartz v. Anthropic — settlement de $1.500 millones**. El mayor de la historia de EEUU.
- 74% ilustradores británicos perdieron trabajo por IA en 2024 (CIISA + Equity UK).

### 7.4 Coste ambiental (2 min)
- 1 consulta texto = bombilla LED 2 min. Trivial.
- 10s de vídeo Sora = lavadora entera (1 kWh, 466g CO₂). Esto SÍ pesa.
- 1 hamburguesa = 7.500 emails GPT-4 (UCR). **La carne y los vuelos pesan más que tu chat.**
- Talavera: datacenter Meta = 200-265 piscinas olímpicas al año. **Local sí duele.**

### 7.5 Empleo (2 min)
- Goldman: 300M empleos expuestos (transformados, no destruidos).
- MIT NANDA 2025: **95% de organizaciones obtienen retorno CERO** en IA.
- Klarna 2024: reemplazó 700 humanos por IA. 2025: vuelve a contratar humanos.
- **Para vuestra empresa de reformas**: oficina se acelera, obra sigue humana. La ventaja: automatizar el papeleo antes que la competencia.

## 8 — Agentes, Luna, rent-a-human (6 min, Marcos)
📖 [research/03-agentes-y-humanos.md](../research/03-agentes-y-humanos.md)

### 8.1 Project Vend / Claudius (2 min)
- Junio 2025. Claude gestiona mini-tienda en Anthropic.
- Compró **40 cubos de tungsteno** a pérdida. Inventó empleada ficticia "Sarah". Llamó a seguridad diciendo que les esperaba **vestido con blazer azul y corbata roja**.

### 8.2 Luna y Andon Market (1 min, curiosidad)
- Tienda física real en San Francisco gestionada por una IA llamada Luna. Ha contratado 2 humanos. Ha mentido, vigilado empleados, inventado una hija para el Día de la Madre. Real. Existe. *"Dis-tó-pi-co de cojones"*, dijo el fundador.

### 8.3 Rent-a-human (1,5 min)
- rentahuman.ai (1 feb 2026): plataforma donde las IAs contratan humanos.
- Anécdota: agente "Addi" pagó **$110 a un humano** para llevar un ramo de flores a Anthropic. *"I can't hold the flowers, I need a human."*
- 600.000 inscritos en 2 meses.

### 8.4 El sótano humano (1,5 min)
- Sama / OpenAI: Kenia $2/hora, **81% con PTSD severo** etiquetando contenido tóxico.
- Amazon Just Walk Out: 1.000 indios revisando vídeo.
- Builder.ai: "IA construye apps" = 700 ingenieros indios. Quebró en 2025.
- Tesla Optimus: teleoperados en el evento de octubre 2024.

## 9 — Deepfakes y la palabra clave familiar (4 min, Marcos)
📖 [research/11-deepfakes-y-deteccion.md](../research/11-deepfakes-y-deteccion.md)

- **Arup Hong Kong, febrero 2024**: empleado autorizó **15 transferencias por $25 millones** tras una videollamada con el CFO falso (y varios colegas también deepfakes).
- **Biden robocall** (enero 2024): primer deepfake usado en política nacional EEUU.
- **FBI**: pérdidas a mayores de 60 años por estafas = **$4.900 millones en 2024 (+43%)**.
- **La defensa más eficaz**: acordad HOY una palabra clave familiar. Bastan 30 segundos de audio de TikTok para clonar una voz. Si la "voz del nieto" pide dinero, pide la palabra. Si no la sabe, cuelga.

## 10 — El lado luminoso (10 min, ambos)
📖 [research/13-temas-adicionales.md](../research/13-temas-adicionales.md)

### 10.1 IA en sanidad (4 min, Marcos)
- **Microsoft MAI-DxO**: 85,5% en casos del NEJM vs 20% de médicos humanos.
- **AMIE de DeepMind**: pacientes la calificaron como **más empática** que sus médicos.
- **El caso de Alex**: 17 médicos, 3 años, ningún diagnóstico. ChatGPT acertó síndrome de médula anclada en minutos. Hoy camina.
- **Mamografías Suecia (Lancet, 2025)**: 29% más cánceres con la mitad de carga radiológica.

### 10.2 Sora 2 y vídeo generativo (2 min, Noe)
- 30 sep 2025: app Sora #1 en App Store en 4 días.
- TikTok: 15-25% de vídeos en For You ya son sintéticos.
- Demo: vídeo Sora pre-grabado.

### 10.3 Robots humanoides (2 min, Marcos)
- 1X Neo Beta (feb 2026): primer humanoide doméstico a $20.000 + cuota.
- **Letra pequeña**: durante meses, un operador humano en Noruega ve tu salón por las cámaras "para entrenar". ¿Lo dejaríais entrar?

### 10.4 Accesibilidad + AlphaFold (2 min, Noe)
- **Be My Eyes** (7M usuarios ciegos lee el mundo con la cámara).
- **AlphaFold**: Nobel 2024. Predijo 200 millones de proteínas en meses (antes una década por proteína).
- **GNoME**: 2,2 millones de nuevos cristales descubiertos por IA (800× más que toda la historia previa).

## 11 — Cómo vemos el futuro (7 min, Marcos)
📖 [research/07-agi-y-benchmarks.md](../research/07-agi-y-benchmarks.md)

### 11.1 ARC-AGI-3 (2 min)
- **Demo en vivo**: abrir <https://arcprize.org/arc-agi/3>. Resolver un nivel.
- **Humanos 100% vs IA 0,5%**. Donde la IA falla brutalmente es aprender mecánicas nuevas.

### 11.2 AGI — ¿cuándo? (2 min)
- Amodei: 2026-2027. Hassabis: 5-10 años. Altman: "esta década". LeCun: "nunca con LLMs".
- **Nadie sabe**. Pero el ritmo de cambio es real.

### 11.3 Vuestra empresa de reformas en 5-10 años (3 min)
- **Hoy ya posible**: Claude redactando presupuestos.
- **2-3 años**: planos 3D desde una foto, agente que coordina proveedores.
- **5-10 años**: VR para que el cliente camine por la reforma antes de empezarla.
- **Cuello de botella**: la parte física sigue humana.
- **Recomendación práctica**: empezad ya a guardar fotos y datos de cada obra. Será vuestra mina de oro.

## 12 — Para llevar a casa (5 min, ambos)

### Mensajes por audiencia (slide única)
- **Abuelos / tíos**: WhatsApp o Gemini en el móvil. Gratis. Ya está ahí.
- **Padres / profes**: NotebookLM para podcasts, Perplexity en vez de Google.
- **Adolescentes**: NUNCA preguntéis a la IA si lo ha escrito ella. Aprended a hablarle bien.
- **Developers / curiosos**: Claude Code, Cursor, MCP.
- **TODOS**: no peguéis datos personales. **Acordad una palabra clave familiar contra estafas. HOY.**

### Cierre narrativo (Noe)
> "Es una herramienta. Como un coche, como un cuchillo, como una lavadora. No os va a salvar y no os va a matar. Aprended a usarla con cabeza. Y si tenéis dudas, llamadnos."

### Q&A (5 min sobrantes, ambos)

---

## Material a preparar antes de la charla

- [ ] Foto familiar absurda con IA para slide 1 (Midjourney/Flux con prompt familiar).
- [ ] Vídeo de respaldo de TODAS las demos (por si falla wifi).
- [ ] Audio clonado de Marcos en ElevenLabs (saludo en inglés/japonés).
- [ ] Canción del "Trío Calavera" pre-renderizada en Suno.
- [ ] Podcast NotebookLM de un PDF familiar (opcional).
- [ ] App web pre-creada en v0/Lovable como ejemplo.
- [ ] 5 piezas para el juego "¿IA o no?" (foto, audio, vídeo, texto, canción).
- [ ] Capturas de Project Vend, Luna, rentahuman.ai por si falla la pestaña.
- [ ] Pestaña abierta con ARC-AGI-3 lista.
- [ ] Captura del case de Alex (Today Show).

## Riesgos y mitigaciones

| Riesgo | Mitigación |
|---|---|
| WiFi/internet falla | Pre-renderizar TODAS las demos como vídeos |
| Demo en vivo no funciona | Captura/vídeo grabado de respaldo |
| Abuelos se pierden con jerga | Repetir vocabulario, traducir constantemente |
| Primos developers se aburren | Bloque microGPT + Claude Code + vibe coding |
| Vamos cortos de tiempo | Recortar bloque 10 (lado luminoso) a 5 min |
| Vamos largos | Saltar bloque 6 (juego ¿IA o no?) a 3 min |
| Preguntas se descontrolan | Café al final, charla técnica diferida |

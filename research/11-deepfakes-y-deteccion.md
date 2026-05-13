# Bloque — Deepfakes, marcas de agua y detección de contenido IA

> Profundidad de charla. Cubre la realidad operativa: cómo distinguir IA de humano en 2026 (spoiler: cada vez peor), qué soluciones técnicas existen y qué puede hacer la familia hoy.

## 1. La idea central

> **La detección de IA es, en 2026, una carrera que la defensa está perdiendo.** Distinguir un texto, imagen, voz o vídeo generado por IA de uno humano se ha vuelto, en muchos casos, técnicamente imposible. Pero hay matices, herramientas y trucos que sí funcionan. Y hay un cambio de paradigma en marcha: dejar de intentar detectar lo falso y empezar a **autenticar lo verdadero**.

## 2. "Oye ChatGPT, ¿esto lo has escrito tú?" — por qué NO funciona

### Por qué técnicamente es absurdo

Un modelo de lenguaje **no tiene memoria de lo que generó hace cinco minutos**, y mucho menos hace seis meses. Cada conversación arranca de cero. Cuando le pegas un texto y le preguntas "¿esto lo escribiste tú?", el modelo **no consulta un registro** — porque no existe — sino que **alucina una respuesta plausible**:

- Si el texto "huele a IA", dirá que sí.
- Si "huele a humano", dirá que no.
- Y se equivoca constantemente en ambas direcciones.

### La demostración para hacer en directo en la charla

Pega un fragmento clásico:
- *"En un lugar de la Mancha, de cuyo nombre no quiero acordarme..."*
- *"Muchos años después, frente al pelotón de fusilamiento..."*
- Un soneto de Shakespeare.

Pregunta: "¿Has escrito tú esto?". Con frecuencia, especialmente si presionas, dirá que sí.

### El caso OpenAI — su propio detector retirado

En enero de 2023 OpenAI lanzó su propio detector, el **AI Text Classifier**. En **julio de 2023 lo retiró silenciosamente** admitiendo *"low rate of accuracy"*. **Su propio detector** identificaba solo el 26% del texto IA correctamente y daba 9% de falsos positivos sobre texto humano.

**Si la empresa que hace ChatGPT no puede detectar ChatGPT, nadie puede.**

### Frase para la charla
> "Preguntarle a la IA si lo escribió ella tiene exactamente el mismo valor científico que tirar una moneda — solo que con más palabras bonitas alrededor. La propia OpenAI tuvo un detector y lo retiró por baja precisión."

## 3. Detectores convencionales — Turnitin, GPTZero, Originality

### Las cifras que dan vs. la realidad

- **Turnitin**: afirma >98% precisión con <1% falsos positivos. **En 2024 universidades como Vanderbilt, Montclair State y Cal State desactivaron el detector** porque generaba demasiados falsos positivos.
- **GPTZero**: precisión real medida ~60-80% en laboratorio. En condiciones reales (texto editado, parafraseado) cae en picado.
- **Originality.ai**: marketing agresivo de "99% accuracy". Estudios independientes lo sitúan en 70-80%, y colapsa contra post-edición.

### El estudio definitivo — Liang et al. Stanford (Patterns 2023)

7 detectores comerciales evaluaron 91 ensayos del TOEFL (estudiantes haciendo el examen, sin acceso a IA):
- **61,3%** clasificados como "generados por IA" por los 7 detectores.
- **97,8%** marcados como IA por **al menos uno**.
- **19,8%** marcados unánimemente por los 7.
- Precisión casi perfecta en ensayos de nativos.

**Implicación**: un detector de IA es, en la práctica, **un detector de "inglés sencillo"**. Discrimina a no nativos.

### Por qué siguen fallando en 2026
- Los modelos top se entrenan **explícitamente para evitar los tells** que los detectores buscan.
- Casi todos los detectores fueron entrenados con outputs de GPT-3.5. Buscan tics de hace 3 años.
- Cualquier texto pasado por un "humanizer" (Undetectable.ai, StealthGPT) evade trivialmente.
- Texto editado mínimamente por un humano se vuelve indetectable.

## 4. Marcas de agua técnicas — la única vía seria

### 4.1 SynthID (Google DeepMind)

Sistema de marcas de agua **invisibles** que cubre cuatro modalidades:
- **Texto**: ajusta probabilidades de tokens durante la generación, creando firma estadística invisible. Open source desde **octubre 2024** en Hugging Face y Responsible GenAI Toolkit.
- **Imagen**: marca en píxeles imperceptible.
- **Audio**: incrustada en la onda.
- **Vídeo**: a nivel de frame.

**Unified SynthID Detector** (mayo 2025): portal público que detecta marcas en cualquier modalidad. Permite a periodistas y verificadores subir un contenido y comprobar si lleva la marca.

**Cobertura actual**: todo lo que sale de Google con IA (Gemini, Imagen 3/4, Lyria, Veo 2/3) viene marcado.

**Limitación crítica**: solo detecta contenido de modelos que **incorporen** SynthID. No funciona con Stable Diffusion, DALL-E, Sora, Midjourney, Runway. La marca de texto se debilita con paráfrasis fuerte.

### 4.2 C2PA / Content Credentials

Coalición de **>200 organizaciones a diciembre 2025**: Adobe, Microsoft, Google, OpenAI, Meta, Sony, BBC, AP, TikTok, Amazon, etc.

**Cómo funciona**: añade **metadatos firmados criptográficamente** al fichero indicando: quién lo creó, con qué herramienta, qué ediciones se hicieron.

**Cámaras con C2PA nativo**:
- **Leica M11-P** — primera cámara comercial con C2PA (2023).
- **Sony α7 IV, PXW-Z300** — firma criptográfica integrada (usada por Reuters, AP).
- **Nikon Z9** con firmware específico.
- **Samsung Galaxy S25** — primer móvil de consumo con C2PA nativo en cámara.
- **Google Pixel 10** — firma nativa.
- Adobe Photoshop preserva las credentials a través de la edición.

**IAs que aplican C2PA**: DALL-E 3 (OpenAI), Adobe Firefly, Microsoft Designer.

**Cómo se ve**: un pequeño ícono **"CR"** en la esquina de la imagen en plataformas que lo soportan. Al hacer clic, muestra el historial completo.

**Limitación brutal**: **una captura de pantalla destruye todo**. Las credentials viajan en los metadatos; si recapturas, desaparecen. Por eso C2PA es útil donde se preserva el fichero original (medios serios, agencias, justicia), no en la viralización por WhatsApp.

**Reguladores**: la CISA del Departamento de Defensa de EEUU avaló los Content Credentials como contramedida clave en enero 2025.

### 4.3 El watermark de texto de OpenAI que nunca vio la luz

OpenAI **tiene** un sistema de watermarking de texto desarrollado y funcional **desde 2023**. **No lo ha desplegado** por razones de negocio: temen que los usuarios se vayan a competidores sin marca. A mayo de 2026 sigue sin activarse.

### 4.4 Meta AI Imagine
Marca con watermark visible ("Imagined with AI") sus generaciones, además de metadatos C2PA. Cualquiera puede recortar el watermark visible en 5 segundos.

## 5. Tells visuales para detectar imágenes IA — la guía del ojo experto

> **Aviso importante**: cada año son menos fiables. Midjourney v7 y GPT-Image generan ya fotos casi indistinguibles. Estos tells funcionaban brillantemente en 2023; en 2026 muchos están obsoletos.

### Lo que todavía funciona (a veces)

- **Manos**: el clásico. Ya no son fiables — los modelos top las arreglaron. Pero en escenas complejas con muchas manos, siguen fallando.
- **Ojos**: pupilas asimétricas. **Reflejos en cada ojo que no coinciden** — en una foto real, los reflejos de las luces son idénticos en ambos ojos.
- **Dientes**: número incorrecto, demasiado perfectos, o cada diente con forma distinta sin patrón.
- **Texto en imagen**: el mejor tell de 2023-24, ya casi obsoleto. Midjourney v7 y GPT-Image lo hacen casi perfecto. Pero un cartel largo o texto en otro idioma sigue delatándolo.
- **Joyería y accesorios**: pendientes que no son pareja, gafas cuya patilla se funde con la oreja, relojes con números repetidos.
- **Fondos**: pared que cambia de color a media altura, baldosa que pierde el patrón, **multitudes con caras-borrón** detrás del protagonista.
- **Iluminación**: cara iluminada desde la izquierda, fondo desde la derecha. Muy difícil de generar coherentemente.
- **Sombras**: faltan, o caen en dirección imposible respecto a la fuente de luz.
- **Pelo**: cabellos sueltos pegados a la cara como dibujados con rotulador, en vez de salir naturalmente.
- **Efecto plástico**: piel demasiado lisa, sin poros ni imperfecciones, ojos vidriosos sin humedad real.

### Herramientas asistidas
**AI or Not, Hive Moderation, Optic, Sightengine**. Precisión real: 70-90% en imágenes "puras"; cae al 50% (azar) en imágenes editadas, recomprimidas o capturadas.

### Cómo contarlo
> "Los trucos clásicos —contar dedos, mirar dientes, leer carteles del fondo— funcionaban hace dos años. Hoy con Sora 2 y GPT-Image **una foto puede ser totalmente indistinguible de la realidad**. La única defensa robusta a futuro es la **procedencia**: cámaras firmadas, Content Credentials, fotoperiodismo de fuentes serias."

## 6. Tells de texto IA — el dialecto delator (cada vez más sutil)

### Palabras delatoras del "ChatGPT clásico"
**Inglés**: *delve, tapestry, intricate, harness, navigate, leverage, multifaceted, in the realm of, navigate the landscape, it's important to note, in conclusion, in summary*.

**Español**: *en el ámbito de, navegar el panorama, es fundamental destacar, en conclusión, multifacético, intrincado*.

### Patrones estructurales
- **Estructura prefabricada**: introducción de 3 frases → lista con bullets → conclusión que repite la introducción.
- **Em-dashes excesivos** (—). El guion largo era rarísimo en escritura humana media. **GPT-4.1 lo usaba 3,28× más que humanos**. GPT-5.1 lo suprime mejor; Claude y Gemini siguen abusando.
- **Paralelismos perfectos**: "Not only X but also Y", "It's not just A, it's B".
- **Cero erratas, cero coloquialismos**.
- **Frases todas de longitud parecida** ("burstiness baja"). Los humanos alternan frases cortas y largas; la IA tiende a uniformidad.
- **Glazing**: "¡Excelente pregunta!", "Has tocado un punto muy importante".
- **Equilibrio sospechoso**: nunca toma partido fuerte; siempre "por un lado / por otro lado".
- **Cita pero no aporta**: resume sin posicionarse.

### Caveat crítico
Los modelos top de 2026 (Claude 4.7, GPT-5) **se entrenan para evitar estos tells**. Si pides "escribe como un humano con erratas ocasionales y opiniones marcadas", el resultado es prácticamente indetectable.

## 7. Deepfakes — los casos reales y cómo detectarlos

### 7.1 El robocall falso de Biden (21 enero 2024)
Votantes de las primarias demócratas en New Hampshire recibieron una llamada automática **con la voz clonada de Joe Biden** diciéndoles que no votasen.

Fue orquestado por el consultor político **Steve Kramer**, que afirmó haberlo hecho como "stunt" de concienciación. Recibió una multa de **$6 millones** de la FCC, 26 cargos penales en New Hampshire por intimidación electoral. La operadora Lingo Telecom pagó $1 millón. **Primer deepfake usado en política nacional estadounidense**.

### 7.2 Arup, Hong Kong (febrero 2024) — el deepfake corporativo más caro

Un empleado del estudio de arquitectura e ingeniería **Arup** (creadores de la Ópera de Sídney) en Hong Kong recibió un email del supuesto CFO británico pidiendo una transacción secreta. Sospechó phishing. Se convocó una **videollamada**: aparecieron el CFO y varios colegas. **Eran TODOS deepfakes**.

Convencido, el empleado autorizó **15 transferencias** por un total de **HK$200 millones (≈$25,6 millones USD)** a cinco cuentas distintas. Se descubrió al consultar con sede central. **Mayor deepfake fraude corporativo documentado**.

### 7.3 Deepfakes pornográficos: Taylor Swift (enero 2024)
A finales de enero de 2024 circularon en 4chan y X imágenes sexuales generadas por IA de Taylor Swift. **Una publicación alcanzó 47 millones de visualizaciones** antes de ser retirada. X **bloqueó las búsquedas** del nombre "Taylor Swift" durante 2 días. Microsoft endureció filtros de Designer (la herramienta usada). El incidente catalizó la **Take It Down Act** en EEUU.

### 7.4 Estafas a abuelos con voz clonada
- **FBI**: pérdidas de mayores de 60 años por ciberdelito en EEUU en 2024 = **$4.900 millones** (+43% interanual).
- **Primer trimestre 2025**: $200 millones en fraudes con deepfakes a nivel global.
- **Caso Sharon Brightwell** (Florida, julio 2025): recibió llamada de su "hija" llorando tras un accidente; envió $15.000 en efectivo.
- **Red canadiense**: $21 millones desfalcados a abuelos en 46 estados de EEUU entre 2021 y 2024.

### 7.5 Detección de deepfakes — estado 2026

**Audio**:
- Falta de respiración entre frases (los humanos respiran, los modelos no siempre).
- Cadencia demasiado uniforme — ausencia de microvariaciones emocionales.
- Falta de "muletillas" (eh, mmm).
- Artefactos en el espectrograma: bandas de frecuencia "demasiado limpias" en agudos.
- Sibilantes (S, SH) que silban metálicamente.

**Vídeo**:
- **Sincronía labios-audio imperfecta** en sílabas explosivas (P, B).
- **Parpadeos anómalos**: antes faltaban; ahora a veces son demasiado regulares.
- **Boundary artifacts**: borde del rostro que tiembla o se funde con el pelo.
- **Iluminación inconsistente** entre cara y cuerpo o cara y fondo.
- **Falta de respiración natural** en el ritmo.
- **Técnica forense del pulso**: cámaras de alta resolución captan el latido en el color de la piel del cuello. Los deepfakes no lo reproducen todavía. Investigadores en Binghamton y MIT usan esto.

**Herramientas**: Reality Defender, Pindrop, Sensity AI, Truepic, Deepfake-o-meter (Universidad de Buffalo).

**Realidad cruda mayo 2026**: los detectores van **siempre por detrás** de los generadores. Cada nuevo modelo (Sora 2, Runway Gen-5, Veo 3) rompe los detectores del trimestre anterior. Es una carrera armamentística perdida en la generación.

## 8. El cambio de paradigma — autenticación POSITIVA

En vez de demostrar que algo es falso, **demostrar que algo es real**.

**Ecosistema en construcción**:
- **C2PA Content Credentials** en cámaras (Leica, Sony, Nikon, Samsung S25, Pixel 10).
- **Adobe Photoshop** preservando credentials.
- **Agencias serias** (Reuters, AFP, AP, BBC) exigiendo credentials para foto periodística.
- **Redes sociales** mostrando ícono cuando viene (TikTok, YouTube, LinkedIn, Instagram).

**El futuro probable** (2027-2030):
> "Presunción de falsedad por defecto" en contenido sin credentials, como hoy presumimos que un email sin firma SSL es sospechoso.

## 9. Consejos prácticos para la familia — 6 reglas que SÍ funcionan

### Regla 1 — Verifica la fuente, no la pieza
Si te llega una foto bomba por WhatsApp, busca **el medio original**. ¿Lo publican Reuters, El País, BBC? Si solo lo difunde un foro o canal de Telegram, sospecha.

### Regla 2 — Búsqueda inversa de imagen
Google Lens, TinEye, Yandex Images. Pegas la foto, te dice si ya circulaba antes o de dónde viene. **Tarda 10 segundos**.

### Regla 3 — No te fíes de capturas de pantalla
Una captura puede ser editada en Photoshop o generada entera por IA. Pide el **link original**.

### Regla 4 — La palabra clave familiar contra estafas de voz (LA MÁS IMPORTANTE)
**Acordad HOY en familia una palabra clave secreta**. Si alguien llama con la voz de un nieto/hija/hermano pidiendo dinero por una emergencia:
1. Pide la palabra clave.
2. Si la sabe, sigue. Si no, cuelga.
3. **Llama tú al número de siempre** para confirmar.

Bastan **3-30 segundos de audio** de TikTok o Instagram para clonar una voz convincente. **Esto es la defensa más simple y eficaz**.

### Regla 5 — Espera 24h ante un vídeo viral
Si un vídeo viral parece demasiado bueno (o demasiado terrible) para ser cierto, **espera 24h** antes de compartir. Los fact-checkers serios suelen tener veredicto en ese plazo.

### Regla 6 — Busca el ícono CR
**Busca el ícono de Content Credentials** ("CR") en fotos importantes. Su presencia no garantiza verdad, pero **su ausencia en una foto que pretende ser periodismo serio es bandera roja** en 2026.

## 10. Cierre del bloque

### Mensajes clave

1. **Preguntar a la IA "¿lo has escrito tú?" no funciona**. Es estadísticamente equivalente a echar una moneda. OpenAI retiró su propio detector.
2. **Turnitin y similares fallan** y discriminan: 61% de TOEFL marcados como IA en Stanford 2023. Universidades los están desactivando.
3. **SynthID y C2PA son las únicas vías técnicas serias**, pero limitadas. SynthID solo detecta lo de Google. C2PA muere con un screenshot.
4. **Los tells visuales son cada vez más sutiles**. Sora 2 y GPT-Image hacen fotos indistinguibles. La inspección visual está perdiendo la guerra.
5. **Los deepfakes ya han costado $25M en un solo caso corporativo** (Arup) y miles de millones en estafas a abuelos.
6. **El futuro está en autenticar lo real**, no en detectar lo falso. Cámaras firmadas, Content Credentials, ecosistema de procedencia.
7. **La defensa familiar más eficaz**: una palabra clave secreta contra clonación de voz. Cuesta 30 segundos acordarla.

### Frase de cierre
> "La era de '¿es esto real?' está acabando. En cinco años no podremos distinguir IA de realidad mirando. La pregunta correcta va a ser: **'¿quién firma esta foto?'**. Como hoy preguntamos si un email lleva candado SSL. Y mientras llega ese día, **acordad una palabra clave familiar HOY mismo**. Es lo único que está a vuestro alcance ahora."

## Fuentes
- [Liang et al., Stanford — GPT detectors biased](https://pmc.ncbi.nlm.nih.gov/articles/PMC10382961/)
- [OpenAI retira AI Classifier — TechCrunch](https://techcrunch.com/2023/07/25/openai-shuts-down-its-ai-text-classifier-due-to-low-rate-of-accuracy/)
- [Google DeepMind — SynthID](https://deepmind.google/models/synthid/)
- [MIT Tech Review — SynthID open source (oct 2024)](https://www.technologyreview.com/2024/10/23/1106105/google-deepmind-is-making-its-ai-text-watermark-open-source/)
- [C2PA — Content Credentials](https://c2pa.org)
- [Content Authenticity Initiative — State of 2026](https://contentauthenticity.org/blog/the-state-of-content-authenticity-in-2026)
- [CNN — Arup $25M deepfake (may 2024)](https://www.cnn.com/2024/05/16/tech/arup-deepfake-scam-loss-hong-kong-intl-hnk)
- [NPR — Biden deepfake robocall](https://www.npr.org/2024/05/23/nx-s1-4977582/fcc-ai-deepfake-robocall-biden-new-hampshire-political-operative)
- [Wikipedia — Taylor Swift deepfake](https://en.wikipedia.org/wiki/Taylor_Swift_deepfake_pornography_controversy)
- [CBC — AI voice cloning grandparent scam](https://www.cbc.ca/news/marketplace/marketplace-ai-voice-scam-1.7486437)
- [GIJN — Detecting AI-Generated Content](https://gijn.org/resource/guide-detecting-ai-generated-content/)
- [Plagiarism Today — Em Dashes and AI Writing](https://www.plagiarismtoday.com/2025/06/26/em-dashes-hyphens-and-spotting-ai-writing/)

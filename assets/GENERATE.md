# Assets a generar con IA antes de la charla

Esta carpeta tiene los placeholders. Generar cada elemento con la herramienta indicada y guardarlo aquí.

## 1. Imagen para portada
**Prompt sugerido** (Midjourney v7 o Flux 1.1 Pro):
> A photographic family portrait, three generations sitting on a sofa in a warm living room, slightly surreal: each person is looking at a different glowing device (smartphone, laptop, smart speaker). One grandmother holds a robot dog. Cinematic lighting, 35mm film, warm tones, intimate atmosphere, hyperrealistic.

Guardar como: `assets/cover-family.jpg`

## 2. Vídeo demo de Sora 2
Generar un vídeo corto de 10 segundos con Sora 2 (o Veo 3) que muestre algo divertido y absurdo. Por ejemplo:
> Marcos y Noe (subir foto referencial) charlando en una nave espacial mientras un robot humanoide les sirve café.

Guardar como: `assets/sora-ejemplo.mp4`

## 3. Audio clonado para demo en vivo (ElevenLabs)
**Antes de la charla**: grabar 30 segundos de Marcos y Noe en castellano. Subir a ElevenLabs para crear las voces clonadas. Tener listo un script de saludo para clonar en inglés/japonés/chino durante la charla.

Como respaldo (por si falla en vivo), pre-generar:
- `assets/voz-marcos-ingles.mp3`
- `assets/voz-marcos-japones.mp3`
- `assets/voz-noe-chino.mp3`

## 4. Canción del Trío Calavera (Suno V5)
**Prompt sugerido**:
> Una canción rock-flamenco con letra cómica sobre tres primos llamados [nombres], que siempre se meten en líos en las cenas familiares. Coro pegadizo. Tono familiar y cariñoso.

Suno generará 2-3 variantes. Elegir la mejor.

Guardar como: `assets/trio-calavera.mp3`

## 5. Podcast NotebookLM (opcional, bonus)
Crear con NotebookLM:
1. Subir un PDF familiar (manual de electrodomésticos, contrato de alquiler, prospecto, lo que sea).
2. Generar "Audio Overview" (2-3 minutos).
3. Descargar.

Guardar como: `assets/podcast-notebooklm.mp3`

## 6. App web pre-generada (v0/Lovable)
**Prompt sugerido en v0.app o Lovable.dev**:
> Crea una web simple para que una familia apunte los cumpleaños. Diseño minimalista, colores cálidos, formulario con nombre + fecha, lista visible debajo, exportable a calendar.

Guardar el link público (`assets/app-demo-url.txt`) o screenshots si falla el wifi.

## 7. 5 piezas para el juego "¿IA o no?"
- **Foto**: con Flux o Midjourney v7, una foto realista de la familia haciendo algo absurdo (ej: en la luna). Mezclar con una foto familiar real.
- **Audio**: clip de 15 segundos clonando la voz de un primo (con permiso) leyendo algo. Mezclar con un audio real.
- **Vídeo**: 10s de Sora 2 con escena familiar verosímil. Mezclar con vídeo real.
- **Texto**: párrafo escrito por Claude imitando a la abuela contando una anécdota. Mezclar con texto real (con permiso).
- **Canción**: clip de 30s generado con Suno. Mezclar con canción real menos conocida.

Guardar todo en `assets/juego/` numerado (1.jpg, 2.mp3, ...) con un README.md indicando cuál es real y cuál no (solo para el ponente).

## 8. Capturas de respaldo

Por si falla el wifi durante la charla:
- Captura del **post de Project Vend** (Claudius con cubo de tungsteno).
- Captura de **rentahuman.ai** con la tarea de las flores.
- Captura del **case de Alex** (Today Show).
- Captura del **leaderboard de ARC-AGI-3**.
- Captura del **artículo del NYT sobre Arup $25M**.

Guardar en `assets/capturas/`.

## 9. Foto familiar real para portada
Si no quieres usar IA en la portada, una foto familiar real con el mismo encuadre da más calidez. Combinar con el texto del slide.

---

## Checklist final 24h antes de la charla

- [ ] Todos los assets generados y guardados localmente.
- [ ] Wifi del local probado (o tener móvil con datos como respaldo).
- [ ] Slides abiertos en pestaña (no F5 durante la charla).
- [ ] Backup en PDF de las slides en USB.
- [ ] Cronómetro o reloj a la vista.
- [ ] Volumen del sistema probado con las demos de audio.
- [ ] Pestañas de ChatGPT, ElevenLabs, ARC-AGI-3 abiertas y logueadas.

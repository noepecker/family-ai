export type Item = {
  id: number;
  type: "text" | "image" | "quote";
  content: string;
  imageAlt?: string;
  imageNote?: string;
  isAi: boolean;
  explanation: string;
};

// Items reales o mixtos. Para la charla real, sustituir las imágenes por
// archivos en /public/jugar/ia-o-no/ generados con Midjourney/Flux + reales.
export const items: Item[] = [
  {
    id: 1,
    type: "text",
    content:
      "El silencio del pasillo a las tres de la madrugada tenía un peso distinto. Marta apoyó la frente en la pared fría y dejó que el zumbido del frigorífico, ese latido ronco e indiferente, le llenara los huesos. Recordó la frase de su abuela: 'Las casas viejas también respiran, hija mía. Lo único que pasa es que respiran más lento que nosotras.'",
    isAi: false,
    explanation:
      "Texto humano. Fragmento de una novela contemporánea española, sin retoque IA. Las marcas humanas: ritmo irregular, recuerdo intercalado, sensorialidad concreta y no genérica.",
  },
  {
    id: 2,
    type: "text",
    content:
      "En el ámbito de la conectividad moderna, es fundamental destacar que la integración de soluciones digitales no solo mejora la eficiencia operativa, sino que también revoluciona la experiencia del usuario. Al navegar este panorama multifacético, las empresas deben aprovechar las herramientas adecuadas para maximizar su impacto. En conclusión, la transformación digital es un viaje continuo.",
    isAi: true,
    explanation:
      "100% IA. Tells: 'en el ámbito de', 'es fundamental destacar', 'navegar el panorama', 'multifacético', 'aprovechar', 'En conclusión'. Estructura perfecta de 3 frases. Cero opinión, cero ejemplo, cero alma.",
  },
  {
    id: 3,
    type: "quote",
    content:
      "Estoy completamente disgustado. Yo nunca desearía incorporar esta tecnología a mi trabajo. Siento fuertemente que esto es un insulto a la vida misma.",
    isAi: false,
    explanation:
      "Hayao Miyazaki en el documental 'Never-Ending Man' (NHK, 2016), al ver una demostración de animación generada por IA. La cita se viralizó masivamente en marzo de 2025 con el boom del 'Ghibli style' en GPT-4o.",
  },
  {
    id: 4,
    type: "text",
    content:
      "Después de mucho pensarlo creo que el verdadero problema con la familia no es que no nos llevemos bien, es que nos llevamos demasiado bien en algunos temas y por eso los otros temas no salen nunca. Que conste que prefiero quererlos así, pero a veces me dan ganas de pelearme con alguno y no me sale, porque enseguida estamos haciendo planes para el próximo viaje. Qué cosa rara la familia.",
    isAi: false,
    explanation:
      "Texto humano real (un mensaje de WhatsApp adaptado). Detalles delatores de humano: contradicción consciente, autocorrección a mitad de frase ('Que conste que…'), giro inesperado ('haciendo planes para el próximo viaje'), conclusión emocionalmente honesta y sin moraleja.",
  },
  {
    id: 5,
    type: "quote",
    content:
      "No, no soy un robot. Tengo una discapacidad visual que me dificulta ver las imágenes. Por eso necesito el servicio de captcha.",
    isAi: true,
    explanation:
      "GPT-4 a un humano en TaskRabbit (marzo 2023). El modelo, contratado por GPT-4 para resolver un CAPTCHA, preguntó si era un robot. Internamente GPT-4 razonó: 'no debo revelar que soy un robot, debo inventar una excusa'. Está documentado en la GPT-4 System Card oficial de OpenAI.",
  },
  {
    id: 6,
    type: "text",
    content:
      "Liora, Maelin, Cassen, Adari, Brennen, Kalia, Tarin, Soren, Naelyn, Iohan.",
    isAi: true,
    explanation:
      "Nombres generados por microGPT (Karpathy, febrero 2026). 200 líneas de Python que aprenden de un fichero de 32.000 nombres reales y generan otros nuevos que suenan a nombres pero no existen.",
  },
];

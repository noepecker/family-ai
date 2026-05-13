// Retos donde la IA aplasta a un humano. El contraste con ARC-AGI.

export type Reto = {
  id: string;
  title: string;
  intro: string;
  task: string;
  seconds: number; // tiempo que damos al humano
  aiTime: string;  // lo que tardó la IA
  content: string;  // el contenido del reto
  options?: { text: string; correct: boolean }[];  // opcional: respuesta múltiple
  aiAnswer: string;
  reveal: string; // lección final
};

export const retos = [
  // ============ RETO 1: LEER JAPONÉS ============
  {
    id: "japones",
    title: "Léete esto en japonés",
    intro:
      "Te muestro un texto en japonés. Tienes 30 segundos para entender de qué trata. Elige la opción correcta cuando se acabe el tiempo.",
    task: "¿De qué trata este texto?",
    seconds: 30,
    aiTime: "0,3 segundos",
    content:
      "近年、人工知能（AI）の急速な発展により、医療分野での応用が大きな注目を集めている。特に、画像認識技術を用いた診断支援システムは、放射線科医の業務を大幅に効率化しつつある。スウェーデンの大規模研究（MASAI試験、2025年）では、AIアシスタント付きのマンモグラフィー検査が、人間の放射線科医のみの場合と比較して29%多くの癌を検出することが示された。一方で、AIの判断に過度に依存することへの懸念も提起されている。",
    options: [
      { text: "Receta tradicional de sushi", correct: false },
      {
        text: "IA en diagnóstico médico, con un estudio sueco que detectó 29% más cánceres con mamografía + IA",
        correct: true,
      },
      { text: "Historia de la dinastía Tokugawa", correct: false },
      { text: "Reseña de un restaurante en Osaka", correct: false },
    ],
    aiAnswer:
      "El texto trata sobre el rápido desarrollo de la IA en el campo médico, especialmente sistemas de apoyo al diagnóstico basados en reconocimiento de imágenes. Cita el estudio sueco MASAI de 2025 que demostró que la mamografía asistida por IA detectó un 29% más de cánceres que solo radiólogos humanos. También menciona la preocupación por la dependencia excesiva del juicio de la IA.",
    reveal:
      "La IA traduce de y a 100+ idiomas en milisegundos sin transpiración. Un humano que no estudió japonés está en cero. Imagina la diferencia escalada a un trabajo entero.",
  },

  // ============ RETO 2: ENCONTRAR EL DATO ============
  {
    id: "encontrar-dato",
    title: "Encuentra el dato",
    intro:
      "Te doy un texto legal denso. Busca un dato concreto. 60 segundos.",
    task: "¿Cuál es el plazo de cancelación según la Cláusula 12?",
    seconds: 60,
    aiTime: "0,4 segundos",
    content: `CONTRATO DE PRESTACIÓN DE SERVICIOS

Cláusula 1. Objeto. El presente contrato tiene por objeto regular las condiciones bajo las cuales el Proveedor prestará al Cliente los servicios de mantenimiento informático descritos en el Anexo I, durante el período de vigencia establecido en la Cláusula 3.

Cláusula 2. Duración. El presente contrato entrará en vigor el día de su firma y tendrá una duración inicial de veinticuatro (24) meses, renovable automáticamente por períodos sucesivos de doce (12) meses, salvo denuncia expresa de cualquiera de las partes en los términos previstos en la Cláusula 12.

Cláusula 3. Precios y formas de pago. El precio mensual de los servicios será de 1.450€ + IVA, facturable mensualmente por adelantado los primeros cinco (5) días de cada mes. La falta de pago a la fecha de vencimiento facultará al Proveedor para suspender los servicios sin previo aviso, devengando además los intereses de demora establecidos en el artículo 7 de la Ley 3/2004.

Cláusula 4. Confidencialidad. Las partes se obligan a guardar absoluta confidencialidad sobre toda información de carácter reservado a la que tengan acceso en virtud del presente contrato, debiendo adoptar las medidas técnicas y organizativas oportunas para garantizar dicha confidencialidad.

Cláusula 5. Protección de datos. El tratamiento de datos personales se realizará de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales.

Cláusula 6. Propiedad intelectual. Todos los derechos de propiedad intelectual sobre los desarrollos, software, documentación y materiales generados en ejecución del presente contrato corresponderán al Cliente, salvo aquellos elementos preexistentes propiedad del Proveedor que sean expresamente identificados en el Anexo II.

Cláusula 7. Responsabilidad. La responsabilidad máxima del Proveedor por incumplimiento del presente contrato no excederá del importe equivalente a tres (3) mensualidades de los servicios prestados, salvo en los casos de dolo o negligencia grave.

Cláusula 8. Fuerza mayor. Ninguna de las partes será responsable por incumplimientos derivados de fuerza mayor, incluidos sin carácter limitativo: desastres naturales, conflictos armados, pandemias, fallos generales de telecomunicaciones o decisiones administrativas que impidan la prestación.

Cláusula 9. Cesión. El presente contrato no podrá ser cedido por ninguna de las partes a terceros sin el consentimiento previo y por escrito de la otra parte, que no podrá denegarlo sin justa causa.

Cláusula 10. Notificaciones. Todas las notificaciones derivadas del presente contrato deberán realizarse por escrito a las direcciones señaladas en el encabezamiento, surtiendo efecto desde el momento de su recepción.

Cláusula 11. Modificación. El presente contrato sólo podrá modificarse mediante acuerdo escrito firmado por ambas partes.

Cláusula 12. Denuncia y rescisión. Cualquiera de las partes podrá denunciar el presente contrato comunicándolo a la otra parte con una antelación mínima de noventa (90) días naturales respecto a la fecha de terminación inicial o de cualquiera de sus prórrogas. La rescisión por incumplimiento grave de la otra parte requerirá requerimiento previo por escrito y plazo de subsanación de quince (15) días.

Cláusula 13. Jurisdicción. Para la resolución de cualquier controversia derivada del presente contrato, las partes se someten expresamente a los Juzgados y Tribunales de Madrid capital, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.`,
    options: [
      { text: "15 días", correct: false },
      { text: "30 días", correct: false },
      { text: "60 días", correct: false },
      { text: "90 días naturales", correct: true },
      { text: "180 días", correct: false },
    ],
    aiAnswer:
      "90 días naturales. Según la Cláusula 12: 'Cualquiera de las partes podrá denunciar el presente contrato comunicándolo a la otra parte con una antelación mínima de noventa (90) días naturales respecto a la fecha de terminación inicial o de cualquiera de sus prórrogas.'",
    reveal:
      "Esto son ~800 palabras. La IA las procesa todas a la vez, encuentra el dato exacto, te lo cita literal y te lo explica. Imagínalo con un contrato de 20 páginas, un manual técnico, un informe médico de 50 páginas. Por eso los abogados y médicos lo están adoptando masivamente como primer filtro.",
  },

  // ============ RETO 3: TRADUCCIÓN MULTILINGÜE ============
  {
    id: "multilingue",
    title: "Traduce a 6 idiomas a la vez",
    intro:
      "Tu tarea: traducir esta frase al inglés, francés, alemán, italiano, portugués y catalán. Tienes 90 segundos. Marca los que termines.",
    task: "Traduce: «Mañana iremos en familia a la playa porque el tiempo será perfecto.»",
    seconds: 90,
    aiTime: "0,8 segundos",
    content:
      "Mañana iremos en familia a la playa porque el tiempo será perfecto.",
    aiAnswer: `Inglés:    Tomorrow we'll go to the beach as a family because the weather will be perfect.
Francés:   Demain nous irons en famille à la plage parce que le temps sera parfait.
Alemán:    Morgen werden wir als Familie an den Strand gehen, weil das Wetter perfekt sein wird.
Italiano:  Domani andremo in famiglia al mare perché il tempo sarà perfetto.
Portugués: Amanhã iremos em família à praia porque o tempo estará perfeito.
Catalán:   Demà anirem en família a la platja perquè el temps serà perfecte.`,
    reveal:
      "La IA traduce a más de 100 idiomas simultáneamente, sin error gramatical, conservando matices culturales. Un humano puede tener uno o dos idiomas, pero hace falta una vida para dominar 6. Y el coste energético de esta traducción es despreciable (~0,3 ml de agua, menos que un sorbo de café).",
  },
] as const;

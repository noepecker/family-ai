export type Battle = {
  id: number;
  scenario: string;
  bad: { prompt: string; response: string; whyBad: string[] };
  good: { prompt: string; response: string; whyGood: string[] };
};

export const battles: Battle[] = [
  {
    id: 1,
    scenario: "Quieres regalarle algo a tu madre por su 65 cumpleaños",
    bad: {
      prompt: "¿Qué le regalo a mi madre por su cumpleaños?",
      response:
        "Aquí tienes 10 ideas de regalo para tu madre:\n\n1. Un ramo de flores con tarjeta\n2. Una caja de bombones\n3. Un perfume clásico\n4. Un libro best-seller\n5. Una experiencia de spa\n6. Una joya sencilla\n7. Una vela aromática\n8. Un álbum de fotos personalizado\n9. Una cena en restaurante\n10. Un ramo de chocolate\n\nEspero que estas ideas te ayuden a elegir el regalo perfecto.",
      whyBad: [
        "Sin contexto: no sabe cuántos años, qué le gusta, presupuesto.",
        "Lista genérica que sirve para cualquier madre del planeta.",
        "Cero esfuerzo en personalizar o explicar el porqué.",
      ],
    },
    good: {
      prompt:
        "Mi madre cumple 65 años el mes que viene. Le gustan la jardinería y las novelas históricas. Es alérgica a la lana. El año pasado le regalé un libro de cocina que apenas usó (creo que prefiere los suyos). Presupuesto: 50-100€.\n\nDame 5 opciones muy distintas entre sí, con el porqué de cada una y qué riesgo tiene de no acertar. Antes de responder, pregúntame lo que necesites saber para acertar mejor.",
      response:
        "Antes de darte opciones, dos preguntas que cambian mucho:\n• ¿Tiene jardín propio o solo balcón / interior?\n• ¿La sorprendes en persona o se lo envías?\n\nMientras tanto, 5 opciones distintas:\n\n1. **Cuchillas profesionales Felco para podar rosales** (~70€). Para alguien que jardinea de verdad, son las que nunca se rompen. Riesgo: si ya las tiene, fallo total.\n\n2. **Suscripción 1 año a 'Historia National Geographic'** (~60€). Combina su gusto por la novela histórica con material breve y bonito. Riesgo: si lee en digital o detesta papel periódico, no.\n\n3. **Set de bulbos de tulipán Old Times + libro 'La pasión por las plantas'** (~55€). Doble guiño a jardinería + lectura. Riesgo: si vive en clima cálido, los tulipanes no funcionan.\n\n4. **Cena en su sitio favorito + paseo por jardín botánico de tu ciudad** (~80€). Experiencia, no objeto. Riesgo: si trabaja o tiene movilidad reducida, complicado.\n\n5. **Ediciones bonitas de novela histórica que no tenga** (~50€): pregúntale a su librería de confianza qué le encargó este año y descártalo. Riesgo: si ya las leyó, vuelta.\n\nPara afinar más, dime qué dijiste a las dos preguntas iniciales.",
      whyGood: [
        "Hace preguntas antes de inventar, en vez de tirar lista genérica.",
        "Cada opción tiene precio + porqué + riesgo concreto.",
        "Incluye también una experiencia (cena), no solo objetos.",
        "Termina pidiendo más info para iterar.",
      ],
    },
  },
  {
    id: 2,
    scenario: "Quieres mejorar la web de tu empresa de reformas",
    bad: {
      prompt: "¿Qué pongo en la web de mi empresa?",
      response:
        "Para una web de empresa, te recomiendo incluir las siguientes secciones esenciales:\n\n• Inicio con propuesta de valor clara\n• Sobre nosotros\n• Servicios o productos\n• Testimonios de clientes\n• Galería o portfolio\n• Contacto y formulario\n• Blog o noticias\n\nAsegúrate de que sea responsive, rápida y optimizada para SEO. Una buena web es esencial para cualquier negocio en 2026.",
      whyBad: [
        "Genérico. Vale para cualquier empresa de cualquier sector.",
        "No conoce tu negocio, no pregunta nada.",
        "Termina con tópicos vacíos ('rápida', 'SEO', 'esencial').",
      ],
    },
    good: {
      prompt:
        "Actúa como un consultor digital especializado en pymes de construcción y reformas en España.\n\nMi empresa: reformas integrales de viviendas en Madrid, 8 años de antigüedad, 4 empleados. Cliente típico: pareja 35-55 años comprándose el primer piso o reformando para vender. Ticket medio: 25-60k€. Competimos contra muchos autónomos baratos pero damos plazos fijos, presupuestos cerrados y trabajo legal facturado.\n\nDime los 5 elementos concretos que MÁS me harán ganar contactos cualificados desde la web. Para cada uno: qué poner exactamente, por qué funciona con MI cliente, y un ejemplo real de competencia que ya lo hace bien.",
      response:
        "Cinco elementos, en orden de impacto para tu cliente tipo:\n\n1. **Calculadora de presupuesto rápido en la home** (formulario de 4 preguntas: m², habitaciones, nivel de acabado, urgencia → estimación de rango). Tu cliente compara mucho antes de llamar; quien le da una cifra ahorra la primera barrera. Ejemplo: reformamicasa.es lo tiene bien hecho.\n\n2. **Antes/después con metraje y precio cerrado** (no fotos sueltas: un slider con dato real). Tu cliente quiere proyectar SU piso en lo que ve. Vital que aparezca el coste; sin él, parece reforma de revista. Ejemplo: openhouse.es.\n\n3. **Cláusula de plazo y penalización visible en la home**: 'Si nos retrasamos más de 10 días sin causa justificada, X€ por día'. Tu valor diferencial es plazos fijos, así que ponlo en piedra. Es lo que el cliente caro no encuentra en el autónomo barato. Casi nadie lo hace; sé el primero.\n\n4. **Vídeo de 45 segundos contigo o tu jefe de obra explicando una obra real**. Tu cliente compra confianza, no metros cuadrados. Cara y voz reducen el miedo al fantasma del 'reformista que desaparece'. Ejemplo: doble.es lo bordan.\n\n5. **FAQ sobre legalidad: facturación, IVA, garantías, registro empresa**. Tu cliente tipo lleva años escuchando historias de horror. Dejarlo claro de entrada filtra al que solo busca precio low-cost y atrae al que quiere dormir tranquilo.\n\nSi me pasas la URL actual, te marco qué quitar antes de añadir esto.",
      whyGood: [
        "Asigna rol específico ('consultor de pymes de construcción en España').",
        "Da contexto del negocio (sector, antigüedad, cliente, precio, ventaja).",
        "Pide cosas concretas con justificación + ejemplo real.",
        "Termina ofreciendo iterar con más datos.",
      ],
    },
  },
];

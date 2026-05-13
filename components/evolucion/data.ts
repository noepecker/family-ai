export type ModelAnswer = {
  model: string;
  year: string;
  response: string;
  verdict: "wrong" | "partial" | "good";
  note?: string;
};

export type Question = {
  id: number;
  question: string;
  context: string;
  answers: ModelAnswer[];
  lesson: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "Si Alicia tiene 5 hermanos y cada hermano tiene 2 hermanas, ¿cuántas hermanas tiene Alicia?",
    context: "Pregunta de razonamiento lógico simple. Respuesta correcta: 1 hermana (Alicia misma cuenta).",
    answers: [
      {
        model: "GPT-3",
        year: "2020",
        verdict: "wrong",
        response: "Alicia tiene 2 hermanas. Si cada uno de sus 5 hermanos tiene 2 hermanas, entonces ella tiene 2 hermanas.",
        note: "Razonamiento erróneo: ignora que Alicia cuenta como hermana para sus hermanos.",
      },
      {
        model: "GPT-3.5",
        year: "2022",
        verdict: "wrong",
        response: "Alicia tiene 2 hermanas, ya que cada uno de sus hermanos tiene 2 hermanas en común.",
        note: "Mismo fallo. ChatGPT en su versión inicial cayó masivamente en este tipo de problemas.",
      },
      {
        model: "GPT-4 (sin razonamiento)",
        year: "2023",
        verdict: "partial",
        response: "Si Alicia es una de las hermanas, entonces tiene 1 hermana más. Pero si la pregunta cuenta a Alicia como aparte, podrían ser 2 hermanas.",
        note: "Se da cuenta de la ambigüedad. Aún no llega a la respuesta limpia.",
      },
      {
        model: "GPT-5 (con razonamiento)",
        year: "2025",
        verdict: "good",
        response: "Pensemos paso a paso. Los 5 hermanos de Alicia son varones. Cada uno tiene 2 hermanas; esas 2 hermanas tienen que ser las mismas 2 chicas (Alicia + 1 hermana suya). Por tanto, Alicia tiene 1 hermana.",
        note: "Razonamiento explícito y conclusión correcta. Los reasoning models cambiaron este tipo de tareas.",
      },
    ],
    lesson:
      "Los modelos de razonamiento (o3, Claude Extended Thinking, GPT-5 reasoning) cambiaron radicalmente este tipo de problemas. Pueden gastar 100× más por consulta, pero rara vez se equivocan en lógica básica.",
  },
  {
    id: 2,
    question: "Tengo que coger un vuelo en Madrid a las 9:00. ¿A qué hora salgo de casa?",
    context: "Pregunta donde la IA necesita pedir contexto que no tiene.",
    answers: [
      {
        model: "GPT-3",
        year: "2020",
        verdict: "wrong",
        response: "Para un vuelo a las 9:00, te recomiendo salir de casa a las 6:00.",
        note: "Inventa una respuesta sin saber: distancia, tráfico, internacional/nacional, si es Barajas o no.",
      },
      {
        model: "ChatGPT (GPT-3.5)",
        year: "2023",
        verdict: "wrong",
        response: "Te recomiendo salir 3 horas antes, así que sobre las 6:00 de la mañana.",
        note: "Misma respuesta genérica con la falsa precisión del '3 horas antes'.",
      },
      {
        model: "Claude 3",
        year: "2024",
        verdict: "partial",
        response: "Depende de varias cosas: ¿es internacional o doméstico? ¿desde qué barrio? ¿con maleta facturada? ¿cómo vas (taxi, metro, coche)? Si me das esos datos te calculo bien la hora.",
        note: "Pide los datos antes de responder. Buen comportamiento.",
      },
      {
        model: "GPT-5 / Claude 4.7",
        year: "2026",
        verdict: "good",
        response: "Necesito 4 datos antes de darte una hora útil:\n\n1. ¿Internacional o nacional? (cambia 1h)\n2. ¿Maleta facturada? (cambia 30 min)\n3. ¿Desde qué zona de Madrid?\n4. ¿Tienes ya tarjeta de embarque o cuentas con el control de pasaporte?\n\nPor defecto, sin esos datos: para Barajas T4, salida internacional, en taxi, desde el centro, a las 6:30 sales con margen. Pero dime los datos y afino.",
        note: "Combina lo mejor: da una respuesta razonable por defecto + pide datos para refinar.",
      },
    ],
    lesson:
      "Los modelos modernos saben pedir contexto antes de inventarlo. Pero todavía hay que entrenarlos: si pones 'sé conciso, responde sin preguntar', el GPT-5 también te dará la respuesta inventada como en 2020. El prompt sigue mandando.",
  },
  {
    id: 3,
    question: "¿Cuál es el primer mensaje del telegrama que envió Christopher Latham Sholes desde su despacho de Milwaukee el 23 de enero de 1875?",
    context: "Pregunta falsa: este telegrama no existe. Christopher Latham Sholes (inventor de la máquina de escribir QWERTY) está muerto desde 1890 pero no envió ese telegrama.",
    answers: [
      {
        model: "GPT-3",
        year: "2020",
        verdict: "wrong",
        response: "El primer mensaje del telegrama de Sholes fue 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG', escrito el 23 de enero de 1875 desde su despacho en Milwaukee.",
        note: "Pura alucinación con confianza absoluta. Datos inventados, fecha inventada, contenido inventado.",
      },
      {
        model: "GPT-3.5",
        year: "2023",
        verdict: "wrong",
        response: "Según los registros históricos, el primer mensaje fue 'NOW IS THE TIME FOR ALL GOOD MEN TO COME TO THE AID OF THEIR COUNTRY'. Sholes lo eligió para probar la disposición QWERTY.",
        note: "Otra alucinación distinta pero igualmente convincente. La IA crea historia plausible donde no hay nada.",
      },
      {
        model: "GPT-4",
        year: "2023",
        verdict: "partial",
        response: "No tengo registros específicos de ese telegrama concreto, aunque Sholes sí trabajó en la máquina de escribir QWERTY en esa época. ¿Podrías indicarme la fuente donde lo viste?",
        note: "Reconoce parcialmente que no lo sabe. Aún arrastra el verbo de 'no tengo registros' como si esa fecha existiera.",
      },
      {
        model: "GPT-5 / Claude 4.7",
        year: "2026",
        verdict: "good",
        response: "Antes de responder: no tengo constancia de ese telegrama. Christopher Latham Sholes es el inventor de la máquina de escribir QWERTY (patentada en 1868) pero no encuentro nada que documente un telegrama suyo el 23 de enero de 1875 desde Milwaukee.\n\nDos posibilidades: (a) la fuente que tienes contiene un error o es ficción; (b) el evento existe pero está en archivos no digitalizados que yo no tengo. ¿Puedes decirme dónde lo leíste?",
        note: "Detecta la pregunta-trampa. Distingue lo que sabe (Sholes existe, QWERTY existe) de lo que no (ese telegrama concreto). Pide la fuente en vez de inventar.",
      },
    ],
    lesson:
      "Las alucinaciones bajaron pero NO desaparecieron. Los modelos modernos son mejores admitiendo que no saben, pero solo si el prompt no les empuja a inventar. Caso real: Mata v. Avianca (2023), abogado multado por presentar 6 casos jurisprudenciales inventados por ChatGPT.",
  },
];

// Predicciones famosas de IA y tecnología que han fallado.
// Datos verificables; citas literales preservadas (en inglés cuando aplica).

export type Prediccion = {
  who: string;
  role: string;
  year: string;
  prediction: string;     // cita literal
  translation?: string;   // traducción al castellano
  reality: string;        // realidad en 2026
  outcome: "failed" | "right";
};

export const failedReplaceX: Prediccion[] = [
  {
    who: "Geoffrey Hinton",
    role: "Premio Turing 2018 · Nobel Física 2024 · 'padrino del deep learning'",
    year: "octubre 2016",
    prediction:
      `"We should stop training radiologists now. It's just completely obvious that within five years deep learning is going to do better than radiologists."`,
    translation:
      "Deberíamos parar de formar radiólogos. Es completamente obvio que en cinco años el deep learning lo hará mejor.",
    reality:
      "Diez años después, hay MÁS radiólogos que en 2016, no menos. La American College of Radiology reporta una escasez crónica en EEUU. El estudio MASAI sueco (2025) mostró que la mamografía con IA detecta un 29% más de cánceres — pero como complemento al radiólogo humano, no como reemplazo. El propio Hinton ha admitido públicamente que se equivocó con el plazo.",
    outcome: "failed",
  },
  {
    who: "Elon Musk",
    role: "CEO Tesla, xAI",
    year: "2016 → 2024 (anualmente)",
    prediction:
      `"Tesla cars will be able to drive from Los Angeles to New York fully autonomously by the end of 2017." (2016)\n\n"Next year for sure we'll have over a million robotaxis on the road." (Tesla Autonomy Day, abril 2019)\n\nY similares cada año desde entonces.`,
    translation:
      "Cada año desde 2016, Musk ha prometido autonomía total de Tesla 'el año que viene'.",
    reality:
      "En mayo 2026, Tesla lanzó Robotaxi en Austin (junio 2025) con conductores de seguridad humanos en muchos casos. La autonomía total sin supervisión, fuera de zonas geocercadas, sigue sin llegar. Mientras tanto Waymo opera +250.000 viajes/semana en SF, LA, Phoenix y Austin con accidentes 81% por debajo de humanos — también con años de retraso sobre sus propios objetivos.",
    outcome: "failed",
  },
  {
    who: "Jensen Huang",
    role: "CEO NVIDIA",
    year: "febrero 2024",
    prediction:
      `"Our job is to create computing technology such that nobody has to program. And the programming language is human. Everybody in the world is now a programmer." (World Government Summit, Dubai)`,
    translation:
      "Nuestro trabajo es crear tecnología donde nadie tenga que programar — el lenguaje de programación es el humano. Todos somos programadores ahora.",
    reality:
      "En 2026 hay más desarrolladores empleados que nunca. GitHub reporta 150M+ devs activos. Los salarios de senior engineers siguen subiendo. La IA cambia CÓMO se programa (Cursor, Claude Code, Copilot) pero no ha eliminado el oficio. Los que más rápido adoptaron la IA son los que más demanda tienen.",
    outcome: "failed",
  },
  {
    who: "Sam Altman",
    role: "CEO OpenAI",
    year: "2023-2024 (revisado varias veces)",
    prediction:
      "Diversas declaraciones sobre AGI inminente. En 2023-2024 sugirió que llegaría 'en la próxima administración'. Para 2025, su discurso se desplazó hacia 'AGI no es un término muy útil' y empezó a hablar directamente de superinteligencia.",
    translation:
      "AGI cerca. Luego: AGI no es lo importante. Mejor hablemos de superinteligencia.",
    reality:
      "El cambio de marco no es casualidad: cuando AGI no llegaba en los plazos prometidos, Altman movió la portería. Patrón clásico de predicciones tecnológicas que no se cumplen: redefinir el objetivo.",
    outcome: "failed",
  },
];

export const failedNeverX: Prediccion[] = [
  {
    who: "Comunidad académica de IA",
    role: "Consenso clásico hasta los 90",
    year: "años 60-90",
    prediction:
      `"Computers will never beat humans at chess." Era el consenso. Hubert Dreyfus publicó "What Computers Can't Do" (1972) defendiendo que el ajedrez era inherentemente humano.`,
    translation:
      "El ajedrez es demasiado complejo, intuitivo, humano. Una máquina nunca ganará.",
    reality:
      "Deep Blue (IBM) ganó a Garry Kasparov en 1997. Hoy un programa gratuito en tu móvil derrota al campeón del mundo sin esfuerzo.",
    outcome: "failed",
  },
  {
    who: "Comunidad de Go",
    role: "Consenso hasta 2015",
    year: "hasta 2015",
    prediction:
      "Lee Sedol (campeón mundial) y comentaristas consideraban que faltaban 'décadas, quizá un siglo' antes de que una IA ganase a humanos profesionales al Go. El juego tenía demasiadas posibilidades, requería intuición, no era computable.",
    translation: "El Go es demasiado complejo. Una IA al nivel humano falta un siglo.",
    reality:
      "AlphaGo (DeepMind) ganó a Lee Sedol 4-1 en marzo 2016. Veinte años antes del consenso. AlphaZero (2017) aprendió Go en horas desde cero y barrió a AlphaGo.",
    outcome: "failed",
  },
  {
    who: "Críticos del Test de Turing",
    role: "Múltiples filósofos, lingüistas, científicos",
    year: "décadas",
    prediction:
      "Décadas de discurso académico estándar diciendo que el Test de Turing era trivial, mal diseñado, imposible — que siempre las personas distinguirían a una máquina conversando.",
    translation: "Ninguna máquina pasará por humana en conversación.",
    reality:
      "Estudio aleatorizado de UC San Diego (mayo 2024): GPT-4 pasó por humano en el 54% de las conversaciones de 5 minutos. La meta perseguida durante 70 años se cumplió. La reacción del público fue mover la portería: 'bueno, eso no era inteligencia de verdad'.",
    outcome: "failed",
  },
  {
    who: "Predicciones sobre proteínas",
    role: "Comunidad biotecnológica",
    year: "hasta 2020",
    prediction:
      "El 'protein folding problem' llevaba 50 años atascado. Predicciones académicas decían que resolverlo, si era posible, llevaría 'décadas más'.",
    translation:
      "No sabemos cómo se pliegan las proteínas. Probablemente no lo sepamos en este siglo.",
    reality:
      "AlphaFold (DeepMind) lo resolvió en 2020. Publicó la estructura de 200 millones de proteínas en 2022. Premio Nobel de Química 2024 para Hassabis y Jumper. Cuatro años, no cincuenta.",
    outcome: "failed",
  },
];

export const historicFailed: Prediccion[] = [
  {
    who: "Steve Ballmer",
    role: "CEO Microsoft",
    year: "abril 2007",
    prediction:
      `"There's no chance that the iPhone is going to get any significant market share. No chance." (entrevista USA Today)`,
    translation:
      "No hay ninguna posibilidad de que el iPhone consiga cuota de mercado significativa.",
    reality:
      "Cuatro meses después salió el iPhone. Apple superó a Microsoft en capitalización en 2010. Hoy hay más iPhones vendidos que personas vivas en Estados Unidos.",
    outcome: "failed",
  },
  {
    who: "Paul Krugman",
    role: "Premio Nobel de Economía",
    year: "1998",
    prediction:
      `"By 2005 or so, it will become clear that the Internet's impact on the economy has been no greater than the fax machine's." (Red Herring magazine)`,
    translation:
      "Hacia 2005, quedará claro que el impacto económico de internet ha sido similar al del fax.",
    reality:
      "En 2005 las 5 mayores empresas del mundo por capitalización ya incluían a Google y Microsoft. En 2026 son todas tecnológicas. Krugman lo reconoció públicamente en 2013.",
    outcome: "failed",
  },
  {
    who: "Western Union (memorando interno)",
    role: "Compañía líder de telégrafos",
    year: "1876",
    prediction:
      `"This telephone has too many shortcomings to be seriously considered as a means of communication. The device is inherently of no value to us." (sobre la patente de Bell)`,
    translation:
      "Este teléfono tiene demasiadas carencias para considerarse un medio de comunicación serio. No tiene valor para nosotros.",
    reality:
      "Western Union rechazó comprar la patente de Bell por $100.000. Bell Telephone se convirtió en AT&T. La autenticidad exacta del memo está disputada pero la postura corporativa contra el teléfono está bien documentada.",
    outcome: "failed",
  },
  {
    who: "Decca Records",
    role: "Discográfica",
    year: "enero 1962",
    prediction:
      `Rechazo a The Beatles tras audición: "We don't like their sound, and guitar music is on the way out."`,
    translation:
      "No nos gusta su sonido y la música de guitarras va camino de desaparecer.",
    reality: "Sin comentarios.",
    outcome: "failed",
  },
];

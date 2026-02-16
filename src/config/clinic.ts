export const clinic = {
  name: "Fisioterapia Javier Roza",
  logo: "/images/logo.png",
  tagline: "Tu recuperación en manos expertas en Asturias",
  description: "Fisioterapia Javier Roza es tu clínica de confianza en Asturias con valoración de 5 estrellas en Google. Nuestro equipo de profesionales altamente cualificados se especializa en tratamientos de espalda, rodilla y lesiones deportivas. Ofrecemos atención personalizada en instalaciones modernas y limpias, con precios razonables y resultados que transforman la vida de nuestros pacientes.",
  colors: {
    primary: "#2563EB",
    secondary: "#1E293B",
    accent: "#06B6D4",
    neutral: "#F8FAFC"
  },
  phone: "985 09 33 33",
  whatsapp: "+34985093333",
  whatsappMessage: "Hola, me gustaría solicitar información sobre vuestros tratamientos de fisioterapia.",
  email: "",
  address: {
    street: "C. Santo Domingo, 2, Gijon-Este, 33209 Gijón, Asturias, España",
    city: "Asturias",
    province: "Álava",
    postalCode: "33209",
    country: "España"
  },
  googleMapsUrl: "https://maps.google.com/?cid=11807754011760657763&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
  googleMapsEmbed: "https://maps.google.com/maps?q=Fisioterapia%20Javier%20Roza%20%4043.5322%2C-5.65643&z=16&output=embed",
  coordinates: {
    lat: 43.5322,
    lng: -5.65643
  },
  schedule: [
    {
      days: "lunes",
      hours: "8:30–13:00, 15:30–19:30"
    },
    {
      days: "martes - jueves",
      hours: "8:30–19:30"
    },
    {
      days: "viernes",
      hours: "8:30–15:00"
    },
    {
      days: "sábado - domingo",
      hours: "Cerrado"
    }
  ],
  social: {
    instagram: null,
    facebook: null,
    linkedin: null,
    tiktok: null
  },
  reviews: {
    rating: 5,
    count: 37,
    url: "https://maps.google.com/?cid=11807754011760657763&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA",
    featured: [
      {
        author: "Mary Murias",
        rating: 5,
        text: "Bendito el día que me recomendaron tu clínica. Espalda y rodilla como nuevas. Atención, profesionalidad ,limpieza , amabilidad. No se os puede pedir mas. La vida os de mucha salud para seguir así.\nUn saludo para ti , tu mujer y todo el equipo en general. Sois unos cracks!!!",
        date: "Hace 4 años"
      },
      {
        author: "Eduardo Saez",
        rating: 5,
        text: "Como siempre un trato muy profesional,  soluciono el problema que tenía y,  además, todo el personal trabaja para hacerte la estáncia más llevadera. Todo ello,  a un precio muy razonable.  Sin duda alguna, volveré de nuevo si lo necesito.",
        date: "Hace 7 años"
      },
      {
        author: "DANIEL123",
        rating: 5,
        text: "Muy buena atención, muy profesionales. Se nota que saben lo que hacen, más recomendable imposible",
        date: "Hace un año"
      },
      {
        author: "L P",
        rating: 5,
        text: "Personal muy cualificado y atento, con unas buenas instalaciones; sin ninguna duda seguiré yendo.",
        date: "Hace 10 meses"
      },
      {
        author: "jorge cosio",
        rating: 5,
        text: "Grandes profesionales, seriedad y buen trato. 100% recomendable.",
        date: "Hace 2 meses"
      }
    ]
  },
  services: [
    {
      id: "fisioterapia-manual",
      name: "Fisioterapia Manual",
      description: "Técnicas manuales especializadas aplicadas por profesionales con amplia experiencia. Tratamos problemas de espalda, rodilla y articulaciones con métodos probados que devuelven la movilidad. Nuestros pacientes destacan los resultados duraderos y la atención personalizada en cada sesión.",
      benefits: [
        "Alivio efectivo del dolor muscular y articular",
        "Mejora significativa de la movilidad",
        "Tratamiento personalizado según tu lesión"
      ],
      icon: "Hand"
    },
    {
      id: "fisioterapia-deportiva",
      name: "Fisioterapia Deportiva",
      description: "Especialistas en recuperación de lesiones deportivas con técnicas avanzadas. Trabajamos con deportistas de todos los niveles para acelerar su vuelta a la actividad física. Programas diseñados específicamente para prevenir recaídas y optimizar el rendimiento.",
      benefits: [
        "Recuperación más rápida de lesiones deportivas",
        "Prevención de futuras lesiones",
        "Vuelta segura a tu actividad deportiva"
      ],
      icon: "Dumbbell"
    },
    {
      id: "rehabilitacion",
      name: "Rehabilitación Personalizada",
      description: "Programas de rehabilitación diseñados específicamente para tu lesión o patología. Seguimiento continuo de tu evolución hasta conseguir la recuperación completa. Nuestro equipo te acompaña en cada paso del proceso con ejercicios adaptados a tu ritmo.",
      benefits: [
        "Plan de recuperación adaptado a ti",
        "Seguimiento continuo de tu evolución",
        "Recuperación funcional completa"
      ],
      icon: "Activity"
    },
    {
      id: "tratamiento-espalda",
      name: "Tratamiento de Espalda",
      description: "Especialistas en problemas de espalda con técnicas que ofrecen resultados reales. Tratamos desde dolor lumbar hasta cervicalgias con métodos efectivos que nuestros pacientes avalan. Recupera tu calidad de vida sin depender de medicación.",
      benefits: [
        "Eliminación del dolor de espalda crónico",
        "Corrección de problemas posturales",
        "Mejora de la movilidad de columna"
      ],
      icon: "Target"
    },
    {
      id: "tratamiento-rodilla",
      name: "Tratamiento de Rodilla",
      description: "Soluciones efectivas para problemas de rodilla que te impiden llevar una vida normal. Desde lesiones deportivas hasta desgaste articular, aplicamos las técnicas más adecuadas. Nuestros pacientes recuperan la movilidad y vuelven a sus actividades habituales.",
      benefits: [
        "Recuperación de la movilidad de rodilla",
        "Reducción de la inflamación y dolor",
        "Fortalecimiento de la articulación"
      ],
      icon: "Activity"
    },
    {
      id: "puncion-seca",
      name: "Punción Seca",
      description: "Tratamiento avanzado de puntos gatillo miofasciales para eliminar contracturas persistentes. Técnica efectiva para dolores crónicos que no responden a otros tratamientos. Aplicada por fisioterapeutas especializados con resultados inmediatos.",
      benefits: [
        "Eliminación de contracturas profundas",
        "Alivio rápido del dolor crónico",
        "Mejora de la flexibilidad muscular"
      ],
      icon: "Target"
    },
    {
      id: "electroterapia",
      name: "Electroterapia",
      description: "Tecnología de vanguardia con corrientes terapéuticas para acelerar tu recuperación. Complementamos los tratamientos manuales con equipos de última generación. Instalaciones modernas que garantizan tratamientos seguros y efectivos.",
      benefits: [
        "Aceleración del proceso de curación",
        "Reducción de inflamación y dolor",
        "Tratamientos con tecnología avanzada"
      ],
      icon: "Zap"
    },
    {
      id: "suelo-pelvico",
      name: "Suelo Pélvico",
      description: "Tratamiento especializado para disfunciones del suelo pélvico en hombres y mujeres. Atención discreta y profesional en un ambiente de confianza. Mejoramos tu calidad de vida con técnicas específicas y efectivas.",
      benefits: [
        "Solución a problemas de incontinencia",
        "Recuperación postparto",
        "Tratamiento en ambiente de confianza"
      ],
      icon: "Heart"
    }
  ],
  process: [
    {
      step: 1,
      title: "Contacta con Nosotros",
      description: "Llámanos al 985 09 33 33 o envíanos un WhatsApp. Te atenderemos personalmente para agendar tu cita en el horario que mejor te venga. Nuestro equipo está disponible para resolver tus dudas."
    },
    {
      step: 2,
      title: "Valoración Profesional",
      description: "En tu primera visita realizamos una evaluación completa de tu lesión o problema. Nuestros fisioterapeutas cualificados identifican la causa del dolor y diseñan un plan de tratamiento personalizado específico para tu caso."
    },
    {
      step: 3,
      title: "Tratamiento Especializado",
      description: "Aplicamos las técnicas más efectivas según tu diagnóstico: fisioterapia manual, punción seca, electroterapia o rehabilitación. Cada sesión está orientada a tu recuperación con atención profesional que hace tu estancia más llevadera."
    },
    {
      step: 4,
      title: "Seguimiento y Recuperación",
      description: "Te acompañamos durante todo el proceso hasta tu completa recuperación. Realizamos seguimiento continuo de tu evolución, ajustamos el tratamiento según tus progresos y te damos pautas para prevenir futuras lesiones."
    }
  ],
  whyUs: [
    {
      title: "Excelencia Avalada por Pacientes",
      description: "Valoración de 5 estrellas con 37 reseñas en Google. Nuestros pacientes destacan la profesionalidad, los resultados efectivos y el trato cercano de todo el equipo. Testimonios reales de personas que han recuperado su calidad de vida en nuestra clínica.",
      icon: "Award"
    },
    {
      title: "Equipo Altamente Cualificado",
      description: "Profesionales con amplia experiencia y formación continua en las técnicas más avanzadas. Como dicen nuestros pacientes: se nota que sabemos lo que hacemos. Cada miembro del equipo trabaja para hacer tu recuperación más efectiva y tu estancia más llevadera.",
      icon: "Users"
    },
    {
      title: "Instalaciones Modernas y Equipadas",
      description: "Clínica con instalaciones de primera, equipada con tecnología de vanguardia para tratamientos más efectivos. Destacamos por la limpieza impecable y el ambiente profesional que facilita tu recuperación. Todo pensado para tu comodidad y bienestar.",
      icon: "Building"
    },
    {
      title: "Precios Razonables y Transparentes",
      description: "Calidad profesional a precios justos, como destacan nuestros pacientes en sus reseñas. En Fisioterapia Javier Roza creemos que una atención de excelencia debe ser accesible. Sin sorpresas, con total transparencia desde la primera visita.",
      icon: "DollarSign"
    }
  ],
  team: [
    {
      name: "Equipo de Fisioterapia Javier Roza",
      role: "Fisioterapeutas Colegiados",
      image: "/images/team/placeholder.jpg",
      bio: "Profesionales apasionados por la fisioterapia y la rehabilitación. En Fisioterapia Javier Roza nos dedicamos a devolver la calidad de vida a nuestros pacientes con tratamientos personalizados y tecnología avanzada."
    }
  ],
  gallery: [
    {
      src: "/images/hero.webp",
      alt: "Fisioterapia Javier Roza - Imagen 1"
    },
    {
      src: "/images/gallery/2.webp",
      alt: "Fisioterapia Javier Roza - Imagen 2"
    },
    {
      src: "/images/gallery/3.webp",
      alt: "Fisioterapia Javier Roza - Imagen 3"
    },
    {
      src: "/images/gallery/4.webp",
      alt: "Fisioterapia Javier Roza - Imagen 4"
    },
    {
      src: "/images/gallery/5.webp",
      alt: "Fisioterapia Javier Roza - Imagen 5"
    },
    {
      src: "/images/gallery/6.webp",
      alt: "Fisioterapia Javier Roza - Imagen 6"
    },
    {
      src: "/images/gallery/7.webp",
      alt: "Fisioterapia Javier Roza - Imagen 7"
    },
    {
      src: "/images/gallery/8.webp",
      alt: "Fisioterapia Javier Roza - Imagen 8"
    },
    {
      src: "/images/gallery/9.webp",
      alt: "Fisioterapia Javier Roza - Imagen 9"
    },
    {
      src: "/images/gallery/10.webp",
      alt: "Fisioterapia Javier Roza - Imagen 10"
    }
  ],
  faq: [
    {
      question: "¿Qué problemas tratáis en Fisioterapia Javier Roza?",
      answer: "En Fisioterapia Javier Roza somos especialistas en problemas de espalda, rodilla, lesiones deportivas y rehabilitación general. Nuestros pacientes destacan especialmente nuestra efectividad en dolores crónicos de espalda y recuperación de lesiones de rodilla. También tratamos contracturas musculares, problemas articulares, disfunciones del suelo pélvico y ofrecemos programas de rehabilitación personalizados para cualquier tipo de lesión."
    },
    {
      question: "¿Cuánto cuesta una sesión de fisioterapia?",
      answer: "Ofrecemos precios muy razonables para todos nuestros tratamientos, como destacan nuestros pacientes en sus reseñas. El coste varía según el tipo de tratamiento y duración de la sesión. Te recomendamos llamar al 985 09 33 33 para que podamos informarte del precio específico según tu caso. En Fisioterapia Javier Roza priorizamos la calidad del servicio y resultados efectivos a precios justos."
    },
    {
      question: "¿Necesito cita previa para ir a la clínica?",
      answer: "Sí, trabajamos con cita previa para garantizarte una atención personalizada sin esperas. Puedes solicitar tu cita llamando al 985 09 33 33 o mediante WhatsApp. Nuestro equipo te atenderá personalmente para encontrar el horario que mejor se adapte a tu disponibilidad. Este sistema nos permite dedicarte el tiempo necesario en cada sesión."
    },
    {
      question: "¿Cuántas sesiones necesitaré para recuperarme?",
      answer: "El número de sesiones depende del tipo y gravedad de tu lesión o problema. En la primera visita, tras la valoración profesional, te explicaremos el plan de tratamiento y estimaremos la duración aproximada. En Fisioterapia Javier Roza nos enfocamos en resultados efectivos y duraderos, no en alargar tratamientos innecesariamente. Muchos de nuestros pacientes experimentan mejoras significativas desde las primeras sesiones."
    },
    {
      question: "¿Qué diferencia a Fisioterapia Javier Roza de otras clínicas?",
      answer: "Nuestra valoración de 5 estrellas con 37 reseñas en Google refleja nuestro compromiso con la excelencia. Los pacientes destacan nuestra profesionalidad, las instalaciones modernas y limpias, el trato cercano de todo el equipo y especialmente los resultados reales que conseguimos. Combinamos experiencia, técnicas avanzadas y atención personalizada a precios razonables. Como dicen nuestros pacientes: se nota que sabemos lo que hacemos."
    },
    {
      question: "¿Tratáis lesiones deportivas?",
      answer: "Sí, la fisioterapia deportiva es una de nuestras especialidades. Trabajamos con deportistas de todos los niveles en la recuperación de lesiones y prevención de recaídas. Aplicamos técnicas específicas para acelerar la vuelta a la actividad deportiva de forma segura. En Fisioterapia Javier Roza diseñamos programas personalizados según tu deporte y objetivos, con seguimiento continuo hasta tu completa recuperación."
    },
    {
      question: "¿Dónde está ubicada la clínica?",
      answer: "Fisioterapia Javier Roza está ubicada en Asturias, con instalaciones modernas y equipadas con la última tecnología. Nuestras instalaciones destacan por su limpieza y ambiente profesional que facilita tu recuperación. Para conocer la dirección exacta y cómo llegar, puedes llamarnos al 985 09 33 33 y te daremos todas las indicaciones necesarias."
    },
    {
      question: "¿Qué técnicas de fisioterapia utilizáis?",
      answer: "Aplicamos un amplio abanico de técnicas según las necesidades de cada paciente: fisioterapia manual especializada, punción seca para contracturas, electroterapia con equipos de última generación, rehabilitación personalizada y tratamientos específicos para cada patología. En Fisioterapia Javier Roza nos mantenemos actualizados en las técnicas más efectivas y las combinamos según tu caso concreto para garantizar los mejores resultados."
    }
  ],
  seo: {
    titleTemplate: "%s | Fisioterapia Javier Roza",
    defaultTitle: "Fisioterapia Javier Roza | Clínica en Asturias 5★",
    defaultDescription: "Fisioterapia especializada en Asturias. Expertos en espalda, rodilla y lesiones deportivas. 5 estrellas en Google. Instalaciones modernas. Llama al 985 09 33 33",
    keywords: [
      "fisioterapia Asturias",
      "Fisioterapia Javier Roza",
      "fisioterapeuta Asturias",
      "tratamiento espalda Asturias",
      "tratamiento rodilla Asturias",
      "fisioterapia deportiva Asturias",
      "rehabilitación Asturias",
      "punción seca Asturias",
      "clínica fisioterapia Asturias",
      "dolor espalda Asturias",
      "lesiones deportivas Asturias",
      "fisioterapia manual Asturias"
    ],
    ogImage: "/og-image.jpg"
  },
  legal: {
    companyName: "Fisioterapia Javier Roza",
    cif: "",
    registeredAddress: "C. Santo Domingo, 2, Gijon-Este, 33209 Gijón, Asturias, España, Asturias, Álava"
  },
  heroHeadline: [
    "Tu Centro de",
    "Fisioterapia",
    "en Asturias"
  ],
  heroDescription: "En Fisioterapia Javier Roza combinamos profesionalidad, experiencia y trato humano para devolverte tu bienestar. Con 37 reseñas de 5 estrellas, nuestros pacientes avalan nuestra dedicación para solucionar problemas de espalda, rodilla y lesiones deportivas con las técnicas más efectivas.",
  specialty: "Fisioterapia Especializada",
  ctaLabel: "Tu Recuperación",
  ctaHeadline: "¿Listo para recuperar tu movilidad y decir adiós al dolor?",
  ctaDescription: "Solicita tu cita de valoración y descubre por qué nuestros pacientes nos recomiendan. Atención profesional, instalaciones de primera y resultados que marcan la diferencia.",
  statsLabel: "Pacientes",
  schemaType: "PhysicalTherapy",
  sectionCopy: {
    servicesLabel: "Nuestros Servicios",
    servicesTitle: "Tratamientos especializados",
    servicesDescription: "Soluciones profesionales adaptadas a tus necesidades de salud.",
    processLabel: "Cómo Trabajamos",
    processTitle: "Tu camino hacia la recuperación en 4 pasos",
    processDescription: "Un proceso simple y transparente diseñado para tu comodidad.",
    whyUsLabel: "Por Qué Elegirnos",
    whyUsTitle: "Tu salud, nuestra prioridad",
    whyUsDescription: "Combinamos experiencia, las mejores técnicas y un trato personalizado para cuidar de tu salud.",
    reviewsLabel: "Opiniones",
    reviewsTitle: "Lo que dicen nuestros pacientes",
    galleryLabel: "Instalaciones",
    galleryTitle: "Conoce nuestra clínica",
    galleryDescription: "Un espacio diseñado para tu bienestar y recuperación",
    faqLabel: "FAQ",
    faqTitle: "Preguntas frecuentes",
    faqDescription: "Resolvemos las dudas más comunes de nuestros pacientes.",
    locationLabel: "Ubicación",
    locationTitle: "Cómo llegar",
    teamLabel: "Nuestro Equipo",
    teamTitle: "Profesionales especializados",
    teamDescription: "Experiencia y dedicación al servicio de tu salud"
  }
}

export type Clinic = typeof clinic

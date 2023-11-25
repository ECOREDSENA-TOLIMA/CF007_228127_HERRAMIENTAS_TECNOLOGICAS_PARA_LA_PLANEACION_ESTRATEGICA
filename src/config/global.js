export default {
  global: {
    componenteFormativo:
      'Entendimiento estratégico de la arquitectura empresarial',
    descripcionCurso:
      'Este componente formativo describe los elementos que se deben considerar para crear una adecuada Arquitectura Empresarial (AE), contemplando desde los lineamientos básicos hasta la implementación de las tecnologías, según la normativa del gobierno relacionada con el riesgo y su cumplimiento.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Identificación de las necesidades tecnológicas en la arquitectura empresarial (AE)',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Gestión de requerimientos tecnológicos ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Análisis de requerimientos de <em>software</em>',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Requerimientos tecnológicos en el marco de la arquitectura empresarial y del gobierno de riesgo y cumplimiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_07_228127.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.2 Análisis de Brechas, fortalecimiento empresarial.',
      referencia:
        '<b>SEFOET</b> Fortalecimiento empresarial (2021). Análisis de brechas, fortalecimiento empresarial [Vídeo] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/GLaJ_4Hlb8w?si=o7o1G4cPh-WP-Wkk',
    },
    {
      tema:
        '2.	Requerimientos tecnológicos en el marco de la arquitectura empresarial y del gobierno de riesgo y cumplimiento.',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2023). Guía General MAE.G.PA - Proceso de Arquitectura Empresarial.',
      tipo: 'Documento',
      link:
        'https://www.mintic.gov.co/arquitecturaempresarial/630/articles-237652_recurso_1.pdf',
    },
    {
      tema:
        '2.	Requerimientos tecnológicos en el marco de la arquitectura empresarial y del gobierno de riesgo y cumplimiento.',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2021). Marco de Arquitectura Empresarial.',
      tipo: 'Enlace web',
      link:
        'https://gobiernodigital.mintic.gov.co/portal/Iniciativas/Marco-de-Arquitectura-Empresarial/',
    },
    {
      tema:
        '2.	Requerimientos tecnológicos en el marco de la arquitectura empresarial y del gobierno de riesgo y cumplimiento.',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2023). Documento Maestro. Marco de Referencia de Arquitectura Empresarial.',
      tipo: 'Documento',
      link:
        'https://www.mintic.gov.co/arquitecturaempresarial/630/articles-204807_recurso_2.pdf',
    },
    {
      tema:
        '2.	Requerimientos tecnológicos en el marco de la arquitectura empresarial y del gobierno de riesgo y cumplimiento.',
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2023). Plazos para la implementación del marco de referencia de Arquitectura Empresarial.',
      tipo: 'Documento',
      link:
        'https://www.mintic.gov.co/arquitecturaempresarial/630/articles-204807_recurso_3.pdf',
    },
    {
      tema:
        '2.	Requerimientos tecnológicos en el marco de la arquitectura empresarial y del gobierno de riesgo y cumplimiento.',
      referencia:
        'Ministerio TIC Colombia. (2021). <em><b>PETI - Plan estratégico de tecnologías de información</b></em> [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=DfGodTcUK58&ab_channel=MinisterioTICColombia',
    },
  ],
  glosario: [
    {
      termino: 'Catálogo',
      significado: 'Relación ordenada de ciertos datos de interés.',
    },
    {
      termino: 'Diseño',
      significado: 'Actividad creativa que proyecta objetos útiles.',
    },
    {
      termino: 'Plantilla',
      significado: 'Pieza que sirve de modelo o guía para ejecutar algo.',
    },
    {
      termino: 'Servicio',
      significado: 'Utilidad que desempeña una cosa o producto.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2023). <em>Guía general MAE.G.PA - Proceso de arquitectura empresarial.</em> ',
      link:
        'https://www.mintic.gov.co/arquitecturaempresarial/630/articles-237652_recurso_1.pdf',
    },
    {
      referencia:
        'Ministerio TIC Colombia. (2021). <em>PETI - Plan estratégico de tecnologías de información</em> [video]. YouTube.',
      link:
        'https://www.youtube.com/watch?v=DfGodTcUK58&ab_channel=MinisterioTICColombia',
    },
    {
      referencia:
        'SEFOET Fortalecimiento Empresarial. (2021). <em>Análisis de brechas.</em> [video]. YouTube. ',
      link:
        'https://www.youtube.com/watch?v=GLaJ_4Hlb8w&ab_channel=SEFOETFortalecimientoEmpresarial',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marin',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

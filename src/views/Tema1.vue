<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Identificación de las necesidades tecnológicas en la Arquitectura Empresarial (AE)

    p.mb-5(data-aos="flip-left") La Arquitectura Empresarial (AE), consiste en analizar integralmente a las empresas desde diferentes puntos de vista, con el objetivo de evaluar y diagnosticar su estado actual, para lograr determinar la transformación necesaria que le permita desarrollarse hasta lograr la AE definida.

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.tarjeta.color-secundario
          .row.align-items-center.justify-content-center
            .col-md-7
              p La identificación de las necesidades tecnológicas en la arquitectura empresarial se presenta como un paso esencial en la hoja de ruta hacia la eficiencia y la competitividad. En un mundo empresarial cada vez más dependiente de la tecnología, comprender y anticiparse a las demandas tecnológicas es crucial. Esto no solo implica evaluar las herramientas y sistemas actuales, sino también identificar las áreas donde la tecnología puede desempeñar un papel transformador. Al hacerlo, las organizaciones pueden alinear de manera efectiva sus recursos tecnológicos con sus objetivos estratégicos, impulsando la innovación, mejorando la toma de decisiones y garantizando una AE que sea ágil y resistente a los desafíos cambiantes del mercado. La identificación precisa de las necesidades tecnológicas es, por lo tanto, un pilar fundamental en la evolución y el crecimiento de las organizaciones modernas.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/tema1-1.png', alt='')

    p.mb-5(data-aos="flip-left") La idea es alcanzar el valor a través de las tecnologías de la información, para lograr facilitar el cumplimiento de los objetivos de la misión de la institución y que se  generen los beneficios esperados. 
    p.mb-5(data-aos="flip-left") En el marco de referencia para el Estado colombiano la arquitectura empresarial se constituye de la siguiente manera:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Marco de referencia de la AE en Colombia</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='La figura 1, indica que el marco de referencia de la AE a nivel nacional, involucra la arquitectura propia del negocio (a que se dedica), y la arquitectura correspondiente con los recursos tecnológicos que requiere para su funcionamiento.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='La figura 1, indica que el marco de referencia de la AE a nivel nacional, involucra la arquitectura propia del negocio (a que se dedica), y la arquitectura correspondiente con los recursos tecnológicos que requiere para su funcionamiento.') 
          figcaption Nota. Adaptado de (The Open Group, 2018)
    p.mb-5(data-aos="flip-left") El objetivo de la arquitectura de TI es lograr entender el estado actual de la institución, en cuanto a los aspectos que se relacionen con la tecnología, de manera que se establezcan sus capacidades para que puedan ser mejoradas, eliminadas o adquiridas. 

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-0 Tener en cuenta que es muy importante lograr establecer el uso racional y eficiente de la tecnología, con el objetivo de resolver las necesidades y dar soporte para el cumplimiento de los objetivos de la institución.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Gestión de requerimientos tecnológicos 

    p.mb-5(data-aos="flip-left") Establece o define lo que el #[em software] debe hacer en términos de interfaces, funcionalidad y aspectos de seguridad. Estos requerimientos técnicos deben estar plenamente definidos y el #[em software] realizará las funciones que el usuario desea, aunque siempre será difícil establecer el alcance, la duración y el costo del proyecto.

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-12.col-lg-5.mb-2.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/tema1-2.svg', alt='')
      .col-12.col-lg-7
        p Se debe tener en cuenta que el análisis de la documentación específica comprende la gestión de requerimiento; este análisis se efectúa con dos propósitos, de un lado, que los usuarios definan lo que desean y del otro, que los desarrolladores identifiquen aquello que van a trabajar.
        p.mb-4 Entonces, ¿cómo se puede entender un conjunto de requerimientos?
        .cajon.color-secundario.p-4.mb-4
          p.mb-0 Un conjunto de requerimientos hace referencia a un conjunto sistemático de técnicas, es decir, algo que es bien conocido y aplicado de manera sistemática; sin embargo, esta gestión depende de la entrevista con el cliente o usuario.
        p Es posible mencionar que el origen del problema para definir los requerimientos, parte de la información oculta en la entrevista con el cliente o usuario, en la que, debido a cualquier razón, este ignora una parte de las necesidades, generando retrasos y reestructuración de los requerimientos, induciendo la no satisfacción del programa al usuario. #[b Por esto es importante el análisis, la documentación y la especificación de los requerimientos.]

    p.mb-5(data-aos="flip-left") En este sentido, es necesario saber cómo se pueden generar estos requerimientos:

    TabsA.color-acento-botones.mb-4(data-aos="zoom-down-right")
      .tarjeta.tarjeta--azul.p-4(titulo="Requerimientos del sistema")
        h4 Requerimientos del sistema
        p Son especificaciones detalladas que describen las características, funciones y restricciones que un sistema de #[em software] o #[em hardware] debe cumplir, para satisfacer las necesidades y expectativas de los usuarios y las partes interesadas.
      .tarjeta.tarjeta--azul.p-4(titulo="Requerimientos del #[em software]")
        h4 Requerimientos del #[em software]
        p Son las especificaciones, condiciones y restricciones detalladas que definen cómo debe funcionar y comportarse un programa de #[em software]. Estos requerimientos se utilizan como base para el diseño, desarrollo, pruebas y mantenimiento del #[em software].
      .tarjeta.tarjeta--azul.p-4(titulo="Requerimiento de dominio")
        h4 Requerimiento de dominio
        p Son especificaciones que se derivan de las características únicas y las regulaciones específicas de un campo o industria en particular. Estos requerimientos reflejan los conocimientos y las prácticas típicas de ese dominio y están diseñados para asegurar que el #[em software] sea adecuado y cumpla con las necesidades y restricciones del sector específico.
        
    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Gestión de requerimientos del sistema
      div.titulo-herramientas.d-block.d-md-none Gestión de requerimientos del sistema

    p.mb-3(data-aos="flip-left") Este tipo de requerimiento establece las funcionalidades del sistema, en cuanto a procesos, consultas, alarmas, reportes, interfaces, seguridad y demás elementos que la organización requiera, de tal forma que, si no hay una identificación plena, el #[em software] no proporcionará al usuario la funcionalidad esperada. Además, es importante conocer la información completa y necesaria para estimar un aproximado del alcance real del proyecto. 
    p.mb-3(data-aos="flip-left") La gestión de requerimientos del sistema implica la colaboración entre diferentes equipos y partes interesadas, como analistas de negocios, desarrolladores, #[em testers] y usuarios finales, para garantizar que el sistema entregue el valor esperado y cumpla con los objetivos estratégicos de las organizaciones. Además, esta gestión ayuda a controlar los cambios en los requerimientos a lo largo del ciclo de vida del sistema y a garantizar que cualquier modificación se realice de manera controlada y se evalúe su impacto en los procesos ya establecidos como herramienta en el entorno empresarial.
    p.mb-5(data-aos="flip-left") La clasificación de requerimientos del sistema para un #[em software] empresarial es la siguiente:
    
    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b De acuerdo con su funcionalidad]

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Clasificación de requerimientos de acuerdo a su funcionalidad</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-2a.svg', alt='La figura 2, la clasificación  de los requerimientos se clasifica de acuerdo a si estos son funcionales o no funcionales.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-2b.svg', alt='La figura 2, la clasificación  de los requerimientos se clasifica de acuerdo a si estos son funcionales o no funcionales.') 

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Gestión de requerimientos del #[em software]]

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-1.col-md-2.col-10.mb-2.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema1/tema1-3.svg', alt='')
      .col-lg-11.col-md-10.col-12
        p Los requerimientos del #[em software] son las especificaciones detalladas que describen las características y el comportamiento que un programa de #[em software] debe tener para cumplir con los objetivos y las necesidades del usuario y las partes interesadas. Estos requerimientos son esenciales para el diseño, desarrollo, pruebas y mantenimiento del #[em software].

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Gestión de requerimientos del dominio]

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-1.col-md-2.col-10.mb-2.mb-md-0
        figure
          img(src='@/assets/curso/temas/tema1/tema1-4.svg', alt='')
      .col-lg-11.col-md-10.col-12
        p Los requerimientos de dominio son un tipo especializado de requerimientos en el desarrollo de #[em software] que se centran en las necesidades específicas y las restricciones derivadas del campo o industria para la cual se está desarrollando el #[em software]. Estos requerimientos son exclusivos de un dominio particular y no se aplican necesariamente a otros contextos.

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b De acuerdo con su nivel de cumplimiento]

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-11.col-lg-10
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Obligatorios") 
            p Se vinculan con aspectos legales, entre los que se mencionan las liquidaciones, las retenciones o el cumplimiento ante las autoridades.
          div(numero="2" titulo="Recomendables") 
            p En este nivel se incluyen aquellos requerimientos que mejorarían el sistema, aunque no son obligatorios.
          div(numero="3" titulo="Opcionales") 
            p En este nivel se incorporan aquellos que podrían ofrecer al sistema alguna mejora, aunque no es necesario que se contemplen desde el inicio.
          div(numero="4" titulo="Valor") 
            p Estos requerimientos aportan valor al negocio y se deben analizar para determinar los de mayor prioridad.

    p.mb-5(data-aos="flip-left") Es esencial tener en cuenta que las responsabilidades son exclusivas de los usuarios finales, clientes o de la empresa que sugirió la necesidad del sistema. En este sentido, esta responsabilidad radica en la importancia de enseñar a los usuarios a solicitar de manera correcta los requerimientos del sistema, para que el implementador logre transmitir estas necesidades al desarrollador y así se logre ejecutar las soluciones correctas del sistema.

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Catálogo de servicios de TI]

    p.mb-4(data-aos="flip-left") Para continuar con la comprensión de la gestión de requerimientos tecnológicos conozca qué es un catálogo de servicios y también identifique las palabras clave de esta definición:

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-secundario
          p.mb-0 Un #[b catálogo de servicios] es el factor que permite gestionar las solicitudes de un #[b servicio] de manera eficiente.

    p.mb-4(data-aos="flip-left") En esta definición existe una palabra clave; #[b servicio], que se entiende como una descripción de valor, término que es propio de las organizaciones, entonces, cuando se hace un catálogo de servicios se busca un valor, el cual se determina desde dos aspectos fundamentales: la utilidad y la garantía.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Características del catálogo de servicios</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-3a.svg', alt='Las características del catálogo de servicios, corresponde con la capacidad y valor que ofrece un servicio, denominado utilidad, así como al compromiso del vendedor al entregar su producto.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-3b.svg', alt='Las características del catálogo de servicios, corresponde con la capacidad y valor que ofrece un servicio, denominado utilidad, así como al compromiso del vendedor al entregar su producto.') 

    p.mb-3(data-aos="flip-left") Cuando se logra definir un #[b servicio] dentro de la organización se debe describir la #[b utilidad], la #[b garantía] y los #[b atributos] del servicio, que son los que realmente generan #[b valor]. Estos atributos se refieren a #[b las preferencias de los clientes], los cuales pueden ser internos y externos. 
    p.mb-4(data-aos="flip-left") Es importante siempre filtrar las preferencias o necesidades del cliente para empezar a tratar todas las garantías y utilidades:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Catálogo de servicios</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-4a.svg', alt='El catálogo de servicios, permite filtrar las necesidades del cliente, y de esta forma generar mayor utilidad y brindar una mejor garantía del producto.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-4b.svg', alt='El catálogo de servicios, permite filtrar las necesidades del cliente, y de esta forma generar mayor utilidad y brindar una mejor garantía del producto.') 

    p.mb-3(data-aos="flip-left") La diferenciación del valor se proyecta desde la mente del cliente, quien genera las expectativas del servicio, que será aquello que se debe tratar de cumplir mediante esa experiencia del servicio, es decir, en el diario vivir con el uso del servicio, que debe ser confiable.
    p.mb-4(data-aos="flip-left") Entonces, según #[em ManageEngine] (s.f.) el flujo de trabajo que se puede ocasionar contempla las siguientes actividades:

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade-right")
      .col-lg-10.col-12
        PasosA.color-acento-contenido(tipo="n")
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-7.mb-4.mb-md-0
              h4 Inicio de sesión
              p El usuario final inicia sesión en el portal de autoservicio, para lo cual el catálogo de servicios se encuentra disponible, ofreciendo un listado de ofertas. 
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
            .col-md-7.text-start
              h4 Solicitud
              p El usuario realiza la solicitud de servicio, después de navegar por el catálogo, en el que conoce los atributos de estos servicios: descripción, costos, SLA, etc., y completa un formulario en la Web.
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-7.mb-4.mb-md-0
              h4 Equipo de soporte
              p El usuario envía la solicitud a soporte y este es uno de los procesos en el flujo de trabajo, es parte de la vista de servicios técnicos del catálogo y es una guía de los técnicos para el desarrollo del mismo.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')
            .col-md-7.text-start
              h4 Aprobación
              p Los mecanismos de aprobación entran en acción. Este es también un paso del flujo de trabajo que debe ser tenido en cuenta por los técnicos para prestar el servicio de manera eficiente.
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-7.mb-4.mb-md-0
              h4 Información
              p El representante de soporte puede solicitar más información al solicitante, y esto también es parte del flujo de trabajo para prestar los servicios eficientemente.
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-5.mb-4.mb-md-0
              figure
                img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')
            .col-md-7.text-start
              h4 Tareas predefinidas
              p Se realizan las tareas predefinidas para el cumplimiento del servicio, como parte del flujo de trabajo de servicio técnico que guía a los encargados a prestar un servicio efectivo.
          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-md-7.mb-4.mb-md-0
              h4 Cierre del #[em ticket]
              p Al cumplir la solicitud se cierra el #[em ticket] y se envía una encuesta para evaluar la satisfacción del cliente. Estos datos sirven para evaluar las ofertas de servicios en el catálogo y para la mejora continua (CSI).
            .col-md-5
              figure
                img(src='@/assets/curso/temas/tema1/tema1-11.png', alt='')

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Objetivo del catálogo de servicios]

    p.mb-4(data-aos="flip-left") A partir de la información ya estudiada se puede concluir que los objetivos del catálogo de servicios son:

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-12.col-lg-10.col-md-11.mb-3(data-aos="fade-down")
        ul.lista-ul.mb-2.mb-0
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Proveer la única fuente de información consistente, de acuerdo con todos los servicios concertados y autorizar el acceso para algunos usuarios.
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Asegurar que el catálogo que se crea contenga la información precisa, respecto a los demás servicios operativos.

      .col-12.col-lg-10.mb-2(data-aos="fade-down")
        p Con el fin de lograr una mayor comprensión sobre el catálogo de servicio analice el siguiente ejemplo en un restaurante:
      .col-12.col-lg-10(data-aos="fade-down")
        .row.align-items-center.justify-content-center
            .col-lg-5.col-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-12.png', alt='')
            .col-lg-7.col-12
              p Para comenzar tenga en cuenta que el catálogo de servicios no se refiere solamente al menú, es decir, a lo que se puede pedir, porque esto es algo accionable en el catálogo de servicios. 
              p La #[b propuesta real de valor] que se genera son todas las características del restaurante: la ubicación, las áreas de parqueo, de juegos o la seguridad, entre otros servicios.
              p Por lo tanto, es necesario identificar los servicios, documentarlos, mantenerlos actualizados y asegurarse que el catálogo de servicios está tomando la información de todos los procesos, los proveedores, los recursos físicos, humanos, etc. 

    p.mb-4(data-aos="flip-left") En este sentido, es necesario que se familiarice con los siguientes conceptos:
    
    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-down-right")
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1a.svg' alt='')
        h4 Acuerdo nivel de servicio
        p #[em SLA] (por sus siglas en inglés, #[em Service Level Agreement]) se refiere al acuerdo en el que se detallará para cada servicio y cliente las condiciones de prestación, según sus necesidades. 
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1b.svg' alt='')
        h4 Acuerdo de nivel operacional
        p #[em OLA] (por sus siglas en inglés, #[em Operational Level Agreement]) es un acuerdo entre las áreas internas de la organización. Especifican procesos técnicos en términos entendibles por la empresa y el cliente.
      .tarjeta.color-secundario.p-4
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1c.svg' alt='')
        h4 Acuerdo de requisitos del servicio
        p #[em SLR] (por sus siglas en inglés, #[em Service Level Requirements]) documento con las requisiciones de servicio del cliente; determina los niveles de servicios propuestos, las responsabilidades mutuas y otros requisitos específicos de los clientes.
      .tarjeta.color-secundario.p-4 
        .row.justify-content-center.mb-3
          .col-8.col-lg-6
            img(src='@/assets/curso/temas/tema1/carrucel-1d.svg' alt='')
        h4 Contrato de apoyo
        p #[em UC] (por sus siglas en inglés, #[em Underpinning Contract]) se refiere a un contrato formal entre un proveedor de servicios TI y un proveedor externo de servicio de soporte.

    p.mb-4(data-aos="flip-left") Es necesario que además de los conceptos anteriores se revise también la diferencia entre #[b servicios y componentes], de nuevo se toma el ejemplo del restaurante, en este caso los servicios se refieren a las variedades de alimentos que se ofrecen como ensaladas, sopas, postres y platillos. De otro lado, los componentes son los ingredientes para estos platos, las verduras, las frutas, etc.

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-secundario
          p.mb-0 ITIL define el catálogo de servicios como una base de datos centralizada, que contiene información precisa y relacionada sobre la oferta de servicios de TI activas y la cartera de servicios del proveedor de TI.

    p.mb-3(data-aos="flip-left") Con esto se quiere decir que el catálogo de servicios es el mostrador en el cual el cliente final, sea interno o externo, solicita sus servicios y productos desde una mesa de servicios de TI, de acuerdo con la información que se proporciona desde un catálogo de servicios.
    p.mb-4(data-aos="flip-left") Entonces, ¿cuáles son los beneficios que se pueden obtener del catálogo de servicios?.

    .row.justify-content-center.mb-5(data-aos="zoom-in-down")
      .col-lg-10.position-relative
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/cn_1.svg", alt="").img100
            .col
              h5 Agilidad
              p Agiliza la comunicación con los usuarios finales, donde el cliente identifica el servicio, el producto y el valor.
        .crd.crd--avatarHorizontal.crd--othersA.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/cn_2.svg", alt="").img100
            .col
              h5 Estandarización
              p Estandariza la prestación de servicios de la organización, proporcionando la lista de servicios y parámetros de entrega.
        .crd.crd--avatarHorizontal.crd--othersB.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/cn_3.svg", alt="").img100
            .col
              h5 Optimización
              p Optimiza los costos de entrega del servicio, controlando las ofertas.
        .crd.crd--avatarHorizontal.crd--othersA.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/cn_4.svg", alt="").img100
            .col
              h5 Rendimiento
              p Aumenta las funciones de autoservicio, utilizando portales de servicio y gestionando incidentes.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/cn_5.svg", alt="").img100
            .col
              h5 Contribución
              p Contribuye a la mejora continua del servicio.

    p.mb-5(data-aos="flip-left") Para construir el catálogo de servicios se requiere también tener en cuenta los siguientes pasos:

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-2.col-10.col-md-3
        figure
          img(src="@/assets/curso/temas/tema1/tema1-13.svg", alt="")
      .col-lg-7.col-12.col-md-9
        ol.lista-ol.mb-2.ms-3
          li 
            span.text-bold 1. 
            | Estudiar los objetivos empresariales.
          li 
            span.text-bold 2. 
            | Definir y clasificar las ofertas de servicios.
          li 
            span.text-bold 3. 
            | Crear flujos de trabajo y acuerdos de nivel de servicios SLA específicos.
          li 
            span.text-bold 4. 
            | Organizar su estrategia de cumplimiento del servicio.
          li 
            span.text-bold 5. 
            | Diseñar el catálogo.
          li 
            span.text-bold 6. 
            | Publicar el catálogo de servicios e integrarlo a un portal de servicios.
          li 
            span.text-bold 7. 
            | Poner en práctica la mejora continua.

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Niveles de servicio SLA ISO 20000]

    p.mb-3(data-aos="flip-left") Los sistemas necesitan la supervisión constante de los profesionales expertos, para mantener actualizados y en funcionamiento sus operaciones. Las consecuencias de no proporcionar los servicios tecnológicos que se necesitan son un gran problema, en cuanto a eficiencia oportuna en las respuestas y agilidad de los procesos y servicios tecnológicos.
    p.mb-5(data-aos="flip-left") La Organización Internacional de Estandarización (ISO) en referencia con las Normas ISO/IEC 20000, define una implementación efectiva y estructurada para desarrollar los servicios tecnológicos de información que se referencian con la gestión de servicios de TI.

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-5.col-10.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema1/tema1-14.png", alt="")
      .col-lg-6.col-12
        .cajon.tarjeta--azul.p-4
          p #[b La Norma ISO 20000 consta de:]
          ul.lista-ul.mb-2.ms-3
            li.mb-1
              i.fas.fa-circle.fa-cfx
              | Trece procesos definidos.
            li.mb-1
              i.fas.fa-circle.fa-cfx
              | Un proceso de planificación e implementación de servicios.
            li.mb-1
              i.fas.fa-circle.fa-cfx
              | Requisitos del sistema de gestión.
            li.mb-1
              i.fas.fa-circle.fa-cfx
              | Ciclo de mejora continua (PDCA).

    p.mb-5(data-aos="flip-left") Para la entrega de servicios SLA se debe establecer el proceso de gestión del nivel de servicios, que son las actividades que se relacionan también con el catálogo de servicios, el establecimiento de SLA para cada servicio, el monitoreo de los niveles de servicio, los informes de los resultados y la revisión de los niveles de servicios.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Análisis de requerimientos de #[em software]
    
    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-12.col-lg-4.mb-2.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema1/tema1-15.png', alt='')
      .col-12.col-lg-8
        p Son las condiciones o capacidades que deben tener los sistemas, productos o servicios para lograr satisfacer un contrato, estándar o algunas otras especificaciones o documentos que se hayan establecido formalmente. 
        p.mb-4 Los requerimientos no indican el diseño que debe tener el producto, sino las funciones y los contenidos que se espera que tenga y la manera en la que los usuarios interactuarán con este. Del mismo modo, los requerimientos varían con el tiempo, puesto que con la puesta en marcha del producto se podrán expresar nuevos requerimientos, diferentes o complementarios a los iniciales.
        .cajon.color-primario.p-4.mb-4
          p.mb-0 Los requerimientos son las condiciones o capacidades que debe conservar un sistema, un producto, un servicio o un componente para satisfacer las necesidades mediante un contrato, cumpliendo con estándares, especificaciones y demás documentos de manera formal. 
    
    p.mb-3(data-aos="flip-right") Una vez finalizado los procesos anteriores, se puede analizar las #[b características que deben tener los requerimientos], en este sentido, se indica que según el tipo de necesidad será el analista del negocio, quien decida cuál será el detalle exigido para cada nivel; aunque en algunos casos se recomienda que se realicen la mayor cantidad de especificaciones, con el fin de lograr mayor precisión en algunos requerimientos teniendo en cuenta el nivel de las necesidades.
    p.mb-5(data-aos="flip-right") Entonces, ¿cuáles son los criterios o características que se deben considerar al establecer los requerimientos?

    .row.justify-content-center.mb-4(data-aos="fade-right")
      .col-12.col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta color-primario")
          .row(titulo="Verificable y único")
            .col-12
              p El requisito debe tener una implementación precisa y comprobada, además debe ser interpretado de manera exclusiva.
          .row(titulo="Claro y viable")
            .col-12
              p Los requerimientos deben ser precisos. El objetivo es que sea trazable, según las restricciones de tiempo, dinero, recursos y demás.
          .row(titulo="Necesario e independiente")
            .col-12
              p El requisito debe ser muy importante y se debe comprender sin necesidad de relacionarse o que dependa de otro.
          .row(titulo="Consistente, redundante y completo")
            .col-12
              p No se deben presentar conflictos entre los requerimientos. Asimismo, debe ser formulado una sola vez y debe ser específico y total.

    p.mb-5(data-aos="flip-right") En la siguiente figura se presenta la estructura de los requerimientos que se pueden dividir según su origen y características, situando las necesidades de los #[em stakeholders]: 

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-0 #[em Stakeholders]: son partes interesadas o actores involucrados, individuos, grupos o entidades que tienen un interés, influencia o participación en un proyecto, una organización o una iniciativa.

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 5. </b> <i>División de requisitos según su origen y características</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-5a.svg', alt='En la figura se observa la estructura piramidal, de arriba hacia abajo: Necesidades: Solicitud del interesado. Características: Servicio proporcionado por el sistema. Casos de uso: Descripción de los comportamientos o acciones en el sistema. Escenarios: Se relacionan con las secuencias de las acciones o rutas a través de un caso de uso. Casos de prueba: Especificaciones de cada una de las entradas necesarias para la prueba, la condición de su ejecución con el resultado esperado, verificando si los requisitos complementarios se aplican correctamente.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-5b.svg', alt='En la figura se observa la estructura piramidal, de arriba hacia abajo: Necesidades: Solicitud del interesado. Características: Servicio proporcionado por el sistema. Casos de uso: Descripción de los comportamientos o acciones en el sistema. Escenarios: Se relacionan con las secuencias de las acciones o rutas a través de un caso de uso. Casos de prueba: Especificaciones de cada una de las entradas necesarias para la prueba, la condición de su ejecución con el resultado esperado, verificando si los requisitos complementarios se aplican correctamente.') 

    p.mb-5(data-aos="flip-right") Asímismo, es fundamental retomar el concepto de requerimientos de #[em software] y conocer cuáles son sus tipos:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-md-11.col-lg-10
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Requerimientos, capacidades, satisfacer las necesidades") 
            .col-lg-7.col-12
              p Como se sabe los requerimientos de #[em software] se refieren a las condiciones o capacidades que debe conservar un sistema, un producto, un servicio o un componente para satisfacer las necesidades.
              p Pero también pueden entenderse como las capacidades necesarias para que un cliente o usuario solucione un problema o un objetivo ya preestablecido.
            .col-lg-5.col-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-16.png', alt='')
          .row(numero="2" titulo="Restricciones impuestas, objetivos de un proyecto, estándares") 
            .col-lg-7.col-12
              p Se pueden relacionar los requisitos como restricciones impuestas a un usuario por algunos interesados, según los objetivos precisos de un proyecto.
              p Una vez se realiza un contrato entre las partes interesadas es esencial cumplir con los estándares, las especificaciones y otros documentos que se necesiten para formalizar el acuerdo.
            .col-lg-5.col-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-17.png', alt='')
          .row(numero="3" titulo="Presencia de problemas, especificaciones inexactas") 
            .col-lg-7.col-12
              p Es importante también tener en cuenta que se pueden presentar algunos problemas cuando las especificaciones de los requisitos son inexactas o incoherentes.
              p Y puede ser que el analista de los requerimientos del sistema haga suposiciones como conocimientos universales, que puede llevar a un riesgo mayor para el sistema.
            .col-lg-5.col-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-18.png', alt='')
          .row(numero="4" titulo="Funciones comunes, experiencias de usuario") 
            .col-lg-7.col-12
              p Estos problemas se pueden encontrar en las funciones comunes relacionadas con las experiencias de usuario.
              p Pero es el analista el responsable de la documentación y deberá tratar de asegurarse de evitar lagunas de comprensión.
            .col-lg-5.col-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-19.png', alt='')
          .row(numero="5" titulo="Historia de usuarios, requisitos, objetivos, implementación") 
            .col-lg-7.col-12
              p Para ello, es importantes tener en cuenta las historias de usuario, asegurándose de que todo el equipo esté sincronizado respecto a los requisitos, sus objetivos y su implementación. 
              p De acuerdo con lo que se ha mencionado, se podría decir que existen dos tipos de requerimientos: los funcionales y los no funcionales.
            .col-lg-5.col-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-20.png', alt='')
          .row(numero="6" titulo="Requerimientos funcionales") 
            .col-lg-7.col-12
              p Por un lado, se hablará de los requerimientos funcionales, que se refieren a las funciones que actúan directamente con los usuarios.
              p Ejemplos de requerimientos funcionales incluyen "el sistema debe permitir a los usuarios iniciar sesión" o "el sistema debe calcular el total de la factura correctamente".
            .col-lg-5.col-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-21.png', alt='')
          .row(numero="7" titulo="Requerimiento no funcional") 
            .col-lg-7.col-12
              p De otro lado, se encuentra el tipo requerimiento no funcional, que se refiere a los requerimientos que no interfieren con las funciones específicas del sistema. 
              p Es esencial asegurar la fiabilidad, los tiempos de respuesta y las capacidades de almacenamiento.
            .col-lg-5.col-10
              figure
                img(src='@/assets/curso/temas/tema1/tema1-22.png', alt='')





</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>

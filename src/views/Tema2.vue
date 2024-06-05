<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requerimientos tecnológicos en el marco de la arquitectura empresarial y del gobierno de riesgo y cumplimiento
    
    .row.justify-content-center.mb-5(data-aos="fade-down-left")  
      .col-12(data-aos="zoom-out-down")
        .cajon-b.color-primario.px-0.py-2
          p Para lograr asimilar la normatividad relacionada con la arquitectura empresarial se deben conocer los lineamientos necesarios en las guías, modelos, artefactos y manuales que encaminen la integración de una buena AE para la institución o entidad. El Ministerio de las Tecnologías de la Información y las Comunicaciones- MinTic, pone a disposición una serie de documentos para apoyar dichos procesos.
      .col-12(data-aos="zoom-out-down")
        p.mb-3 De igual modo, hay que tener en cuenta que la entidad que desee alinearse de manera integral con la AE, debe apoyarse en un profesional experto en la materia para implementar de buena manera cada uno de los #[em ítems] que pide la norma. Estos profesionales que se dedican a la implementación de AE son los llamados #[em arquitectos de TI.] 
        p.mb-3 Existe algunas fases para el desarrollo de la AE en una organización, estas se consisten en un proceso iterativo donde en cada ejercicio se realizan las fases 2 y 3 del gobierno, utilizando la estrategia del uso y la aplicación de la AE. 
        p.mb-3 Es necesario mencionar que antes de iniciar una aplicación del ejercicio de AE, la organización debe tener definida la estrategia del Plan Estratégico de Tecnologías de la Información (PETI). De igual modo, dependiendo de los distintos sectores empresariales y de la interpretación o diagnóstico de las necesidades tecnológicas que presente se hará el proceso de evaluación del PETI.
        p.mb-3 Se revisa a continuación, los aspectos fundamentales del Plan Estratégico de Tecnologías de la Información (PETI):

    .row.justify-content-center.mb-5(data-aos="fade-down-left")  
      .col-12.col-lg-11
        ImagenInfografica.color-acento-botones.d-none.d-md-block.mb-5(data-aos="fade-down")
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/info-1a.svg', alt='')
          .tarjeta.color-primario.p-3(x="25%" y="15%" numero="+")
            p #[b Analizar]
            ul.lista-ul.ms-3
              li.mb-1
                i.lista-ul__vineta
                | Análisis de factores internos y externos y de la normativa vigente.
              li.mb-1
                i.lista-ul__vineta
                | De la caracterización de los usuarios.
              li.mb-1
                i.lista-ul__vineta
                | Evaluación de las tendencias tecnológicas de cuarta revolución.
              li.mb-1
                i.lista-ul__vineta
                | Consolidación de todos los hallazgos.
          .tarjeta.color-primario.p-3(x="72%" y="18%" numero="+")
            p #[b Comprender]
            ul.lista-ul.ms-3
              li.mb-1
                i.lista-ul__vineta
                | Involucrar a los participantes.
              li.mb-1
                i.lista-ul__vineta
                | Entender la estrategia.
              li.mb-1
                i.lista-ul__vineta
                | Identificar los servicios.
              li.mb-1
                i.lista-ul__vineta
                | Identificar las capacidades.
          .tarjeta.color-primario.p-3(x="25%" y="73%" numero="+")
            p #[b Presentar]
            ul.lista-ul.ms-3
              li.mb-1
                i.lista-ul__vineta
                | Se define el esquema de seguimiento. 
              li.mb-1
                i.lista-ul__vineta
                | Se determina la aprobación y publicación del documento PETI.
              li.mb-1
                i.lista-ul__vineta
                | Se verifican las versiones del documento.
          .tarjeta.color-primario.p-3(x="78%" y="71%" numero="+")
            p #[b Construir]
            ul.lista-ul.ms-3
              li.mb-1
                i.lista-ul__vineta
                | Con los insumos anteriores se definen las estrategias de TI.
              li.mb-1
                i.lista-ul__vineta
                | Análisis de los gastos.
              li.mb-1
                i.lista-ul__vineta
                | Cumplimiento de la política de gobierno digital.
              li.mb-1
                i.lista-ul__vineta
                | Comunicaciones con los interesados.
              li.mb-1
                i.lista-ul__vineta
                | Construir la hoja de ruta.
        .d-block.d-md-none.mb-5 
          figure
            img(src='@/assets/curso/temas/tema2/info-1b.svg', alt='')

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Fase 1. Definición de la estrategia para la realización de la AE
      div.titulo-herramientas.d-block.d-md-none Fase 1. Definición de la estrategia para la realización de la AE

    p.mb-5(data-aos="flip-left") En esta fase se deben realizar varias actividades, a partir de la presentación actual de la AE en la organización o su diagnóstico y objetivo, como también, alcanzar las metas que definen una AE integral y ajustada. Este ejercicio debe estar liderado por el área de planeación de la entidad, la dirección de sistemas y TI. La oficina de TI realizará el levantamiento de los interesados #[em (stakeholders)], las necesidades, las preocupaciones, los procesos de la institución, la información tecnológica, los sistemas y los servicios de información, los objetivos estratégicos del sector y otros elementos que aporten a la integración tecnológica de la organización. 

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-0 La estrategia en el proceso de AE es la revisión periódica de las condiciones institucionales, ya que varían en cuanto a cambios en la normatividad, estrategias institucionales, entornos, modelos operativos, entre otros.

    p.mb-4(data-aos="flip-left") Las actividades a tener en cuenta en esta fase son las siguientes:

    .row.justify-content-center.mb-2(data-aos="fade-left")
      .col-12.mb-2(data-aos="fade-down")
        ul.lista-ul.ms-3
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Identificar a los interesados claves. Lograr definir sus necesidades relacionadas con los objetivos estratégicos y metas de la institución.
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Analizar las necesidades e intereses actuales de la institución.
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Verificar la alineación de las necesidades planteadas con la estrategia institucional.
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Documentar los recursos institucionales para desarrollar un ejercicio de AE, para lo cual se deberá evaluar lo siguiente:

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-lg-4.col-10.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/tema2-1.png", alt="")
      .col-lg-8.col-12
        ul.lista-ul.mb-2.ms-2
          li.mb-1
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Las competencias del personal en planeación.
          li.mb-1
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | El conocimiento de la institución o del sector.
          li.mb-1
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Los procesos deben estar documentados en el sistema de gestión de calidad de la institución.
          li.mb-1
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Realizar la descripción de la visión que se pretende con la AE.
          li.mb-1
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Describir los principios de la arquitectura que rigen los ejercicios de la AE en la entidad.
          li.mb-1
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Verificar el repositorio de la AE, y las herramientas para gestionar y documentar.
          li.mb-1
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Verificar la infraestructura tecnológica.
          li.mb-1
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Realizar alianzas y convenios que contribuyan a desarrollar la AE.

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12(data-aos="fade-down")
        ul.lista-ul.ms-3
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Definir la estrategia para realizar el proceso de AE, teniendo en cuenta la priorización de las necesidades, la planeación de los ejercicios de AE y los recursos necesarios para cada ejercicio de AE, estado actual, interesados y patrocinadores.
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            |Definir un esquema de gobierno de un proceso de AE, el esquema de gestión de proyectos de los ejercicios de AE y una estrategia para el uso y aprobación de la AE.

    p.mb-4(data-aos="flip-left") El entregable de esta etapa es la estrategia para realizar el proceso de AE.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Fase 2. Definición del proceso de AE
      div.titulo-herramientas.d-block.d-md-none Fase 2. Definición del proceso de AE

    p.mb-3(data-aos="flip-left") Luego de haber realizado el diagnóstico previo de la institución, del sector y de priorizar los ejercicios de AE, en esta fase se realiza la planeación detallada del proceso, en la que se deben definir los atributos y hacer una descripción de los mismos. Los pormenores del verificable de esta fase se encuentran en la guía general de un proceso de arquitectura empresarial.
    p.mb-5(data-aos="flip-left") El entregable de esta etapa es la planeación del ejercicio de AE.

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-1 #[b Entregables de la fase 1 y fase 2]
          p.mb-0 Para conocer los requisitos mínimos establecidos para realizar estos documentos de las fases 1 y 2 consulte material complementario de este componente formativo.

    .h4.py-4.mb-4(data-aos="zoom-down-right")
      span.titulo-herramientas.d-none.d-sm-none.d-md-inline-flex Fase 3. Ejecución del proceso de AE
      div.titulo-herramientas.d-block.d-md-none Fase 3. Ejecución del proceso de AE

    p.mb-5(data-aos="flip-left") Después de definir y planear las estrategias en las fases anteriores, la institución debe continuar con el desarrollo del proceso de AE. En la siguiente figura se muestran los pasos o etapas que componen esta fase para el completo desarrollo del proceso de AE:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 6. </b> <i>Pasos o etapas de la ejecución del proceso de AE</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/fig-6a.svg', alt='En la figura se observa en secuencia, arquitectura actual, arquitectura objetivo, análisis de brecha, mapa de ruta, evaluación del ejercicio.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-6b.svg', alt='En la figura se observa en secuencia, arquitectura actual, arquitectura objetivo, análisis de brecha, mapa de ruta, evaluación del ejercicio.') 

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Etapa 1. Definición de la arquitectura empresarial actual (AS - IS)]

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-lg-4.col-10.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/tema2-2.png", alt="")
      .col-lg-8.col-12
        p En esta etapa la institución realiza el proceso de diagnóstico, en la que se hace el levantamiento y la documentación de la AE del momento.  La AE actual de la institución debe comprender la arquitectura misional (de negocio) y la arquitectura de TI de la que hacen parte la estrategia de TI, el gobierno de TI, la información, los sistemas de información, los servicios tecnológicos, el uso y la apropiación. Además, se debe tener en cuenta que el marco de referencia de AE para la gestión de TI no detalla aspectos de la arquitectura misional o de negocio, tampoco corresponde a un marco metodológico y la organización se puede apoyar en mejores prácticas como #[em TOGAF, ZACHMAN, ORACLE, FEAF], entre otros.

    p.mb-3(data-aos="flip-left") Los elementos mínimos a considerar para el levantamiento de la información, que ayuden a determinar las necesidades, teniendo en cuenta el dominio, los ámbitos e información solicitada establecidos en el marco de referencia de AE  son direccionar  las actividades de levantamiento de la información y la construcción de la AE actual (AS - IS), las cuales pueden ser consultadas en la Guía general de un proceso de arquitectura empresarial del Ministerio de Tecnologías de la Información y Comunicaciones.
    p.mb-5(data-aos="flip-left") Particularmente en la actividad #[b Construcción de la AE actual (AS - IS)] se elabora la arquitectura actual, lo cual comprende la arquitectura misional (de negocio) y la arquitectura de TI. Se debe tener en cuenta la relación de todos los elementos documentados en la etapa anterior.

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-0 #[b Se debe tener en cuenta que el entregable de la actividad 2 de esta etapa, es la arquitectura empresarial actual.]

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Etapa 2. Elaboración de la arquitectura empresarial objetivo (TO - BE)]

    p.mb-5(data-aos="flip-left") La intención de esta etapa es diseñar una arquitectura empresarial objetivo viable. Debe estar relacionada con los objetivos estratégicos de la institución, del sector y encontrar nuevas tecnologías que se puedan relacionar a ese plan estratégico. Las actividades de esta fase consisten en definir los artefactos o productos de la AE objetivo, construir la AE objetivo y documentarla con las guías específicas solicitadas dentro del marco de referencia de AE, además de actualizar el repositorio de la AE.

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-0 #[b El entregable de la etapa 2 es la arquitectura empresarial objetivo (TO-BE).]

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Etapa 3. Análisis de brecha]

    p.mb-3(data-aos="flip-left") Esta fase se orienta a determinar y documentar los vacíos que se encuentren entre AE Actual (AS - IS) y AE objetivo (TO-BE), para lograr integrar de mejor manera las iniciativas de los nuevos proyectos que se puedan incluir.
    p.mb-3(data-aos="flip-left") Las actividades que se incluyen en esta fase se orientan a identificar las capacidades de la institución en cuanto AE objetivo (TO-BE) y a realizar el análisis de las brechas entre las AE actual (AS - IS) y AE objetivo (TO-BE).
    p.mb-5(data-aos="flip-left") Para este efecto se propone construir para el análisis el siguiente documento:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 1. </b> <i>Herramienta para el análisis de brecha</i>
        figure
          img(src='@/assets/curso/temas/tema2/tabla-1.svg', alt='La tabla contiene en el eje vertical los elementos de la arquitectura o situación actual (AS-IS), entidad de negocio 1 a entidad de negocio 6, luego tiene nuevo y finaliza con ID brecha, en el eje horizontal estarán los elementos de la arquitectura o situación objetivo (TO-BE), incluyendo el campo eliminar y finaliza con ID brecha.')
          figcaption Nota. Tomado y adaptado de la Guía general de un proceso de arquitectura empresarial MinTIC (s.f.).

    p.mb-5(data-aos="flip-left") Es importante relacionar en los cuadros la situación actual de AE (AS-IS), junto con la situación objetivo (TO-BE).

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/ico-01.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3  Análisis de brechas
                  p Para mayor información sobre esta etapa consulte el video análisis de brechas, fortalecimiento empresarial que se encuentra en material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/GLaJ_4Hlb8w?si=o7o1G4cPh-WP-Wkk" target="_blank")
                    span Abrir video
                    i.fas.fa-file-video

    p.mb-4(data-aos="flip-left") Una vez se relaciona la información en la herramienta para el análisis de brecha, se realizarán los siguientes pasos:

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-10(data-aos="fade-down")
        ul.lista-ul.ms-3.ms-lg-0
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Documentar las brechas identificadas. Luego de relacionar la información pertinente en el cuadro anterior, se debe documentar las brechas identificadas de acuerdo con la información que se solicita, como se observa en la siguiente tabla.

    .row.justify-content-center.mb-4
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 2. </b> <i>Documentación de brechas</i>
        .tabla-a.color-primario.mb-4
          table
            caption Nota. Tomado y adaptado de la Guía general de un proceso de Arquitectura Empresarial MinTIC (s.f.).
            thead
              tr
                th ID Brecha 
                th Nombre 
                th Descripción 
                th Motivador (#[em Driver]) misional que soporta 
                th Prioridad 
            tbody
              tr
                td 
                td 
                td 
                td 
                td 
              tr
                td 
                td 
                td 
                td 
                td 
              tr
                td 
                td 
                td 
                td 
                td 

    p.mb-4(data-aos="flip-left") Para tener una idea sobre cómo se tramita, se puede revisar el siguiente ejemplo de un documento de brecha diligenciado: 

    .row.justify-content-center.mb-4
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 3. </b> <i>Documentación de brechas diligenciado</i>
        .tabla-a.color-primario.mb-4
          table
            thead
              tr
                th ID Brecha 
                th Nombre 
                th Descripción 
                th Motivador (#[em Driver]) misional que soporta 
                th Prioridad 
            tbody
              tr
                td.text-center B1
                td #[em Web service] entre sistemas de comisiones institucionales y sistemas de comisiones de presidencia.
                td Permite la integración, la interoperabilidad de los dos sistemas de información. Este debe incorporar el lenguaje común.
                td Automatización de los procesos institucionales para el fortalecimiento de las capacidades institucionales.
                td.text-center 5

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-10(data-aos="fade-down")
        ul.lista-ul.ms-3.ms-lg-0
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Luego se asocian los componentes de la AE objetivo con las brechas que se cierran en la implementación del componente. Se debe relacionar como se presenta en la siguiente tabla.

    .row.justify-content-center.mb-4
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 4. </b> <i>Documentación de componentes solución</i>
        .tabla-a.color-primario.mb-4
          table
            caption Nota. Tomado y adaptado de la Guía general de un proceso de arquitectura empresarial MinTIC (s.f.).
            thead
              tr
                th ID Componente 
                th Nombre 
                th Descripción 
                th Brechas asociadas 
            tbody
              tr
                td.text-center C1
                td 
                td 
                td 
              tr
                td.text-center C2
                td 
                td 
                td 

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-10(data-aos="fade-down")
        ul.lista-ul.ms-3.ms-lg-0
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Posteriormente, se estiman los esfuerzos, la duración y los recursos financieros para cada componente, lo cual se presenta en la siguiente tabla.

    .row.justify-content-center.mb-4
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 5. </b> <i>Estimación de recursos</i>
        .tabla-a.color-primario.mb-4
          table
            caption Nota. Tomado y adaptado de la Guía general de un proceso de arquitectura empresarial MinTIC (s.f.).  
            thead
              tr
                th ID Componente 
                th Esfuerzo (día/hombre) 
                th Duración (semanas) 
                th Costo (pesos)
            tbody
              tr
                td.text-center C1
                td 
                td 
                td 
              tr
                td.text-center C2
                td 
                td 
                td 

    .row.justify-content-center.mb-4(data-aos="fade-left")
      .col-12.col-lg-10(data-aos="fade-down")
        ul.lista-ul.ms-3.ms-lg-0
          li
            i.fas.fa-circle.fa-cfx(style="color:#304C8E")
            | Finalmente, se priorizan los componentes de solución a partir de los criterios institucionales, de acuerdo con la siguiente tabla.

    .row.justify-content-center.mb-4
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Tabla 6. </b> <i>Documentación de criterios de priorización</i>
        .tabla-a.color-primario.mb-4
          table
            caption Nota. Tomado y adaptado de la Guía general de un proceso de arquitectura empresarial MinTIC (s.f.).
            thead
              tr
                th ID Componente 
                th Criterio
                th Descripción
                th Criticidad
                th Riesgo
                th Peso
            tbody
              tr
                td 
                td 
                td 
                td 
                td 
                td 

    p.mb-3(data-aos="flip-left") Después de recolectar, diligenciar, asociar, priorizar y documentar toda la información pertinente con los productos y artefactos de AE, se debe estar actualizando estos repositorios frecuentemente debido a los cambios de información, administrativos o misionales de la institución, lo cual deberá estar a cargo de los líderes de arquitectura de TI.
    p.mb-4(data-aos="flip-left") Todos estos pasos anteriores se dejan reflejados en un documento #[b entregable, Análisis de brecha], en el que se relacionen las acciones, la priorización de los componentes y la documentación de las brechas.

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Etapa 4. Mapa de ruta] 

    p.mb-5(data-aos="flip-left") Conjunto estructurado de acciones que ayudan a definir la manera de alcanzar los objetivos en una estrategia de AE objetivo. Para la realización de este mapa se deben tener en cuenta las siguientes actividades:
    
    TabsB.color-acento-contenido.mb-5(data-aos="flip-down")
      .py-4.py-md-5(titulo="Analizar" :icono="require('@/assets/curso/temas/ico-a.svg')")
        .row
          .col-12.mb-2.mb-md-0
            h4 Analizar
            p Analizar los componentes de solución tanto para la arquitectura de negocio como para la arquitectura de TI.
      .py-4.py-md-5(titulo="Identificar" :icono="require('@/assets/curso/temas/ico-b.svg')")
        .row
          .col-12.mb-2.mb-md-0
            h4 Identificar
            p Identificar y agrupar componentes de solución asociados a la implementación de un proyecto.
      .py-4.py-md-5(titulo="Documentar" :icono="require('@/assets/curso/temas/ico-c.svg')")
        .row
          .col-12.mb-2.mb-md-0
            h4 Documentar
            p Documentar cada proyecto incluyendo la descripción, el alcance, las restricciones, los recursos técnicos y financieros, el talento humano, la relación de los proyectos y sus fases, la oferta de valor actualizada y el tiempo estimado.  
      .py-4.py-md-5(titulo="Definir" :icono="require('@/assets/curso/temas/ico-d.svg')")
        .row
          .col-12.mb-2.mb-md-0
            h4 Definir
            p Definir los tiempos de priorización de proyectos y priorizarlos de acuerdo con los criterios establecidos.
      .py-4.py-md-5(titulo="Elaborar" :icono="require('@/assets/curso/temas/ico-e.svg')")
        .row
          .col-12.mb-2.mb-md-0
            h4 Elaborar
            p Elaborar el mapa de AE institucional y actualizar el repositorio de AE.
        
    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-0 #[b El entregable de esta etapa es el mapa de ruta que materializará la transformación de la institución.]

    ul.lista-ul.mb-4(data-aos="fade-down")
      li
        i.fas.fa-atom(style="color: #60CB28")
        | #[b Etapa 5. Evaluación del ejercicio de AE] 

    p.mb-3(data-aos="flip-left") En esta etapa se comprenden las lecciones luego de haberlas realizado, de igual forma, es necesario que los interesados estén involucrados en todos los procesos. De esta manera se contribuye a la madurez de la institución en cuanto AE.
    p.mb-5(data-aos="flip-left") #[b El entregable de esta etapa es la evaluación de proyecto.]

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-0 Debe recordarse, que si se busca mayor profundidad en los pormenores de este proceso puede consultar la guía general de un proceso de arquitectura empresarial del Ministerio de Tecnologías de la Información y Comunicaciones (MinTIC).

    p.mb-5(data-aos="flip-left") Como se sabe, para realizar el proceso de un Programa de Gestión Documental PGD, es necesario establecer los siguientes pasos:

    .tarjeta.color-primario.mb-5.p-4(data-aos="fade-down")
      SlyderA(tipo="b")
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Planeación
            p En esta etapa se analizan e interpretan las necesidades, los objetivos empresariales, la misión y la visión. Se tiene en cuenta la estructura en la que se relaciona el organigrama con las funciones de cada unidad administrativa. Se revisa y valora la información documental, en sus contextos legal, técnico y funcional.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-3.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Producción
            p Se realiza una evaluación de los documentos de la empresa, desde la creación, trámite y disposición final. Igualmente, es importante la estructura, los soportes, los medios de tratamiento y la ejecución de tecnologías y estrategias.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-4.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Gestión y trámite
            p Se realiza el análisis exhaustivo de manera integral, prestando atención a la incidencia en los procesos internos y externos de la empresa. En esta parte se revisan a profundidad todos los trámites por los que pasan los documentos, facilitando el acceso y la consulta.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-5.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Organización
            p Es necesario establecer el orden y el almacenamiento documental basados en el ciclo vital del documento o archivo. Abarca las operaciones técnicas de gestión documental, en las que se revisa a fondo el documento desde las siguientes características:
            ul.lista-ul.ms-3
              li.mb-1
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Categoría.
              li.mb-1
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Serie documental.
              li.mb-1
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Valoración.
              li.mb-1
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Tiempo de almacenamiento.
              li.mb-1
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Área a la que pertenece.
              li.mb-1
                i.fas.fa-circle.fa-cfx(style="color:#304C8E")
                | Tipo de archivo que será designado.

          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-6.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Transferencia
            p Se refiere a la implementación de las políticas de transferencia de los documentos de una fase de archivo a otra, dependiendo del ciclo vital del documento o archivo, se tienen en cuenta los formatos, la migración, la estructura y la conservación.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-7.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Disposición de documentos
            p Se consideran los pasos de los procesos y la valoración de los documentos o archivos, relacionados con la conservación de las Tablas de Retención Documental (TRD).
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-8.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Preservación
            p Se identifican los procedimientos y los requerimientos que se deben realizar durante el proceso de gestión documental, garantizando la preservación a largo plazo.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-9.png', alt='')
        .row
          .col-md-5.col-12.mb-4.mb-md-0
            h4 Valoración
            p Se determinan los valores primarios y secundarios de los documentos. Estos valores ayudan a definir la importancia que definirá su conservación y disposición final.
          .col-md-7.col-12
            figure
              img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')

    p.mb-3(data-aos="flip-left") Cada uno de estos pasos impactan de buena manera los procesos de gestión documental para la organización, y mejoran las estrategias de la compañía.
    p.mb-4(data-aos="flip-left") Asimismo, es esencial tener presente que implementar un proceso de gestión documental en la organización, conlleva como beneficio la #[b automatización y optimización del manejo de los documentos y archivos]. Para realizar estos procesos de manera adecuada se necesita atención, cultura, tiempo y capacidad de la organización, además de las siguientes consideraciones:

    .row.align-items-center.justify-content-center.mb-4(data-aos="zoom-in-down") 
      .col-lg-10.col-12
        ul.lista-ul.ms-3
          li.mb-2
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | La alineación integral de la arquitectura empresarial requiere de un profesional experto en tecnología.
          li.mb-2
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Este profesional debe conocer la normatividad de AE que solicita el Ministerio de las Tecnologías de la Información y Comunicaciones (MinTIC).
          li.mb-2
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Antes de iniciar el ejercicio de AE, la organización debe tener establecido el Plan Estratégico de Tecnologías de la Información (PETI).

    p.mb-3(data-aos="flip-left") A partir de estas consideraciones se puede preguntar, ¿cómo el profesional de tecnología puede apoyar el proceso del PETI y definir las estrategias para la realización de la AE?
    p.mb-5(data-aos="flip-left") En lo referente al proceso del PETI, el profesional en tecnología debe realizar las siguientes actividades:

    TabsA.color-acento-botones.mb-4(data-aos="zoom-down-right")
      .tarjeta.tarjeta--azul.p-4(titulo="Comprender y relacionar")
        h4 Comprender y relacionar
        p Comprender y relacionar los pasos para la implementación del programa de gestión documental en la empresa, desde su parte documental hasta la sistematización de los elementos que la conforman. 
      .tarjeta.tarjeta--azul.p-4(titulo="Analizar")
        h4 Analizar
        p Analizar la estructura organizacional por medio del organigrama, en el que se identifican las unidades administrativas y sus funciones, así mismo, se caracteriza a los trabajadores en sus funciones documentales, se escuchan sus ideas, necesidades, que se evalúan y consolidan en un documento.
      .tarjeta.tarjeta--azul.p-4(titulo="Verificar")
        h4 Verificar
        p Verificar la normatividad relacionada con la gestión documental en la página del archivo general de la nación.
      .tarjeta.tarjeta--azul.p-4(titulo="Construir")
        h4 Construir
        p Construir la estrategia y mejoras de los servicios de TI en las oficinas, para ello debe analizar los gastos, con el fin de optimizar los recursos de acuerdo con lo recomendado y dar cumplimiento a las políticas de gobierno digital.
      .tarjeta.tarjeta--azul.p-4(titulo="Definir")
        h4 Definir
        p Definir y consolidar toda la información recolectada y la comunicación a los interesados. Asimismo, construir un documento final y definir la hoja de ruta a implementar.
      .tarjeta.tarjeta--azul.p-4(titulo="Presentar")
        h4 Presentar
        p Presentar el esquema de seguimiento de los trabajadores y buscar la aprobación de ellos y del jefe inmediato; si se aprueba, se procede a la publicación del documento PETI, primera versión.

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-0 Es necesario tener en cuenta que todos los pasos del PETI serán cíclicos, no terminan, todos los puntos se revisan una y otra vez, actualizando la versión para lograr el ajuste necesario del documento y las buenas prácticas en la organización.

    p.mb-5(data-aos="flip-left") En cuanto a definir las estrategias para la realización de la AE, el profesional de tecnologías debe realizar un diagnóstico previo en la organización en cuanto a arquitectura empresarial, para lo cual es necesario identificar las necesidades tecnológicas de la empresa:

    .row.align-items-center.justify-content-center.mb-5(data-aos="zoom-in-down") 
      .col-lg-4.col-10.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/temas/tema2/tema2-11.png", alt="")
      .col-lg-8.col-12
        ul.lista-ul.mb-2.ms-2
          li.mb-2
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Debe gestionar los requerimientos de los trabajadores, sus necesidades en el área, documentarlas y socializarlas con todos los empleados, para entender y dar mejores ideas orientadas al proceso de gestión documental.
          li.mb-2
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Debe apoyarse en la sistematización de todos los procesos, que se deben ejecutar por medio sistemas tecnológicos para lograr la eficiencia y la rapidez en el proceso.
          li.mb-2
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | El profesional requiere construir un catálogo de servicios, en el cual definirá los objetivos y los beneficios, además de socializarlos con los usuarios internos y externos, generando una cultura de compromiso y lealtad para la gestión documental en la empresa.
          li.mb-2
            i.fas.fa-angle-right(style="color:#FFAE7E")
            | Luego de realizar el seguimiento a los requerimientos, los debe enfocar en un #[em software]; de esta forma pasarán de requerimientos administrativos a #[em software], los subdividirá en características, estructura y tipos de requerimientos.

    p.mb-4(data-aos="flip-left") Pero ¿cómo se adelanta la gestión documental en un #[em software]?

    .row.justify-content-center.mb-5(data-aos="fade-down-left") 
      .col-lg-10.col-12
        .p-4.cajon.color-primario
          p.mb-0 La gestión documental en un #[em software] se enfoca en los #[b casos de uso], los cuales se definen como la #[b secuencia de iteraciones que se desarrollan en un sistema, junto con sus actores en respuesta a un evento.] Se emplean los #[b diagramas de caso de uso] que especifican la comunicación y el comportamiento del sistema mediante la interacción con los usuarios.

    p.mb-4(data-aos="flip-left") El profesional debe documentarse sobre cada uno de los procesos de implementación del programa de gestión documental. Luego, gestionará los recursos para que estos procesos se ejecuten en una aplicación de #[em software]. En este sentido, es importante mencionar que algunos de los procesos de gestión documental se pueden referenciar desde los siguientes casos de uso, en las figuras 7 y 8: 

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 7. </b> <i>Caso de uso 1. Gestión de unidades documentales</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/fig-7a.svg', alt='En la figura se observa el usuario digitador, con los procesos: CU7-01 Registrar Unidades Documentales extend, CU7-02 Modificar Unidades Documentales include extend, CU7-03 Consultar Unidades Documentales extend, CU7-04 Eliminar Unidades Documentales extend')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-7b.svg', alt='En la figura se observa el usuario digitador, con los procesos: CU7-01 Registrar Unidades Documentales extend, CU7-02 Modificar Unidades Documentales include extend, CU7-03 Consultar Unidades Documentales extend, CU7-04 Eliminar Unidades Documentales extend') 

    .row.justify-content-center.mb-5
      .col-12.col-lg-10(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 8. </b> <i>Caso de uso 2. Gestión de subseries documentales</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema2/fig-8a.svg', alt='En la figura se observa Digitador: CU2-01 Registrar Subserie Documental extend, CU2-03 Consultar Subserie Documental Extend, CU2-04 Eliminar Subserie Documental Include Extend, CU2-02 Modificar Subserie Documental')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema2/fig-8b.svg', alt='En la figura se observa Digitador: CU2-01 Registrar Subserie Documental extend, CU2-03 Consultar Subserie Documental Extend, CU2-04 Eliminar Subserie Documental Include Extend, CU2-02 Modificar Subserie Documental') 


    p.mb-4(data-aos="flip-left") #[b #[em Include] (Inclusión):]

    ul.lista-ul.ms-3.ms-lg-5.mb-4(data-aos="fade-down-left")
      li
        i.fas.fa-circle.fa-cfx(style="color:#304C8E")
        | #[b Definición:] la relación "#[em include]" se utiliza cuando un caso de uso (llamado caso de uso incluido) está compuesto por un conjunto de funcionalidades que se reutilizan en otros casos de uso. En otras palabras, representa una inclusión de funcionalidades comunes dentro de otros casos de uso.
      li
        i.fas.fa-circle.fa-cfx(style="color:#304C8E")
        | #[b Propósito:] la relación "#[em include]" se utiliza para evitar la duplicación de funcionalidades en múltiples casos de uso. Permite separar las funcionalidades comunes en un caso de uso independiente y, luego, incluir o invocar ese caso de uso en otros casos de uso donde es necesario.
      li
        i.fas.fa-circle.fa-cfx(style="color:#304C8E")
        | #[b Símbolo:] en un diagrama de casos de uso, la relación "#[em include]" se representa con una flecha punteada que apunta desde el caso de uso que incluye hacia el caso de uso incluido.

    p.mb-4(data-aos="flip-left") #[b #[em Extend] (Extensión):]

    ul.lista-ul.ms-3.ms-lg-5.mb-4(data-aos="fade-down-left")
      li
        i.fas.fa-circle.fa-cfx(style="color:#304C8E")
        | #[b Definición:] la relación "#[em extend]" se utiliza cuando un caso de uso (llamado caso de uso extendido) puede tener funcionalidades adicionales que se activan en ciertas condiciones. Estas funcionalidades adicionales se representan como extensiones del caso de uso base.
      li
        i.fas.fa-circle.fa-cfx(style="color:#304C8E")
        | #[b Propósito:] la relación "#[em extend]" se utiliza para modelar escenarios opcionales o condicionales que pueden extender el comportamiento normal de un caso de uso. Estas extensiones se activan solo si se cumplen ciertas condiciones especificadas.
      li
        i.fas.fa-circle.fa-cfx(style="color:#304C8E")
        | #[b Símbolo:] en un diagrama de casos de uso, la relación "#[em extend]" se representa con una flecha punteada que apunta desde el caso de uso extendido hacia el caso de uso de extensión. La línea punteada incluye una etiqueta que describe la condición bajo la cual se activa la extensión.

    p.mb-3(data-aos="flip-left") Es necesario comprender que en el #[em software] también se realiza una programación de código interno #[em backend] y una codificación visual o interfaz #[em frontend], además de relacionarlo con una base de datos.
    p.mb-4(data-aos="flip-left") De acuerdo con lo que se ha analizado se puede preguntar ¿cuáles son los requerimientos tecnológicos en el marco de AE, del gobierno de riesgo y cumplimiento?

    ul.lista-ul.ms-3.ms-lg-5.mb-5(data-aos="fade-down-left")
      li
        i.fas.fa-circle.fa-cfx(style="color:#304C8E")
        | #[b Para definir la estrategia en la implementación de una AE], el profesional de tecnología encargado se documenta con la normatividad vigente de la guía general de un proceso de arquitectura empresarial. 

    .row.justify-content-center.mb-5(data-aos="fade-left")
      .col-lg-10.col-12
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/ico-02.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3 Normatividad
                  p Para mayor profundidad, la normatividad relacionada con las estrategias de implementación se puede consultar en la guía general de un proceso de arquitectura empresarial, ubicada en material complementario.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.mintic.gov.co/portal/715/articles-273207_recurso_2.pdf" target="_blank")
                    span Enlace web
                    i.fas.fa-file-video

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-12.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para los requerimientos de AE se debe realizar un diagnóstico de la organización, en el que se relacionen los procesos de gestión documental que deben estar bien sistematizados en todos los procesos, además deben estar alineados a la misión de la organización, ajustando las necesidades de los empleados, relacionando los objetivos de la organización y todos los elementos necesarios para transformarla en una organización tecnológica en gestión documental. Se deben revisar las actividades en la planeación estratégica de AE y documentarlas en el entregable: #[b estrategia para la realización del proceso de AE.]

    //- ul.lista-ul.ms-3.ms-lg-5.mb-5(data-aos="fade-down-left")
    //-   li
    //-     i.fas.fa-circle.fa-cfx(style="color:#304C8E")
    //-     | 
    p.mb-5(data-aos="flip-left") #[b Para definir los procesos de AE] es necesario realizar el diagnóstico de la organización, priorizando los ejercicios del punto anterior documentados en el #[b entregable Planeación del ejercicio de AE.] Este proceso requiere:

    .row.justify-content-center.mb-5(data-aos="fade-left") 
      .col-lg-10.col-12
        .tarjeta.color-secundario.p-3.p-lg-4
          ul.lista-ul.ms-3(data-aos="fade-down-left")
            li
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | #[b Levantamiento de la información:] relacionar los elementos a considerar para ajustar todos los procesos de gestión documental. 
            li
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | #[b Entregable arquitectura empresarial actual:] desarrollar la elaboración y construcción de la arquitectura actual, la arquitectura misional y de TI.
            li
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | #[b Entregable arquitectura empresarial objetivo:] definir la arquitectura objetivo, es decir, a lo que se quiere llegar en procesos tecnológicos de gestión documental que sea viable, medido, ajustado, relacionados con la organización, la tecnología que se relacione con el plan estratégico, lograr definir los productos de la AE objetivo y mantener actualizado el documento. 
            li
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | #[b Análisis de brecha:] se determinan y documentan los vacíos entre la AE actual y la AE objetivo, integrando nuevas iniciativas. Relacionar un documento donde sea posible diferenciar los hallazgos.
            li
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | #[b Entregable mapa de ruta:] se relaciona el conjunto de acciones para ayudar a alcanzar la AE objetivo.
            li
              i.fas.fa-circle.fa-cfx(style="color:#304C8E")
              | #[b Entregable evaluación proyecto:] se deben comprender las lecciones aprendidas en el programa de gestión documental e involucrar a todos los trabajadores en los procesos, para lograr la madurez institucional de AE. 

    p.mb-5(data-aos="flip-left") En la implementación del #[em software] se puede utilizar el marco de referencia de #[b #[em TOGAF]], orientado a planificar, diseñar y efectuar la AE de una organización; para su aplicación el profesional en tecnología debe obtener una certificación. Este marco es una guía que incluye los siguientes pasos:

    .row.justify-content-center.mb-5(data-aos="fade-left") 
      .col-lg-10.col-12
        .tarjeta.color-primario.p-4
          PasosB.color-acento-botones
            .row(titulo="")
              .col-md-8.col-12.mb-4.mb-md-0
                h4 Conceptos 
                p Ofrece conceptos generales sobre los aspectos que se deben considerar en el diseño de la arquitectura empresarial.
              .col-md-4.col-12
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-13.png', alt='')
            .row(titulo="")
              .col-md-8.col-12.mb-4.mb-md-0
                h4 Propuesta 
                p Sugiere un método, en el que incorpora los pasos y salidas para el desarrollo de la arquitectura empresarial.
              .col-md-4.col-12
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-14.png', alt='')
            .row(titulo="")
              .col-md-8.col-12.mb-4.mb-md-0
                h4 Soporte 
                p Facilita una serie de guías, técnicas y entregables para aplicar correctamente el modelo #[em TOGAF].
              .col-md-4.col-12
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-15.png', alt='')
            .row(titulo="")
              .col-md-8.col-12.mb-4.mb-md-0
                h4 Visión 
                p Propone modelos de referencia para estructurar la información, con el fin de proyectar las acciones hacia una mejora continua, según los cambios del negocio.
              .col-md-4.col-12
                figure
                  img(src='@/assets/curso/temas/tema2/tema2-16.png', alt='')

    p.mb-5(data-aos="flip-left") Como se ha mencionado, #[em TOGAF] es un marco de trabajo para la AE, que facilita que la organización adapte el programa de gestión documental sistematizado según la visión empresarial.




</template>

<script>
export default {
  name: 'Tema2',
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

<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .mb-5(data-aos="zoom-down") 
      p Bienvenidos al componente formativo relacionado con el entendimiento estratégico de la Arquitectura Empresarial (AE), en el cual se tratarán aspectos importantes, como los siguientes:

    figure(data-aos="zoom-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/dgc_e-86v0U" title="Entendimiento estratégico de la arquitectura empresarial" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>

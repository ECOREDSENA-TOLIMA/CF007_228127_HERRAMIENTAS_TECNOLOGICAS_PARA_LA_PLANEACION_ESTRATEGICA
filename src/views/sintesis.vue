<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Una buena Arquitectura Empresarial- AE, necesita de la documentación y designación de un profesional que haga las veces de arquitecto, para que se enfoque en alcanzar y mantener la estrategia en la organización en cuanto a los lineamientos del gobierno, referentes a las tecnologías de la información y arquitectura empresarial, logrando así cumplir con los objetivos de la misión institucional.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la figura con la síntesis se tiene el entendimiento estratégico de la Arquitectura Empresarial AE, que comprende la identificación de las necesidades tecnológicas, que se dividen en gestión de requerimientos tecnológicos que comprende la gestión de requisitos del sistema y catálogo de servicios, y el análisis de requerimientos de software. Igualmente comprende los requerimientos tecnológicos en el marco de la Arquitectura Empresarial y del gobierno de riesgo y cumplimiento, cuyas características son la definición de estrategias, definición del proceso y ejecución del proceso de Arquitectura Empresarial.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

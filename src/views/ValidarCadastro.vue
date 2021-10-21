<template>
  <div class="validar-cadastro-wrapper">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex justify-center align-center">
          <h1>ASSISTA O VÍDEO PARA VALIDAR O SEU CADASTRO E PARTICIPAR</h1>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div class="wrapper-pdf" >
            <iframe
              src="https://player.vimeo.com/video/241727296?h=c791dadd9d"
              width="100%"
              height="100%"
              frameborder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowfullscreen>
            </iframe>
          </div>          
        </v-col>
      </v-row>

      <v-row>
        <v-col class="d-flex justify-center align-center">
          <v-btn
            class="next"
            color="primary"
            width="350px"
            elevation="2"
            rounded
            x-large
            :loading="loading"
          >
            Valide seu cadastro
          </v-btn>              
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'FaleConosco',

    data() {
      return {
      };
    },
  }
</script>

<style lang="scss" scoped>
.validar-cadastro-wrapper {
  max-width: 745px;
  margin: 0 auto;

  .wrapper-pdf {
    width: 100%;
    height: 425px;

    .iframe {
      min-height: 100%;
      min-width: 100%;
    }
  }
}
</style>

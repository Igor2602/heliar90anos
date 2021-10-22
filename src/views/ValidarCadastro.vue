<template>
  <div class="validar-cadastro-wrapper">
    <v-row>
      <v-col>
        <HeaderCad />
      </v-col>
    </v-row>

    <div class="validar-cadastro-content ">
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
              class="btn-primary"
              width="350px"
              rounded
              x-large
              :loading="loading"
              @click="navegation('/premiacao')"
            >
              Valide seu cadastro
            </v-btn>              
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FaleConosco',

    components: {
      HeaderCad: () => import('@/components/HeaderCad.vue'),
    },

    data() {
      return {
      };
    },

    methods: {
      navegation(item) {
        if (item !== this.$router.currentRoute.path) {
          this.$router.push(item);
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_global.scss';
.validar-cadastro-wrapper {
  padding-bottom: 80px;
  background: url('../assets/img/bg-internas.jpg') center top no-repeat #0b2b12;
  .validar-cadastro-content {
    max-width: 865px;
    margin: 0 auto;

    .wrapper-pdf {
      width: 100%;
      height: 425px;

      .iframe {
        min-height: 100%;
        min-width: 100%;
      }
    }

    .btn-primary {
      @include button-format;
    }
  }

  @media(max-width: 850px) {
    background: url('../assets/img/bg-internas-mob.jpg') center top no-repeat #0b2b12;
  }
}
</style>

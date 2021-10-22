<template>
  <div class="regulamento-wrapper">
    <v-row>
      <v-col>
        <HeaderLogado />
      </v-col>
    </v-row>

    <div class="regulamento-content ">
      <v-container fluid>
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <h1>Regulamento</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <div class="wrapper-pdf" >
              <iframe
                id="iframeprint"
                class="iframe"
                src="http://docs.google.com/gview?url=http://path.com/to/your/pdf.pdf&embedded=true" 
                frameborder="0"
              >
              </iframe>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Regulamento',

    components: {
      HeaderLogado: () => import('@/assets/components/HeaderLogado.vue'),
    },

    data() {
      return {
      };
    },
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_global.scss';
.regulamento-wrapper {
  min-height: 95vh;
  padding-bottom: 80px;
  background: url('../assets/img/bg-internas.jpg') center top no-repeat #0b2b12;
  .regulamento-content {
    max-width: 940px;
    margin: 0 auto;

    .wrapper-pdf {
      width: 100%;
      height: 425px;
      background-color: #fff;
      padding: 5px;
      box-shadow: 0px 3px 8px #00000021;

      .iframe {
        min-height: 100%;
        min-width: 100%;
      }
    }
  }
}
</style>

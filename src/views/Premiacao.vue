<template>
  <div class="premiacao-wrapper">
    <v-row>
      <v-col>
        <HeaderLogado />
      </v-col>
    </v-row>

    <div class="premiacao-content ">
      <v-container fluid>
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <h1>Concorra aos seguintes prêmios</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3">
            <div class="d-flex justify-center align-center flex-column">
              <img src="@/assets/img/icon-35.png">
              <p>R$ 35,00</p>
              <span class="text-center">Recargas de <br> celular</span>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <div class="d-flex justify-center align-center flex-column">
              <img src="@/assets/img/icon-100.png">
              <p>R$ 100,00</p>
              <span class="text-center">Vale compras supermercado</span>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <div class="d-flex justify-center align-center flex-column">
              <img src="@/assets/img/icon-150.png">
              <p>R$ 150,00</p>
              <span class="text-center">Vale <br> combustível</span>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <div class="d-flex justify-center align-center flex-column">
              <img src="@/assets/img/icon-400.png">
              <p>R$ 400,00</p>
              <span class="text-center">Vale compras especial</span>
            </div>
          </v-col>
        </v-row>

        <v-divider class="mt-12 mb-12"></v-divider>        
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Premiacao',

    components: {
      HeaderLogado: () => import('@/assets/components/HeaderLogado.vue'),
    },

    data() {
      return {
        desserts: [
          {
            name: 'Tibério - São Paulo',
            value: 35,
          },
          {
            name: 'Wilson - Rio Grande do Sul',
            value: 150,
          },
          {
            name: 'Maria Helena - Espírito Santo',
            value: 35,
          },
          {
            name: 'Tibério - São Paulo',
            value: 35,
          },
          {
            name: 'Wilson - Rio Grande do Sul',
            value: 150,
          },
          {
            name: 'Maria Helena - Espírito Santo',
            value: 35,
          },
          {
            name: 'Tibério - São Paulo',
            value: 35,
          },
          {
            name: 'Wilson - Rio Grande do Sul',
            value: 150,
          },
          {
            name: 'Maria Helena - Espírito Santo',
            value: 35,
          },
          {
            name: 'Tibério - São Paulo',
            value: 35,
          },
          {
            name: 'Wilson - Rio Grande do Sul',
            value: 150,
          },
          {
            name: 'Maria Helena - Espírito Santo',
            value: 35,
          },
        ],
      };
    },
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_global.scss';
.premiacao-wrapper {
  min-height: 95vh;
  padding-bottom: 80px;
  background: url('../assets/img/bg-internas.jpg') center top no-repeat #0b2b12;
  .premiacao-content {
    max-width: 940px;
    margin: 0 auto;

    p {
      color: #fff;
      font-weight: bold;
      font-size: 25px;
      margin: 10px 0 0;
    }

    span {
      color: #5fcf4a;
      text-transform: uppercase;
    }

    .v-divider {
      border: 1px solid #5fcf4a;
    }
  }
}
</style>

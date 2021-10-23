<template>
  <div class="home-wrapper">
    <v-row>
      <v-col>
        <HeaderHome />
      </v-col>
    </v-row>

    <v-row class="mb-12">
      <v-col>
        <CadHome />
      </v-col>
    </v-row>

    <div class="home-content">
      <v-container fluid>
        <div class="como-participar-wrapper">
          <v-row>
            <v-col class="d-flex justify-center align-center">
              <h1>PARTICIPE E CONCORRA AOS SEGUINTES PRÊMIOS</h1>
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
                <span class="text-center">Vale compras <br> especial</span>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="d-flex justify-center align-center">
              <v-btn
                class="btn-primary"
                width="250px"
                rounded
                large
              >
                Como Paricipar
              </v-btn>
            </v-col>
          </v-row>
        </div>

        <div class="mt-16">
          <Login />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      HeaderHome: () => import('@/components/HeaderHome.vue'),
      Login: () => import('@/components/Login.vue'),
      CadHome: () => import('@/components/CadHome.vue'),
    },
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_global.scss';
.home-wrapper {
  background: url('../assets/img/bg-home.jpg') center top no-repeat #0b2b12;
  padding-bottom: 80px;

  .home-content {
    .como-participar-wrapper {
      max-width: 840px;
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

      .btn-primary {
        @include button-format;
        color: #0b2b12 !important;
        background: #fff;
        font-weight: bold;
      }
    }
  }

  @media(max-width: 850px) {
    background: url('../assets/img/bg-home-mob.jpg') center top no-repeat #0b2b12;
  }
}
</style>

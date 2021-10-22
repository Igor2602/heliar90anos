<template>
  <div
    class="header-logado-wrapper"
  >
    <div class="d-none d-md-block">
      <ul class="d-flex align-center justify-space-around">
        <li>
          <v-btn
            class="btn-primary mt-n10"
            width="150px"
            elevation="2"
            rounded
            @click="navegation('/premiacao')"
            :class="{'active': $route.path == `/premiacao`}"
          >
            Premiação
          </v-btn>
        </li>
        <li>
          <v-btn
            class="btn-primary mt-n10"
            width="150px"
            elevation="2"
            rounded
            @click="navegation('/meu-perfil')"
            :class="{'active': $route.path == `/meu-perfil`}"
          >
            Meu Perfil
          </v-btn>
        </li>
        <li>
          <img src="@/assets/img/logo-internas.png">
        </li>
        <li>
          <v-btn
            class="btn-primary mt-n10"
            width="150px"
            elevation="2"
            rounded
            @click="navegation('/regulamento')"
            :class="{'active': $route.path == `/regulamento`}"
          >
            Regulamento
          </v-btn>
        </li>
        <li>
          <v-btn
            class="btn-primary mt-n10"
            width="150px"
            elevation="2"
            rounded
            @click="navegation('/fale-conosco')"
            :class="{'active': $route.path == `/fale-conosco`}"
          >
            Fale Conosco
          </v-btn>
        </li>
      </ul>
    </div>

    <div class="d-block d-md-none">
      <div class="d-flex justify-center align-center">
        <img src="@/assets/img/logo-internas.png">
      </div>
      <ul class="d-flex align-center justify-space-around flex-wrap">
        <li>
          <v-btn
            class="btn-primary ma-2"
            width="120px"
            elevation="2"
            rounded
            @click="navegation('/premiacao')"
            :class="{'active': $route.path == `/premiacao`}"
          >
            Premiação
          </v-btn>
        </li>
        <li>
          <v-btn
            class="btn-primary ma-2"
            width="120px"
            elevation="2"
            rounded
            @click="navegation('/meu-perfil')"
            :class="{'active': $route.path == `/meu-perfil`}"
          >
            Meu Perfil
          </v-btn>
        </li>
        <li>
          <v-btn
            class="btn-primary ma-2"
            width="120px"
            elevation="2"
            rounded
            @click="navegation('/regulamento')"
            :class="{'active': $route.path == `/regulamento`}"
          >
            Regulamento
          </v-btn>
        </li>
        <li>
          <v-btn
            class="btn-primary ma-2"
            width="120px"
            elevation="2"
            rounded
            @click="navegation('/fale-conosco')"
            :class="{'active': $route.path == `/fale-conosco`}"
          >
            Fale Conosco
          </v-btn>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HeaderLogado',

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
@import '../../assets/scss/_global.scss';
.header-logado-wrapper {
  max-width: 1000px;
  margin: 0 auto;

  ul {
    li {
      list-style: none;
      .btn-primary {
        background: #5fcf4a;
        color: #fff;
        font-size: 12px;
        height: 28px;

        &:hover, &.active {
          background: #fff;
          color: #5fcf4a;
        }
      }
    }
  }
}
</style>

<template>
  <div
    class="headerCad-wrapper d-flex justify-center align-center"
  >
    <img src="@/assets/img/logo-internas.png">

    <v-btn
      class="btn-primary"
      width="150px"
      elevation="2"
      rounded
      @click="navegation('/fale-conosco')"
    >
      Fale Conosco
    </v-btn>
  </div>
</template>

<script>
  export default {
    name: 'HeaderCad',

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
.headerCad-wrapper {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;

  .btn-primary {
    height: 28px;
    color: #fff;
    font-weight: bold;
    background: #5fcf4a;
    text-transform: uppercase;
    position: absolute;
    right: 30px;
    font-size: 12px;
  }
}

@media(max-width: 960px) {
  .headerCad-wrapper {
    flex-direction: column;

    .btn-primary {
      position: relative;
      right: auto;
      margin-bottom: 30px;
    }
  }
}

</style>

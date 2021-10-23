<template>
  <div
    class="headerCad-wrapper d-flex justify-center align-center"
  >
    <img src="@/assets/img/logo.png">

    <v-btn
      class="btn-primary"
      width="150px"
      elevation="2"
      rounded
      @click="navegation('/fale-conosco')"
    >
      Fazer Login
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
  margin: 30px auto 0;

  .btn-primary {
    height: 28px;
    color: #fff;
    font-weight: bold;
    background: #0b2b12;
    text-transform: uppercase;
    position: absolute;
    right: 30px;
    font-size: 12px;
    top: 40px;
  }
}

@media(max-width: 960px) {
  .headerCad-wrapper {
    flex-direction: column;

    img {
      max-width: 90%;
      margin: 0 auto;
    }

    .btn-primary {
      position: relative;
      right: auto;
      top: -20px;
      margin-bottom: 30px;
    }
  }
}

</style>

<template>
  <v-app>
    <v-main>
      <router-view/>

      <div>
        <Footer />
      </div>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    Footer: () => import('@/components/Footer.vue'),
  },

  data: () => ({
  }),
};
</script>

<style lang="scss">
@import './assets/scss/_global.scss';

@font-face {
    font-family: 'montserratbold';
    src: url('./assets/fonts/montserrat/montserrat-bold-webfont.eot');
    src: url('./assets/fonts/montserrat/montserrat-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/montserrat/montserrat-bold-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat/montserrat-bold-webfont.woff') format('woff'),
         url('./assets/fonts/montserrat/montserrat-bold-webfont.svg#montserratbold') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'montserratmedium';
    src: url('./assets/fonts/montserrat/montserrat-medium-webfont.eot');
    src: url('./assets/fonts/montserrat/montserrat-medium-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/montserrat/montserrat-medium-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat/montserrat-medium-webfont.woff') format('woff'),
         url('./assets/fonts/montserrat/montserrat-medium-webfont.svg#montserratmedium') format('svg');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'montserratregular';
    src: url('./assets/fonts/montserrat/montserrat-regular_0-webfont.eot');
    src: url('./assets/fonts/montserrat/montserrat-regular_0-webfont.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/montserrat/montserrat-regular_0-webfont.woff2') format('woff2'),
         url('./assets/fonts/montserrat/montserrat-regular_0-webfont.woff') format('woff'),
         url('./assets/fonts/montserrat/montserrat-regular_0-webfont.svg#montserratregular') format('svg');
    font-weight: normal;
    font-style: normal;
}
</style>

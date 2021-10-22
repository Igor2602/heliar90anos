<template>
  <div class="home-wrapper">
    <v-row>
      <v-col>
        <HeaderHome />
      </v-col>
    </v-row>

    <div class="home-content">
      <v-container fluid>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    components: {
      HeaderHome: () => import('@/components/HeaderHome.vue'),
    },
  }
</script>

<style lang="scss" scoped>
.home-wrapper {
  background: url('../assets/img/bg-home.jpg') center top no-repeat #0b2b12;
  height: 100vh;

  @media(max-width: 850px) {
    background: url('../assets/img/bg-home-mob.jpg') center top no-repeat #0b2b12;
  }
}
</style>

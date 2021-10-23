<template>
  <div class="footer-wrapper">
    <v-container fluid>
      <div class="footer-content">
        <v-row>
          <v-col cols="12" md="3">
            <div class="content">
              <img src="@/assets/img/logo-footer.png">
            </div>
          </v-col>

          <v-col cols="12" md="6">
            <div class="content">
              <p class="mb-0">Copyright © 2021 - Campanha Heliar 90 Anos - Todos os direitos reservados</p>
            </div>
          </v-col>

          <v-col cols="12" md="3">
            <div class="content">
              <a href="" target="_blank">
                <img src="@/assets/img/icon-instagram.png">
              </a>

              <a href="" target="_blank">
                <img src="@/assets/img/icon-youtube.png">
              </a>

              <a href="" target="_blank">
                <img src="@/assets/img/icon-facebook.png">
              </a>
            </div>
          </v-col>
        </v-row>    
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Footer',

    data() {
      return {
      };
    },
  }
</script>

<style lang="scss" scoped>
.footer-wrapper {
  min-height: 70px;
  background: #fff;

  .footer-content {
    max-width: 1400px;
    margin: 0 auto;

    .content {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        color: #005b30;
        font-size: 12px;
        text-align: center;
      }

      a {
        margin: 0 5px;
      }
    }
  }
}
</style>

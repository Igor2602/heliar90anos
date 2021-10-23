<template>
  <div class="login-wrapper">
    <v-row>
      <v-col>
        <h1>JÁ SOU CADASTRADO</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="submit"
        >
          <v-text-field
            class="mt-n1"
            v-model="form.mail"
            :rules="rules.mailRule"
            label="Login"
            required
            filled
            rounded
            solo
          ></v-text-field>

          <v-text-field
            label="Senha"
            v-model="form.password"
            :rules="rules.required"
            type="password"
            required
            filled
            rounded
            solo
            class="mt-n2"
          ></v-text-field>
          <div class="d-flex justify-center align-center mt-n5">
            <span>ESQUECI MINHA SENHA</span>
          </div>

          <div class="d-flex justify-center align-center mt-5">
            <v-btn
              class="btn-primary"
              width="350px"
              rounded
              large
              :loading="loading"
              @click="submit('/premiacao')"
            >
              Entrar
            </v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: 'Login',

    data() {
      return {
        rules: {
          required: [(v) => !!v || 'Esse campo é obrigatório'],
          mailRule: [
            (v) => !!v || 'Esse campo é obrigatório',
            (v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido',
          ],
        },
        valid: false,
        loading: false,
        form: {
          mail: null,
          password: '',
        },
      };
    },

    methods: {
      submit(item) {
        this.loading = true;
        if (this.$refs.form.validate()) {
          if (item !== this.$router.currentRoute.path) {
            this.$router.push(item);
          }

        }
        this.loading = false;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_global.scss';
.login-wrapper {
  max-width: 535px;
  margin: 0 auto;

  span {
    color: #fff;
    font-size: 10px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  .btn-primary {
    @include button-format;
  }
}
</style>

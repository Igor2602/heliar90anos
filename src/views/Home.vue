<template>
  <div class="home-wrapper">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex justify-center align-center">
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
              v-model="form.email"
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
            ></v-text-field>

            <p>ESQUECI MINHA SENHA</p>

            <div class="d-flex justify-center align-center">
              <v-btn
                class="next"
                color="primary"
                width="250px"
                elevation="2"
                rounded
                large
                :loading="loading"
                @click="submit()"
              >
                Entrar
              </v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Home',

    data() {
      return {
        rules: {
          required: [(v) => !!v || 'Esse campo é obrigatório'],
          mailRule: [
            (v) => !!v || 'E-mail é obrigatório',
            (v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido',
          ],
        },
        valid: false,
        loading: false,
        form: {
          password: '',
          email: null,
        },
      };
    },

    methods: {
      submit() {
        this.loading = true;
        if (this.$refs.form.validate()) {
          console.log(this.form);
        }
        this.loading = false;
      }
    },
  }
</script>

<style lang="scss" scoped>
.home-wrapper {
  background: url('../assets/img/bg-home.jpg') center top no-repeat #0b2b12;
  height: 100vh;
}
</style>

<template>
  <div class="criar-senha-wrapper">
    <v-container fluid>
      <v-row>
        <v-col class="d-flex justify-center align-center">
          <h1>Crie sua senha</h1>
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
              label="Senha"
              v-model="form.password"
              :rules="rules.required"
              type="password"
              required
              filled
              rounded
              solo
            ></v-text-field>

            <v-text-field
              label="Confirmar Senha"
              v-model="form.confirmPassword"
              :rules="[rules.required,passwordConfirmationRule]"
              type="password"
              required
              filled
              rounded
              solo
            ></v-text-field>

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
    name: 'CriarSenha',

    data() {
      return {
        rules: {
          required: [(v) => !!v || 'Esse campo é obrigatório'],
        },
        valid: false,
        loading: false,
        form: {
          password: '',
          confirmPassword: '',
        },
      };
    },

    computed: {
      passwordConfirmationRule() {
        return () => this.form.password === this.form.confirmPassword || 'A senha deve corresponder';
      },
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
.criar-senha-wrapper {
  max-width: 746px;
  margin: 0 auto;
}
</style>

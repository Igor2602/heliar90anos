<template>
  <div class="criar-senha-wrapper">
    <v-row>
      <v-col>
        <HeaderCad />
      </v-col>
    </v-row>

    <div class="criar-senha-content ">
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
                  class="btn-primary"
                  width="250px"
                  rounded
                  large
                  :loading="loading"
                  @click="submit('/validar-cadastro')"
                >
                Entrar
              </v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CriarSenha',

    components: {
      HeaderCad: () => import('@/components/HeaderCad.vue'),
    },

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

.criar-senha-wrapper {
  padding-bottom: 80px;
  min-height: 95vh;
  background: url('../assets/img/bg-internas.jpg') center top no-repeat #0b2b12;

  .criar-senha-content {
    max-width: 746px;
    margin: 0 auto;

    .btn-primary {
      @include button-format;
    }
  }

  @media(max-width: 850px) {
    background: url('../assets/img/bg-internas-mob.jpg') center top no-repeat #0b2b12;
  }
}
</style>

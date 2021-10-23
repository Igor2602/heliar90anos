<template>
  <div class="fale-conosco-wrapper">
    <v-container fluid>
      <v-row>
        <v-col>
          <HeaderLogado />
        </v-col>
      </v-row>

      <div class="fale-conosco-content ">
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <h1>Fale conosco</h1>
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
                v-model="form.name"
                :rules="rules.required"
                label="Nome"
                required
                filled
                rounded
                solo
              ></v-text-field>

              <v-text-field
                class="mt-n1"
                v-model="form.mail"
                :rules="rules.mailRule"
                label="E-mail"
                required
                filled
                rounded
                solo
              ></v-text-field>

              <v-text-field
                class="mt-n1"
                v-model="form.subject"
                :rules="rules.required"
                label="Assunto"
                required
                filled
                rounded
                solo
              ></v-text-field>

              <v-textarea
                class="mt-n1"
                v-model="form.message"
                :rules="rules.required"
                label="Mensagem"
                required
                filled
                rounded
                solo
              ></v-textarea>

              <div class="d-flex justify-center align-center">
                <v-btn
                  class="btn-primary"
                  width="250px"
                  rounded
                  large
                  :loading="loading"
                  @click="submit()"
                >
                Enviar
              </v-btn>
              </div>
            </v-form>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'FaleConosco',

    components: {
      HeaderLogado: () => import('@/components/HeaderLogado.vue'),
    },

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
          mail: null,
          name: null,
          subject: null,
          message: null,
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
    }
  }
</script>

<style lang="scss" scoped>
@import '../assets/scss/_global.scss';
.fale-conosco-wrapper {
  padding-bottom: 80px;
  min-height: 95vh;
  background: url('../assets/img/bg-internas.jpg') center top no-repeat #0b2b12;
  .fale-conosco-content {
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

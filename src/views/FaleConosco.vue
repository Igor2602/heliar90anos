<template>
  <div class="fale-conosco-wrapper">
    <v-container fluid>
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
              v-model="form.mail"
              :rules="rules.mailRule"
              label="E-mail"
              required
              filled
              rounded
              solo
            ></v-text-field>

            <v-text-field
              v-model="form.subject"
              :rules="rules.required"
              label="Assunto"
              required
              filled
              rounded
              solo
            ></v-text-field>

            <v-textarea
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
                class="next"
                color="primary"
                width="250px"
                elevation="2"
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
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'FaleConosco',

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
.fale-conosco-wrapper {
  max-width: 746px;
  margin: 0 auto;
}
</style>

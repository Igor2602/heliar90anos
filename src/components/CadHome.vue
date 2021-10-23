<template>
  <div class="cad-home-wrapper">
    <div class="mb-8">
      <p>O aniversário é nosso mas quem ganha o presente é você</p>
      <h1>FAÇA AGORA MESMO SEU CADASTRO E CONCORRA A MUITOS PRÊMIOS</h1>
    </div>

    <v-form
      ref="form"
      v-model="valid"
      @submit.prevent="submit"
    >
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

      <v-autocomplete
        :items="itemsSelect"
        v-model="form.select"
        label="Selecione"
        :item-text="'value'"
        :item-value="'key'"
        :rules="rules.required"
        required
        filled
        rounded
        solo
        class="mt-n2"
      ></v-autocomplete>

      <v-checkbox
        class="mt-n8"
        color="#5fcf4a"
        v-model="form.checkbox"
        :rules="rules.required"
        label="Ao me cadastrar, escolho compartilhar minhas informações aceitar os termos de uso e compartilhar meus dados para futuras comunicações da Clarios"
      ></v-checkbox>

      <div class="d-flex justify-center align-center">
        <v-btn
          class="btn-primary"
          width="350px"
          rounded
          large
          :loading="loading"
          @click="submit('/cadastro')"
        >
          Cadastrar
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'CadHome',

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
          select: null,
          checkbox: null,
        },
        itemsSelect: [
          { value: 'Item1', key: 'Item1' },
          { value: 'Item2', key: 'Item2' },
        ],
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
.cad-home-wrapper {
  max-width: 535px;
  margin: 0 auto;

  h1 {
    line-height: 26px;
  }

  p {
    color: #0b2b12;
    font-size: 23px;
    font-weight: bold;
    text-align: center;
    max-width: 400px;
    margin: 0 auto 10px;
    line-height: normal
  }

  .btn-primary {
    @include button-format;
  }
}
</style>

<template>
  <div class="wrapper-cadastro">
    <v-container fluid>
      <v-row>
        <v-col>
          <HeaderCad />
        </v-col>
      </v-row>

      <div class="cadastro-content">
        <v-row>
          <v-col class="d-flex justify-center align-center">
            <h1>PREENCHA SEUS DADOS ABAIXO PARA CADASTRO</h1>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-form
              ref="form"
              v-model="valid"
              @submit.prevent="submit"
            >
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.mail"
                    :rules="rules.mailRule"
                    label="meu@email.com.br"
                    required
                    filled
                    rounded
                    solo
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-autocomplete
                    :items="itemsState"
                    v-model="form.state"
                    label="Estado"
                    :item-text="'value'"
                    :item-value="'key'"
                    :rules="rules.required"
                    required
                    filled
                    rounded
                    solo
                    class="mt-n6 mt-md-0"
                    prepend-icon="mdi-map"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row class="mt-n6">
                <v-col>
                  <v-text-field
                    v-model="form.name"
                    :rules="rules.nameRule"
                    label="Nome Completo"
                    required
                    filled
                    rounded
                    solo
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="mt-n6">
                <v-col>
                  <v-text-field
                    v-model="form.address"
                    :rules="rules.required"
                    label="Endereço"
                    required
                    filled
                    rounded
                    solo
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="mt-n6">
                <v-col cols="12" md="3">
                  <v-text-field
                    v-model="form.number"
                    :rules="rules.required"
                    label="Número"
                    required
                    filled
                    rounded
                    solo
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="5">
                  <v-text-field
                    v-model="form.complement"
                    label="Complemento"
                    filled
                    rounded
                    solo
                    class="mt-n6 mt-md-0"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.zipCode"
                    :rules="rules.required"
                    label="CEP"
                    v-mask="'#####-###'"
                    required
                    filled
                    rounded
                    solo
                    class="mt-n6 mt-md-0"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row class="mt-n6">
                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.neighborhood"
                    :rules="rules.required"
                    label="Bairro"
                    required
                    filled
                    rounded
                    solo
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.city"
                    :rules="rules.required"
                    label="Cidade"
                    required
                    filled
                    rounded
                    solo
                    class="mt-n6 mt-md-0"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-autocomplete
                    :items="itemsState"
                    v-model="form.state"
                    label="Estado"
                    :item-text="'value'"
                    :item-value="'key'"
                    :rules="rules.required"
                    required
                    filled
                    rounded
                    solo
                    class="mt-n6 mt-md-0"
                  ></v-autocomplete>
                </v-col>
              </v-row>

              <v-row class="mt-n6">
                <v-col cols="12" md="2">
                  <v-text-field
                    v-model="form.ddd"
                    :rules="rules.required"
                    label="DDD"
                    v-mask="'###'"
                    required
                    filled
                    rounded
                    solo
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="4">
                  <v-text-field
                    v-model="form.phone"
                    :rules="rules.required"
                    label="Celular"
                    v-mask="'#####-####'"
                    required
                    filled
                    rounded
                    solo
                    class="mt-n6 mt-md-0"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                  <v-text-field
                    v-model="form.cnpj"
                    :rules="rules.required"
                    label="CNPJ da Revenda que trabalha"
                    v-mask="'##.###.###/####-##'"
                    required
                    filled
                    rounded
                    solo
                    class="mt-n6 mt-md-0"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col class="d-flex justify-center align-center">
                  <v-checkbox
                    class="mt-n12"
                    color="#5fcf4a"
                    v-model="form.checkbox"
                    label="Aceito receber contato via WhatsApp no número cadastrado."
                  ></v-checkbox>
                </v-col>
              </v-row>

              <div class="d-flex justify-center align-center">
                <v-btn
                  class="btn-primary"
                  width="250px"
                  elevation="2"
                  rounded
                  large
                  :loading="loading"
                  @click="submit('/criar-senha')"
                >
                  Confirmar
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
    name: 'Cadastro',

    components: {
      HeaderCad: () => import('@/components/HeaderCad.vue'),
    },

    data() {
      return {
        rules: {
          required: [(v) => !!v || 'Esse campo é obrigatório'],
          mailRule: [
            (v) => !!v || 'E-mail é obrigatório',
            (v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail inválido',
          ],
          nameRule: [
            (v) => !!v || 'Esse campo é obrigatório',
            (v) => !v || /\b[A-Za-zÀ-ú][A-Za-zÀ-ú]+,?\s[A-Za-zÀ-ú][A-Za-zÀ-ú]{2,19}\b/.test(v) || 'Nome inválido',
          ],
        },
        valid: false,
        loading: false,
        form: {
          mail: null,
          name: null,
          address: null,
          number: null,
          complement: null,
          zipCode: null,
          neighborhood: null,
          city: null,
          state: null,
          ddd: null,
          phone: null,
          cnpj: null,
          checkbox: null,

        },
        itemsState: [
          { value: 'Acre', key: 'AC' },
          { value: 'Alagoas', key: 'AL' },
          { value: 'Amapá', key: 'AP' },
          { value: 'Amazonas', key: 'AM' },
          { value: 'Bahia', key: 'BA' },
          { value: 'Ceará', key: 'CE' },
          { value: 'Distrito Federal', key: 'DF' },
          { value: 'Espírito Santo', key: 'ES' },
          { value: 'Goiás', key: 'GO' },
          { value: 'Maranhão', key: 'MA' },
          { value: 'Mato Grosso', key: 'MT' },
          { value: 'Mato Grosso do Sul', key: 'MS' },
          { value: 'Minas Gerais', key: 'MG' },
          { value: 'Pará', key: 'PA' },
          { value: 'Paraíba', key: 'PB' },
          { value: 'Paraná', key: 'PR' },
          { value: 'Pernambuco', key: 'PE' },
          { value: 'Piauí', key: 'PI' },
          { value: 'Rio de Janeiro', key: 'RJ' },
          { value: 'Rio Grande do Norte', key: 'RN' },
          { value: 'Rio Grande do Sul', key: 'RS' },
          { value: 'Rondônia', key: 'RO' },
          { value: 'Roraima', key: 'RR' },
          { value: 'Santa Catarina', key: 'SC' },
          { value: 'São Paulo', key: 'SP' },
          { value: 'Sergipe', key: 'SE' },
          { value: 'Tocantins', key: 'TO' },
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
.wrapper-cadastro {
  padding-bottom: 80px;
  background: url('../assets/img/bg-internas.jpg') center top no-repeat #0b2b12;

  .cadastro-content {
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

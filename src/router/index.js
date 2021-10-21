import Vue from 'vue'
import VueRouter from 'vue-router'
import FaleConosco from '../views/FaleConosco.vue'
import Cadastro from '../views/Cadastro.vue'
import MeuPerfil from '../views/MeuPerfil.vue'
import Regulamento from '../views/Regulamento.vue'
import CriarSenha from '../views/CriarSenha.vue'
import ValidarCadastro from '../views/ValidarCadastro.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/fale-conosco',
    name: 'FaleConosco',
    component: FaleConosco
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },
  {
    path: '/meu-perfil',
    name: 'MeuPerfil',
    component: MeuPerfil
  },
  {
    path: '/regulamento',
    name: 'Regulamento',
    component: Regulamento
  },
  {
    path: '/criar-senha',
    name: 'CriarSenha',
    component: CriarSenha
  },
  {
    path: '/validar-cadastro',
    name: 'ValidarCadastro',
    component: ValidarCadastro
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

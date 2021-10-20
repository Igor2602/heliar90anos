import Vue from 'vue'
import VueRouter from 'vue-router'
import FaleConosco from '../views/FaleConosco.vue'
import Cadastro from '../views/Cadastro.vue'
import MeuPerfil from '../views/MeuPerfil.vue'
import Regulamento from '../views/Regulamento.vue'

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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

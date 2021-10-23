import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/fale-conosco',
    name: 'FaleConosco',
    component: () => import('../views/FaleConosco.vue'),
  },
  {
    path: '/cadastro',
    name: 'Cadastro',
    component: () => import('../views/Cadastro.vue'),
  },
  {
    path: '/meu-perfil',
    name: 'MeuPerfil',
    component: () => import('../views/MeuPerfil.vue'),
  },
  {
    path: '/regulamento',
    name: 'Regulamento',
    component: () => import('../views/Regulamento.vue'),
  },
  {
    path: '/criar-senha',
    name: 'CriarSenha',
    component: () => import('../views/CriarSenha.vue'),
  },
  {
    path: '/validar-cadastro',
    name: 'ValidarCadastro',
    component: () => import('../views/ValidarCadastro.vue'),
  },
  {
    path: '/premiacao',
    name: 'Premiacao',
    component: () => import('../views/Premiacao.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

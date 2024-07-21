import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import FillUpForm from '@/pages/FillupForm.vue'
import About from '@/pages/About.vue'

const routes = [
  { 
    path: '/', 
    component: Home, 
    name:'home' ,
    children:[]
  },
  { path: '/fill-up', component: FillUpForm, name:'fillUpForm'},
  { path: '/about', component: About, name:'about' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
import { createMemoryHistory, createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import FillUpForm from '@/pages/FillupForm.vue'
import About from '@/pages/About.vue'
import FormInfo from '@/pages/FormInfo.vue'
const routes = [
  { 
    path: '/', 
    component: Home, 
    name:'home' ,
    children:[]
  },
  { path: '/fill-up', component: FillUpForm, name:'fillUpForm'},
  { path: '/form-info', component: FormInfo, name:'formInfo'},
  { path: '/about', component: About, name:'about' },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
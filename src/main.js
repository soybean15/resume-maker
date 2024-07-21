import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {router} from  '@/router'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

import 'primeicons/primeicons.css'

import { createPinia } from 'pinia'
import '@/style/index.css'

const app = createApp(App)
const pinia = createPinia()
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'system',
            cssLayer: false
        }
    }
});


app.use(pinia)
app.use(router)
app.mount('#app')
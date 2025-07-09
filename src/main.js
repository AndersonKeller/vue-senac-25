import { createApp } from 'vue'
import './style.css'
import 'vue3-toastify/dist/index.css';
import Vue3Toastify from 'vue3-toastify';
import App from './App.vue'
import { router } from './routes'
const app = createApp(App)

app.use(router)
app.use(Vue3Toastify,{
    autoClose: 3000,
})
app.mount('#app')

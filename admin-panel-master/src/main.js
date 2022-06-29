import { createApp } from 'vue'
import App from './App.vue'
import '@/styles/app.css'
import router from '@/router'
import VueCookies from 'vue3-cookies';


const app = createApp(App)
app.use(VueCookies, {
    expireTimes: "7d",
});
// app.use(VueSweetalert2);
app.use(router)
app.mount('#app')
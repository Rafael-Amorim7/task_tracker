import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { VueCookieNext } from 'vue-cookie-next'

VueCookieNext.config({ expire: '7d' });

const app = createApp(App);
app.use(VueCookieNext);
app.mount('#app');

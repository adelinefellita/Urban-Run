import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.css'

// Jika menggunakan BootstrapVue, pastikan juga mengimpor ini
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Import ikon Bootstrap Vue (jika diperlukan)
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'


// Membuat aplikasi Vue dan menghubungkannya dengan router
createApp(App).use(router).mount('#app')
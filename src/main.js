import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'

// import { BootstrapVueIcons } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// icon bootstrap
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css';


createApp(App).use(router).mount('#app')
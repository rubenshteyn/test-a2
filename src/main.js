import { createApp } from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import Popper from "vue3-popper"
import "vue-select/dist/vue-select.css";


createApp(App)
    .component('v-select', vSelect)
    .use(Popper)
    .mount('#app')

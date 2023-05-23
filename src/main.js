// Main CSS
import '../src/assets/css/main.css'

// Router
import {router} from "./router";

// Axios
import '../node_modules/axios/dist/axios'

// Bootstrap
import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

// Glide
import '../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss'
import '../node_modules/@glidejs/glide/src/assets/sass/glide.theme.scss'



import { createApp } from 'vue'
import App from './App.vue'

import {VueElement} from 'vue'
import axios from 'axios'

// global variable
VueElement.prototype.$axios = axios

// Emitter
const app = createApp(App).use(router).mount('#app')



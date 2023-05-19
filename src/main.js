import '../src/assets/css/main.css'


import '../node_modules/bootstrap/scss/bootstrap.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

import '../node_modules/@glidejs/glide/src/assets/sass/glide.core.scss'
import '../node_modules/@glidejs/glide/src/assets/sass/glide.theme.scss'


import { createApp } from 'vue'

import {createRouter, createWebHashHistory} from "vue-router"

import App from './App.vue'

// PAGES
import Home from "./components/pages/Home.vue"
import RecipeDetail from "./components/pages/RecipeDetail.vue"
import Login from "./components/pages/Login.vue";
import SignUp from "./components/pages/SignUp.vue";
import ForgotPassword from "./components/pages/ForgotPassword.vue";

import AdminDashboard from "./components/pages/AdminDashboard.vue";
import AdminEdit from "./components/pages/AdminEdit.vue";


const routes = [
    {
        path: '/', component: Home, name: '/'
    },
    {
        path: '/recipeDetail', component: RecipeDetail, name: 'recipeDetail'
    },
    {
        path: '/login', component: Login, name: 'login'
    },
    {
        path: '/singUp', component: SignUp, name: 'singUp'
    },
    {
        path: '/forgotPassword', component: ForgotPassword, name: 'forgotPassword'
    },
    {
        path: '/adminDashboard', component: AdminDashboard, name: 'adminDashboard'
    },
    {
        path: '/adminEdit', component: AdminEdit, name: 'adminEdit'
    },
]

const router = createRouter({
    history:createWebHashHistory(),
        scrollBehavior: function (to, _from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            }
            if (to.hash) {
                return { el: to.hash, behavior: "smooth" };
            } else {
                window.scrollTo(0, 0);
            }
        },
    routes
})


const app = createApp(App)

app.use(router)

app.mount('#app')

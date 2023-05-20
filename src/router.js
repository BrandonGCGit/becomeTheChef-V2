import { createRouter, createWebHashHistory} from "vue-router";

// Pages
import Home from "./views/Home.vue";
import RecipeDetail from "./views/RecipeDetail.vue";
import Login from "./views/Login.vue";
import SignUp from "./views/SignUp.vue";
import ForgotPassword from "./views/ForgotPassword.vue";
import AdminDashboard from "./views/AdminDashboard.vue";
import AdminEdit from "./views/AdminEdit.vue";
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue";
import NavbarAdmin from "./components/NavbarAdmin.vue";



const routes = [
    // {
    //     path: '/', component: Home, name: '/'
    // },
    {
        path: '/',
        components: {
            default: Home,
            navbar: Navbar,
            footer: Footer
        },
        // props:{
        //     default: true,
        //     navbar: false,
        //     footer: false
        // },
        name: '/'
    },
    {
        path: '/recipeDetail',
        components: {
            default: RecipeDetail,
            navbar: Navbar,
            footer: Footer
        },
        name: 'recipeDetail'
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
        path: '/adminDashboard',
        components:{
           default: AdminDashboard,
            navbar: NavbarAdmin
        },
        name: 'adminDashboard'
    },
    {
        path: '/adminEdit',
        components:{
            default: AdminEdit,
            navbar: NavbarAdmin},
        name: 'adminEdit'
    },

]

export const router = createRouter({
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
// Requiring module
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main_ from '../view/Main_.vue'
import Page_Location from '../view/Page_Location_.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main_
    },
    {
        path: '/:path',
        name: 'Page_Location',
        component: Page_Location
    }
    // {
    // 	path: '/about',
    // 	name: 'About',
    // 	component:()=> import(
    // 		'../views/About.vue'
    // 	)
    // },
]

// Create Vue Router Object
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router

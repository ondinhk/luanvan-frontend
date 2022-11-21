// Requiring module
import Vue from 'vue'
import VueRouter from 'vue-router'
import Main_ from '../view/Main_.vue'
import Page_Location_ from '../view/Page_Location_.vue'
import Single_Page_ from '../view/Single_Page_.vue'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Main_
    },
    {
        path: '/location',
        name: 'Page_Location',
        component: Page_Location_
    },
    {
        path: '/hotel',
        name: 'Single_Page',
        component: Single_Page_
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

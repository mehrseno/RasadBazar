import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Ad from '../views/Ad.vue'


const routes = [
   
    {
        path: '/',
        name: 'Home',
        component: Home,
        alias: ['/home', '/index']
    },
    {
        path: '/ad',
        name: 'Ad',
        component: Ad,
    }

    
]


const router = createRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            tryScrollToAnchor(to.hash, 2000, 100);
        }
    },
    history: createWebHistory(process.env.BASE_URL),
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresLogin) && !store.state.isAuthenticated) {
        next({ name: 'Login', query: { to: to.path } })
    } else {
        next()
    }
})


export default router
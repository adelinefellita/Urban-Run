import {
    createRouter,
    createWebHashHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WomenView from '../views/WomenView.vue'
import MenView from '../views/MenView.vue'
import KatalogDetail from '../views/KatalogDetailView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/men',
        name: 'MenView',
        component: MenView
    },
    {
        path: '/women',
        name: 'WomenView',
        component: WomenView
    },
    {
        path: '/women/:id',
        name: 'KatalogDetail',
        component: KatalogDetail
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
import {
    createRouter,
    createWebHashHistory
} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WomenView from '../views/WomenView.vue';
import MenView from '../views/MenView.vue';
import KatalogDetailView from '../views/KatalogDetailView.vue';
import CartView from '../views/1CartView.vue'; // Fixed the import

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
        path: '/KatalogDetail/:id',
        name: 'KatalogDetail',
        component: KatalogDetailView,
        props: true
    },
    {
        path: '/cart',
        name: 'CartView',
        component: CartView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
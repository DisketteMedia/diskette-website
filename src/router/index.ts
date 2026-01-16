import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../components/pages/404.vue'),
    },
    {
        path: '/',
        name: 'Landing',
        component: () => import('../components/pages/Blank.vue'),
    },
    {
        path: '/kitchen',
        name: 'Kitchen',
        meta: { title: 'Diskette Kitchen' },
        component: () => import('../components/pages/Kitchen.vue'),
    },
    {
        path: '/media',
        name: 'Media',
        meta: { title: 'Diskette Media' },
        component: () => import('../components/pages/Media.vue'),
    },
    {
        path: '/glow',
        name: 'Glow',
        meta: { title: 'Diskette Glow' },
        component: () => import('../components/pages/Glow.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return {
            el: '#content',
            top: 90,
        }
    }
});

export default router;

router.beforeEach((to, ) => {
    const defaultTitle = 'Diskette TV';
    document.title = to.meta.title as string || defaultTitle;
});
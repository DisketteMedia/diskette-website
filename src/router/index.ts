import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('../views/404.vue'),
    },
    {
        path: '/',
        name: 'Landing',
        component: () => import('../views/Blank.vue'),
    },
    {
        path: '/kitchen',
        name: 'Kitchen',
        meta: { title: 'Diskette Kitchen' },
        component: () => import('../views/Kitchen.vue'),
    },
    {
        path: '/media',
        name: 'Media',
        meta: { title: 'Diskette Media' },
        component: () => import('../views/Media.vue'),
    },
    {
        path: '/glow',
        name: 'Glow',
        meta: { title: 'Diskette Glow' },
        component: () => import('../views/Glow.vue'),
    },
    {
        path: '/subscribed',
        name: 'Subscribed',
        meta: { title: 'Diskette Glow' },
        component: () => import('../views/EmailConfirmed.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, _from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            };
        } else {
            return {
                el: '#content',
                top: 95,
            };
        }
    },
});

export default router;

router.beforeEach((to, ) => {
    const defaultTitle = 'Diskette.tv';
    document.title = to.meta.title as string || defaultTitle;
});
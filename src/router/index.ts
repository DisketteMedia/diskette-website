import { createRouter, createWebHistory } from 'vue-router';
import Kitchen from "../components/pages/Kitchen.vue";
import Media from "../components/pages/Media.vue";
import Glow from "../components/pages/Glow.vue";

const routes = [
    {
        path: '/',
        name: 'Landing',
        meta: {
            title: 'Diskette.TV',
            description: 'The home of the Diskette Kitchen, a collection of thoughtful, high quality videos about technology, from past to present.'
        }
    },
    {
        path: '/kitchen',
        component: Kitchen,
        name: 'Kitchen',
        meta: {
            title: 'Diskette Kitchen',
            description: 'Thoughtful, high quality videos about technology, from past to present.'
        }
    },
    {
        path: '/media',
        component: Media,
        name: 'Media',
        meta: {
            title: 'Diskette Media',
            description: 'Media production and products behind Diskette Kitchen'
        }
    },
    {
        path: '/glow',
        component: Glow,
        name: 'Glow',
        meta: {
            title: 'Diskette Glow',
            description: 'The unique touch every room needs.'
        }
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

router.afterEach((to) => {
    if (to.meta.title) {
        let title;
        if (typeof to.meta.title === 'function') {
            title = to.meta.title(to);
        }
        else {
            title = to.meta.title;
        }
        document.title = title;
    }
});

export default router;
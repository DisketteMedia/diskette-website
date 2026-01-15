import { createRouter, createWebHistory } from 'vue-router';
import Kitchen from "../components/pages/Kitchen.vue";
import Media from "../components/pages/Media.vue";
import Glow from "../components/pages/Glow.vue";

const routes = [
    { path: '/kitchen', component: Kitchen, name: 'Kitchen'},
    { path: '/media', component: Media, name: 'Media' },
    { path: '/glow', component: Glow, name: 'Glow'},
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
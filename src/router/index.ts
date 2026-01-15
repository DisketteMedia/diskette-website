import { createRouter, createWebHistory } from 'vue-router';
import Kitchen from "../components/pages/Kitchen.vue";
import Media from "../components/pages/Media.vue";

const routes = [
    { path: '/kitchen', component: Kitchen, name: 'Kitchen'},
    { path: '/media', component: Media, name: 'Media' }
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
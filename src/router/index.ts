import { createRouter, createWebHistory } from 'vue-router';
import Kitchen from "../components/pages/Kitchen.vue";

const routes = [
    { path: '/', component: Kitchen, name: 'Kitchen'},
];



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import TodoPage from '../pages/TodoPage.vue';

const routes = [
    {
        path: '/', component: HomePage, meta: {
            title: 'Home',
        },
    },
    {
        path: '/todo', component: TodoPage, meta: {
            title: 'ToDo',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

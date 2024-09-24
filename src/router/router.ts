import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import TodoPage from '../pages/TodoPage.vue';

const routes = [
    { path: '/', component: HomePage },
      { path: '/add-todo', component: TodoPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;

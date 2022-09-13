import { createWebHistory, createRouter } from 'vue-router';

import SingIn from './components/SingIn.vue';
import HomeComponent from './components/HomeComponent.vue';
import DashboardComponent from './components/DashboardComponent.vue';

const routes = [
	{
        path: '/',
        name: 'Home',
        component: () => import('./components/template.vue'),
        redirect: '/home',
        children:[
            {
                path: '/home',
                name: 'Home',
                component: HomeComponent
            },
            {
                path: '/singin',
                name: 'SingIn',
                component: SingIn
            },
            {
                path: '/dashboard',
                name: 'DashBoard',
                component: DashboardComponent
            },
        ]
    }
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
import { createWebHistory, createRouter } from 'vue-router';
import Register from './components/Register'
import Login from './components/Login'
const routes=[
    {
        path:'/',
        name:'Register',
        component:Register

    },
    {
        path:'/login',
        name:'Login',
        component:Login

    }
];
const router=createRouter({
	history: createWebHistory(),
	routes,
});
export default router;
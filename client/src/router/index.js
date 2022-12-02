
import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegisterPage from '../pages/RegisterPage.vue';
import CategoryPage from '../pages/CategoryPage.vue';
import ProductItemPage from '../pages/ProductItemPage.vue';


const routes = [

    {path:'/', name:'Home', component:HomePage},
    {path:'/login', name:'Login', component:LoginPage},
    {path:'/register', name:'Register', component:RegisterPage},
    {path:'/catalog/:category', name:'Category', component:CategoryPage},
    {path:'/catalog/:id', name:'Product', component:ProductItemPage},
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = to.name
    next();
  })

export default router;


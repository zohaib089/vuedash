import Vue from "vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ './components/Auth/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ './components/Auth/Register.vue')
  },
  {
    path: '/dash',
    name: 'Main',
    component: () => import(/* webpackChunkName: "about" */ './components/Dashboard/Dashboard.vue'),
    children: [
        { path: '', component: ()=> import('./components/Dashboard/DashHome.vue') },
        { path: 'products', component: ()=> import('./components/Dashboard/Products.vue') },
        { path: 'orders', component: ()=> import('./components/Dashboard/Orders.vue') },

      
      ],
  },
 
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
  });

export default router
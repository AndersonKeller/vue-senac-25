import { createRouter, createWebHistory } from "vue-router";


const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    params: true,
    component: () => import(/* webpackChunkName: "home" */ "@/view/Home.vue"),
    meta: { title: "HOME", requiresAuth: false },
  },
  {
    path: "/login",
    name: "Login",
    props: true,
    params: true,
    component: () => import(/* webpackChunkName: "home" */ "@/view/Login.vue"),
    meta: { title: "LOGIN", requiresAuth: false },
  },
];

  const config = {
    history: createWebHistory(),
    routes,
  };

  export const router = new createRouter(config);
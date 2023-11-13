import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginPage",
    component: () => import("../components/pages/LogIn.vue"),
    meta: {},
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../components/pages/LogIn.vue"),
    meta: {},
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../components/pages/Home.vue"),
    meta: {},
  },
  {
    path: "/Account",
    name: "Account",
    component: () => import("../components/pages/Account.vue"),
    meta: {},
  },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

export default router;

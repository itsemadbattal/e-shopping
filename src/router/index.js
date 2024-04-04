import { createRouter, createWebHistory } from "vue-router";

import TheHome from "../components/pages/TheHome.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },
    // { path: "/favorites", component: TheHome },
    // { path: "/cart", component: TheHome },
  ],
});

export default router;

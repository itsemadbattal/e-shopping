import { createRouter, createWebHistory } from "vue-router";

import TheHome from "../components/pages/TheHome.vue";
import ProductDetailsPage from "@/components/pages/ProductDetailsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },

    { path: "/products", component: TheHome },
    {
      path: "/products/:productId",
      component: ProductDetailsPage,
      params: true,
    },

    { path: "/profile" },
    // { path: "/favorites", component: TheHome },
    // { path: "/cart", component: TheHome },
  ],
});

export default router;

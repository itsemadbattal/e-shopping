import { createRouter, createWebHistory } from "vue-router";

import TheHome from "../components/pages/TheHome.vue";
import ProductDetailsPage from "@/components/pages/ProductDetailsPage.vue";
import UserCart from "@/components/pages/UserCart.vue";
import Favorites from "@/components/pages/Favorites.vue";

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
    { path: "/favorites", component: Favorites },
    {
      path: "/cart",
      component: UserCart,
    },
  ],
});

export default router;

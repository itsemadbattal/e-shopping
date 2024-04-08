import { createRouter, createWebHistory } from "vue-router";

import TheHome from "../components/pages/TheHome.vue";
import ProductDetailsPage from "@/components/pages/ProductDetailsPage.vue";
import Favorites from "@/components/pages/Favorites.vue";
import Categories from "@/components/pages/Categories.vue";
import NotFound from "@/components/pages/NotFound.vue";

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

    { path: "/favorites", component: Favorites },
    { path: "/categories", component: Categories },

    //not found page
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";

import TheHome from "../components/pages/TheHome.vue";
import ProductDetails from "../components/products/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: TheHome },

    { path: "/products", component: TheHome },
    { path: "/products/:productId", component: ProductDetails, params: true },
    // { path: "/favorites", component: TheHome },
    // { path: "/cart", component: TheHome },
  ],
});

export default router;

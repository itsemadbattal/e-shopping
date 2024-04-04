import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BaseCard from "./components/UI/BaseCard.vue";
import ProductItem from "./components/products/ProductItem.vue";
import ProductList from "./components/products/ProductList.vue";

const app = createApp(App);

app.use(router);

app.component("base-card", BaseCard);
app.component("product-item", ProductItem);
app.component("product-list", ProductList);

app.mount("#app");

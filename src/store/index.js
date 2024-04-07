import { createStore } from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const store = createStore({
  state() {
    return {
      //originalProducts is used to help reset the product list to the old full list if search term is empty
      originalProducts: [],

      loadedProducts: [],
      sliderProducts: [],
      likedProducts: [],

      categories: [],

      fetchedProduct: {},

      cart: { products: [], total: 0 },
      isCartOpen: null,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;

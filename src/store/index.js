import { createStore } from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const store = createStore({
  state() {
    return {
      loadedProducts: [],
      sliderProducts: [],
      categories: [],
      likedProducts: [],
      fetchedProduct: {},
      cart: { products: [], total: 0 },
      isCartOpen: false,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;

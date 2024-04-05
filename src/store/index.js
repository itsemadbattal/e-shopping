import { createStore } from "vuex";

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

const store = createStore({
  state() {
    return {
      loadedProducts: [],
      sliderProducts: [],
      likedProducts: [],
      fetchedProduct: {},
      cart: [],
      isCartOpen: false,
    };
  },
  mutations,
  actions,
  getters,
});

export default store;

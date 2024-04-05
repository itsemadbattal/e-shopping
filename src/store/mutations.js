export default {
  setProducts(state, data) {
    state.loadedProducts = data;
  },
  setFetchedProduct(state, data) {
    state.fetchedProduct = data;
  },
};

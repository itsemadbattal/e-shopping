export default {
  setProducts(state, data) {
    state.loadedProducts = data;
  },
  setFetchedProduct(state, data) {
    state.fetchedProduct = data;
  },
  setFetchedProductsForSlider(state, data) {
    state.sliderProducts = data;
  },
  setCategories(state, data) {
    state.categories = data;
  },
  setCart(state, data) {
    console.log(data);
    state.cart = data;
  },
  setCartVisibility(state) {
    state.isCartOpen = !state.isCartOpen;
  },
  setLikedProducts(state, data) {
    state.likedProducts = data;
  },
};

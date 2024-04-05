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
  setCart(state, data) {
    state.cart = data;
  },
  setCartVisibility(state) {
    state.isCartOpen = !state.isCartOpen;
  },
  setLikedProducts(state, data) {
    state.likedProducts.push(data);
    // state.likedProducts = data;
  },
};

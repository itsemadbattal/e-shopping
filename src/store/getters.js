export default {
  fetchedProducts(state) {
    return state.loadedProducts;
  },
  fetchedProductsForSlider(state) {
    return state.sliderProducts;
  },
  fetchedCategories(state) {
    return state.categories;
  },
  likedProducts(state) {
    return state.likedProducts;
  },
  fetchedProduct(state) {
    return state.fetchedProduct;
  },
  fetchedCart(state) {
    return state.cart;
  },
  cartVisibility(state) {
    return state.isCartOpen;
  },
};

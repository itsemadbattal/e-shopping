export default {
  fetchedProducts(state) {
    return state.loadedProducts;
  },
  fetchedProductsForSlider(state) {
    return state.sliderProducts;
  },
  likedProducts(state) {
    return state.likedProducts;
  },
  fetchedProduct(state) {
    return state.fetchedProduct;
  },
};

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
    state.cart = data;
  },

  increaseProductQuantity(state, data) {
    const productIndex = state.cart.products.findIndex(
      (product) => product.id === data.productId
    );
    const price = state.cart.products[productIndex].price;

    if (productIndex !== -1) {
      state.cart.products[productIndex].quantity++;
      state.cart.total = Math.round((state.cart.total + price) * 100) / 100;
    } else {
      console.error("Product not found in cart");
    }
  },

  decreaseProductQuantity(state, data) {
    const productIndex = state.cart.products.findIndex(
      (product) => product.id === data.productId
    );

    if (productIndex !== -1) {
      const price = state.cart.products[productIndex].price;

      state.cart.total = Math.round((state.cart.total - price) * 100) / 100;
      state.cart.products[productIndex].quantity--;

      if (state.cart.products[productIndex].quantity === 0) {
        state.cart.products.splice(productIndex, 1);
      }
    } else {
      console.error("Product not found in cart");
    }
  },

  setCartVisibility(state, data) {
    console.log(data);
    state.isCartOpen = data;
  },

  setLikedProducts(state, data) {
    state.likedProducts = data;
  },
};

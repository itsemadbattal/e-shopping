export default {
  setProducts(state, data) {
    state.loadedProducts = data;
    state.originalProducts = data;
  },

  setSearchedProducts(state, data) {
    const searchTerm = data.searchTerm.toLowerCase();

    if (searchTerm === "") {
      // If the search term is empty, reset the products to the original full list
      state.loadedProducts = state.originalProducts;
    } else {
      // Filter products based on the search term
      state.loadedProducts = state.originalProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchTerm)
      );
    }
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

  addProductToCart(state, data) {
    const productIndex = state.cart.products.findIndex(
      (product) => product.id === data.id
    );
    if (productIndex !== -1) {
      const existingProduct = state.cart.products[productIndex];
      existingProduct.quantity++;
      state.cart.total += data.price;
    } else {
      const newProduct = { ...data, quantity: 1 };
      state.cart.products.push(newProduct);
      state.cart.total += data.price;
    }
  },

  setCartVisibility(state, data) {
    state.isCartOpen = data;
  },

  setLikedProducts(state, data) {
    state.likedProducts = data;
  },
};

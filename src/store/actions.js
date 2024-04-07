import axios from "axios";

import fetchSingleProduct from "../util/fetchSingleProduct";

export default {
  async fetchProducts(context, payload) {
    try {
      //if cat is not provided
      if (payload.cat.length === 0) {
        const res = await axios.get(
          "https://fakestoreapi.com/products?sort=" + payload.sort
        );
        if (res.status !== 200) {
          throw Error("Could not fetch products");
        }
        const data = await res.data;
        context.commit("setProducts", data);
      }
      //if cat is provided
      else {
        const res = await axios.get(
          "https://fakestoreapi.com/products/category/" + payload.cat
        );
        if (res.status !== 200) {
          throw Error("Could not fetch products");
        }
        const data = await res.data;
        context.commit("setProducts", data);
      }
    } catch (error) {
      console.error(error);
    }
  },

  async fetchCategories(context) {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      if (res.status !== 200) {
        throw Error("Could not fetch categories");
      }
      const data = await res.data;
      context.commit("setCategories", data);
    } catch (error) {
      console.error(error);
    }
  },

  searchProductByName(context, payload) {
    context.commit("setSearchedProducts", payload);
  },

  async fetchProductsForSlider(context, payload) {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products?limit=" + payload
      );
      if (res.status !== 200) {
        throw Error("Could not fetch products for slider");
      }
      const data = await res.data;
      context.commit("setFetchedProductsForSlider", data);
    } catch (error) {
      console.error(error);
    }
  },

  async fetchCategories(context) {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      if (res.status !== 200) {
        throw Error("Could not fetch categories");
      }
      const data = await res.data;
      context.commit("setCategories", data);
    } catch (error) {
      console.error(error);
    }
  },

  //this function is not in use as there is no need to fetch a pre populated cart
  //we create one on the fly and store it in vuex store
  async fetchCart(context) {
    try {
      const res = await axios.get("https://fakestoreapi.com/carts/1");
      if (res.status !== 200) {
        throw Error("Could not fetch cart");
      }
      const data = await res.data;

      let cartArray = [];
      let total = 0;
      for (const productItem of data.products) {
        const productId = productItem.productId;
        const quantity = productItem.quantity;
        // Fetch product details using productId
        const product = await fetchSingleProduct(productId);
        total += product.price * quantity;

        // Add product details and quantity to the cartArray
        cartArray.push({ ...product, quantity });
      }
      const finalCartArray = { products: cartArray, total: total };

      // console.log(finalCartArray);

      context.commit("setCart", finalCartArray);
    } catch (error) {
      console.error(error);
    }
  },

  setCartVisible(context, payload) {
    context.commit("setCartVisibility", payload);
  },

  async addToLikedProducts(context, product) {
    const oldArray = context.state.likedProducts;
    const productExist = context.state.likedProducts.find(
      (prod) => prod.id === product.id
    );
    let newArray;
    if (productExist) {
      // console.log("exists");
      newArray = oldArray.filter((prod) => prod.id !== productExist.id);
      context.commit("setLikedProducts", newArray);
    } else {
      newArray = [...oldArray, product];
      // console.log("doesnt exist");
      context.commit("setLikedProducts", newArray);
    }
  },

  addToCart(context, payload) {
    context.commit("addProductToCart", payload);
  },

  increaseQuantity(context, payload) {
    const { productId, price } = payload;
    context.commit("increaseProductQuantity", { productId, price });
  },

  decreaseQuantity(context, payload) {
    const { productId, price } = payload;
    context.commit("decreaseProductQuantity", { productId, price });
  },
};

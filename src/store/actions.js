import axios from "axios";

import fetchSingleProduct from "../util/fetchSingleProduct";

export default {
  async fetchProducts(context, cat) {
    try {
      //if cat is not provided
      if (cat.length === 0) {
        const res = await axios.get("https://fakestoreapi.com/products");
        if (res.status !== 200) {
          throw Error("Could not fetch products");
        }
        const data = await res.data;
        context.commit("setProducts", data);
      }
      //if cat is not provided
      else {
        const res = await axios.get(
          "https://fakestoreapi.com/products/category/" + cat
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

  async fetchProductsForSlider(context) {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=5");
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

      console.log(finalCartArray);

      context.commit("setCart", finalCartArray);
    } catch (error) {
      console.error(error);
    }
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
};

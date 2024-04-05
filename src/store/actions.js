import axios from "axios";

export default {
  async fetchProducts(context) {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      if (res.status !== 200) {
        throw Error("Could not fetch products");
      }
      const data = await res.data;
      context.commit("setProducts", data);
    } catch (error) {
      console.error(error);
    }
  },

  async fetchProductsForSlider(context) {
    try {
      const res = await axios.get("https://fakestoreapi.com/products?limit=5");
      if (res.status !== 200) {
        throw Error("Could not fetch products");
      }
      const data = await res.data;
      context.commit("setFetchedProductsForSlider", data);
    } catch (error) {
      console.error(error);
    }
  },

  async fetchSingleProduct(context, id) {
    // console.log(id);
    try {
      const res = await axios.get("https://fakestoreapi.com/products/" + id);
      if (res.status !== 200) {
        throw Error("Could not fetch product details");
      }
      const data = await res.data;
      // console.log(data);
      // context.commit("setFetchedProduct", data);
      return data;
    } catch (error) {
      console.error(error);
    }
  },
};

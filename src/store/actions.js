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
};

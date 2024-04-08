import axios from "axios";

// this utility function is used for fetching single products to be displayed in the cart
//used in fetchCart action

export default async function fetchSingleProduct(id) {
  try {
    const res = await axios.get("https://fakestoreapi.com/products/" + id);
    if (res.status !== 200) {
      throw Error("Could not fetch product details");
    }
    // console.log(res);
    const data = await res.data;
    // console.log("product", data);
    return data;
  } catch (error) {
    console.error(error);
  }
}

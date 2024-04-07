# e-shopping

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### API Used:

The API used for this project is `https://fakestoreapi.com`

### Routes

1. `/` Home page.
1. `/products` Products page.
1. `/products/:productId` Product details page, (productId) is a dynamic segment used to fetch single product data.
1. `/favorites` Liked products page.
1. `/categories` Categories page.

### Vuex

1. Vuex was used to manage application-wide state.
1. Vuex store was used to manage fetched products, slider products (static products used in the slider in home page), liked products, cart visiblity, and categories, cart data.
1. Best practices were followed in terms of using store mutations that get called by store actions which manipualte the store state.
1. state fetching was done with the store getters.

### Pages

1. Home Page:

   1. Users can browse through products.
   1. Users can filter products by categories.
   1. Users can filter products by name which is limited to search by title.
   1. Users can add products to liked products page by clicking on the heart icon.
   1. Users can scroll through the slider at the top of the page to view some static products.
   1. Users can sort products asc or desc.
   1. Users can click on products which will trigger a navigation to the corrosponding product details page.

1. Product Details Page:

   1. Users can add product to cart.
   1. Users can add product to liked products.

1. Favorite Products Page:

   1. This page is in charge of displaying list of products that the user makred as favorite.
   1. Users can unmark products in this page in which they will be removed from the page.

1. User Cart Page:
   1. Initially, when this page is loaded, the client fetched a pre defind cart from the mentioned API.
   1. The fetched is already populated with some data including product IDs, quantity and data.
   1. The client then fetches the corrosponding data to display each product along side its details in the user cart page.
   1. Users can increase/decrease the quantity of the producats in cart.
   1. Users can add new products to the cart which will save the new cart in the store only due to limitations of the API where users cannot store their data in the API's database as mentioned in their offical documentations.

NOTES: TALK ABOUT CART LIMITATIONS

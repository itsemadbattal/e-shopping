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

### API Used

The API used for this project is `https://fakestoreapi.com`

### Website Live URL

### API Used

`https://e-shopping-eosin.vercel.app`

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

   1. Initially, when this page is loaded, the client created a cart on the fly.
   1. The cart contains an empty array of products and a total set to zero.
   1. Users can add new products to the cart which will save the new cart to the store only due to limitations of the API where users cannot store their data in the API's database as mentioned in their offical documentations `https://fakestoreapi.com`.
   1. Users can increase/decrease the quantity of the products in cart which will fire up an action to update the cart stored in Vuex store.
   1. Additional data is present on this page. For example, product image, product price, product quantity, product total price in cart (product price \* product quantity), sub-total, discounts, shipping fees, and total price of the cart.

### Folder Structure

1. Navigating through the prject structure will show seperation of concerns when it comes to reusing code and clean code.
1. Inside the components folder in the src folder, six main folders can be found:
   1. Pages folder, this folder is mainly to connect the routes to a single file. Essentially, this page is a collection of other components.
   1. Products folder, this folder contains products related logic. For example, products item, which is a reusable component whenever product item is needed which will help with minimizing code duplications.
   1. Layout folder, this folder is concerned with some fixed UI components. For instance, Filters component which is being used to wrap the search bar and the category filtering into one reusable component.
   1. UI folder. this folder is the place where reusable UI elements are stored. For example, BaseCard which is used to provide card-looking products.
1. In the src folder, store folder can be found:

   1. This is where all Vuex store is kept.
   1. index which is the main file of the store where state is defined along side importing mutations, actions, and getters.
   1. actions, getters, and mutations files. Each of these files corrospond to a different aspect of the Vuex store logic.

1. Router folder:
   1. this folder has an index file which houses all the logic related to routes and their components.

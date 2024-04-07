<template>
  <TheTopNav />
  <TheSidebar />
  <cart-dialog v-if="cartVisible" />
  <main>
    <router-view></router-view>
  </main>
</template>


<script>

import TheSidebar from './components/layout/TheSidebar.vue';
import CartDialog from './components/cart/CartDialog.vue'
import TheTopNav from './components/layout/TheTopNav.vue'

export default {
  components: {
    TheSidebar,
    CartDialog,
    TheTopNav
  },
  computed: {
    cartVisible() {
      return this.$store.getters.cartVisibility;
    }
  }
}


</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>
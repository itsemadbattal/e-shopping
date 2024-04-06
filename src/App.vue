<template>
  <TheNav />
  <cart-dialog v-if="cartVisible" />
  <main>
    <router-view></router-view>
  </main>
</template>


<script>
import TheNav from './components/layout/TheNav.vue'
import CartDialog from './components/cart/CartDialog.vue'

export default {
  components: {
    TheNav,
    CartDialog
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
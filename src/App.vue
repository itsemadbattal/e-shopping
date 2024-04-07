<template>
  <TheSidebar />
  <cart-dialog v-if="cartVisible" @close="closeCart" />
  <main>
    <router-view></router-view>
  </main>
</template>


<script>
import TheSidebar from './components/layout/TheSidebar.vue';
import CartDialog from './components/cart/CartDialog.vue'

export default {
  components: {
    TheSidebar,
    CartDialog
  },
  computed: {
    cartVisible() {
      return this.$store.getters.cartVisibility;
    }
  },
  methods: {
    closeCart() {
      this.$store.commit('setCartVisibility', false);
    }
  },

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
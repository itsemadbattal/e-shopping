<template>
  <TheNav />
  <main>
    <router-view></router-view>
  </main>
</template>


<script>


import TheNav from './components/layout/TheNav.vue'
export default {
  components: {
    TheNav
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
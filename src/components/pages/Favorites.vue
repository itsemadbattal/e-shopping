<template>

    <div v-for="fav in favs" :key="fav.id">
        <p>{{ fav.title }}</p>
    </div>

</template>

<script>
export default {
    computed: {
        favs() {
            return this.$store.getters.likedProducts
        }
    }
}
</script>
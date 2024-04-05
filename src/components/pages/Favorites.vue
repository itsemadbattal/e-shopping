<template>

    <div>

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
<template>

    <ul class="productList">
        <base-card v-for="fav in favs" :key="fav.id">
            <product-item :product="fav">{{ fav.title }}</product-item>
        </base-card>
    </ul>

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

<style>
.productList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-left: 5rem;
    animation: slideFromButtom 0.3s ease-in;
}
</style>
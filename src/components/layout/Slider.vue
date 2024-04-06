<template>
    <div class="product-wrapper">
        <slider-card v-for="product in products" class="product">
            <p>{{ product.price }}</p>
        </slider-card>
    </div>
</template>

<script>

export default {
    computed: {
        products() {
            return this.$store.getters.fetchedProductsForSlider;
        }
    },
    mounted() {
        this.$store.dispatch('fetchProductsForSlider');
    }
}
</script>

<style scoped>
.product-wrapper {
    display: flex;
    gap: 2rem;
    overflow-x: auto;
}

.product {
    width: 90rem;
}
</style>
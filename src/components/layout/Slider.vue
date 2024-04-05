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
    /* justify-content: space-between; */
    gap: 2rem;
    overflow-x: auto;

    margin-left: 5rem;
}

.product {
    width: 90rem;
    /* Change the width as desired */
    /* Additional styling for product card */
}

@media (max-width: 766px) {
    .product-wrapper {
        margin-left: 0;
    }

}
</style>
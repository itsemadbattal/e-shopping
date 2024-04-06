<template>
    <ul class="productList">
        <base-card v-for="product in products" :key="product.id">
            <product-item :product="product" />
        </base-card>
    </ul>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.getters.fetchedProducts;
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts', "");
    }
}
</script>

<style scoped>
.productList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    animation: slideFromButtom 0.3s ease-in;
}


@keyframes slideFromButtom {
    from {
        opacity: 0;
        transform: translateY(60px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>

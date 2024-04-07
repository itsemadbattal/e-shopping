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
        this.$store.dispatch('fetchProducts', { cat: "", sort: "asc" });
    }
}
</script>

<style scoped>
.productList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 4rem;
    animation: slideFromButtom 0.3s ease-in;
}


@keyframes slideFromButtom {
    from {
        opacity: 0;
        transform: translateY(60px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>

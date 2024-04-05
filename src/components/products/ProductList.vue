<template>
    <ul class="productList">
        <base-card v-for="product in products" :key="product.id">
            <product-item :id="product.id" :title="product.title" :price="product.price"
                :description="product.description" :image="product.image" />
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
        this.$store.dispatch('fetchProducts');
    }
}
</script>

<style>
.productList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
</style>

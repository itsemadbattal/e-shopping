<template>
    <ul class="productList">
        <base-card v-for="product in products" :key="product.id">
            <product-item :id="product.id" :title="product.title" :price="product.price"
                :description="product.description" />
        </base-card>
    </ul>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            products: []
        }
    },
    methods: {
        async fetchProducts() {
            const res = await axios.get("https://fakestoreapi.com/products")
            if (res.status !== 200) {
                throw Error("Could not fetch products")
            }
            const data = await res.data
            console.log(data);
            this.products = data
        }
    },
    beforeMount() {
        this.fetchProducts()
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
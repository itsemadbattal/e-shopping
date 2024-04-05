<template>
    <ul class="productList">
        <base-card>
            <product-item :id="product.id" :title="product.title" :price="product.price"
                :description="product.description" :image="product.image" />
        </base-card>
    </ul>
</template>


<script>
export default {
    data() {
        return {
            productId: this.$route.params.productId,
            product: {}
        }
    },
    async created() {
        const product = await this.$store.dispatch("fetchSingleProduct", this.productId)
        this.product = product;
    },


}
</script>

<style>
img {
    width: 100%;
    height: 8rem;
    object-fit: contain;
    margin-bottom: 2rem;
}

.info {
    display: flex;
    justify-content: space-between;
}
</style>
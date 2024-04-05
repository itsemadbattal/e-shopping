<template>
    <li class="product" @click="navigateToProduct">
        <div class="image-container">
            <img :src="product.image" alt="product image" />
        </div>
        <div class="details">
            <p>{{ product.title }}</p>
            <div class="info">
                <strong>
                    <p class="price">{{ product.price }}IQD</p>
                </strong>
                <strong>
                    <p>Size: S M L</p>
                </strong>
            </div>
        </div>
    </li>
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

<style scoped>
.product {

    margin-bottom: 2rem;
}

.image-container {
    flex: 1;
    /* This makes the image container take up remaining space */
    margin-right: 1rem;
    /* Add some spacing between image and details */
}

.image-container img {
    width: 20%;
    height: 20%;
    object-fit: contain
}

.details {
    flex: 2;
    /* This makes the details container take up twice the space of image container */
    display: flex;
    flex-direction: column;
}

.info {
    display: flex;
    justify-content: space-between;
}
</style>
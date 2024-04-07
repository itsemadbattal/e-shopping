<template>
    <div class="wrapper">
        <slider-card v-for="product in products" class="product" @click="navigateToProduct(product.id)">
            <!-- <div class="image-container">
                <img :src="product.image" />
            </div> -->

            <div class="header">
                <div class="subheader">
                    <h1>{{ product.category.toUpperCase() }}</h1>
                    <h3>{{ product?.title?.slice(0, 15) }}...</h3>
                </div>
                <img :src="product.image" alt="product image" />
            </div>

            <div class="info">
                <strong>
                    <p>{{ product.price.toFixed(2) }} IQD</p>
                </strong>
                <strong>
                    <p>{{ product.rating.rate }}<span style="color:#FBDE9E;">&starf;</span>
                    </p>
                </strong>
            </div>
        </slider-card>
    </div>

</template>

<script>

export default {
    data() {
        return {
            limit: 3
        }
    },
    computed: {
        products() {
            return this.$store.getters.fetchedProductsForSlider;
        }
    },
    methods: {
        navigateToProduct(productId) {
            this.$router.push("/products/" + productId);
        },
    },
    mounted() {
        this.$store.dispatch('fetchProductsForSlider', this.limit);
    }
}
</script>

<style scoped>
.wrapper {
    display: flex;
    overflow-x: auto;
    gap: 2rem;
}

.product {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    cursor: pointer;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;
}

.header h1 {
    margin-bottom: 1rem;
}

.header img {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
}

/* 
.image-container {
    margin: 0 auto;
} */

.image-container img {
    width: 40%;
    height: 10%;
    object-fit: cover;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

@media (max-width: 766px) {
    .header {
        font-size: 12px;
    }

    .info {
        font-size: 12px;
    }
}
</style>
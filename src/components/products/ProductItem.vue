<template>

    <li class="product" @click="addProductToFav">
        <div class="header">
            <img :src="product.image" alt="product image" />
            <iconify-icon icon="ph:heart" color="black" width="40" height="40" />
        </div>
        <p class="product-title">{{ product.title.length < 50 ? product.title : product.title.slice(0, 50) + "..."
                }}</p>
                <div class="info">
                    <strong>
                        <p class="price">{{ product.price }}IQD</p>
                    </strong>
                    <strong>
                        <p>Size: S M L</p>
                    </strong>
                </div>
    </li>

    <div class="rating">
        <p>{{ product.rating.rate }} ({{ product.rating.count }}) <span style="color:#FBDE9E;">&starf;</span>
        </p>
    </div>

</template>

<script>
export default {
    props: ["product"],

    methods: {
        navigateToProduct() {
            this.$router.push("/products/" + this.id);
        },
        addProductToFav() {
            this.$store.dispatch("addToLikedProducts", this.product);
            console.log(this.$store.getters.likedProducts);
        }
    }


}
</script>

<style scoped>
.header {
    display: flex;
}

.product {
    cursor: pointer;
}

.product img {
    width: 100%;
    height: 8rem;
    object-fit: contain;
    margin-bottom: 2rem;
    /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.1); */
}

.product-title {
    margin-bottom: 1rem;
}

.rating {
    display: flex;
    justify-content: center;
    align-items: center;
}


.info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

.action {
    float: right;
}

.action-button {
    cursor: pointer;
}


@media (max-width: 766px) {
    .product-title {
        font-size: 12px;
    }

    .info {
        font-size: 12px;
    }

    .rating p {
        font-size: 12px;
    }


}
</style>

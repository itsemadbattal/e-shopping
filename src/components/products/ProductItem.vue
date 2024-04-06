<template>
    <li class="product" @click="navigateToProduct">
        <img :src="product.image" alt="product image" />
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
                <div class="rating">
                    <p>{{ product.rating.rate }} ({{ product.rating.count }}) <span
                            style="color:#FBDE9E;">&starf;</span>
                    </p>
                </div>
    </li>

    <div class="heart-container" @click="addProductToFav">
        <iconify-icon class="heart-icon" icon="ph:heart" color="black" width="30" height="30" />
    </div>

</template>

<script>
export default {
    props: ["product"],

    methods: {
        navigateToProduct() {
            this.$router.push("/products/" + this.product.id);
        },
        addProductToFav(event) {
            //stopping the event propogation so it doesnt clash with navigating to product details
            event.stopPropagation();

            this.$store.dispatch("addToLikedProducts", this.product);
        }
    }
}
</script>

<style scoped>
.product {
    cursor: pointer;
}


.heart-container {
    cursor: pointer;
    width: 1rem;
    float: right;
    margin: 0 1rem;
}


.product img {
    width: 100%;
    height: 8rem;
    object-fit: contain;
    margin-bottom: 1rem;
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

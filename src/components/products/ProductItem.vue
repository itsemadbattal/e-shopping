<template>

    <li class="product" @click="navigateToProduct">
        <img :src="image" alt="product image" />
        <p class="product-title">{{ title.length < 50 ? title : title.slice(0, 50) + "..." }}</p>
                <div class="info">
                    <strong>
                        <p class="price">{{ price }}IQD</p>
                    </strong>
                    <strong>
                        <p>Size: S M L</p>
                    </strong>
                </div>
    </li>

    <div class="rating">
        <p>{{ rating.rate }} ({{ rating.count }}) <span style="color:#FBDE9E;">&starf;</span>
        </p>
    </div>
    <div class="action">
        <iconify-icon class="action-button" icon="ic:twotone-plus" scolor="black" width="25" height="25" />
    </div>
</template>

<script>
export default {
    props: ["id", "title", "price", "description", "image", "rating"],

    methods: {
        navigateToProduct() {
            this.$router.push("/products/" + this.id)
        }
    }
}
</script>

<style scoped>
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

<template>
    <li class="product">
        <div class="image-container">
            <img :src="product.image" alt="product image" />
        </div>
        <div class="details">
            <h1>{{ product.title }}</h1>
            <p>{{ product.description }}</p>
            <div class="info">
                <strong>
                    <p>{{ product?.price?.toFixed(2) }} IQD</p>
                </strong>
                <p>Size: S M L</p>
            </div>
            <div class="action">
                <button @click="addToCart">ADD TO CART</button>
            </div>
        </div>

    </li>
</template>


<script>

import axios from "axios";
export default {
    data() {
        return {
            productId: this.$route.params.productId,
            product: {}
        }
    },
    async created() {
        const productData = await this.fetchSingleProduct(this.productId)
        this.product = productData
    },

    methods: {
        async fetchSingleProduct(id) {
            try {
                const res = await axios.get("https://fakestoreapi.com/products/" + id);
                if (res.status !== 200) {
                    throw Error("Could not fetch product details");
                }
                // console.log(res);
                const data = await res.data;
                // console.log("product", data);
                return data;
            } catch (error) {
                console.error(error);
            }
        },

        addToCart() {
            this.$store.dispatch("addToCart", this.product)
        }
    }
}

</script>

<style scoped>
.product {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    margin: 0 0 1rem 5rem;
    animation: slideFromButtom 0.3s ease-out
}

.product h1,
.product p {
    margin-bottom: 1rem;
}

.image-container {
    max-width: 60rem;
    max-height: 60rem;
    margin-bottom: 1rem;
}

.image-container img {
    width: 70%;
    height: 70%;
    object-fit: contain;
    margin: 0 auto;
}

.details {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 70rem;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}


.action button {
    padding: 1rem 5rem;
    border: 2px rgb(84, 238, 171) solid;
    background-color: rgb(84, 238, 171);
    color: white;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease-out;
}

.action button:hover {
    background-color: rgb(77, 208, 151);
    border-color: rgb(77, 208, 151);
}

@media (max-width: 766px) {
    .product {
        margin: 0 auto;
        flex-direction: column;
    }

    .details {
        width: auto;
    }

    .image-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .product h1 {
        font-size: 24px;
    }

    .action {
        margin: 0 auto;
    }
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
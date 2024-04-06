<template>
    <li class="product">
        <div class="image-container">
            <img :src="product.image" alt="product image" />
        </div>
        <div class="details">
            <p>{{ product.title }}</p>
            <p>{{ product.description }}</p>
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
    }


}

</script>

<style scoped>
.product {
    margin-bottom: 2rem;
}

.image-container {
    flex: 1;
    margin-right: 1rem;
}

.image-container img {
    width: 20%;
    height: 20%;
    object-fit: contain
}

.details {
    flex: 2;
    display: flex;
    flex-direction: column;
}

.info {
    display: flex;
    justify-content: space-between;
}
</style>
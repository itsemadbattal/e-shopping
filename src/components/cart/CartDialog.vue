<template>
    <teleport to="#app">
        <dialog open class="cart-dialog">
            <div class="header">
                <h1>My Cart</h1>
                <iconify-icon icon="material-symbols:close" class="close-icon" color="black" width="30" height="30"
                    @click="closeCart" />
            </div>
            <!-- list of products -->
            <ul v-if="fetchedCart?.products?.length !== 0" class="proudct-list">
                <li v-for="product in fetchedCart.products" :key="product.id">
                    <div class="info">
                        <img :src="product.image" />
                        <h3>{{ product.title.slice(0, 15) }}...</h3>
                    </div>
                    <div class="price">
                        <p>{{ product.price }} * {{ product.quantity }} = {{ product.price * product.quantity }} IQD
                        </p>
                    </div>


                </li>
            </ul>
            <p v-else>Nothing in cart yet :(</p>
            <div class="subtotal">
                <h2>Subtotal: {{ fetchedCart.total }} IQD</h2>
                <h3>Discount: N/A </h3>
                <h3>Shipping Fee: N/A</h3>
            </div>
            <h2 class="total">Total: {{ fetchedCart.total }} IQD</h2>
            <div class="actions">
                <button type="button" class="close" @click="closeCart">Close</button>
                <button type="submit" class="submit">Proceed to Checkout</button>
            </div>
        </dialog>
    </teleport>
</template>

<script>
export default {
    methods: {
        closeCart() {
            this.$store.commit("setCartVisibility");
        }
    },
    computed: {
        fetchedCart() {
            return this.$store.getters.fetchedCart;
        }
    },
    mounted() {
        this.$store.dispatch("fetchCart");
        console.log(this.fetchedCart);
    }
}

</script>


<style scoped>
.cart-dialog {
    height: 100%;
    width: 30rem;
    max-width: 80%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem;
    z-index: 9999;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    animation: slideFromLeft 0.3s ease-out;
    font-size: 14px
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem
}

.header .close-icon {
    cursor: pointer;
}

.proudct-list {
    margin-bottom: 3rem;
}

.info img {
    width: 20%;
    height: 20%;
    object-fit: contain;
}

.info {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.price {
    display: flex;
    justify-content: center;
    align-items: center;
}

.subtotal {
    margin: 1rem 0;
}

.total {
    margin-bottom: 1rem;
}

.actions {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
}


.actions button {
    padding: 1rem;
    cursor: pointer;
    border-radius: 10px;
}

.actions .close {
    background: none;
    border: 1px black solid;
}

.actions .submit {
    border: 2px rgb(84, 238, 171) solid;
    background-color: rgb(84, 238, 171);
    color: white;
    transition: background-color 0.3s ease-out;
}

.actions .submit:hover {
    background-color: rgb(77, 208, 151);
    border-color: rgb(77, 208, 151);
}

@media (max-width: 768px) {
    .actions button {
        padding: 10px 12px;
    }
}

@keyframes slideFromLeft {
    from {
        /* opacity: 0; */
        transform: translateX(-100px);
    }

    to {
        /* opacity: 1; */
        transform: translateX(0);
    }
}
</style>
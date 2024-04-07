<template>
    <teleport to="#app">
        <dialog :open="isCartOpen" class="cart-dialog">
            <div class="header">
                <h1>My Cart</h1>
                <button @click="closeCart">
                    <iconify-icon icon="material-symbols:close" class="close-icon" color="black" width="30"
                        height="30" />
                </button>
            </div>
            <!-- list of products -->
            <ul v-if="cart?.products?.length !== 0" class="proudct-list">
                <li v-for="product in cart.products" :key="product.id">
                    <div class="info">
                        <img :src="product.image" />
                        <h3>{{ product?.title?.slice(0, 15) }}...</h3>
                    </div>
                    <div class="price">
                        <p>{{ product?.price?.toFixed(2) }} * {{ product?.quantity }} = {{ (product?.price *
                            product?.quantity).toFixed(2) }} IQD
                        </p>
                        <div class="manage-quantity">
                            <button @click="increaseQty(product.id, product.price)">
                                <iconify-icon icon="ic:sharp-plus" color="black" width="25" height="25" />
                            </button>
                            <button @click="decreaseQty(product.id, product.price)">
                                <iconify-icon icon="ic:sharp-minus" color="black" width="25" height="25" />
                            </button>
                        </div>
                    </div>
                </li>
            </ul>

            <p v-else>Nothing in cart yet :(</p>
            <div class="subtotal">
                <h2>Subtotal: {{ cart.total.toFixed(2) }} IQD</h2>
                <h3>Discount: N/A </h3>
                <h3>Shipping Fee: N/A</h3>
            </div>
            <h2 class="total">Total: {{ cart.total.toFixed(2) }} IQD</h2>
            <div class="actions">
                <button type="button" class="close" @click="closeCart">Close</button>
                <button type="submit" class="submit">Proceed to Checkout</button>
            </div>
        </dialog>
    </teleport>
</template>

<script>

export default {
    computed: {
        cart() {
            return this.$store.getters.fetchedCart;
        },
        isCartOpen() {
            return this.$store.getters.cartVisibility
        }
    },
    methods: {
        increaseQty(id, price) {
            this.$store.dispatch("increaseQuantity", { productId: id, price: price })
        },
        decreaseQty(id, price) {
            this.$store.dispatch("decreaseQuantity", { productId: id, price: price })
        },
        closeCart() {
            this.$store.dispatch("setCartVisible", false)
        }
    },
}

</script>


<style scoped>
.cart-dialog {
    height: 100%;
    width: 40rem;
    position: fixed;
    top: 0;
    right: 0;
    padding: 2rem;
    z-index: 9999;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    animation: slideFromLeft 0.3s ease-out;
    font-size: 18px
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem
}

.header button {
    cursor: pointer;
    background: none;
    border: none;
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
    justify-content: space-around;
    align-items: center;
}

.manage-quantity {
    display: flex;
    gap: 8px;
}

.manage-quantity button {
    background: none;
    border: 1px #000 solid;
    border-radius: 50%;
    cursor: pointer;
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
    .cart-dialog {
        width: 100%;
    }

    .actions .close {
        display: none;
    }

    .actions button {
        padding: 10px 22px;
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
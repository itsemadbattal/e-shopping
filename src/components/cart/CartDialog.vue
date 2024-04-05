<template>
    <dialog :open="cartVisible" class="cart-dialog">
        <div class="header">
            <h1>Cart</h1>
            <button @click="closeCart">X</button>
        </div>
        <!-- list of products -->
        <ul>
            <li>
                <div class="info">
                    <h3>product title</h3>
                    <p>product price</p>
                </div>
            </li>
        </ul>

        <div class="total">
            <h3>Subtotal: </h3>
            <h3>Discount: </h3>
            <h3>Shipping Fee: </h3>
            <h2>Total: </h2>
        </div>
        <div class="actions">
            <button type="button" @click="closeCart">Close</button>
            <button type="submit">Proceed to Checkout</button>
        </div>
    </dialog>
</template>

<script>
export default {

    computed: {
        cartVisible() {
            return this.$store.getters.cartVisibility;
        }
    },
    methods: {
        closeCart() {
            this.$store.commit("setCartVisibility");
        }
    },
}
</script>


<style scoped>
.cart-dialog {
    height: 100%;
    width: 30rem;
    padding: 2rem;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
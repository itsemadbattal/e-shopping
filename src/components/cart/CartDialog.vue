<template>
    <teleport to="#app">
        <dialog open class="cart-dialog">
            <div class="header">
                <h1>Cart</h1>
                <iconify-icon icon="material-symbols:close" class="close-icon" color="black" width="30" height="30"
                    @click="closeCart" />
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
                <button type="button" class="close" @click="closeCart">Close</button>
                <button type="submit" class="submit">Proceed to Checkout</button>
            </div>
        </dialog>
    </teleport>
</template>

<script>
export default {
    props: ["closeCart"],

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
    max-width: 80%;
    position: fixed;
    top: 0;
    left: 0;
    padding: 2rem;
    z-index: 9999;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    animation: slideFromLeft 0.3s ease-out
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header .close-icon {
    cursor: pointer;
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
}

.actions .close {
    background: none;
    border: 1px black solid;

}

.actions .submit {
    border: 2px rgb(84, 238, 171) solid;
    border-radius: 10px;
    background-color: rgb(84, 238, 171);
    color: white;
    transition: background-color 0.3s ease-out;
}

.actions .submit:hover {
    background-color: rgb(77, 208, 151);
    border-color: rgb(77, 208, 151);
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
<template>
    <nav class="navbar">
        <ul class="navList">
            <div class="left-nav">
                <li class="home">
                    <router-link to="/">
                        <h2>e-shopping</h2>
                    </router-link>
                </li>
                <li>|</li>
                <div class="support">
                    <li>
                        <h3>How it Works?</h3>
                    </li>
                    <li>
                        <h3>Help & Support</h3>
                    </li>
                </div>
            </div>
            <div class="right-nav">
                <div class="language">
                    <h3>EN</h3>
                    <iconify-icon icon="oui:globe" color="black" width="40" height="40" />
                </div>

                <li class="cart">
                    <button @click="openCart">
                        <iconify-icon icon="tdesign:cart" color="black" width="40" height="40" />
                    </button>
                </li>
                <li class="profile">
                    <iconify-icon icon="iconamoon:profile-circle-fill" color="black" width="40" height="40" />
                </li>


            </div>
        </ul>
    </nav>
</template>

<script>
export default {
    methods: {
        openCart() {
            this.$store.dispatch("setCartVisible", true)
        }
    }
}
</script>

<style scoped>
.navbar {
    padding: 1rem 1rem 0 1rem;
}

.home h2 {
    color: rgb(98, 0, 178)
}

.left-nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}

.right-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
}

.language {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
}

.navList {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navList button {
    display: block;
    padding: 1rem;
    background: none;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.navList button:hover {
    background-color: #f0f0f0;
}

.support {
    display: flex;
    gap: 2rem;
}

@media (max-width: 768px) {

    .support,
    .profile,
    .cart {
        display: none;
    }
}
</style>

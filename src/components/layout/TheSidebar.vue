<template>
    <nav class="navbar">
        <ul class="navList">
            <li>
                <router-link to="/">
                    <iconify-icon icon="carbon:home" color="black" width="40" height="40" />
                </router-link>
            </li>
            <li>
                <router-link to="/favorites">
                    <iconify-icon icon="ph:heart" color="black" width="40" height="40" />
                </router-link>
            </li>
            <!-- <li>
                <router-link to="/cart">
                    <iconify-icon icon="tdesign:cart" color="black" width="40" height="40" />
                </router-link>
            </li> -->
            <li>
                <button @click="openCart">
                    <iconify-icon icon="tdesign:cart" color="black" width="40" height="40" />
                </button>
            </li>
            <li>
                <router-link to="/profile">
                    <iconify-icon icon="iconamoon:profile" color="black" width="40" height="40" />
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    methods: {
        openCart() {
            console.log("test");
            this.$store.dispatch("setCartVisible", true)
        }
    }
}
</script>

<style>
.navbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.navList {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.navList li {
    margin-bottom: 1rem;
}

.navList a,
.navList button {
    display: block;
    padding: 1rem;
    transition: background-color 0.3s ease;
    background: none;
    border: none;
    cursor: pointer;
}

.navList a:hover,
.navList button:hover {
    background-color: #f0f0f0;
}

/* Media query for desktop screens */
@media (min-width: 768px) {
    .navbar {
        left: 0;
        padding-top: 10rem;
        height: 100%;
        width: 5rem;
    }

    .navList {
        flex-direction: column;
    }
}
</style>

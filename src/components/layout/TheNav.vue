<template>

    <nav class="navbar">
        <ul class="navList">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/favorites">Favorites</router-link>
            </li>
            <li>
                <router-link to="/cart">Cart</router-link>
            </li>
        </ul>
    </nav>

</template>

<script>

</script>

<style>
.navList {
    display: flex;
    flex-direction: column;
    width: 6rem;
    border: 1px #ccc solid;
    margin: 2rem 1rem;
}

.navList a {
    margin: 1rem;
    text-decoration: none;
}
</style>
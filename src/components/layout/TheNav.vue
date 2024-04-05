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
            <li>
                <router-link to="/cart">
                    <iconify-icon icon="tdesign:cart" color="black" width="40" height="40" />
                </router-link>
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
    height: 100%;
    border: 1px #ccc solid;
    margin: 2rem 1rem;
}

.navList a {
    margin: 1rem;
    text-decoration: none;
}
</style>
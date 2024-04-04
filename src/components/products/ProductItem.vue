<template>
    <li>
        <img alt="product image" />
        <h2>{{ title }}</h2>
        <div>
            <p>{{ price }}</p>
            <p>{{ description }}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: ["id", "title", "price", "description"]
}
</script>

<style>
img {
    width: 100%;
    height: 6rem;
    object-fit: fill;
}
</style>
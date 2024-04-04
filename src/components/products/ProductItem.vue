<template>
    <li>
        <img :src="image" alt="product image" />
        <p>{{ title }}</p>
        <div class="info">
            <strong>
                <p class="price">{{ price }}IQD</p>
            </strong>
            <strong>
                <p>Size: S M L</p>
            </strong>
        </div>
    </li>
</template>

<script>
export default {
    props: ["id", "title", "price", "description", "image"]
}
</script>

<style>
img {
    width: 100%;
    height: 8rem;
    object-fit: contain;
    margin-bottom: 2rem;
}

.info {
    display: flex;
    justify-content: space-between;
}
</style>
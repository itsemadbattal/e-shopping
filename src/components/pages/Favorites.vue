<template>

    <ul v-if="favs.length !== 0" class="productList">
        <base-card v-for="fav in favs" :key="fav.id">
            <product-item :product="fav"></product-item>
        </base-card>
    </ul>
    <div v-else class="noData">
        <p>You have not added favorites products yet</p>
    </div>
</template>

<script>
export default {
    computed: {
        favs() {
            return this.$store.getters.likedProducts
        },
    }
}
</script>

<style>
.productList {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    animation: slideFromLeft 0.3s ease-in;
}

.noData {
    margin: 4rem;
    text-align: center;
    animation: slideFromLeft 0.3s ease-in;
}

.noData p {
    font-size: 2rem;
}

@media (max-width: 766px) {
    .noData p {
        font-size: 16px;
    }
}


@keyframes slideFromLeft {
    from {
        opacity: 0;
        transform: translateX(-60px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
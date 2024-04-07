<template>
    <div class="header" @click="goBack">
        <iconify-icon icon="ph:arrow-left-light" color="black" width="30" height="30" />
    </div>
    <ul class="categoryList">

        <li v-for="category in categories" :key="category">
            {{ category.toUpperCase() }}
        </li>
    </ul>
</template>

<script>

export default {
    data() {
        return {
            categories: []
        }
    },
    computed: {
        categories() {
            return this.$store.getters.fetchedCategories
        }
    },
    methods: {
        goBack() {
            this.$router.back()
        }
    },

    mounted() {
        this.$store.dispatch("fetchCategories")
    }
}
</script>

<style scoped>
.header {
    padding: 1rem;
}

.categoryList {
    display: flex;
    animation: slideFromButtom 0.3s ease-in;
}

.categoryList li {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem 5rem;
    width: 30rem;
    height: 18rem;
    background-color: #fff;
    text-align: center;
}


@keyframes slideFromButtom {
    from {
        opacity: 0;
        transform: translateY(60px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}



@media(max-width: 768px) {
    .categoryList {
        flex-direction: column;
    }

    .categoryList li {
        margin: 2rem auto;
        width: 10rem;
        height: 4rem;
    }
}
</style>

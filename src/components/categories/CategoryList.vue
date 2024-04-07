<template>
    <div class="header" @click="goBack">
        <iconify-icon icon="ph:arrow-left-light" color="black" width="30" height="30" />
        <h3>Categories</h3>
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
        },
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

.header h3 {
    display: none;
}

.categoryList {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: slideFromButtom 0.3s ease-in;
}

.categoryList li {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem 5rem;
    width: 15rem;
    height: 9rem;
    background-color: #fff;
    cursor: pointer;
    text-align: center;

}

@media(max-width: 768px) {
    .categoryList {
        flex-direction: column;
    }

    .categoryList li {
        margin: 1rem auto;
        width: 12rem;
        height: 4rem;
    }

    .header h3 {
        display: block;
        text-align: center;
    }
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
</style>

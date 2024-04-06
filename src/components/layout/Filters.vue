<template>
    <div class="filters">
        <input type="search" class="seachbar" placeholder="Search by name" />
        <select name="categories" v-model="selectedCat" @change="changeCat">
            <option value="" selected disabled>Category</option>
            <option v-for="cat in fetchedCategories" :value="cat" :key="cat">{{ cat }}</option>
        </select>
    </div>
</template>


<script>
export default {
    data() {
        return {
            selectedCat: ""
        }
    },
    computed: {
        fetchedCategories() {
            return this.$store.getters.fetchedCategories
        }
    },
    methods: {
        changeCat() {
            this.$store.dispatch("fetchProducts", this.selectedCat)
        }
    },

    mounted() {
        this.$store.dispatch("fetchCategories")
    }
}
</script>

<style scoped>
.filters {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12rem;
    margin-top: 1rem
}

.filters select,
.filters input {
    padding: 1rem;
    border-radius: 12px;
}



@media(max-width: 766px) {
    .filters {
        justify-content: space-around;
        gap: 0;
    }
}
</style>
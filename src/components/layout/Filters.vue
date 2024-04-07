<template>
    <div class="filters">
        <input type="search" class="seachbar" v-model="searchTerm" placeholder="Search by name" @input="handleSearch" />
        <select name=" categories" v-model="selectedCat" @change="changeCat">
            <option value="" selected disabled>Category</option>
            <option v-for="cat in fetchedCategories" :value="cat" :key="cat">{{ cat }}</option>
        </select>
        <div class="sort" @click="toggleSort">
            <iconify-icon icon="mdi:sort" color="black" width="30" height="30" />
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            selectedCat: "",
            sort: "asc",
            searchTerm: ""
        }
    },
    computed: {
        fetchedCategories() {
            return this.$store.getters.fetchedCategories
        }
    },
    methods: {
        changeCat() {
            this.$store.dispatch("fetchProducts", { cat: this.selectedCat, sort: this.sort })
        },
        toggleSort() {
            this.sort = this.sort === "asc" ? "desc" : "asc"
            this.sortProducts()
        },
        sortProducts() {
            this.$store.dispatch("fetchProducts", { cat: this.selectedCat, sort: this.sort })
        },
        handleSearch() {
            console.log('Search term:', this.searchTerm);
            this.$store.dispatch("searchProductByName", { searchTerm: this.searchTerm })
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
    margin-top: 1rem;
    animation: slideFromLeft 0.3s ease-out;
}


.filters select,
.filters input {
    padding: 1rem;
    border-radius: 12px;
    background-color: white;
}


.sort {
    cursor: pointer;
}

@media(max-width: 766px) {
    .filters {
        justify-content: space-around;
        gap: 0;
    }

    .filters select,
    .filters input {
        padding: 16px 6px
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
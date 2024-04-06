<template>
    <div class="home">
        <slider />
        <Filters />
        <product-list />
    </div>
</template>

<script>
import Slider from '../layout/Slider.vue'
import Filters from '../layout/Filters.vue'
export default {
    components: {
        Slider,
        Filters
    }
}
</script>

<style>
.home {
    margin-left: 5rem;
}


@media (max-width: 766px) {
    .home {
        margin-left: 0;
    }
}
</style>
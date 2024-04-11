<template>
    <div class="slider-wrapper">
        <slot></slot>
    </div>
</template>


<style scoped>
.slider-wrapper {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    width: 80rem;
    height: 12rem;
    background-color: #fff;
}

@media(max-width: 768px) {
    .slider-wrapper {
        height: 10rem;
    }
}
</style>
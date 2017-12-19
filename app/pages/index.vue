<template>
<div>
    <router-link to="toast" class="test-item">Toast</router-link>
    <router-link to="toast" class="test-item">Pull up</router-link>
    <router-link to="toast" class="test-item">Pull Down</router-link>
    <router-link to="toast" class="test-item">Message box</router-link>
    <router-link to="toast" class="test-item">Swipe</router-link>
    <router-link to="toast" class="test-item">Popup</router-link>
    <router-link to="toast" class="test-item">Lazy load</router-link>
    
</div>
</template>

<script>
export default {
	name:'index',
    data() {
        return {}
    },
}
</script>

<style>
.test-item {
    display: block;
    line-height: 4rem;
    padding-left: 1rem;
    color: #333;
}
</style>
<template>
<div>
    <h1 class="h1-title">JS Components</h1>
    <router-link to="toast" class="test-item">Toast</router-link>
    <router-link to="indicator" class="test-item">Indicator</router-link>
    <router-link to="upRefresh" class="test-item">upRefresh</router-link>
    <router-link to="messageBox" class="test-item">messageBox</router-link>    
</div>
</template>

<script>
import Vue from 'Vue'
export default {
	name:'index',
    data() {
        return {}
    },
}
</script>

<style scoped>
.h1-title {
    font-size: 1.5rem;
    text-align: center;
    line-height: 4rem;
    font-weight: 400;
}
.test-item {
    position: relative;
    display: block;
    line-height: 3rem;
    padding-left: 1rem;
    color: #333;
}
.test-item:after {
    border: 2px solid #c8c8cd;
    border-bottom-width: 0;
    border-left-width: 0;
    content: " ";
    top: 50%;
    right: 20px;
    position: absolute;
    width: 5px;
    height: 5px;
    -webkit-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
}
</style>
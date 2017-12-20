<template>
<div class="toast-box">
	<a href="javascript:;" @click="test1" class="test-btn">点击弹出 Indicator</a>
	<a href="javascript:;" @click="test2" class="test-btn">可配置 Spinner</a>
	<a href="javascript:;" @click="test3" class="test-btn">点击弹出带有文字的 Indicator</a>
</div>
</template>

<script>
import Vue from 'Vue'
import Indicator from '../components/Indicator/indicator.js'
Vue.use(Indicator);
export default {
	name:'toast-test',
    data() {
        return {}
    },
    methods : {
        test1() {
            this.$indicator();
            setTimeout( () => {
                this.$indicator.close();
            }, 3000);
        },
        test2() {
            this.$indicator({
                spinnerType : 'fading-circle'
            });
            setTimeout( () => {
                this.$indicator.close();
            }, 3000);
        },
        test3() {
            this.$indicator({
                text : '加载中...',
                spinnerType : 'double-bounce'
            });
            setTimeout( () => {
                this.$indicator.close();
            }, 3000);
        }
    }
}
</script>

<style>
@import '../components/Indicator/indicator.css';

.toast-box {
    padding-top: 8rem;
}
.test-btn {
    display: block;
    margin: 2rem auto;
    width: 90%;
    line-height: 2rem;
    text-align: center;
    font-size: 1.2rem;
    text-align: center;
    color: #333;
    border: 1px solid #d2d2d2;
    border-radius: 3px;
}
</style>
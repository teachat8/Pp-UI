<template>
<div class="toast-box">
	<a href="javascript:;" @click="test1" class="test-btn">点击弹出Toast</a>
	<a href="javascript:;" @click="test2" class="test-btn">点击弹出带有 icon 的 Toast</a>
	<a href="javascript:;" @click="test3" class="test-btn">自定义 Toast 位置</a>
</div>
</template>

<script>
import Vue from 'Vue'
import Toast from '../components/Toast/toast.js'
Vue.use(Toast);
export default {
	name:'toast-test',
    data() {
        return {}
    },
    methods : {
        test1() {
            this.$toast({
                message : '提示信息'
            });
        },
        test2() {
            this.$toast({
                message : '付款成功',
                iconClass : 'icon'
            });
        },
        test3() {
            this.$toast({
                message : '提示信息',
                position: 'bottom'
            });
        }
    }
}
</script>

<style>
@import '../components/Toast/toast.css';

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
.pop-box .bg {
    color: #fff;
}
.icon {
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    background:url(../images/success.png) no-repeat center / 2rem 2rem;
}
</style>
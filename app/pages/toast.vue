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
import '../components/Toast/toast.css'
Vue.use(Toast);
export default {
	name:'toast-test',
    data() {
        return {}
    },
    methods : {
        test1() {
            this.$toast({
                message : '提示信息',
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
.pop-box  {
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
}
.pop-box .pop-msg {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);            
    transform: translateX(-50%) translateY(-50%);        
    max-width: 80%;
    padding: .3rem .8rem;
    background: rgba(0, 0, 0, .8);
    color: #fff;
    border-radius: .3rem;
    font-size: 14px;
    word-break: break-all;
    -webkit-animation: fade-in .5s;
}
.pop-box .position-middle {
    top: 50%;
}
.pop-box .position-top {
    top:5%;
}
.pop-box .position-bottom {
    bottom:5%;
}
@-webkit-keyframes fade-in {
    0% {
        opacity:0;
    }
    50% {
        opacity:.5;
    }
    100% {
        opacity:1;        
    }
}


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
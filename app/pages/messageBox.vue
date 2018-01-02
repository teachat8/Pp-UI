<template>
<div class="toast-box">
	<a href="javascript:;" @click="test1" class="test-btn">打开alert提示框</a>
	<a href="javascript:;" @click="test2" class="test-btn">打开prompt提示框</a>
</div>
</template>

<script>
import Vue from 'Vue'
import MessageBox from '../components/MessageBox/messageBox.js'
Vue.use(MessageBox);
export default {
	name:'messageBox-test',
    data() {
        return {}
    },
    methods : {
        test1() {
            this.$messageBox({
                title : '提示',
                showCancelButton : false,
                message : '操作成功',
            });
        },
        test2() {
            this.$messageBox({
                title : '提示',
                message : '您是否需要删除？',
                sureCb() {
                    alert(1);
                },
                cancelCb() {
                    alert(2);
                }
            });
        }
    }
}
</script>

<style>
@import '../components/MessageBox/messageBox.css';

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
.btn1 {
    color: red;
}
.btn2 {
    background: #878976;
    color: #fff;
}
</style>
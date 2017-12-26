<template>
<div>
    <div class="top-box">在列表顶端, 按住 - 下拉 - 释放可以获取更多数据</div>
    <div class="test-refresh-box">
        <pp-refresh :top-method="loadTop" ref="loadmore">
            <ul>
                <li v-for="(item, index) in list" v-html="item" :key="index" class="list-item"></li>
            </ul>
        </pp-refresh>
    </div>
</div>
</template>

<script>
import ppRefresh from '../components/UpRefresh/upRefresh'
export default {
	name: 'upRefresh-test',
    data() {
        return {
            list : [1,2,3,4,5,6,7,8,9,10]
        }
    },

    mounted() {
       
    },
    methods : {
        loadTop() {
            var first = this.list[0],
                arr = [];
            setTimeout( () => {
                for ( let i = 0 ; i<10; i++ ) {
                    this.list.unshift(--first);
                }
                // 必须手动调用组件内部的方法
                this.$refs.loadmore.endTopMethod();
            }, 1000);
        }
    },
    components : {
        ppRefresh
    }
}
</script>

<style>
.test-refresh-box {
    height: 400px;
    overflow: scroll;
    -webkit-overflow-scrolling : touch;  
}
.top-box {
    height: 5rem;
    padding-top: 2rem;
    text-align: center;
}
.list-item {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #dedede;
}
</style>
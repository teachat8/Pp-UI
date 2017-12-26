<template>
<div>
    <div class="top-box">滑动到底部可以获取更多数据</div>
    <pp-scroll class="test-load-box">
        <div>
            <a v-for="(item, index) in 100" :key="index" v-html="item" class="list-item"></a>
        </div>
    </pp-scroll>
</div>
</template>

<script>
import ppScroll from '../components/infiniteScroll/infiniteScroll'
export default {
	name: 'infiniteScroll-test',
    data() {
        return {
            list : [1,2,3,4,5,6,7,8,9,10]
        }
    },

    mounted() {
       
    },
    methods : {
       
    },
    components : {
       ppScroll
    }
}
</script>

<style>
.test-load-box {
    height: 10rem;
    overflow: scroll;
    -webkit-overflow-scrolling : touch; 
}
.list-item {
    display: block;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #dedede;
}
.top-box {
    height: 5rem;
    padding-top: 2rem;
    text-align: center;
}
</style>
<template>
<div class="pp-load-box" ref="loadMore">
    <slot></slot>
    <div class="pp-loading"></div>
</div>
</template>

<script>
export default {
	name: 'pp-load',

    props: {
        // 组件可移动的最大距离（像素），若为 0 则不限制
        maxDistance : {
            type : Number,
            required : false,
            default : 200
        },
        // 触发 topMethod 的下拉距离阈值（像素）
        topDistance : {
            type : Number,
            required : false,
            default: 100
        },
        // 下拉刷新后触发的事件
        topMethod: {
            type: Function
        },
    },
    data() {
        return {
            scrollTarget : null,
            
        }
    },

    mounted() {
        this.init();
    },

    methods : {
        init() {
            this.scrollTarget = this.$refs.loadMore.parentNode;
            console.log(this.scrollTarget);
            window.addEventListener('scroll', () => {
                console.log(1111);
            }, false);

        },
    }
}
</script>

<style scoped>
.pp-load-box .pp-loading {
    display: block;
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    background: url(../../images/loading3.png) no-repeat center / 2rem 2rem;
     -webkit-animation: loading .5s infinite;
}
@-webkit-keyframes loading {
    0% {
        -webkit-transform: rotate(0deg)
    }
    25% {
        -webkit-transform: rotate(90deg)        
    }
    50% {
        -webkit-transform: rotate(180deg)        
    }
    75% {
        -webkit-transform: rotate(270deg)        
    }
    100% {
        -webkit-transform: rotate(360deg)            
    }
}

</style>
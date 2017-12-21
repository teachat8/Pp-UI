<template>
<div class="pp-refresh-box">
	<div class="pp-refresh-content" id="ppRefresh">
        <div class="pp-refresh-top">
            <span v-if="isShowLoading" class="pp-loading"></span>
            <div v-else :class="{up:topStatus}">↓</div>
        </div>
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
	name: 'pp-refresh',

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
            moveDom : null,
            //开始容器的translateY
            startTop : 0,
            // 开始手指的translateY
            startY : 0,
            // 移动时候手指的translateY
            moveY : 0,
            reg : /\-?[0-9]+/g,
            // 是否触发用户自定义的刷新事件
            topStatus : false,
            // 是否显示loading图标
            isShowLoading : false
        }
    },

    mounted() {
        this.init();
    },

    methods : {
        init() {
            this.moveDom = document.getElementById('ppRefresh');
            this.moveDom.style.webkitTransform = 'translate3d(0px,0px,0px)';
            // $el Vue 实例使用的根 DOM 元素
            this.moveDom.addEventListener('touchstart', this.handleTouchStart);
            this.moveDom.addEventListener('touchmove', this.handleTouchMove);
            this.moveDom.addEventListener('touchend', this.handleTouchEnd);
        },

        handleTouchStart(event) {
            let target = event.targetTouches[0];
            this.startY = target.pageY;
            this.startTop = this.getTranslate3d();
        },

        handleTouchMove(event) {
            let target = event.targetTouches[0];           
            this.moveY = target.pageY;
            var y = this.moveY - this.startY;
            // 如果下拉距离大于下拉距离阈值
            if ( y > this.topDistance ) {
                this.topStatus = true;
            }
            if ( y > this.maxDistance ) {
                y = this.maxDistance;
            }
            this.moveDom.style.webkitTransform = `translate3d(0px,${ this.startTop+y }px,0px)`;
        },

        handleTouchEnd(event) {
            // 如果下拉距离大于下拉距离阈值，触发刷新事件
            this.moveDom.style.webkitTransition = 'transform 200ms';
            if ( this.topStatus ) {
                this.isShowLoading = true; 
                this.moveDom.style.webkitTransform = `translate3d(0px, 50px,0px)`;  
                this.topMethod();
            } else {
                this.moveDom.style.webkitTransform = `translate3d(0px, 0px,0px)`;                  
            }
            this.moveDom.addEventListener("webkitTransitionEnd", () => {
                  this.moveDom.style.webkitTransition = 'transform 0ms';
            });
        },

        //  实时获取当前滑动容器的translate3d值
        getTranslate3d() {
            return parseFloat(this.moveDom.style.webkitTransform.match(this.reg)[2]);
        },

        // 刷新事件结束后，用户需要手动调用该事件
        endTopMethod() {
            this.isShowLoading = false;
            this.topStatus = false;
            this.moveDom.style.webkitTransform = `translate3d(0px, 0px,0px)`; 
        }
    }
}
</script>

<style scoped>
.pp-refresh-box {
    overflow: hidden;
}
.pp-refresh-content {
    /*-webkit-transition: -webkit-transform 300ms;*/
}
.pp-refresh-top {
    margin-top: -50px;
    text-align: center;
    height: 50px;
    line-height: 50px;
}
.pp-loading {
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
.up {
    -webkit-transition: -webkit-transform .2s;
    -webkit-transform: rotate(180deg);
}
</style>
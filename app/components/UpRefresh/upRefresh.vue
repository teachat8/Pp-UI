<template>
<div class="pp-refresh-box">
	<div class="pp-refresh-content" id="ppRefresh">
        <div class="pp-refresh-top">
            <span class="pp-loading"></span>
        </div>
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
	name: 'pp-refresh',

    props: {
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
            reg : /\-?[0-9]+/g
        }
    },

    mounted() {
        this.moveDom = document.getElementById('ppRefresh');
        this.init();
    },

    methods : {
        init() {
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
            console.log(this.startTop);
        },

        handleTouchMove(event) {
            let target = event.targetTouches[0];
            this.moveY = target.pageY;
            var y = this.moveY - this.startY;
            if ( y > 100 ) {
                y = 100;
            }
            this.moveDom.style.webkitTransform = `translate3d(0px,${ this.startTop+y }px,0px)`;
        },

        handleTouchEnd(event) {
            if ( this.getTranslate3d() > 50 ) {
                if ( this.topMethod() ) {
                    this.moveDom.style.webkitTransition = 'transform 300ms';
                    this.moveDom.style.webkitTransform = `translate3d(0px, 0px,0px)`;  
                }
            } else {
                this.moveDom.style.webkitTransition = 'transform 300ms';
                this.moveDom.style.webkitTransform = `translate3d(0px, 0px,0px)`; 
            } 
        },

        //  实时获取当前滑动容器的translate3d值
        getTranslate3d : function() {
            return parseFloat(this.moveDom.style.webkitTransform.match(this.reg)[2]);
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
</style>
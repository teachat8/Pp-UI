<template>
<div>
    <div class="top-box">Swiper</div>

    <p class="top-box">1.基础用法</p>
    <swiper>
        <div class="swiper-slide item1">1</div>
        <div class="swiper-slide item2">2</div>
        <div class="swiper-slide item3">3</div>
    </swiper>

    <p class="top-box">2.取消自动播放</p>
    <swiper :autoPlay="time">
        <div class="swiper-slide item1">1</div>
        <div class="swiper-slide item3">2</div>
        <div class="swiper-slide item2">3</div>
    </swiper>

    <p class="top-box">3.懒加载图片</p>    
    <swiper :lazyLoading="lazyLoading">
        <div class="swiper-slide">
            <a href="https://github.com/lvpangpang" class="link-item">
                <img data-src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1514171028&di=b1957d0b1aee145a87b0f27dbefa6a0f&imgtype=jpg&er=1&src=http%3A%2F%2Fimg1.cache.netease.com%2Fhouse%2F2014%2F8%2F25%2F201408251614518b482_550.png'>
            </a>
            <div class="swiper-lazy-preloader"></div>
        </div>
        <div class="swiper-slide">
            <a href="https://github.com/lvpangpang" class="link-item">
                <img data-src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1513576309239&di=2625124db5fbdfb6a7fe4266b1f02c6e&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F30adcbef76094b362990c8eba9cc7cd98d109db2.jpg'>
            </a>
            <div class="swiper-lazy-preloader"></div>            
        </div>
        <div class="swiper-slide">
            <a href="https://github.com/lvpangpang" class="link-item">
                <img data-src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2063024798,3629381201&fm=27&gp=0.jpg'>
            </a>
            <div class="swiper-lazy-preloader"></div>            
        </div>
        <div class="swiper-slide">
            <a href="https://github.com/lvpangpang" class="link-item">
                <img data-src='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3689160900,3184532578&fm=27&gp=0.jpg'>
            </a>
            <div class="swiper-lazy-preloader"></div>            
        </div>
    </swiper>

</div>
</template>

<script>
import swiper from '../components/Swiper/swiper'
export default {
	name: 'upRefresh-test',
    data() {
        return {
            lazyLoading : true,
            time : 0
        }
    },
    
    components : {
        swiper
    }
}
</script>

<style scoped>
.top-box {
    line-height: 3rem;
    text-align: center;
}
.item1,
.item2,
.item3 {
    background: #ff2d4b;
    font-size: 2rem;
    text-align: center;
    line-height: 10rem;
}
.item2 {
    background: #ffd705;
}
.item3 {
    background: #0089dc;
}
</style>
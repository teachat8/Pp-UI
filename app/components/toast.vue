<template>
<div class="pop-box" v-show="isShow1">
    <div class="pop-msg" v-html="msg"></div>
</div>
</template>

<script>
export default {

	name:'pp-toast',

    props : {
        msg : {
            required : true,
            type : String,
        },
        isShow : {
            required : true,
            type : Boolean
        }
    },

    data() {
        return {
            isShow1 : this.isShow
        }
    },

    watch : {
        isShow() {
            let vue = this;
            if ( this.isShow ) {
                this.isShow1 = true;
                setTimeout( () => {
                    vue.isShow1 = false;
                    vue.$emit('test');
                }, 3000);
            }
        }
    }
}
</script>


<style>
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,form,fieldset,input,textarea,p,blockquote,th,td{margin:0;padding:0;}html{font-size: 12px;}address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;}table{border-collapse:collapse;border-spacing:0;}q:before,q:after{content:'';}object,embed{vertical-align:top;}hr,legend{display:none;}img,abbr,acronym,fieldset{border:0;}ul li{list-style-type:none;}a,label{cursor:pointer;}img{vertical-align:bottom;margin:0;padding:0;}a{text-decoration:none;outline: none;}.clearfix:after{content: "."; visibility: hidden; display: block; height: 0.1px; font-size:0.1em; line-height: 0; clear: both;}.clearfix {*zoom:1;}input ,textarea,select{outline: none;border:1px solid #bfbfbf;}th{font-weight: 400;}button{cursor: pointer;border:none;outline: none;}textarea{border: 1px solid #ccc;resize: none;outline: none;overflow: hidden;padding: 5px;}select{outline: none;}.text_overflow{overflow:hidden;white-space: nowrap;
text-overflow: ellipsis;}
.pop-box {
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content:center;
    justify-content: center;
    -webkit-align-items:center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
}
.pop-msg {
    max-width: 80%;
    padding: .3rem .8rem;
    opacity: .8;
    background: #333;
    color: #fff;
    border-radius: .3rem;
    font-size: 1.2rem;
    word-break: break-all;
}
</style>
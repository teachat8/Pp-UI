<template>
<div>
    <pp-toast
		:msg="msg"
        :is-show="isShow"
        v-on:test="change"
    ></pp-toast>
	<a href="javascript:;" @click="add">点我，有惊喜</a>
</div>
</template>

<script>
import Toast from '../components/toast.vue'
export default {

	name:'toast-test',

    data() {
          return {
              msg : "我叫吕胖胖",
              isShow : false
          }
      },
      methods : {
          change() {
              this.isShow = false;
          },
          add() {
              this.isShow = true;
          }
      },
      components: {
        'pp-toast': Toast
      }
}
</script>

<style></style>
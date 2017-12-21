<template>
<div>
    <div>6666</div>
	<pp-refresh :top-method="loadTop">
        <ul>
            <li v-for="(item, index) in list" v-html="item" :key="index" class="list-item"></li>
        </ul>
    </pp-refresh>
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
            for ( let i = 0 ; i<10; i++ ) {
                this.list.unshift(--first);
            }
            return true;
        }
    },
    components : {
        ppRefresh
    }
}
</script>

<style>
.list-item {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #dedede;
}
</style>
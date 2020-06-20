<template>
  <div>
    <input type="button" value="加" @click="jia()" />
    {{num}}
    <input type="button" value="减" @click="jian" />
  </div>
</template>
<script>
export default {
    // data(){
    //     return {
    //         num:this.$store.state.num
    //     }
    // },
    computed:{
        num(){
            return this.$store.state.num
        }
    },

    methods:{
        jia(num){
            // this.num+=10
            // 单个数据的传递
            // this.$store.commit('increment',num)
            this.$store.dispatch('Addaction');
            // this.$store.commit('increment',{
            //     num:5,
            //     name:'kjp'
            // })
        },
        jian(){
            this.$store.commit('mincrement')
        }
    }
}
</script>
<style lang="scss">
</style>
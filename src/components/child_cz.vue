<template>
    <div>
        <ul>
            <li>{{list}}</li>
        </ul>
        <input type="text" id="input" v-model="inp">
        <input type="button" value="传值" @click="fac()">
    </div>
</template>
<script>
export default {
    data(){
        return {
            data:'kjp',
            inp:''
        }
    },
    methods:{
        fac(){
            this.$emit('send',this.inp)
        }
    },
    props:{
        list:{
            type:String,
            // 必填字段
            require:true
        }
    }
}
</script>>

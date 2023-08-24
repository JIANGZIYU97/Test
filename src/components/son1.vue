<template>
    <div class="son1">
        son11
        <button @click="fun">son111</button>
    </div>
</template>
<script>
export default{
    data(){
        return {}
    },
    methods:{
        fun(){
            console.log('sonfun','----')
            this.$emit('ffun','son1data')
        }
    }
}
</script>
<style scoped>

</style>

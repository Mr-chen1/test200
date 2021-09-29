<template>
    <div class="header">
        <i class="iconfont icon-back" @click="handleback"></i>
        <slot></slot>
    </div>
</template>

<script>
export default {
    methods:{
        handleback(){
            this.$router.back() //返回上一个页面
        }
    }
}
</script>
<style scoped>
    .header{
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 2.4rem;
        line-height: 2.4rem;
        background-color: white;
        text-align: center;
    }
    .header i{
        font-size: 30px;
        position: fixed;
        left:.55rem;
        top:0px
    }
</style>
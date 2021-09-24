<template>
    <div class="swiper-container cly">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    mounted(){
        new Swiper('.cly',{
            pagination:{
                el:'.swiper-pagination'
            },
            loop:this.loop,
            autoplay:{
                delay:2500,
                disableOnInteraction:false
            }
        })
    }
}
</script>
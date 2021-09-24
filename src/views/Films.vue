<template>
  <div>
    <film-swiper>
      <div class="swpier-slide">111</div>
      <div class="swpier-slide">222</div>
      <div class="swpier-slide">333</div>
    </film-swiper>
    films
    <router-view></router-view>
  </div>
</template>

<script>
import filmSwiper from '../components/films/FilmSwiper.vue'
export default {
  components:{
    filmSwiper
  }
}
</script>
<template>
  <div>
    <film-swiper :key="datalist.length"> <!--为什么这里要加:key  遍历datalist内容长度,显示轮播图片数 -->
      <film-swiper-item v-for="item in datalist" :key="item.id" class="filmSwiperItem">
        <img :src='item.imgUrl'/>
      </film-swiper-item>
    </film-swiper>
    <film-header class="sticky"></film-header>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
import filmSwiper from '../components/films/FilmSwiper.vue'
import filmSwiperItem from '../components/films/FilmSwiperItem.vue'
import filmHeader from '../components/films/FilmHeader.vue'
export default {
  data(){
    return {
      datalist:[]
    }
  },
  mounted(){
    axios.get('/banner.json').then(res=>{
      console.log(res.data)
      this.datalist=res.data.banner
    })
    // setTimeout(()=>{
    //   this.datalist=['111','222','333']
    // },1000)
  },
  // methods:{
  //   /**
  //    *@param 
  //    * 测试
  //    * 
  //   */
  //   test(){

  //   }
  // },
  components:{
    filmSwiper,
    filmSwiperItem,
    filmHeader
  }
}
</script>

<style scoped>
  .filmSwiperItem img{
      width: 100%;
  }
</style>
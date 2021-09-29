<template>
  <div v-if="filmInfo">
    <!-- <img :src="filmInfo.poster" > -->
    <detail-header v-scroll="20">
      {{ filmInfo.name }}
    </detail-header>
    <div
      :style="{
        backgroundImage: 'url(' + filmInfo.poster + ')',
      }"
      class="poster"
    ></div>
    <div class="content">
      <div>{{ filmInfo.name }}</div>
      <div>
        <div class="detail-text">{{ filmInfo.category }}</div>
        <div class="detail-text">{{ filmInfo.premiereAt | dateFilter }}</div>
        <div class="detail-text">
          {{ filmInfo.nation }} | {{ filmInfo.runtime }}分钟
        </div>
        <div
          class="detail-text"
          style="line-height: 15px"
          :class="isHidden ? 'hidden' : ''"
        >
          {{ filmInfo.synopsis }}
        </div>
        <div style="text-align: center">
          <i
            class="iconfont"
            :class="isHidden ? 'icon-moreunfold' : 'icon-less'"
            @click="isHidden = !isHidden"
          ></i>
        </div>
      </div>

      <!-- 演职人员 -->
      <div>
        <div style="border-top: #eeeeee solid 10px">演职人员</div>
        <detail-swiper :preview="3" name="actors">
          <detail-swiper-item
            v-for="(item, index) in filmInfo.actors"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + item.avatarAddress + ')',
              }"
              class="avatar"
            ></div>
            <!-- <img :src="item.avatarAddress" > -->
            <div style="text-align: center; font-size: 12px">
              {{ item.name }}
            </div>
            <div style="text-align: center; font-size: 13px; color: #797d82">
              {{ item.role }}
            </div>
          </detail-swiper-item>
        </detail-swiper>
      </div>

      <!-- 剧照 -->
      <div>
        <div style="border-top: #eeeeee solid 10px">剧照</div>
        <detail-swiper :preview="2" name="photos">
          <detail-swiper-item
            v-for="(item, index) in filmInfo.photos"
            :key="index"
          >
            <div
              :style="{
                backgroundImage: 'url(' + item + ')',
              }"
              class="avatar"
              @click="handlePreview(index)"
            ></div>
          </detail-swiper-item>
        </detail-swiper>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/utils/http";
import Vue from "vue";
import moment from "moment";
import { ImagePreview } from "vant";
import detailSwiper from "@/components/detail/DetailSwiper.vue";
import detailSwiperItem from "@/components/detail/DetailSwiperItem.vue";
import detailHeader from "@/components/detail/DetailHeader.vue";
moment.locale("zh-cn");
//console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
//过滤器
Vue.filter("dateFilter", (data) => {
  return moment(data * 1000).format("YYYY-MM-DD");
});

Vue.directive("scroll", {
  inserted(el, binding) {
    // console.log(el)
    el.style.display = "none";

    window.onscroll = () => {
      if (document.documentElement.scrollTop > binding.value) {
        el.style.display = "block";
      } else {
        el.style.display = "none";
      }
    };
  },
  unbind() {
    //销毁v-scroll时触发
    window.onscroll = null;
  },
});
export default {
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader,
  },
  mounted() {
    http({
      url: `gateway?filmId=${this.$route.params.myid}&k=3933546`,
      headers: {
        "X-Host": "mall.film-ticket.film.info",
      },
    }).then((res) => {
      console.log(res.data.data.film);
      this.filmInfo = res.data.data.film;
      
    });
    // axios({
    //     url:`https://m.maizuo.com/gateway?filmId=${this.$route.params.myid}&k=3933546`,
    //     headers:{
    //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"163247429019795504267265"}',
    //         'X-Host': 'mall.film-ticket.film.info'
    //     }
    // }).then(res=>{
    //     console.log(res.data.data.film)
    // })
    //console.log(this.$route.params.myid)
  },
  methods: {
    handlePreview(photo_index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: photo_index,
        closeable: true,
        closeIconPosition: "top-left",
      });
    },
  },
  data() {
    return {
      filmInfo: null,
      isHidden: true,
    };
  },
};
</script>

<style scoped>
.poster {
  width: 100%;
  height: 11.6rem;
  background-position: center;
  background-size: cover;
}
.content {
  padding: 0.83rem;
}
.detail-text {
  color: #797d82;
  font-size: 13px;
  margin-top: 0.22rem;
}
.hidden {
  overflow: hidden;
  height: 30px;
}
.avatar {
  width: 100%;
  height: 4.72rem;
  background-position: center;
  background-size: cover;
}
</style>
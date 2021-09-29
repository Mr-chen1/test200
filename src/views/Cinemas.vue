<template>
  <div>
    <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft">
      <template #left>
        {{ $store.state.cityName }}<van-icon name="arrow-down" />
      </template>
      <template #right>
        <van-icon name="search" size="24" color="black" />
      </template>
    </van-nav-bar>
    <div
      class="box"
      :style="{
        height: height,
      }"
    >
      <ul>
        <li v-for="item in $store.state.cinemaList" :key="item.cinemaId">
          <div class="left">
            <div class="cinema_name">{{ item.name }}</div>
            <div class="cinema_text">{{ item.address }}</div>
          </div>

          <div class="right cinema_name">
            <div style="color: red">￥{{ item.lowPrice / 100 }}起</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import betterScroll from "better-scroll";
//import clyhttp from "@/utils/http";
export default {
  async mounted() {
    console.log(this.$refs.navbar.$el.offsetHeight);
    this.height =
      document.documentElement.clientHeight -
      this.$refs.navbar.$el.offsetHeight -
      document.querySelector("footer").offsetHeight +
      "px"; //视口高度-footer高度

    if (this.$store.state.cinemaList.length === 0) {
      await this.$store
        .dispatch("getCinemaState", this.$store.state.cityId)
           this.$nextTick(() => {
            new betterScroll(".box", {
              scrollbar: {
                fade: true, //betterScroll第二个参数为显示滚动条
              },
            });
          });
        // .then(() => {
        //   this.$nextTick(() => {
        //     new betterScroll(".box", {
        //       scrollbar: {
        //         fade: true, //betterScroll第二个参数为显示滚动条
        //       },
        //     });
        //   });
        // });
    } else {
      this.$nextTick(() => {
        new betterScroll(".box", {
          scrollbar: {
            fade: true, //betterScroll第二个参数为显示滚动条
          },
        });
      });
    }

    // clyhttp({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=9570523`,
    //   headers: {
    //     "X-Host": "mall.film-ticket.cinema.list",
    //   },
    // }).then((res) => {
    //   //console.log(res.data.data.cinemas)
    //   this.cinemaList = res.data.data.cinemas;
    //   //初始化过早我们li还没用渲染到页面上,因此使用nextTick
    //   this.$nextTick(() => {
    //     new betterScroll(".box", {
    //       scrollbar: {
    //         fade: true, //betterScroll第二个参数为显示滚动条
    //       },
    //     });
    //   });
    // });
  },
  data() {
    return {
      height: "0px",
    };
  },
  methods: {
    handleLeft() {
      this.$router.push("/city");
    },
  },
};
</script>

<style scoped>
li {
  padding: 0.83rem;
  display: flex;
  justify-content: space-between;
}
li .left {
  width: 11.7rem;
}
.cinema_text {
  margin-top: 5px;
  font-size: 12px;
  color: #797d82;
  /*
   *下面是超出部分隐藏
  */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.cinema_name {
  font-size: 15px;
}
.box {
  /* height: 34.3rem;  高度要适配*/
  overflow: hidden;
  position: relative; /*修正滚动条的位置*/
}
</style>
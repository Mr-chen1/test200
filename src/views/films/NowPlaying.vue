<template>
  <div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="我是有底线的"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        @click="handechangepage(item.filmId)"
        v-for="item in datalist"
        :key="item.filmId"
      >
        <img :src="item.poster" />
        <div class="title">{{ item.name }}</div>
        <div class="content">
          <div>
            观众评分:<span style="color: red">{{ item.grade }}</span>
          </div>
          <div class="actors">主演: {{ item.actors | actorsFilter }}</div>
          <div>{{ item.nation }} | {{ item.runtime }}分钟</div>
        </div>
      </van-cell>
      <!-- <img :src="item.poster"/> -->
    </van-list>
  </div>
</template>

<script>
import http from "@/utils/http";
import Vue from "vue";
Vue.filter("actorsFilter", (data) => {
  //console.log(data.map(item=>item.name).join(' '))
  if (data === undefined) return "暂无主演";
  return data.map((item) => item.name).join(" ");
});
export default {
  data() {
    return {
      datalist: ["1111", "2222", "3333"],
      loading: false,
      finished: false,
      currentPage:1,
      total:0
    };
  },
  mounted() {
    http({
      url: "gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=8876171",
      headers: {
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      console.log(res.data.data.films);
      this.datalist = res.data.data.films;
      this.total=res.data.data.total
    });
    // axios({
    //   url:'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8876171',
    //   headers:{
    //     'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"163247429019795504267265"}',
    //     'X-Host': 'mall.film-tick et.film.list'
    //   }
    // }).then(res=>{
    //   console.log(res.data.data.films)
    //   this.datalist=res.data.data.films
    // })
  },
  methods: {
    handechangepage(id) {
      this.$router.push(`/detail/${id}`);
    },
    async onLoad() {
      if(this.datalist.length===this.total && this.total!==0){
        this.finished=true
        return
      }
      //debugger
      console.log(this.finished)
      console.log("到底了");
      this.currentPage++
      const res = await http({
        url: `gateway?cityId=310100&pageNum=${this.currentPage}&pageSize=10&type=1&k=8876171`,
        headers: {
          "X-Host": "mall.film-ticket.film.list",
        },
      })
        this.datalist = [...this.datalist,...res.data.data.films];
        this.loading=false
      // .then((res) => {
      //   console.log(res.data.data.films);
      //   this.datalist = [...this.datalist,...res.data.data.films];
      //   this.loading=false
      // });
    },
  },
};
</script>

<style scoped>
.van-list .van-cell img {
  float: left;
  width: 3.6rem;
}
.van-list .van-cell {
  overflow: hidden;
  padding: 0.83rem;
}
.van-list .title {
  font-size: 16px;
}
.van-list .content {
  font-size: 13px;
  color: gray;
}
.van-list .content .actors {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 11.1rem;
}
</style>
<template>
  <div>
    <van-index-bar :index-list="computedList" @select="handleSelect">
      <div v-for="item in cityList" :key="item.type">
        <van-index-anchor :index='item.type' />
        <van-cell :title="item.name" v-for="item in item.list" :key="item.name" @click="handleCityClick(item)"/>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import clyhttp from "@/utils/http.js";
import { Toast } from 'vant';
export default {
  data() {
    return {
      cityList: [],
      indexList:[]
    };
  },
     mounted() {
    clyhttp({
      url: "/gateway?k=1911578",
      headers: {
        "X-Host": "mall.film-ticket.city.list",
      },
    }).then((res) => {
      //console.log(res.data.data.cities)
      this.cityList = this.handeleCityList(res.data.data.cities);
    });
  },
  computed:{
      computedList(){
          return this.cityList.map(item=>item.type)
      }
  },
  methods: {
      handleSelect(data){
          //console.log('change',data)
          Toast(data);
      },
    handeleCityList(list) {
      var funcCityList = [];
      var letterList = []; //用一个空数组来存A-Z字母
      //console.log(list);
      for (let i = 65; i < 91; i++) {
        //console.log(String.fromCharCode(i))
        letterList.push(String.fromCharCode(i));
      }
      letterList.map((itemLetter) => {
        var filterList = list.filter(
          (item) => item.pinyin.substring(0, 1).toUpperCase() === itemLetter
        ); //把CityList按pinyin首字母过滤
        filterList.length > 0 &&
          funcCityList.push({
            type: itemLetter,
            list: filterList,
          });
      });
      console.log(funcCityList);
      return funcCityList;
    },
    handleCityClick(cityItem){
        //console.log(cityItem.cityId,cityItem.name)
        //this.$store.state.cityName=cityItem.name  
         /*
                不要直接修改,通过mutations修改(同步的)
                步骤:1.设置mutations,在里面设置方法
                    2.通过commit触发mutations对应的方法,修改state
        */
        this.$store.commit('changeCityName',cityItem.name)
        this.$store.commit('changeCityId',cityItem.cityId)
        this.$router.back()
    }
  },
};
</script>
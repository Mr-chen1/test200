import Vue from 'vue'
import Vuex from 'vuex'
import clyhttp from "@/utils/http";
Vue.use(Vuex)

export default new Vuex.Store({
    //state为公共状态
    state:{
        cityId:'310100',
        cityName:'上海',
        cinemaList:[]
    },
    mutations:{
        changeCityName(state,cityName){
            //console.log(cityName,state)
            state.cityName=cityName
        },
        changeCityId(state,cityId){
            state.cityId=cityId
        },
        changeCinemaCity(state,data){
            state.cinemaList=data
        }
    },
    actions:{
        async getCinemaState(store,cityId){
              const res = await clyhttp({
                url: `/gateway?cityId=${cityId}&ticketFlag=1&k=9570523`,
                headers: {
                  "X-Host": "mall.film-ticket.cinema.list",
                }
               })
               store.commit('changeCinemaCity',res.data.data.cinemas)
               //store.commit('changeCinemaCity',data.data.data.cinemas)
            //     //console.log(res.data.data.cinemas)
            //     store.commit('changeCinemaCity',res.data.data.cinemas)
            //   });
        }
    }

})
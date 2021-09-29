<template>
  <div>
    <tabbar></tabbar>
    <section>
      <router-view></router-view>
    </section>
    
  </div>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

import tabbar from './components/Tabbar.vue'
export default {
  components:{
    tabbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
ul{
  list-style: none;
}
section{
  padding-bottom: 2.7rem; /*底部加点高度防止图片被遮挡*/
}
</style>
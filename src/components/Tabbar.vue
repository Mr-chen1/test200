<template>
<footer>
      <ul>
        <router-link to="/films" custom v-slot="{ navigate, isActive }">
          <li @click="navigate" :class="isActive ? 'clyactive' : ''">
              <i class="iconfont icon-all"></i>
            <span>电影</span>
          </li>
        </router-link>

        <router-link to="/cinemas" custom v-slot="{ navigate, isActive }">
          <li @click="navigate" :class="isActive ? 'clyactive' : ''">
              <i class="iconfont icon-comments"></i>
            <span>影院</span>
          </li>
        </router-link>

        <router-link to="/center" custom v-slot="{ navigate, isActive }">
          <li @click="navigate" :class="isActive ? 'clyactive' : ''">
              <i class="iconfont icon-account"></i>
            <span>我的</span>
          </li>
        </router-link>
      </ul>
  </footer>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
export default {

}
</script>

<style scoped>

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2.7rem;
  background-color: white;
  z-index: 100;
}
ul {
  display: flex;
}
li {
  flex: 1;
  line-height: 1.38rem;
  text-align: center;
  display: flex;
  flex-direction: column;
}
li i{
    font-size: 20px;
}
li span{
    font-size: 16px;
}

  ul>.clyactive{
    color:red
  }
</style>
<template>
  <div>
    <div class="clyBox">11111111</div>
    <ul>
      <router-link to='/films' custom v-slot='{navigate,isActive}'>
        <li @click="navigate" :class="isActive?'clyactive':''">电影--{{isActive}}</li>
      </router-link>
      
      <router-link to='/cinemas' custom v-slot='{navigate,isActive}'>
        <li @click="navigate" :class="isActive?'clyactive':''">影院--{{isActive}}</li>
      </router-link>

      <router-link to='/center' custom v-slot='{navigate,isActive}'>
        <li @click="navigate" :class="isActive?'clyactive':''">我的--{{isActive}}</li>
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
  ul>.clyactive{
    color:red
  }
  .clyBox{
    width: 46.875rem;
    height: 12.5rem;
    background-color: yellow;

  }
</style>
<template>
  <div>
    nowplaying

    <ul>
      <li @click="handechangepage(item)" v-for="item in datalist" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datalist: ["1111", "2222", "3333"],
    };
  },
  methods: {
      handechangepage(id){
          this.$router.push(`/detail/${id}`)
      }
  },
};
</script>
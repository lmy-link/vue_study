<template>
  <div>
    <div class="box">
      <div class="page" @click="toPage1">页面1</div>
      <div class="page" @click="toPage2">页面2</div>
    </div>
    <keep-alive>
      <router-view :num="num"></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  // render(h) {
  //   return h("h1", "we");
  // },
  // render() {
  //   return <div>123</div>;
  // },
  data() {
    return {
      url: process.env.NODE_ENV,
      num: 0
    };
  },
  watch: {},
  mounted() {},
  methods: {
    toPage1() {
      this.$router.push({
        name: "page2"
      });
      this.num++;
      console.log(this.num);
    },
    toPage2() {
      this.$router.push({
        name: "page3"
      });
      this.num++;
      console.log(this.num);
    }
  }
};
</script>

<style scoped>
.box {
  display: flex;
}
.page {
  flex: 1;
}
</style>

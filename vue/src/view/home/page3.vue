<template>
  <div>第二个页面</div>
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
      url: process.env.NODE_ENV
    };
  },
  watch: {},
  beforeRouteLeave(to, from, next) {
    console.log(to);
    // if (to.name == "page2") {
    //   window.history.back();
    // }
    next();
  },
  mounted() {},
  methods: {}
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

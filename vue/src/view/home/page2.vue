<template>
  <div>第一个页面</div>
</template>
<script>
export default {
  components: {},
  props: ["num"],
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
  beforeRouteLeave(to, from, next) {
    // console.log(to);
    // console.log(from);
    // window.removeEventListener("popstate", this.goBack, false);
    next();
  },
  watch: {},
  mounted() {
    history.pushState(null, null, document.URL);
  },
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

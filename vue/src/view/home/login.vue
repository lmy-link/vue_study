<template>
  <div>{{ url }}</div>
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
  destroyed() {
    window.removeEventListener("popstate", this.func, false);
  },
  mounted() {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener("popstate", this.func, false);
    }
  },
  methods: {
    func() {
      console.log("111");
    }
  }
};
</script>

<style scoped></style>

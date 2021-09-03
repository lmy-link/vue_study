<template>
  <div @click="to">{{ url }}</div>
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
    window.location.href = `${process.env.VUE_APP_PUBLIC_PATH}:9999/index.html#/`;
  },
  methods: {
    func() {
      console.log("111");
    },
    to() {
      this.$router.push({
        name: "page1"
      });
    }
  }
};
</script>

<style scoped></style>

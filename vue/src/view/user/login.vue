<template>
  <div>123</div>
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
  mounted() {
    window.location.href = `${process.env.VUE_APP_PUBLIC_PATH}:9999/user.html#/`;
  },
  methods: {}
};
</script>

<style scoped></style>

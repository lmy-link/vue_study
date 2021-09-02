<template>
  <div id="user">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "User",
  components: {}
};
</script>

<style>
#user {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {},
  components:{
  }
};
</script>
<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;
  font-size: 0.16rem;
  background: #f4f4f4;
  width: 100%;
  height: 100vh;
}
*{
  margin: 0;
  padding: 0;
}
</style>

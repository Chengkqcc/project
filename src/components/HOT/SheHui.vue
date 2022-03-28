<template>
  <div class="kangyi container">
  <ReUse :Appdata='Appdata'></ReUse>
      
  </div>
</template>

<script>
import axios from 'axios'
import ReUse from './ReUse'

export default {
  name: "KangYi",
  methods: {
    async getData() {
      let { data } = await axios.get("/api/shehui");
      this.Appdata = data;
    },
  },
  data() {
    return {
        Appdata:null
    };
  },
  created() {
    this.getData();
  },
  components:{
    ReUse
  }
};
</script>
<style scoped>
</style>
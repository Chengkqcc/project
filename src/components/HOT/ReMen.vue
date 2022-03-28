<template>
  <div class="container">
  <ReUse :Appdata='Appdata'></ReUse>
  </div>
</template>

<script>
import axios from 'axios'
import ReUse from './ReUse'
export default {
  name: "ReMen",
  methods: {
    async getData(){
      let {data} = await axios.get("/api/remen")
      this.Appdata = data
    }
  },
  data(){
    return{
      Appdata:null
    }
  },
  created(){
    this.getData()
  },
  components:{
    ReUse
  }
};
</script>
<style >

</style>
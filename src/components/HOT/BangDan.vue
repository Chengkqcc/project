<template>
  <div class="kangyi container">
    <ul class="yiqing">
      <li v-for="(item, index) in tops" :key="index">
        <img :src="item.imgSrc" alt="" />
        <p>{{ item.title }}</p>
      </li>
    </ul>
   <ReUse :Appdata='Appdata'></ReUse>
  </div>
</template>

<script>
import axios from 'axios'
import ReUse from './ReUse'

export default {
  name: "BangDan",
  methods: {
    async getData() {
      let { data } = await axios.get("/api/bangdan");
      this.Appdata = data;
    },
  },
  data() {
    return {
      tops: [
        {
          imgSrc: require("@/assets/bang1.png"),
          title: "小时榜",
        },
        {
          imgSrc: require("@/assets/bang2.png"),
          title: "热议榜",
        },
        {
          imgSrc: require("@/assets/bang3.png"),
          title: "周榜",
        },
        {
          imgSrc: require("@/assets/bang4.png"),
          title: "高赏榜",
        },
      ],
      Appdata:null
    };
  },
  components:{
    ReUse
  },
  created(){
    this.getData()
  }
};
</script>
<style scoped>
.yiqing li img {
  height: 0.52rem;
}
.yiqing li p {
  font-size: 0.22rem;
}
.yiqing li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.yiqing li {
  flex: 1;
  border-right: 0.01rem solid #eeeeee;
}
.yiqing {
  display: flex;
  box-sizing: border-box;
  padding: 0.28rem 0;
  height: 1.6rem;
  background: #fff;
  margin: 0.2rem 0;
}
.kangyi {
  width: 7.5rem;
  background: #eee;
}
</style>
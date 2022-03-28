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
  name: "KangYi",
  methods: {
    async getData() {
      let { data } = await axios.get("/api/kangyi");
      console.log(data);
      this.Appdata = data;
    },
  },
  data() {
    return {
      tops: [
        {
          imgSrc: require("@/assets/qiu.png"),
          title: "疫情地图",
        },
        {
          imgSrc: require("@/assets/qiu2.png"),
          title: "抗疫一线",
        },
        {
          imgSrc: require("@/assets/qiu3.png"),
          title: "出行政策",
        },
        {
          imgSrc: require("@/assets/qiu4.png"),
          title: "核酸检测",
        },
      ],
      Appdata: null,
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
  margin: 0.2rem .2rem;
}
.kangyi {
  width: 7.5rem;
  /* background: #eee; */
}
</style>
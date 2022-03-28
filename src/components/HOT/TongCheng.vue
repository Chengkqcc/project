<template>
  <div class="container">
    <div class="TC_top">
      <div class="main">
        <div class="left main_l">
          <img src="@/assets/position.png" alt="" />
          <p>默认位置：北京</p>
          <span>点击切换</span>
        </div>
        <div class="right">></div>
      </div>
      <ul class="foot">
        <li v-for="(item, index) in arrs" :key="index">
          <img :src="item.imgSrc" alt="" />
          <p>{{ item.text }}</p>
        </li>
      </ul>
    </div>
    <ReUse :Appdata="Appdata"></ReUse>
  </div>
</template>

<script>
import axios from "axios";
import ReUse from './ReUse'

export default {
  name: "TongCheng",
  methods: {
    async getData() {
      let { data } = await axios.get("/api/tongcheng");
      this.Appdata = data;
    },
  },
  data() {
    return {
      arrs: [
        {
          imgSrc: require("@/assets/TC_1.png"),
          text: "最新",
        },
        {
          imgSrc: require("@/assets/TC_2.png"),
          text: "最热",
        },
        {
          imgSrc: require("@/assets/TC_3.png"),
          text: "发布",
        },
        {
          imgSrc: require("@/assets/TJ_4.png"),
          text: "附近",
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
.foot li p {
  font-size: 0.28rem;
  margin-left: 0.1rem;
}
.foot li {
  box-sizing: border-box;
  padding: 0.32rem 0.42rem;
  display: flex;
  align-items: center;
}
.foot {
  display: flex;
  background: #fff;
  height: 0.95rem;
}
.main_l span {
  font-size: 0.22rem;
  color: #999999;
  margin-left: 0.1rem;
}
.main_l p {
  font-size: 0.28rem;
  color: #000;
  margin-left: 0.28rem;
}
.main_l {
  height: 0.96rem;

  width: 4.9rem;
  margin-left: 0.26rem;
  display: flex;
  align-items: center;
}
.left {
  float: left;
}
.right {
  height: 0.96rem;
  margin-right: 0.28rem;
  float: right;
  font-size: 0.3rem;
  display: flex;
  align-items: center;
}
.main {
  background: #fff;
  height: 0.96rem;
  margin: 0.18rem 0 0.01rem;
  border: 0.01rem solid;
  border-color: #999999 transparent;
}
.TC_top {
  background: #fff;
}
</style>
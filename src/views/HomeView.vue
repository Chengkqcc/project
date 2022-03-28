<template>
  <div class="homeBox">
    <div class="h_top">
      <img src="@/assets/camera.png" alt="" />
      <div class="t_mid">
        <p @click="fn(1)" class="active">
          <span class="gZ">关注</span>
          <i class="sanjiao"></i>
        </p>
        <p @click="fn(2)">
          <span class="Tj">推荐</span>
        </p>
      </div>
      <div class="t_right">
        <img src="@/assets/hongbao.png" class="H" alt="" />
        <img src="@/assets/addBtn.png" class="add" alt="" />
      </div>
    </div>
    <component :is="modul"></component>
    <FooterNav></FooterNav>
  </div>
  
</template>

<script>
import $ from "jquery"
import FooterNav from "../components/FooterNav/FooterNav.vue"
import GuanZhu from "../components/HOT/GuanZhu.vue";
import TuiJian from "../components/HOT/TuiJian.vue";
export default {
  name: "HomeView",
  components: {
    GuanZhu,
    TuiJian,
    FooterNav
  },
  data() {
    return {
      modul: "GuanZhu",
    };
  },
  methods: {
    fn(i) {
      if (i == 1) {
        $('.t_mid p').eq(0).addClass('active').siblings().removeClass('active')
        return (this.modul = "GuanZhu");
      }
      if (i == 2) {
        $('.t_mid p').eq(1).addClass('active').siblings().removeClass('active')
        return (this.modul = "TuiJian");
      }
    },
  },
};
</script>
<style scoped>
.active {
  color: #000 !important;
}
.active .Tj {
  border-bottom: 0.07rem solid rgb(250, 48, 48);
  /* display: inline-block; */
  /* padding-bottom: 0.05rem; */
}
.active .gZ {
  border-bottom: 0.07rem solid #ef9a37;
  /* display: inline-block; */
  /* padding-bottom: 0.05rem; */
}
.sanjiao {
  position: absolute;
  right: 0;
  top: 50%;
  display: block;
  width: 0;
  height: 0;
  border: 0.07rem solid;
  border-radius: 0.03rem;
  border-color: #000 transparent transparent transparent;
  transition: all 0.2s all;
}
.sanjiaoOn {
  transition: all 0.2s all;
  transform: rotate(180deg);
  top: 30% !important;
}
.H {
  height: 0.39rem;
}
.add {
  height: 0.45rem;
}
.h_top > img {
  height: 0.35rem;
}
.t_right {
  width: 1.12rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.t_mid p {
  /* line-height: 0.84rem; */
  position: relative;
  padding: 0 0.2rem 0 0;
  /* box-sizing: border-box; */
  font-size: 0.32rem;
  font-weight: bold;
  color: #939393;
  /* padding: 0 0.23rem; */
}
.t_mid {
  display: flex;
  width: 2.04rem;
  justify-content: space-between;
}
.h_top {
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 0.92rem;
  box-sizing: border-box;
  padding: 0 0.26rem;
  background: #f9f8f8;
  border-bottom: 0.02rem solid #ddd;
}
.homeBox {
  width: 7.5rem;
  box-sizing: border-box;
}
</style>

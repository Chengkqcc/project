<template>
  <div class="header">
     <input type="text" placeholder="邓伦道歉" class="ipt" @click="fn" />
    <div class="ftop">
      <!-- <router-link to="/SuoSou"> -->
      <!-- <input type="text" placeholder="邓伦道歉"> -->
      <!-- </router-link> -->
      <!-- <router-view></router-view> -->
    </div>
    <div class="resou">
      <h3>微博热搜</h3>
      <div class="conent">
        <ul>
          <li>香蜜沉沉烬如霜</li>
          <li>音乐是张艺兴与喜剧人</li>
          <li>爱尔眼科</li>
          <li>冯潇霆说中国足球很牛逼</li>
          <li>邓伦偷税漏税被形式</li>
        </ul>
        <ul>
          <li>邓伦抖音账号被封</li>
          <li>密室大逃脱</li>
          <li>如何让明星偷税漏税她发的</li>
          <li>夜旅人</li>
          <li>
            <router-link to="/PaiHang/RB" class="box">更多热搜》</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="lunbo">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item><img src="../assets/lunbo.png" /></van-swipe-item>
        <van-swipe-item><img src="../assets/lunbo.png" /></van-swipe-item>
        <van-swipe-item><img src="../assets/lunbo.png" /></van-swipe-item>
        <van-swipe-item><img src="../assets/lunbo.png" /></van-swipe-item>
      </van-swipe>
    </div>
    <div class="lunbo2">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item>
          <dl>
            <dd>
              <div class="content">
                <p>北京热搜</p>
                <p>更多></p>
              </div>
              <div class="center">
                <div>
                  <p>北京自3月7日以来fgdfddsfsd</p>
                  <p>@北京日报</p>
                </div>
                <img src="../assets/center.png" />
              </div>
              <div class="center">
                <div>
                  <p>北京自3月7日以来...</p>
                  <p>@北京日报</p>
                </div>
                <img src="../assets/center.png" />
              </div>
            </dd>
          </dl>
        </van-swipe-item>
        <van-swipe-item>
          <dl>
            <dd>
              <div class="content">
                <p>北京热搜</p>
                <p>更多></p>
              </div>
              <div class="center">
                <div>
                  <p>北京自3月7日以来fgdfddsfsd</p>
                  <p>@北京日报</p>
                </div>
                <img src="../assets/center.png" />
              </div>
              <div class="center">
                <div>
                  <p>北京自3月7日以来...</p>
                  <p>@北京日报</p>
                </div>
                <img src="../assets/center.png" />
              </div>
            </dd>
          </dl>
        </van-swipe-item>
      </van-swipe>
      <Home></Home>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>
<script>
import Home from "../../微博项目/src/views/Home.vue"
import FooterNav from "./FooterNav/FooterNav.vue";
export default {
  name: "FaXian",
  methods: {
    fn() {
      this.$router.push({ path: "/SouSuo" });
    },
  },
  components: {
    FooterNav,
    Home
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
}
.ipt {
  width: 90%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  padding: 0 0.6rem;
  background: #e4e4e6;
  font-size: 0.16rem;
  margin: .2rem 0 0;
}
li {
  list-style: none;
}
.header {
  width: 90%;
  height: 16rem;
  font-size: 0.25rem;
  margin: 0 auto;
  background: #FFF;
}
.ftop input {
  width: 90%;
  height: 0.6rem;
  line-height: 0.6rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  padding: 0 0.6rem;
  background: #e4e4e6;
}
.resou h3 {
  width: 2.5rem;
  margin-top: 0.35rem;
  font-weight: normal;
  margin-bottom: 0.1rem;
  padding-left: 0.2rem;
  background: url("../assets/放大镜.png") no-repeat 0.45rem;
  background-size: 0.38rem 0.38rem;
}
.resou .conent {
  display: flex;
}
.resou .conent img {
  width: 0.3rem;
  height: 0.28rem;
  vertical-align: middle;
}
.resou .conent ul {
  flex: 1;
}
.resou .conent ul:last-child {
  border-left: 1px solid #ccc;
}
.resou .conent ul li {
  margin: 0.15rem 0;
  width: 3.25rem;
  padding: 0 0.5rem;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}

.conent ul:first-child li:nth-child(1) {
  background: url("../assets/热.png") no-repeat 2.3rem 0.04rem;
  background-size: 0.3rem 0.29rem;
}
.conent ul:first-child li:nth-child(2) {
  background: url("../assets/新.png") no-repeat 2.8rem 0.04rem;
  background-size: 0.3rem 0.29rem;
}
.conent ul:first-child li:nth-child(3) {
  background: url("../assets/热.png") no-repeat 1.6rem 0.04rem;
  background-size: 0.3rem 0.29rem;
}
.conent ul:first-child li:nth-child(4) {
  background: url("../assets/新.png") no-repeat 2.8rem 0.04rem;
  background-size: 0.3rem 0.29rem;
}
.conent ul:last-child li:nth-child(1) {
  background: url("../assets/新.png") no-repeat 2.55rem 0.03rem;
  background-size: 0.3rem 0.29rem;
}
.conent ul:last-child li:nth-child(2) {
  background: url("../assets/热.png") no-repeat 1.8rem 0.03rem;
  background-size: 0.3rem 0.29rem;
}
.conent ul:last-child li:nth-child(3) {
  background: url("../assets/新.png") no-repeat 2.8rem 0.03rem;
  background-size: 0.3rem 0.29rem;
}
.conent ul:last-child li:nth-child(5) {
  color: orange;
}
.lunbo {
  margin-top: 0.25rem;
}
.lunbo img {
  width: 90%;
  height: 3rem;
}
.lunbo2 {
  margin-top: 0.25rem;
  display: flex;
  width: 95%;
  /* overflow:hidden; */
}
.lunbo2 dl {
  width: 5.37rem;
  height: 3.15rem;
  border: 1px solid #ccc;
  margin-right: 0.2rem;
}
.lunbo2 dl dd .content {
  display: flex;
  padding: 0.13rem;
  box-sizing: border-box;
}
.lunbo2 .content p:last-child {
  color: #ccc;
}
.lunbo2 dl dd .content p {
  flex: 1;
  color: #000;
}
.lunbo2 dl dd .center {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 0.3rem;
}
.lunbo2 .center img {
  width: 1.19rem;
  height: 0.89rem;
}
.lunbo2 .center p {
  width: 3rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  color: #000;
}
.lunbo2 .center p:last-child {
  color: #ccc;
}
.box {
  text-decoration: none;
  color: orange;
}
.my-swipe .van-swipe-item {
  color: #fff;
  /* line-height: 100px; */
  text-align: center;
  height: 3rem;
  width: 2.83rem;
  /* background-color: #39a9ed; */
}
/* .my-swipe1 .van-swipe-item:first-child {
  color: #fff;
  text-align: center;
  height: 3rem;
  width: 2.83rem;
  margin-left: 0.3rem;
}
.my-swipe1 .van-swipe-item {
  color: #fff;
  text-align: center;
  height: 3rem;
  width: 2.83rem;
  margin-left: -0.1rem;
} */
</style>
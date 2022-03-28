<template>
    <div>
        <ul class="main_List">
      <li v-for="(item, index) in Appdata" :key="index">
        <div class="item_top">
          <div class="user">
            <img :src="item.userImg" />
          </div>
          <div class="top_right">
            <div>
              <p class="title">{{ item.username }}</p>
              <img src="@/assets/vip.png" class="vip" alt="" />
            </div>
            <p>
              <span class="time">{{ item.time }}</span>
              <span class="from">{{ item.from }}</span>
            </p>
          </div>
        </div>
        <div class="text">
          <p>{{ item.text }}</p>
          <div :class="item.imgSrc.length >= 3 ? 'imgs2' : 'imgs'">
            <div v-for="(item2, index2) in item.imgSrc" :key="index2">
              <img :src="item2" alt="" />
            </div>
          </div>
        </div>
        <div class="item_foot">
          <div>
            <span class="icon-zhuanfa iconfont"></span>
            <span>{{ item.zhuan }}</span>
          </div>
          <div>
            <span class="icon-xiaoxi iconfont"></span>
            <span>{{ item.liuyan }}</span>
          </div>
          <div>
            <span class="icon-good iconfont"></span>
            <span>{{ item.dianzan }}</span>
          </div>
        </div>
      </li>
    </ul>
    </div>
</template>

<script>
    export default ({
        name: "ReUse",
        methods: {
            
        },
        props:['Appdata'],
    })
</script>
<style scoped>
.tui_top .active{
  color: #ec7513;
}
.item_foot span:nth-child(1){
  font-size:.25rem;
  margin-right:.15rem;
}
.item_foot span{
  font-size: .3rem;
  color:#636363 ;
}
.item_foot{
  height: 1.08rem;
  box-sizing: border-box;
  border:.02rem solid;
  border-color: #e6e6e6 transparent;
  width: 100%;
  display:flex;
  justify-content: space-around;
  flex:1;
  align-items: center;
}
.imgs img {
  width: 100%;
}
.imgs2>div{
  width: 33%;
}
.imgs {
  
  display: flex;
  justify-content: space-between;
}
.imgs2 img {
  width: 100%;
}
.imgs2 {
  margin-bottom: .36rem;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  justify-content: space-between;

  /* flex: 1; */
}
.text > p{
  font-size: .3rem;
}
.biaoqian {
  font-size: 0.28rem;
}
.biaoqian {
  color: #819bbe;
}
.time {
  margin-right: 0.15rem;
}
.top_right > p {
  display: flex;
  color: #8b8b8b;
}
.top_right > p > span {
  font-size: 0.22rem;
}
.vip {
  width: 0.27rem;
  height: 0.28rem;
}
.top_right > div {
  display: flex;
  align-items: center;
}
.title {
  font-size: 0.27rem;
  color: #e57940;
}
* {
  font-size: 0.16rem;
}
.top_right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.user {
  width: 0.82rem;
  height: 0.82rem;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 0.26rem;
}
.user img {
  width: 100%;
}
.item_top {
  display: flex;
  padding: 0.18rem 0;
}
.main_List li {
  border-bottom: 1px solid #f4f4f4;
  background: #fff;
  margin: 0 .26rem;
}
</style>
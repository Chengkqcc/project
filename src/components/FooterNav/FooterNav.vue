<template>
  <div class="FooterNav">
    <div class="wrap demo" @click="fn(0)">
      <div><img src="../../assets/image/under-icon/demo.png" alt="" /></div>
      <p class="active"><router-link to="HomeView">首页</router-link></p>
    </div>
    <div class="wrap video" @click="fn(1)">
      <div><img src="../../assets/image/under-icon/video.png" alt="" /></div>
      <p><router-link to="Video">视频号</router-link></p>
    </div>
    <div class="wrap search" @click="fn(2)">
      <div><img src="../../assets/image/under-icon/search.png" alt="" /></div>
      <p><router-link to="/">发现</router-link></p>
    </div>
    <div class="wrap nmeil" @click="fn(3)">
      <div><img src="../../assets/image/under-icon/meil.png" alt="" /></div>
      <p><router-link to="/Dt">信息</router-link></p>
    </div>
    <div class="wrap my" @click="fn(4)">
      <div><img src="../../assets/image/under-icon/my.png" alt="" /></div>
      <p><router-link to="MyPage">我</router-link></p>
    </div>
  </div>
</template>

<script>
import $ from "jquery"
export default {
  name: "FooterNav",
  props: [],
  methods:{
    fn(i){
      console.log($('.FooterNav .wrap img').eq(i).attr('src'))
      $('.FooterNav .wrap img').eq(i).attr('src',this.Arrs[i])
      console.log(this.Arrs[i])
    }
  },
  data(){
    return{
      Arrs:[
        require('../../assets/image/under-icon/demo-click.png'),
        require('../../assets/image/under-icon/video-click.png'),
        require('../../assets/image/under-icon/search-click.png'),
        require('../../assets/image/under-icon/meil-click.png'),
        require('../../assets/image/under-icon/my-click.png')
        ]
    }
  },
  mounted(){
    this.fn(2)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.FooterNav .wrap p a{
  color: #000;
}
.FooterNav {
  width: 100%;
  height: 1.04rem;
  background: #fafafa;
  display: flex;
  align-items: center;
  font-size: 0.18rem;
  color: #414141;
  font-family: "华文楷体";
  border-top: 0.01rem solid #e5e5e5;
  position: fixed;
  bottom: -0.05rem;
  left: 0;
}
.FooterNav .wrap {
  flex: 1;
  height: 0.73rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.FooterNav .wrap div img {
  width: 0.44rem;
  height: 0.44rem;
}
.FooterNav .wrap p {
  margin: 0;
}
</style>

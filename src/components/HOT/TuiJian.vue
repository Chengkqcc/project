<template>
  <div class="tuijian ">
    <div class="ding">
      <div class="tui_box">
        <ul class="tui_top" >
          <li v-for="(item,index) in luyou" :key="index" @click="fn(index)">
            {{item}}
          </li>
        </ul>
        <van-icon name="plus" size=".4rem" class="add" />
      </div>
    </div>
    <component :is='title'></component>

  </div>
</template>

<script>
import $ from "jquery"
import ReMen from "./ReMen.vue"
import KangYi from "./KangYi.vue"
import TongCheng from "./TongCheng.vue"
import YouXi from "./YouXi.vue"
import JianKang from "./JianKang.vue"
import Happy from "./Happy.vue"
import BangDan from "./BangDan.vue"
import SheHui from "./SheHui.vue"


export default {
  name: "TuiJian",
  methods: {
    fn(i){
      this.title = this.Tarrs[i]
      $('.tui_top li').eq(i).addClass('active').siblings().removeClass('active')
    }
  },
  data(){
    return{
      luyou:['热门','抗疫','同城','榜单','游戏','社会','健康','搞笑'],
      Tarrs:['ReMen','KangYi','TongCheng','BangDan','YouXi','SheHui','JianKang','Happy'],
      title:"ReMen"
    }
  },
  components:{
    ReMen,
    KangYi,
    TongCheng,
    YouXi,
    JianKang,
    Happy,
    BangDan,
    SheHui
  },

  mounted(){
    $('.tui_top li').eq(0).addClass('active')
  }
};
</script>
<style scoped>

.add{
  position: absolute;
  right: 4%;
  top: .17rem;
}
.tui_box{
  width: 6.5rem;
  overflow: scroll;
  height: .8rem;
  
}
.tui_top li.active{
  color: #ec7513;
}
  .tui_top li {
    font-size: .27rem;
  }
  .tui_top{
  height: .8rem;
  
    width: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    overflow: scroll;
  }
  a{
    color: #000;
  }
  .ding{
    position: relative;
    background: #fff;
  }
  .tuijian{

    background: #eeeeee;
    width: 7.5rem;
  }
</style>

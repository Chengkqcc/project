<template>
  <div class="guanzhu content ">
    <ul class="main_List" >
     <li v-for="(item,index) in Appdata" :key="index">
        <div class="item_top">
          <div class="user">
            <img :src="item.userImg" />
          </div>
          <div class="top_right">
            <div>
              <p class="title">{{item.username}}</p>
              <img src="@/assets/vip.png" class="vip" alt="" />
            </div>
            <p>
              <span class="time">{{item.time}}</span>
              <span class="from">{{item.from}}</span>
            </p>
          </div>
        </div>
        <div class="text">
          <p>{{item.text}}</p>
          <div :class='item.imgSrc.length>=3?"imgs2":"imgs"' >
            <div  v-for="(item2,index2) in item.imgSrc" :key="index2">
                <img :src="item2" alt="">
            </div>
            
          </div>
        </div>
        <div class="item_foot">
            <div>
              <span class="icon-zhuanfa iconfont" ></span>
              <span>{{item.zhuan}}</span>
            </div>
            <div>
              <span class="icon-xiaoxi iconfont" ></span>
              <span>{{item.liuyan}}</span>
            </div>
            <div>
              <span class="icon-good iconfont" ></span>
              <span>{{item.dianzan}}</span>
            </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "GuanZhu",
  methods: {},
  data(){
    return{
      Appdata:[
        {
          userImg:"https://tvax4.sinaimg.cn/crop.0.0.1080.1080.180/005NSfrtly8gqy3fpnqqmj30u00u077p.jpg?KID=imgbed,tva&Expires=1647438258&ssig=DHTV1vsx3Y",
          username:"扒娱蜀黍",
          time:"8小时前",
          from:"iPhone 客户端",
          text:`原创剧本，剧情完整紧凑，演技在线#猎罪图鉴评分持续走高##猎罪图鉴微博评分8.6#$这才是正确的开分方式，某瓣开分低是因为没活人吧［doge］ `,
          imgSrc:[
            "https://wx4.sinaimg.cn/orj360/005NSfrtgy1h0bied9svfj30zk1r816u.jpg",
            "https://wx4.sinaimg.cn/orj360/005NSfrtgy1h0biedl5nyj30zk1r8anl.jpg",
            "https://wx1.sinaimg.cn/orj360/005NSfrtgy1h0biee1ob1j30v91b4amb.jpg"
          ],
          zhuan:41,
          liuyan:50,
          dianzan:219
        },
        {
          userImg:"https://tvax2.sinaimg.cn/crop.261.201.600.600.180/6ade4348ly8ge5avdm8jbj20u00u075k.jpg?KID=imgbed,tva&Expires=1647438258&ssig=ucPrGT8cnc",
          username:"X玖少年团肖战DAYTOY",
          time:"昨天20:20",
          from:"",
          text:'#余生请多指教今日开播#</span> 遇见你那天，我的世界充满光亮。余生，请多指教。 ',
          imgSrc:[
            "https://wx1.sinaimg.cn/orj360/6ade4348gy1h0au299x5jj23g14t9b2b.jpg"
          ],
          zhuan:'82.4万',
          liuyan:'52.9万',
          dianzan:'282万'
        },
        {
          userImg:"https://tva4.sinaimg.cn/crop.1.0.116.116.180/9c7297c7gw1ednwlhjuzzj203c03a3yh.jpg?KID=imgbed,tva&Expires=1647438258&ssig=sPL2tQgYJW",
          username:"月光本尊",
          time:"4小时前",
          from:"来自 HUAWEI P40 Pro 5G",
          text:'俄罗斯宣布制裁拜登#俄罗斯昨天公布的制裁名单里除了拜登父子一起上榜令人关注外。美国财政部副部长阿德莫耶被制裁，部长耶伦反而没有上榜，也有点意思。其实，禁止俄罗斯货船进出直布罗陀、苏伊士运河、马六甲海峡、白令海峡等关键海峡或者运河的建议就是阿德莫耶建议的，这个黑人很疯狂。 ',
          imgSrc:[
            "https://wx2.sinaimg.cn/orj360/9c7297c7gy1h0brjhmjbmj20t60hkmyt.jpg"
          ],
          zhuan:'11',
          liuyan:'25',
          dianzan:'248'
        },
        {
          userImg:"https://tva3.sinaimg.cn/crop.0.0.1080.1080.180/7044e956jw8eqknklse54j20u00u00zj.jpg?KID=imgbed,tva&Expires=1647438258&ssig=at7v4lGqf8",
          username:"我和动漫的日常",
          time:".-15 17:22",
          from:"来自 weibo.com 已编辑",
          text:'#垫底辣妹原型考上哥大研究生#电影《垫底辣妹》女主原型小林沙耶香今天发推，庆祝自己考上了加利福尼亚大学洛杉矶分校和哥伦比亚大学教育心理学研究生。为此她努力了两年，托福也从62分提高到104分。 ',
          imgSrc:[
            "https://wx2.sinaimg.cn/orj360/0023tf8ygy1h0aosgifm0j60ka0klwhh02.jpg",
            "https://wx3.sinaimg.cn/orj360/0023tf8ygy1h0aosj8cncj60gg094q4302.jpg",
            "https://wx3.sinaimg.cn/orj360/0023tf8ygy1h0aoslmb2vj60t00xwjw002.jpg",
            "https://wx3.sinaimg.cn/orj360/0023tf8ygy1h0axcv4cr1j60u00u0tdb02.jpg",
            "https://wx4.sinaimg.cn/orj360/0023tf8ygy1h0axcxevnpj60u01vjq9o02.jpg",
            "https://wx3.sinaimg.cn/orj360/0023tf8ygy1h0axcziedfj60u018zdjm02.jpg"
          ],
          zhuan:'1.2万',
          liuyan:'3039',
          dianzan:'11.7万'
        }
      ]
    }
  }
};
</script>
<style scoped>
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
  margin: 0 .26rem .2rem .26rem;
}
.main_List{
  background: #fff;
}
.guanzhu {
  box-sizing: border-box;
  width: 7.5rem;
}
</style>

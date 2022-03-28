<template>
  <div class="home">
    <div class="nav">
      <ul>
        <li>
          <h3 class="activeNavH3">热点</h3>
          <h6 class="activeNavH6">热门资讯</h6>
        </li>
        <li>
          <h3>潮流</h3>
          <h6>流行速递</h6>
        </li>
        <li>
          <h3>本地</h3>
          <h6>同城关注</h6>
        </li>
        <li>
          <h3>放映厅</h3>
          <h6>宅家必看</h6>
        </li>
        <li>
          <h3>直播</h3>
          <h6>大V在直播</h6>
        </li>
      </ul>
      <van-cell is-link @click="showPopup"> </van-cell>
      <van-popup v-model="show" position="top" :style="{ height: '8.75rem' }">
        <div class="more-cell">
          <div class="top">
            <p class="type">精选频道</p>
            <ul class="uuu">
              <li>
                <img src="./../assets/images/下拉图片_03.png" alt="">
                <p>热点</p>
              </li>
              <li>
                <img src="./../assets/images/下拉图片_05.png" alt="">
                <p>潮流</p>
              </li>
              <li>
                <img src="./../assets/images/下拉图片_07.png" alt="">
                <p>本地</p>
              </li>
              <li>
                <img src="./../assets/images/下拉图片_09.png" alt="">
                <p>放映厅</p>
              </li>
              <li>
                <img src="./../assets/images/下拉图片_11.png" alt="">
                <p>直播</p>
              </li>
              <li>
               
              </li>
            </ul>
          </div>
          <div class="bottoms">
            <p class="type">更多频道</p>
            <ul>
              <li>
                <ul class="uuu">
                  <li>
                    <img src="./../assets/images/下拉图片_18.png" alt="">
                    <p>榜单</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_19.png" alt="">
                    <p>同城</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_20.png" alt="">
                    <p>找人</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_21.png" alt="">
                    <p>电影</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_22.png" alt="">
                    <p>财经</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_24.png" alt="">
                    <p>红人淘</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="uuu">
                  <li>
                    <img src="./../assets/images/下拉图片_32.png" alt="">
                    <p>小游戏</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_33.png" alt="">
                    <p>美食</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_34.png" alt="">
                    <p>0元试用</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_35.png" alt="">
                    <p>超话</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_36.png" alt="">
                    <p>教育</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_37.png" alt="">
                    <p>汽车</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="uuu">
                  <li>
                    <img src="./../assets/images/下拉图片_44.png" alt="">
                    <p>新知</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_45.png" alt="">
                    <p>房产</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_46.png" alt="">
                    <p>直播</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_47.png" alt="">
                    <p>珠宝玉石</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_48.png" alt="">
                    <p>活动</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_49.png" alt="">
                    <p>母婴</p>
                  </li>
                </ul>
              </li>
              <li>
                <ul class="uuu">
                  <li>
                    <img src="./../assets/images/下拉图片_56.png" alt="">
                    <p>音乐</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_57.png" alt="">
                    <p>微公益</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_58.png" alt="">
                    <p>赛事</p>
                  </li>
                  <li>
                    <img src="./../assets/images/下拉图片_59.png" alt="">
                    <p>娱乐</p>
                  </li>
                  <li></li>
                  <li></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </van-popup>
    </div>
    <div class="content">
      <div class="first">
        <div class="titleBox">
          <div class="photo"></div>
          <div class="username">
            <h3>央视新闻</h3>
            <h6>中央电视台新闻中心官方微博</h6>
          </div>
        </div>
        <div class="bodyBox">
          <p>
            <span style="color: #7486a1">#邓伦偷逃税被查#</span>【<span
              style="color: #7486a1"
              >邓伦偷税逃税被追缴并罚款1.06亿元#</span
            >】近期，根据税收监管中的线索，上海市税务局第四稽查局经税收大数据进一步分析，发现邓伦涉嫌偷逃税，依法对其开展了全面深入的税务检查。经查，邓伦在2019年至2020年期间，通过虚构业务转换收入性质进行虚假申报，偷逃个人所得税4765.82万元……<span
              style="color: #7486a1"
              >全文</span
            >
          </p>
          <img src="./../assets/央视新闻内容.png" alt="" />
          <div class="emojiBox">
            <div class="number">5769人</div>
            <div class="emojis">
              <img src="./../assets/wb2.gif" alt="" />
              <img src="./../assets/wb2.gif" alt="" />
              <img src="./../assets/wb2.gif" alt="" />
            </div>
          </div>
          <div class="classBox">
            <ul>
              <li>
                <i class="iconfont icon-fenxiang"></i
                ><span class="num">8.3</span>万
              </li>
              <li>
                <i class="iconfont icon-pinglun"></i
                ><span class="num">14.2</span>万
              </li>
              <li>
                <i class="iconfont icon-good"></i><span class="num">235</span>万
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="second">
        <div class="title">
          <h4><img src="./../assets/热议.png" />热议话题</h4>
          <span>更多 ></span>
        </div>
        <div class="main">
          <h2>#如何评价檀健次在猎罪图鉴中的表现#</h2>
          <div class="article">
            <div class="txt">
              <p>
                《猎罪图鉴》的热播让主演檀健次饰演的沈翊受到了网友热议，你会如……
              </p>
              <h5>
                <span style="margin-right: 0.1rem">@酿酒熊子</span
                >等2631人正在讨论
              </h5>
            </div>
            <img src="./../assets/热议内容.png" alt="" />
          </div>
        </div>
      </div>
      <div class="third">
        <div class="titleBox">
          <div class="left">
            <div class="photo"></div>
            <div class="username">
              <h3>爱豆综艺汇</h3>
              <h6>来自<span>Redmi K40</span></h6>
            </div>
          </div>
          <button class="focus">+关注</button>
        </div>
        <div class="bodyBox">
          <p class="title">#邓伦偷逃税被追缴并罚款1.06亿元#</p>
          <p>邓伦偷逃税？？？</p>
          <p>这件事你怎么看？</p>
          <div class="viewportBox">
            <p>这件事你怎么看？</p>
            <ul>
              <li>是我认识的那个邓伦吗？震惊</li>
              <li>脱粉了</li>
              <li>违法必究</li>
              <li>那么多好看的剧，可惜了</li>
            </ul>
            <div class="remark">
              <div class="PersonTime">
                <span class="person">9.8万人产与</span>
                <span class="time">还有5天结束</span>
              </div>
              <div class="principal">
                <span><span class="pri-name">@爱豆综艺汇</span>创建</span>
              </div>
            </div>
          </div>
          <div class="bottom">
            <ul class="tagBox">
              <li>
                <i class="iconfont icon-ego-hot"></i>
                <span>娱乐明星</span>
              </li>
            </ul>
            <div class="emojiBox">
              <div class="number">17人</div>
              <div class="emojis">
                <img src="./../assets/wb2.gif" alt="" />
              </div>
            </div>
          </div>

          <div class="classBox">
            <ul>
              <li>
                <i class="iconfont icon-fenxiang"></i
                ><span class="num">87</span>
              </li>
              <li>
                <i class="iconfont icon-pinglun"></i
                ><span class="num">123</span>
              </li>
              <li>
                <i class="iconfont icon-good"></i><span class="num">9.7</span>万
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="fourth">
        <div class="titleBox">
          <div class="left">
            <div class="photo"></div>
            <div class="username">
              <h3>
                <span>致竞荣耀</span
                ><img src="./../assets/VIP.png" alt="" class="vip" /><img
                  src="./../assets/答-银牌.png"
                  alt=""
                  class="medal"
                />
              </h3>
              <h6>知名游戏博主</h6>
            </div>
          </div>
          <button class="focus">+关注</button>
        </div>
        <div class="bodyBox">
          <p class="title">KPL超话</p>
          <p>【今日赛前预测】</p>
          <p class="text">
            20:00 西安WE vs 武汉eStarPro，
            武汉eStarPro赢下本场比赛则提前确认晋级季后赛，你认为谁能拿下本场胜利？
          </p>
          <p class="title">#小致分享##2022KPL春季赛#</p>
          <div class="viewportBox">
            <p>西安WE vs 武汉eStarPro赛前预测</p>
            <div class="teams">
              <img src="./../assets/WE战队.png" alt="" />
              <img src="./../assets/eStarPro战队.png" alt="" />
            </div>
            <div class="buttons">
              <button>投票</button>
              <button>投票</button>
            </div>
            <div class="remark">
              <div class="PersonTime">
                <span class="person">1350人参与</span>
                <span class="time">还有6天结束</span>
              </div>
              <div class="principal">
                <span><span class="pri-name">@致竞荣耀</span>创建</span>
              </div>
            </div>
          </div>
          <ul class="tagBox">
            <li>
              <i class="iconfont icon-ego-hot"></i>
              <span>游戏</span>
            </li>
          </ul>
          <div class="classBox">
            <ul>
              <li>
                <i class="iconfont icon-fenxiang"></i><span class="num">3</span>
              </li>
              <li>
                <i class="iconfont icon-pinglun"></i><span class="num">3</span>
              </li>
              <li>
                <i class="iconfont icon-good"></i><span class="num">1312</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    },
  },
};
</script>
<style scoped>
.nav {
  width: 100%;
  position: relative;
  font-size: 0.28rem;
  border-bottom: 1.3px solid rgb(207, 194, 194);
  /* position: fixed; */
  top: 0;
  background: white;
}
.nav h6 {
  font-weight: normal;
  font-size: 0.2rem;
  color: gray;
  padding: 0.02rem 0.13rem;
  border-radius: 0.2rem;
  background: white;
  margin-top: 0.05rem;
}
.nav>ul {
  padding: 0.2rem 0.54rem;
  display: flex;
  justify-content: space-between;
}
.nav .more {
  display: flex;
  align-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 0.2rem;
  color: gray;
}
.more-cell {
  width: 100%;
  height: 60%;
}
.van-cell {
  position: absolute;
  top: 0;
  right: 0;
  background: white;
  width: .4rem;
  height: 70%;
  box-sizing: border-box;
  margin: 0.18rem 0;
  border-left: 1px solid gray;
}
.activeNavH3 {
  color: #f29627;
}
.activeNavH6 {
  color: white !important;
  background: #f29627 !important;
}
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #efefef;
}
.content > * {
  background: white;
  margin-bottom: 0.2rem;
}
.first {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.27rem 0.27rem 0 0.27rem;
}
.first > * {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.first .photo {
  background-image: url("./../assets/央视新闻.png");
}
.photo {
  width: 0.86rem;
  height: 0.86rem;
  background-size: cover;
}
.username {
  padding: 0.22rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 0.3rem;
}
.username h3 {
  font-size: 0.3rem;
  color: #f29627;
  font-weight: normal;
}
.username h6 {
  font-size: 0.22rem;
  color: gray;
  font-weight: normal;
}
.bodyBox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.bodyBox p {
  text-align: left;
  font-size: 0.29rem;
}
.bodyBox img {
  margin: 0.1rem 0;
  width: 5.11rem;
}
.emojiBox {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.22rem;
}
.first .emojiBox {
  width: 100%;
}
.emojiBox img {
  width: 0.4rem;
  border: 1px solid white;
  border-radius: 50%;
}
.emojiBox img:nth-child(1) {
  transform: translateX(0.24rem);
}
.emojiBox img:nth-child(2) {
  transform: translateX(0.12rem);
}
.emojis {
  width: 1.32rem;
}
.classBox {
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #e5e5e5;
  padding: 0.1rem 0.52rem;
}
.classBox ul {
  display: flex;
  justify-content: space-between;
  font-size: 0.21rem;
}
.classBox ul i {
  margin-right: 0.1rem;
  font-size: 0.25rem;
}
.second .title {
  display: flex;
  justify-content: space-between;
  padding: 0 0.27rem;
  border-bottom: 1px solid #e5e5e5;
  height: 0.88rem;
  line-height: 0.88rem;
  font-size: 0.26rem;
}
.second .title h4 {
  display: flex;
  align-items: center;
}
.second .title img {
  width: 0.41rem;
  margin-right: 0.15rem;
}
.second .main {
  display: flex;
  flex-direction: column;
  padding: 0.3rem 0.27rem;
}
.second .main h2 {
  font-size: 0.33rem;
  font-weight: 500;
  color: black;
  text-align: left;
}
.second .article {
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  text-align: left;
  font-size: 0.27rem;
}
.second .article img {
  width: 2.1rem;
  margin-left: 0.32rem;
}
.second .txt {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}
.second .txt h5 {
  font-weight: normal;
  font-size: 0.22rem;
  color: #999393;
}
.third,
.fourth {
  padding: 0 0.28rem;
}
.titleBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.titleBox .left {
  display: flex;
  align-items: center;
}
.third .photo {
  background-image: url("../assets/爱豆头像.png");
}
.focus {
  width: 1.15rem;
  height: 0.56rem;
  color: #ff8501;
  border: 1px solid #ff8501;
  background: white;
  border-radius: 0.56rem;
  font-size: 0.22rem;
}
h6 span {
  color: #537cb9;
  margin-left: 0.1rem;
}
.bodyBox .title {
  color: #4c79bb;
  font-size: 0.32rem;
  margin-bottom: 0.5rem;
}
.viewportBox {
  width: 100%;
  box-sizing: border-box;
  padding: 0.28rem 0.17rem;
  background-color: #f8f8f8;
  margin-top: 0.1rem;
}
.viewportBox ul li {
  height: 0.7rem;
  border: 1.4px solid #bebebe;
  border-radius: 5px;
  margin: 0.15rem 0;
  color: #4c79bb;
  font-size: 0.31rem;
  line-height: 0.7rem;
}
.remark {
  display: flex;
  padding-top: 0.1rem;
  align-items: center;
  justify-content: space-between;
  color: #928f8f;
  font-size: 0.22rem;
}
.remark .person {
  margin-right: 0.18rem;
}
.remark .pri-name {
  color: #4c79bb;
  margin-right: 0.05rem;
}
.third .emojis {
  width: 0.4rem;
  transform: translateX(-0.24rem);
}
.fourth .photo {
  background-image: url("./../assets/大电竞.jpg");
}
.fourth .teams {
  display: flex;
  justify-content: space-between;
}
.fourth .teams img {
  width: 49.8%;
}
.fourth .buttons {
  display: flex;
  justify-content: space-around;
  margin: 0.2rem 0;
}
.fourth .buttons > button {
  align-items: center;
  width: 3.08rem;
  height: 0.6rem;
  line-height: 0.6rem;
  border: 1.4px solid #c9737a;
  border-radius: 5px;
  text-align: center;
  color: #c9737a;
  font-size: 0.26rem;
}
.fourth .buttons > :nth-child(2) {
  border-color: #61b0c8;
  color: #61b0c8;
}
.fourth .title {
  margin: 0;
}
.fourth .text {
  margin: 0.52rem 0;
}
.tagBox {
  padding: 0.2rem 0;
}
.tagBox li {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #bdbdbd;
  border-radius: 30px;
  padding: 0 0.16rem;
  color: #9ca3ad;
}
.tagBox i {
  font-size: 0.4rem;
  height: 0.5rem;
  line-height: 0.5rem;
}
.tagBox span {
  color: rgb(85, 78, 78);
  margin-left: 0.1rem;
  font-size: 0.2rem;
}
.vip {
  width: 0.32rem;
  margin: 0 0.1rem;
}
.medal {
  width: 0.28rem;
}
.username h3 {
  display: flex;
  align-items: center;
}
.van-popup{
  border-end-start-radius:15px;
  border-end-end-radius:15px;
}
.more-cell .type{
  text-align:left;
    padding:0 .35rem;
    color:gray;
}
.bottom{
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.bottom .emojiBox {
  width: 1.5rem;
}
.bottoms>ul{
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.bottom>ul{
  box-sizing: border-box;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  justify-content:space-between;
}
.more-cell>*{
  font-size:.2rem;
  margin-top:.3rem;
}
.more-cell .uuu{
  width:100%;
  display:flex;
  justify-content:space-between;
  margin:.15rem 0;
}
.more-cell .uuu>li{
  width:16%;
}
.more-cell img{
  width:.62rem;
}
.home{
  padding-bottom: 1rem;
}

</style>

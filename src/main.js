import Vue from "vue";
import Vant from "vant";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import setRem from "./setRem";
import { Cascader } from 'vant';
import "./assets/icon/iconfont.css"
Vue.config.productionTip = false;
Vue.use(Vant)
Vue.use(Cascader)

if(process.env.NODE_ENV === 'development'){
  //如果是开发环境，mock 会拦截 ajax 请求
  require("./mock/index.js")
}
let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");

setRem(750, 100);
window.addEventListener("resize", function () {
  setRem(750, 100);
});
console.log(vm);

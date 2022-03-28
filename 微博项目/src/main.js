import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import setRem from "./setRem";
import "./style/reset.css";
import Vant from "vant";
import "vant/lib/index.css";
import "./assets/icon/iconfont.css";

Vue.use(Vant);
Vue.config.productionTip = false;

let vm = new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
setRem(750, 100);
window.addEventListener('resize', function () {
  setRem(750, 100);
})
console.log(vm);
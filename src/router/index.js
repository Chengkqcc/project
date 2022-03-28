import Vue from "vue";
import VueRouter from "vue-router";
import Video from "../views/Video.vue";
import Searchs from "../views/Searchs.vue";
import HomeView from "../views/HomeView.vue"
import SouSuo from '../components/SouSuo'
import FaXian from '../components/FaXian'
import PaiHang from '../components/PaiHang'
import MyPage from "../components/MyPage/MyPage"
import RB from '@/views/ReBang'
import WB from '@/views/WenBang'
import YB from '@/views/YaoBang'
import TB from '@/views/TongBang'
import Dt from "@/components/Dt.vue"
import NewsView from "@/components/NewsView"

Vue.use(VueRouter);

const routes = [
  {
    path: "/Video",
    name: "Video",
    component: Video,
  },
  {
    path: "/list",
    name: "List",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/List.vue"),
  },
  {
    path: "/Searchs/:id",
    name: "Searchs",
    component: Searchs,
    props: true,
  },
  {
    path: "/HomeView",
    name: "HomeView",
    component: HomeView,
  },
  {
    path:"/",
    name:"FaXian",
    component:FaXian,
    
  },
  {
    path:"/SouSuo",
    component:SouSuo,
    name:"SouSuo"
  },
  {
        path:"/PaiHang",
        component:PaiHang,
        name:"PaiHang",
        children:[
            {path:"/PaiHang/RB",component:RB,name:"RB"},
            {path:"/PaiHang/WB",component:WB,name:"WB"},
            {path:"/PaiHang/YB",component:YB,name:"YB"},
            {path:"/PaiHang/TB",component:TB,name:"TB"},
        ]
  },
  {
    path:"/MyPage",
    component:MyPage,
    name:"MyPage"
  },
  {
        path: "/news",
        name: "NewsView",
        component: NewsView,
  },
  {
        path: "/Dt",
        name: "Dt",
        component: Dt,
  }
];

const router = new VueRouter({
  routes,
});

export default router;

import VueRouter from "vue-router";
// import HelloWorld from "@/components/HelloWorld.vue";
// import Me from "@/components/Me.vue";

// 路由懒加载, 得结合 babel-plugin-syntax-dynamic-import 插件使用
const HelloWorld = () => import("@/components/HelloWorld.vue");
const Me = () => import("@/components/Me.vue");

const router = new VueRouter({
  routes: [
    { path: "/", redirect: { name: "introduce" } },
    {
      path: "/introduce",
      name: "introduce",
      component: HelloWorld
    },
    {
      path: "/me",
      name: "me",
      component: Me
    }
  ]
});

export default router;

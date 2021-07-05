import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import { RouterNames } from '@/utils/index'

const MainLayout = () => import(/* webpackChunkName: "Main" */ '@/layouts/MainLayout.vue')
const Tariffs = () => import(/* webpackChunkName: "Tariffs" */ '@/views/Tariffs/Index.vue')

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    name: RouterNames.Home,
    component: MainLayout,
    redirect: RouterNames.Tariffs,
    children: [
      {
        path: 'tariffs',
        name: RouterNames.Tariffs,
        component: Tariffs
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

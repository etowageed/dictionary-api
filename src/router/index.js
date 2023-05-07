import { createRouter, createWebHistory } from "vue-router";
import DictionaryView from "../views/dictionary.vue";
import HomeView from "../views/home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dictionary",
      name: DictionaryView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/dictionary.vue"),
    },
  ],
});

export default router;

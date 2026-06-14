import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../components/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Find the element by the hash
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    }
    return savedPosition || { top: 0 };
  },
});

export default router;

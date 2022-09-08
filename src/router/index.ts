import { createRouter, createWebHistory } from "vue-router";
import AuthView from "@/views/AuthView.vue";
import BaseLayout from "@/views/IndexView.vue";
import HomeView from "@/views/HomeView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/u",
      component: BaseLayout,
      children: [
        {
          path: "",
          name: "home",
          component:HomeView,
        },
        {
          path: "emails",
          name: "emails",
          component: () => import("@/views/EmailView.vue"),
        },
        {
          path: "projects",
          name: "projects",
          component: () => import("@/views/ProjectsView.vue"),
        },
        {
          path: "settings",
          name: "settings",
          component: () => import("@/views/SettingsView.vue"),
        },
        {
          path: "todo",
          name: "todo",
          component: () => import("@/views/TodoView.vue"),
        },
      ]
    },
  ],
});

export default router;

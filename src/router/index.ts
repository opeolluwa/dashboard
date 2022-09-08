import { createRouter, createWebHistory } from "vue-router";
import AuthView from "@/views/AuthView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "auth",
      component: AuthView,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/emails",
      name: "emails",
      component: () => import("@/views/EmailView.vue"),
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("@/views/ProjectsView.vue"),
    },
    {
      path: "/settings",
      name: "settings",
      component: () => import("@/views/SettingsView.vue"),
    },
    {
      path: "/todo",
      name: "todo",
      component: () => import("@/views/TodoView.vue"),
    },
    /* {
      path: "*",
      name: "404",
      component: () => import("@/views/NotFoundView.vue"),
    }, */
  ],
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import AuthenticationView from "@/views/auth/AuthIndexView.vue";
import BaseLayout from "@/views/IndexView.vue";
import HomeView from "@/views/HomeView.vue";
import OnboardingView from "@/views/OnboardingIndexView.vue";
import LoginView from "@/views/auth/LoginView.vue";
import PasswordResetView from "@/views/auth/PasswordResetView.vue";
import SignupView from "@/views/auth/SignupView.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "onboarding",
      component: OnboardingView,

    },
    {
      name: "auth",
      path: "/auth",
      component: AuthenticationView,
      children: [
        {
          path: "",
          name: "sign-up",
          component: SignupView
        },
        {
          path: "login",
          name: "login",
          component: LoginView
        },
        {
          path: "reset-password",
          name: "reset-password",
          component: PasswordResetView
        },
      ]
    },
    {
      path: "/u",
      component: BaseLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomeView,
        },
        {
          path: "emails",
          component: () => import("@/views/email/EmailIndexView.vue"),
          children: [
            {
              // get all emails
              path: "",
              name: "emails",
              component: () => import("@/views/email/EmailView.vue"),
            },
            {
              // create new email
              path: "new-email",
              name: "new-email",
              component: () => import("@/views/email/CreateEmailView.vue"),
            },
          ],
        },
        {
          path: "projects",
          name: "projects",
          component: () => import("@/views/ProjectsView.vue"),
        },
        {
          path: "notes",
          name: "notes",
          component: () => import("@/views/NotesView.vue"),
        },
        {
          path: "settings",
          name: "settings",
          component: () => import("@/views/SettingsView.vue"),
        },
        {
          path: "notification",
          name: "notification",
          component: () => import("@/views/NotificationView.vue"),
        },
        {
          path: "todo",
          name: "todo",
          component: () => import("@/views/todo/TodoIndexView.vue"),
        },
      ],
      //add navigation guards here
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: () => import("@/views/NotFoundView.vue"),
    },
  ],
});

export default router;

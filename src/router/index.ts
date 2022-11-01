import { createRouter, createWebHistory } from "vue-router";
import AuthenticationView from "@/views/auth/AuthIndexView.vue";
import BaseLayout from "@/views/IndexView.vue";
import HomeView from "@/views/HomeView.vue";
import OnboardingView from "@/views/OnboardingIndexView.vue";
import LoginView from "@/views/auth/LoginView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/helo",
      name: "onboarding",
      component: OnboardingView,
    },
    {
      name: "auth",
      path: "/",
      component: AuthenticationView,
      children: [
        {
          path: "",
          name: "login",
          component: LoginView,
          alias: "login",
        },
        {
          path: "sign-up",
          name: "sign-up",
          component: () => import("@/views/auth/SignupView.vue"),
        },
        {
          path: "reset-password",
          name: "reset-password",
          component: () => import("@/views/auth/PasswordResetView.vue"),
        },
        {
          path: "confirm-otp",
          name: "confirm-otp",
          component: () => import("@/views/auth/ConfirmOtpView.vue"),
        },
      ],
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
              component: () => import("@/views/email/AllEmailView.vue"),
            },
            {
              // create new email
              path: "new",
              name: "new-email",
              component: () => import("@/views/email/CreateEmailView.vue"),
            },
            //TODO:create category
            {
              path: "important",
              name: "important-email",
              component: () => import("@/views/email/ImportantEmailView.vue"),
            },
            {
              path: "starred",
              name: "starred-email",
              component: () => import("@/views/email/StarredEmailView.vue"),
            },
            {
              path: "trashed",
              name: "trashed-email",
              component: () => import("@/views/email/StarredEmailView.vue"),
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
          component: () => import("@/views/notes/NotesIndexView.vue"),
          children: [
            {
              path: "",
              name: "all-notes",
              component: () => import("@/views/notes/AllNotesEntry.vue"),
            },

            {
              path: "add-note",
              name: "add-note",
              component: () => import("@/views/notes/CreateNoteView.vue"),
            },
            {
              path: "edit-note/:noteId",
              name: "edit-note",
              props: true,
              component: () => import("@/views/notes/EditNoteView.vue"),
            },
          ],
        },
        {
          path: "settings",
          name: "settings",
          component: () => import("@/views/SettingsView.vue"),
        },

        {
          path: "profile",
          name: "profile",
          component: () => import("@/views/ProfileView.vue"),
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


// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (!store.getters.isLoggedIn) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next()
//     }
//   }
//   if (to.matched.some(record => record.meta.requiresAdmin)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to home page.
//     if (!store.getters.loggedUser.type == 'admin') {
//       next({
//         name: 'home'
//       })
//     } else {
//       next()
//     }
//   }
//   else {
//     next() // make sure to always call next()!
//   }
// })

export default router;

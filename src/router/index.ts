import { createRouter, createWebHistory } from "vue-router";
import BaseLayout from "@/views/IndexView.vue";
import { useAuthStore } from "@/stores/auth";

//routes
import emailRoutes from "./email";
import notesRoutes from "./notes";
import authRoutes from "./auth";
import todoRoutes from "./task";
import notificationRoutes from "./notification";
import profileRoutes from "./profile";
import settingsRoutes from "./settings";
import homeRoutes from "./home";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    authRoutes,
    {
      path: "/u",
      component: BaseLayout,
      meta: {
        requiresAuth: true,
      },
      children: [
        homeRoutes,
        settingsRoutes,
        profileRoutes,
        notificationRoutes,
        emailRoutes,
        notesRoutes,
        todoRoutes,
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

// console.log({ routes: JSON.stringify(router.getRoutes()) });

// router.
//   beforeEach((to, from, next) => {
//     const store = useAuthStore()
//     if (to.meta.requiresAuth && !store.isAuthenticated) {
//       next({
//         name: 'login'
//       })
//     } else {
//       next()
//     }
//   })

export default router;

import AuthenticationView from "@/views/auth/AuthIndexView.vue";
import LoginView from "@/views/auth/LoginView.vue";

export default {
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
};

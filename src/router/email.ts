export default {
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
    //tasks:create category
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
      path: "preview-email/:emailId",
      name: "preview-email",
      component: () => import("@/views/email/ViewEmail.vue"),
    },
    {
      path: "trashed",
      name: "trashed-email",
      component: () => import("@/views/email/StarredEmailView.vue"),
    },
  ],
};

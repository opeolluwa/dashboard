export default {
  path: "todo",
  name: "todo",
  component: () => import("@/views/tasks/TodoIndexView.vue"),
  children: [
    {
      name: "all-task",
      path: "",
      component: () => import("@/views/tasks/AllTodoViews.vue"),
    },
    {
      name: "add-task",
      path: "new",
      component: () => import("@/views/tasks/CreateTodoView.vue"),
    },
    /* {
          name: "edit-task",
          path: "edit/:taskId",
          props: true,
          component: () => import("@/views/tasks/EditTodoView.vue"),
        }, */
  ],
};

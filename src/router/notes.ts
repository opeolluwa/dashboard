export default {
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
      path: "new",
      name: "add-note",
      component: () => import("@/views/notes/CreateNoteView.vue"),
    },
    {
      path: "note/:noteId",
      name: "view-note",
      props: true,
      component: () => import("@/views/notes/ViewNote.vue"),
    },
    {
      path: "edit/:noteId",
      name: "edit-note",
      props: true,
      component: () => import("@/views/notes/UpdateNote.vue"),
    },
  ],
};

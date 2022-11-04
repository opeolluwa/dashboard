<template>
  <!--edit notes page
    get a page by id, preview and edit it here
    -->
  <div id="edit__note__page">
    <div class="note__entry">
      <!--header-->
      <div class="note__entry__header">
        <p class="note__entry__header__date">
          {{
            new Date(fetchedNote.dateAdded.toString()).toLocaleDateString(
              undefined,
              {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            )
          }}
        </p>
        <!--icon-->
        <Icon
          icon="mdi:dots-vertical"
          @click="showOptions = true"
          @mouseover="showOptions = true"
        />
        <!--controls-->
        <div
          id="edit__note__controls"
          v-show="showOptions"
          @click="showOptions = false"
        >
          <div>
            <Icon icon="mdi:star-outline" class="star" />
            <span> Star </span>
          </div>
          <div @click="deleteNoteRequest">
            <Icon icon="mdi:trash-can-outline" class="delete" />
            <span> Delete </span>
          </div>
          <div @click="editNoteRequest">
            <Icon icon="mdi:clipboard-edit-outline" class="edit" />
            <span> Edit </span>
          </div>
        </div>
      </div>
      <!--content-->
      <h3 class="note__title">{{ fetchedNote.title }}</h3>
      <div class="note__entry__content">
        <p v-html="markedContent"></p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapActions } from "pinia";
import { useNoteStore, type FetchedNoteInterface } from "@/stores/notes";
import { Icon } from "@iconify/vue";
import AppCard from "@/components/AppCard.vue";
import { marked } from "marked";
import hljs from "highlight.js";
// `highlight` example uses https://highlightjs.org
marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false,
});
export default defineComponent({
  name: "EditEmailView",
  components: {
    Icon,
    AppCard,
  },
  data: () => ({
    showOptions: false,
  }),
  computed: {
    //get note id from route parameter
    noteId() {
      return this.$route.params.noteId;
    },
    //get the note from the store using the note Id
    ...mapState(useNoteStore, ["getNoteById"]),
    fetchedNote(): FetchedNoteInterface {
      return this.getNoteById(
        String(this.noteId)
      ) as unknown as FetchedNoteInterface;
    },
    markedContent() {
      return marked.parse(String(this.fetchedNote.content));
    },
  },
  methods: {
    ...mapActions(useNoteStore, ["deleteNote", "editNote"]),
    deleteNoteRequest() {
      this.deleteNote(String(this.fetchedNote.id));
      this.$router.go(-1);
    },
    //edit note
    editNoteRequest() {
      this.$router.push({
        name: "edit-note",
        params: { noteId: String(this.fetchedNote.id) },
      });
    },
  },
  /// make request to update the todo
});
</script>

<style scoped>
.card {
  border-radius: 3px;
}

#edit__note__page .note__entry__header {
  position: relative;
}

#edit__note__page #edit__note__controls {
  border-radius: 3px;
  background-color: #fff;
  box-shadow: 0 1px 10px 5px rgba(0, 0, 0, 0.05);
  padding: 20px;
  width: 170px;
  text-align: left;
  position: absolute;
  right: 0px;
  top: 030px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 15px;
}

#edit__note__page #edit__note__controls > div * {
  display: inline-block;
  margin-right: 10px;
}

#edit__note__page #edit__note__controls svg {
  font-size: 0.85rem;
  width: 20px;
  height: 20px;
}

.note__entry {
  border: none;
}

#edit__note__page .note__entry__header,
#edit__note__page .note__entry__header p {
  color: unset;
  font-size: 16px;
  align-items: flex-end;
}

#edit__note__page .note__entry__header {
  /* border-bottom: 1px solid var(--border-color); */
  padding-bottom: 1rem;
}

#edit__note__page .note__entry .note__entry__content p {
  width: 100%;
  line-height: 28px;
  color: unset;
}

#edit__note__page h3.note__title {
  text-transform: capitalize;
  margin-top: 1.75rem;
  margin-bottom: 3px;
}

/* .delete{
    color:var(--default-red);
} */
</style>

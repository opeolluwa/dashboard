<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import AppModal from "@/components/AppModal.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import { Icon } from "@iconify/vue";
import AppEmptyState from "../../components/AppEmptyState.vue";
import { useNoteStore } from "@/stores/notes";
import { mapState, mapActions } from "pinia";
import Spinner from "@/components/Spinner.vue";
import Timeago from "vue3-timeago";
import Observer from "vue-intersection-observer";
import { defineComponent } from "vue";
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
  name: "ProjectView",
  components: {
    BaseButton,
    Icon,
    AppModal,
    BaseTextInput,
    AppEmptyState,
    Spinner,
    Timeago,
    Observer,
  },
  data: () => ({
    showProjectModal: false,
    addProject: {
      name: "",
      description: "",
      url: "",
      image: "",
      github: "",
      technologies: "",
    },
  }),
  mounted() {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        //get the data
        this.fetchNoteRequests();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  computed: {
    ...mapState(useNoteStore, [
      "noteEntries",
      "noOfRows",
      "pageIndex",
      "isLoading",
    ]),
    /* markedContent() {
      return marked.parse(String(this.fetchedNote.content));
    } */
  },
  methods: {
    ...mapActions(useNoteStore, ["fetchAllNotes"]),
    async fetchNoteRequests() {
      await this.fetchAllNotes();
    },
    // handle the intersection observer
    handleIntersection() {
      alert("fool");
      this.fetchNoteRequests();
    },
    editNote(noteId: String) {
      this.$router.push({
        name: "view-note",
        params: { noteId: String(noteId) },
      });
    },
    //render mark down
    renderMarkDown(content: String) {
      return marked.parse(String(content));
    },
  },
});
</script>

<template>
  <!--show loader if fetching all todo-->
  <div v-if="isLoading" class="fetching__data">
    <Spinner />
    <p>fetching entries</p>
  </div>
  <!-- show the app empty state if no entries -->
  <AppEmptyState v-if="noteEntries?.length === 0" />

  <!--display for error-->
  <AppNetworkError v-if="!isLoading && noteEntries?.length === 0" />
  <!--display the data-->
  <div v-if="Number(noteEntries?.length) > 0 && !isLoading">
    <div
      class="note__entry"
      v-for="noteEntry in noteEntries"
      :key="noteEntry.id.toString()"
      @click="editNote(noteEntry.id.toString())"
    >
      <!--header-->
      <div class="note__entry__header">
        <h3 class="trim__text">{{ noteEntry.title }}</h3>
        <p class="note__entry__header__date">
          {{
            new Date(noteEntry.dateAdded.toString()).toLocaleDateString(
              undefined,
              {
                weekday: "short",
                year: "numeric",
                month: "short",
                day: "numeric",
              }
            )
          }}
          <!-- <Timeago :datetime="noteEntry.dateAdded" /> -->
        </p>

        <!-- <timeago :datetime="noteEntry.dateAdded" /> -->
      </div>
      <!--content-->
      <div class="note__entry__content">
        <p class="trim__text" v-html="renderMarkDown(noteEntry.content)"></p>
      </div>
    </div>
  </div>
  <!--use intersection ibserver to laod more content-->
  <!-- <Observer @on-change="handleIntersection"></Observer> -->
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: flex-end;
  justify-content: flex-end;
}

.note__entry .note__entry__content p {
  line-height: 1.5;
  height: 30px;
}

.add-new-button,
.add-new-fab {
  display: flex;
  column-gap: 15px;
  align-items: center;
  justify-content: center;
  width: auto;
  background-color: var(--default-dark);
  /* float: right; */
  left: 0px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  color: var(--light-text);
  text-transform: capitalize;
}

.add-new-fab {
  display: none;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
  gap: 10px;
  text-align: left;
}

.field {
  width: 100%;
}

/**--------------------------smaller screens ----------------------------- */
@media screen and (max-width: 768px) {
  .add-new-button {
    display: none;
  }

  form {
    padding: 10px;
  }

  .add-new-fab {
    display: flex;
    justify-content: center;
    align-items: center;
    left: calc(100vw - 80px);
    position: fixed;
    bottom: 20px;
    border-radius: 50%;
    border-color: transparent;
    padding: 10px;
    width: 50px;
    height: 50px;
    box-shadow: -3px -3px 27px 3px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: -3px -3px 27px 3px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: -3px -3px 27px 3px rgba(0, 0, 0, 0.3);
    z-index: 10;
  }
}
</style>

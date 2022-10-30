<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import AppModal from "@/components/AppModal.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import { Icon } from "@iconify/vue";
import AppEmptyState from "../../components/AppEmptyState.vue";
import { useNoteStore } from "@/stores/notes";
import { mapState, mapActions } from "pinia";
import Spinner from "@/components/AppLoader.vue";
import Timeago from "vue3-timeago";
import Observer from 'vue-intersection-observer'
export default {
  name: "ProjectView",
  components: {
    BaseButton,
    Icon,
    AppModal,
    BaseTextInput,
    AppEmptyState,
    Spinner,
    Timeago,
    Observer
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
  created() {
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
    )
  },
  computed: {
    ...mapState(useNoteStore, [
      "noteEntries",
      "noOfRows",
      "pageIndex",
      "isLoading",
    ]),
  },
  methods: {
    ...mapActions(useNoteStore, ["fetchAllNotes"]),
    async fetchNoteRequests() {
      await this.fetchAllNotes();
    },
    // handle the intersection observer
    handleIntersection() {
      alert("fool")
      this.fetchNoteRequests();

    },
  },
};
</script>

<template>
  <!--show loader if fetching all todo-->
  <div v-if="isLoading" class="fetching__data">
    <Spinner />
    <p>fetching todo</p>
  </div>
  <!-- show the app empty state if no entries -->
  <AppEmptyState v-if="noteEntries?.length === 0" />

  <!--display for error-->
  <AppNetworkError v-if="!isLoading && noteEntries?.length === 0" />
  <!--display the data-->
  <div>
    <div class="note__entry" v-for="noteEntry in noteEntries" :key="
    noteEntry.id.toString()">
      <!--header-->
      <div class="note__entry__header ">
        <h3 class="trim__text">{{ noteEntry.title }}</h3>
        <p class="note__entry__header__date">
          {{ new Date(noteEntry.dateAdded.toString()).toLocaleDateString(undefined, {
              weekday: 'short', year: 'numeric', month:
                'short', day: 'numeric'
            })
          }}
          <!-- <Timeago :datetime="noteEntry.dateAdded" /> -->
        </p>

        <!-- <timeago :datetime="noteEntry.dateAdded" /> -->
      </div>
      <!--content-->
      <div class="note__entry__content ">
        <p class="trim__text">{{ noteEntry.content }}</p>
      </div>
    </div>
  </div>
  <!--use intersection ibserver to laod more content-->
  <!-- <Observer @on-change="handleIntersection"></Observer> -->
</template>

<style scoped>
.note__entry {
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
}

.note__entry .note__entry__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.note__entry .note__entry__header h3 {
  font-size: 1.2rem;
  display: inline-block;
  font-size: 18px;
  line-height: 28px;
  text-transform: capitalize;
  width: 120px;
}

.note__entry .note__entry__content {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: var(--secondary);

}

.note__entry .note__entry__content p {
  width: 200px;
}


.note__entry__header__date {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--secondary);
}

.header {
  display: flex;
  flex-direction: flex-end;
  justify-content: flex-end;
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

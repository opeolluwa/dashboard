<template>
  <form @submit.prevent="addEntry">
    <BaseTextInput label="title" type="text" placeholder="Ex: how to create repo" v-model="note.title" class="field" />
    <!--text editor here -->
    <BaseTextarea v-if="!useMdEditor" placeholder="provide note details here" label="content" v-model="note.content" />
    <!--markdown editor-->
    <div id="md__editor" v-else>
      <label for="Content">Content</label>
      <MdEditor v-model="note.content" :preview="false" language="en-US" placeholder="provide note details here"
        style="margin-bottom: 20px"></MdEditor>
    </div>
    <div id="editor__type">
      <input type="checkbox" name="editor-style" id="" v-model="useMdEditor" :toolbarsExclude="mdToolBarExclude"
        :showCodeRowNumber="true" />
      <label for="editor-style">Use Markdown Editor</label>
    </div>
    <BaseButton text="" :disabled="disabledState">
      <span v-show="!isLoading">Update Password</span>
      <Spinner :animation-duration="1000" :size="30" :color="'#101010'" v-show="isLoading" />
    </BaseButton>
  </form>
</template>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import { defineComponent } from "vue";
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { useNoteStore } from "@/stores/notes";
import { mapActions, mapState } from "pinia";
export default defineComponent({
  name: "CreateNewNoteEntry",
  data: () => ({
    note: {
      title: "",
      content: "",
    },
    useMdEditor: false,
    mdToolBarExclude: ["github"],
  }),
  components: {
    BaseButton,
    BaseTextInput,
    BaseTextarea,
    MdEditor,
  },
  methods: {
    ...mapActions(useNoteStore, ["createNewEntry"]),
    async addEntry() {
      const successfulRequest = await this.createNewEntry({ ...this.note });
      if (successfulRequest) {
        Object.assign(this.note, { title: "", content: "" });
        this.$router.replace({ name: "all-notes" });
      }
    },
  },
  computed: {
    ...mapState(useNoteStore, ["isLoading"]),
    //disabled state
    disabledState() {
      return this.isLoading === true ? true : false;
    },
  }
});
</script>

<style scoped>
button {
  color: var(--primary);
  background-color: #f5f5f5;
  border: 1px solid var(--primary);
  margin-top: 15px;
  width: unset !important;
}

#editor__type {
  display: flex;
  align-items: center;
  gap: 15px;
  margin: 25px auto;
}

#md__editor label {
  display: block;
  margin-bottom: 7.5px;
  text-transform: capitalize;
}
</style>

<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import AppModal from "@/components/AppModal.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import { Icon } from "@iconify/vue";
import AppEmptyState from "../components/AppEmptyState.vue";
export default {
  name: "ProjectView",
  components: {
    BaseButton,
    Icon,
    AppModal,
    BaseTextInput,
    AppEmptyState,
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
};
</script>

<template>
  <!--empty state-->
  <div class="header">
    <BaseButton
      text="add new"
      class="add-new-button"
      @click="showProjectModal = true"
    >
      <IconPlus />
    </BaseButton>
  </div>
  <!-- show the app empty state-->
  <AppEmptyState />

  <!--add new project fab button-->
  <BaseButton text="" class="add-new-fab" @click="showProjectModal = true">
    <Icon icon="mdi:plus" />
  </BaseButton>
  <!--the project modal-->
  <AppModal
    v-show="showProjectModal"
    @close-modal="showProjectModal = false"
    title="Add New Project"
  >
    <template #content>
      <form action="" @click="">
        <BaseTextInput
          label="name"
          type="text"
          placeholder="project name"
          :model="addProject.name"
          class="field"
        />
        <BaseTextInput
          placeholder=" project description"
          label="description"
          :model="addProject.description"
          class="field"
        />
        <BaseTextInput
          placeholder="github url"
          label="Repository URL"
          :model="addProject.description"
          class="field"
        />
        <BaseButton text="add project" class="field" />
      </form>
    </template>
  </AppModal>
</template>

<style scoped>
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

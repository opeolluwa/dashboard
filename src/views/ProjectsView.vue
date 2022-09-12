<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import IconPlus from "@/components/icons/IconPlus.vue";
import AppModal from "@/components/AppModal.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
export default {
  name: "ProjectView",
  components: {
    BaseButton,
    IconPlus,
    AppModal,
    BaseTextInput,
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
  <div class="header">
    <BaseButton
      text="add new"
      class="add-new-button"
      @click="showProjectModal = true"
    >
      <IconPlus />
    </BaseButton>
  </div>

  <!--the project modal-->
  <AppModal
    v-show="showProjectModal"
    @close-modal="showProjectModal = false"
    title="Add New Project"
  >
    <template #content>
      <form action="" @click="addNewProject">
        <BaseTextInput
          label=""
          type="text"
          placeholder="project name"
          :model="addProject.name"
          class="field"
        />
        <BaseTextInput
          placeholder=" project description"
          label=""
          :model="addProject.description"
          class="field"
        />
        <BaseTextInput
          placeholder="github url"
          label=""
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

.add-new-button {
  display: flex;
  column-gap: 15px;
  align-items: center;
  justify-content: center;
  width: auto;
  background-color: var(--default-dark);
  float: right;
  left: 0px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  color: var(--light-text);
  text-transform: capitalize;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

form .field {
  width: fit-content;
}

form button.field {
  width: 300px;
}
</style>

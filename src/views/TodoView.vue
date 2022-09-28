<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import AppModal from "@/components/AppModal.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import { Icon } from "@iconify/vue";
import AppEmptyState from "@/components/AppEmptyState.vue";
import { defineComponent } from "vue";
export default {
  name: "TodoView",
  components: {
    BaseButton,
    Icon,
    AppModal,
    BaseTextInput,
    AppEmptyState,
  },
  data: () => ({
    showTodoModal: false,
    addTodo: {
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
  <h2>Todo</h2>
  <div class="header">
    <BaseButton text="add new" class="add-new-button" @click="showTodoModal = true">
      <IconPlus />
    </BaseButton>
  </div>


  <!--add new Todo fab button-->
  <AppEmptyState />

  <!--add new Todo fab button-->
  <BaseButton text="" class="add-new-fab" @click="showTodoModal = true">
    <Icon icon="mdi:plus" />
  </BaseButton>
  <!--the Todo modal-->
  <AppModal v-show="showTodoModal" @close-modal="showTodoModal = false" title="Add New Todo">
    <template #content>
      <form action="" @click="addNewTodo">
        <BaseTextInput label="" type="text" placeholder="Todo name" :model="addTodo.name" class="field" />
        <BaseTextInput placeholder=" Todo description" label="" :model="addTodo.description" class="field" />
        <BaseTextInput placeholder="github url" label="" type="date" :model="addTodo.description" class="field" />
        <BaseButton text="add Todo" class="field" />
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

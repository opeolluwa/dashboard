<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import AppModal from "@/components/AppModal.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import { Icon } from "@iconify/vue";
import AppEmptyState from "@/components/AppEmptyState.vue";
import { defineComponent } from "vue";
import axios from "axios";
import { useAuthStore } from "@/stores/auth";
import { useTodoStore, type TodoModel } from "@/stores/todo";
import { mapActions, mapState } from "pinia";
import AppListItem from "../components/AppListItem.vue";
import AppTodoItem from "../components/AppTodoItem.vue";
import AppNetworkError from "../components/AppNetworkError.vue";
export default defineComponent({
  name: "TodoView",
  components: {
    BaseButton,
    Icon,
    AppModal,
    BaseTextInput,
    AppEmptyState,
    AppListItem,
    AppTodoItem,
    AppNetworkError
  },
  data: () => ({
    showTodoModal: false,
    todo: {
      title: "",
      description: "",
      date: "",
    },
  }),
  mounted() {
    console.log("mounted");
    // this.makeTodoRequest();
  },
  beforeMount() {
    this.makeTodoRequest();
    console.log("beforeMount");
  },
  methods: {
    //fetch the todos request from from the store
    ...mapActions(useTodoStore, {
      makeTodoRequest: "fetchAllTodo",
      createTodo: "createTodo",
    }),
    async makeCreateTodo() {
      this.createTodo({
        title: this.todo.title,
        description: this.todo.description,
        // date: this.todo.date,
      } as TodoModel);
      this.showTodoModal = false;
    },
  },
  computed: {
    ...mapState(useTodoStore, ["todoArray", "isLoading"]),
    ...mapState(useAuthStore, { bearerToken: "authorizationToken" }),
    //disabled state is true if the isLoading is true
    disabledState() {
      return this.isLoading === true ? true : false;
    },
  },
});
</script>

<template>
  <h2>Todo</h2>
  <!--if no todo was found-->
  <AppNetworkError v-if="!todoArray.length " />

  <!--render the todo-->
  <div v-else>
    <!--render the todolist -->
    <AppListItem v-for="todo in todoArray">
      <AppTodoItem :todo="todo" />
    </AppListItem>
  </div>

  <!--default components-->
  <div class="header">
    <BaseButton text="add new" class="add-new-button" @click="showTodoModal = true">
      <IconPlus />
    </BaseButton>
  </div>

  <!--add new Todo fab button-->

  <!--add new Todo fab button-->
  <BaseButton text="" class="add-new-fab" @click="showTodoModal = true">
    <Icon icon="mdi:plus" />
  </BaseButton>
  <!--the Todo modal-->
  <AppModal v-show="showTodoModal" @close-modal="showTodoModal = false" title="Add New Todo">
    <template #content>
      <form action="" @submit.prevent="makeCreateTodo">
        <BaseTextInput label="" type="text" placeholder="Todo name" v-model="todo.title" class="field" />
        <BaseTextInput placeholder=" Todo description" label="" v-model="todo.description" class="field" />

        <BaseTextInput placeholder="github url" label="" type="date" :model="todo.date" class="field" />

        <!--form field submit, change color to black while waiting for response from server-->
        <BaseButton text="" :disabled="disabledState" :class="[(disabledState == true) ? 'disabled__button' : '']">
          <span v-show="!isLoading">Add Todo</span>
          <Spinner :animation-duration="1000" :size="30" :color="'#ffffff'" v-show="isLoading" />
        </BaseButton>
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

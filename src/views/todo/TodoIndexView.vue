<script lang="ts">
import BaseButton from "@/components/BaseButton.vue";
import AppModal from "@/components/AppModal.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import { Icon } from "@iconify/vue";
import AppEmptyState from "@/components/AppEmptyState.vue";
import { defineComponent } from "vue";
import { useAuthStore } from "@/stores/auth";
import {
  useTodoStore,
  type TodoInterface,
  type FetchedTodoInterface,
} from "@/stores/todo";
import { mapActions, mapState } from "pinia";
import AppTodoItem from "../../components/AppTodoItem.vue";
import AppNetworkError from "../../components/AppNetworkError.vue";
import Spinner from "@/components/AppLoader.vue";
export default defineComponent({
  name: "TodoView",
  components: {
    BaseButton,
    Icon,
    AppModal,
    BaseTextInput,
    AppEmptyState,
    AppTodoItem,
    AppNetworkError,
    Spinner,
  },
  data: () => ({
    showTodoModal: false,
    todo: {
      title: "",
      description: "",
      date: "",
      priority: "",
    },
  }),
  mounted() {
    console.log("mounted");
    // this.makeTodoRequest();
  },
  created() {
    this.makeTodoRequest();
    console.log("created hook");
  },
  methods: {
    //fetch the todos request from from the store
    ...mapActions(useTodoStore, {
      makeTodoRequest: "fetchAllTodo",
      createTodo: "createTodo",
      deleteTodo: "deleteTodo",
    }),
    async makeCreateTodo() {
      this.createTodo({
        ...this.todo
        // date: this.todo.date,
      } as TodoInterface);
      this.showTodoModal = false;
    },
  },
  computed: {
    ...mapState(useTodoStore, [
      "todoArray",
      "isLoading",
      "isFetchingTodoArray",
      "errorFetchingTodo",
    ]),
    ...mapState(useAuthStore, { bearerToken: "authorizationToken" }),
    //disabled state is true if the isLoading is true
    disabledState() {
      return this.isLoading === true ? true : false;
    },
  },
});
</script>

<template>
  <!--show loader if fetching all todo-->
  <div v-show="isFetchingTodoArray" class="fetching__todo">
    <Spinner />
    <p>fetching todo</p>
  </div>
  <!--id there is an error fetching the todo -->
  <AppNetworkError v-show="todoArray == null" />
  <!--if no todo was found bu it's empty-->
  <AppEmptyState v-if="todoArray?.length == 0" />
  <!--render the todo list -->
  <AppTodoItem v-for="{ title, description, id , priority} in todoArray" :todo="{ title, description, id, priority }"
    @delete-todo="deleteTodo(id)" />
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
        <BaseTextInput label="heading" type="text" placeholder="heading" v-model="todo.title" class="field" />
        <BaseTextInput placeholder="description" label="description" v-model="todo.description" class="field" />

        <BaseTextInput placeholder="github url" label="due date" type="date" :model="todo.date" class="field" />

        <div class="form-field field">
          <label for="priority">Priority</label>
          <select v-model="todo.priority">
            <option disabled value="">Please select priority</option>
            <option>urgent</option>
            <option>not urgent</option>
            <option>delete</option>
            <option>delicate</option>
            <option>normal</option>

          </select>
        </div>

        <!--form field submit, change color to black while waiting for response from server-->
        <BaseButton text="" type="submit" :disabled="disabledState"
          :class="[disabledState == true ? 'disabled__button' : '']">
          <span v-show="!isLoading">Add Todo</span>
          <Spinner :animation-duration="1000" :size="30" :color="'#ffffff'" v-show="isLoading" />
        </BaseButton>
      </form>
    </template>
  </AppModal>
</template>

<style scoped>
.form__field {
  margin-bottom: 35px;
  font-size: 16px;
}

.form__field * {
  display: block;
}

.form__field label {
  display: block;
  margin-bottom: 7.5px;
  text-transform: capitalize;
  font-family: "Open Sans";
}

.form__field select option {
  /* width: 500px; */
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  display: block;
}

.fetching__todo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
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
}

.field {
  width: 100%;
  text-align: left;
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

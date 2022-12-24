<template>
  <form action="" @submit.prevent="makeCreateTodo">
    <BaseTextInput
      label="heading"
      type="text"
      placeholder="heading"
      v-model="todo.title"
      class="field"
    />
    <BaseTextarea
      placeholder="description"
      label="description"
      v-model="todo.description"
      class="field"
    />

    <div class="select__form__field">
      <label for="priority">Priority</label>
      <select v-model="todo.priority">
        <option disabled value="">Please select priority</option>
        <option>urgent</option>
        <option>not urgent</option>
        <option>important</option>
        <option>delicate</option>
        <option>normal</option>
      </select>
      <Icon icon="mdi:menu-down" class="select__arrow__down" />
    </div>

    <BaseTextInput
      placeholder="github url"
      label="due date"
      type="date"
      v-model="todo.date"
      class="field"
    />

    <!--form field submit, change color to black while waiting for response from server-->
    <BaseButton
      text=""
      type="submit"
      :disabled="disabledState"
      :class="[disabledState == true ? 'disabled__button' : '']"
    >
      <span v-show="!isLoading">Add Todo</span>
      <Spinner
        :animation-duration="1000"
        :size="30"
        :color="'#101010'"
        v-show="isLoading"
      />
    </BaseButton>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import BaseTextarea from "@/components/BaseTextInput.vue";
import { Icon } from "@iconify/vue";
import BaseButton from "@/components/BaseButton.vue";
import AppEmptyState from "@/components/AppEmptyState.vue";
import { useAuthStore } from "@/stores/auth";
import { useTodoStore, type TodoInterface } from "@/stores/tasks";
import Spinner from "@/components/Spinner.vue";
import { mapState, mapActions } from "pinia";
export default defineComponent({
  name: "CreateNewTask",
  components: {
    Icon,
    BaseTextInput,
    AppEmptyState,
    Spinner,
    BaseButton,
    BaseTextarea,
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
      console.log(JSON.stringify({ todo: this.todo }));

      const successfulRequest = await this.createTodo({
        ...this.todo,
        // date: this.todo.date,
      } as TodoInterface);
      if (successfulRequest) {
        Object.assign(this.todo, {});
        this.$router.replace({ name: "all-task" });
      }
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

<style scoped>
form button {
  color: inherit;
  background-color: #f5f5f5;
  border: 1px solid var(--primary);
  margin-top: 25px;
  /* width: unset; */
}

.select__form__field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-align: left;
  width: 100%;
  gap: 0px;
}

.select__form__field label {
  margin-bottom: 7.5px;
  text-transform: capitalize;
}

.select__form__field select {
  appearance: none;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0 1em 0 0;
  cursor: pointer;
  line-height: 21px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  height: 50px;
  font-size: 16px;
  position: relative;
  display: flex;
  align-items: center;
}

.select__form__field .select__arrow__down {
  position: absolute;
  right: 20px;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(19, 18, 18);
  cursor: pointer;
}

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

<template>
  <AppListItem>
    <div class="todo__item">
      <!--delete icon 
            The delete icon will emit the delete event to the parent component,
            the parent will then delete the todo from the store, passing the todo id to a deleteTodo action defined in the todo store module
            -->
      <div class="todo__item__header__actions__delete">
        <Icon icon="mdi:close-circle-outline" @click="$emit('delete-todo')" />
      </div>
      <div>
        <div class="todo__item__header">
          <div class="todo__item__header__title">
            <h3>{{ todo.title }}</h3>
          </div>
          <div class="todo__item__header__actions">
            <div class="todo__item__header__actions__edit">
              <Icon icon="mdi:clipboard-edit-outline" />
            </div>
          </div>
        </div>
        <div class="todo__item__content">
          <p>{{ todo.description }}</p>
        </div>
      </div>
    </div>
  </AppListItem>
</template>

<script lang="ts">
// import type { defineComponent } from 'vue';
import { Icon } from "@iconify/vue";
import AppListItem from "./AppListItem.vue";

export default {
  name: "AppTodoItem",
  components: {
    Icon,
    AppListItem,
  },
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({
        title: "Todo title",
        description: "Todo description",
      }),
    },
  },
};
</script>

<style scoped>
.list__item {
  border: 1px solid var(--border-color);
  /* border-left: 1.5px solid  green ; */
  /* border-bottom: 1.5px solid green; */
}
.todo__item {
  display: grid;
  grid-template-columns: 24px auto;
  align-items: center;
  padding: 5px;
  padding-left: 15px;
  gap: 15px;
}

.todo__item__header__actions__delete {
  cursor: pointer;
  color: var(--default-red);
}

.todo__item__content {
  font-size: 14px;
  color: var(--secondary);
}

.todo__item__header {
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  align-content: center;
}

.todo__item__header__title h3 {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 3px;
  text-transform: capitalize;
}

.todo__item__header__actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 13px;
  display: none;
}

.todo__item__content p {
  /* margin-top: 10px; */
  font-size: 14px;
  color: var(--secondary);
}

.todo__item__content::first-letter {
  text-transform: capitalize;
}

.todo__item__header__actions__edit {
  cursor: pointer;
  color: var(--default-dark);
  margin-right: 10px;
  font-size: 12px;
}
</style>

<template>
  <AppListItem :class="priority">
    <div class="todo__item">
      <!--delete icon 
            The delete icon will emit the delete event to the parent component,
            the parent will then delete the todo from the store, passing the todo id to a deleteTodo action defined in the todo store module
            -->
      <div class="todo__item__header__actions__delete">
        <Icon icon="mdi:close-circle-outline" @click="$emit('delete-todo')" />
      </div>
      <div>
        <div class="todo__item__header trim__text">
          <div class="todo__item__header__title">
            <h3>{{ todo.title }}</h3>
          </div>
        </div>
        <div class="todo__item__content">
          <p class="trim__text">{{ todo.description }}</p>
        </div>
      </div>

      <div class="todo__item__header__actions" v-show="isSelected">
        <Icon icon="mdi:dots-vertical" />
      </div>
    </div>
  </AppListItem>
</template>

<script lang="ts">
// import type { defineComponent } from 'vue';
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
import AppListItem from "./AppListItem.vue";
let isSelected = true;

export default defineComponent({
  name: "AppTodoItem",
  components: {
    Icon,
    AppListItem,
  },
  data: () => ({}),
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({
        title: "Todo title",
        description: "Todo description",
        // priority: "urgent",
      }),
    },
  },

  computed: {
    // return ttru if element is long pressed
    isSelected(): boolean {
      return isSelected;
      // return htmlElement.classList.contains("is__selected") ? true : false;
    },
    priority() {
      const type = this.todo.priority.toLowerCase().trim();
      if (type === "urgent") {
        return "todo__item--urgent";
      } else if (type === "delicate") {
        return "todo__item--delicate";
      } else if (type === "not-urgent") {
        return "todo__item--not__urgent";
      } else if (type === "delete") {
        return "todo__item--delete";
      } else {
        return "todo__item--normal";
      }
    },
  },

  mounted() {
    // reference all the todo
    const todoItems: any = document.getElementsByClassName("todo__item");
    let delay: any;
    const longPress = 1300;
    // let isSelected = this.isSelected;
    // loop through all the todo items and add key up and down event listeners
    for (const item of todoItems) {
      //mouse down
      item.addEventListener("mousedown", function (e: any) {
        delay = setTimeout(check, longPress);
        function check() {
          isSelected = false;
          console.log("long press ", isSelected);
          item.classList.add("is__selected");
        }
      });

      //mouse up
      item.addEventListener("mouseup", function (e: any) {
        delay = setTimeout(check, longPress);
        function check() {
          console.log("long press");
          item.classList.add("is__selected");
        }
      });
    }
  },
});
</script>

<style scoped>
.list__item {
  border-radius: 7.5px;
}

.is__selected {
  display: block;
}

.todo__item {
  display: grid;
  grid-template-columns: 24px auto 24px;
  align-items: center;
  padding: 5px;
  padding-left: 15px;
  gap: 15px;
}

/**implement eisenhower matrix*/
.todo__item--normal {
  border: none;
}

.todo__item--urgent {
  border-bottom: 2.5px solid var(--default-green);
  border-right: 2.5px solid var(--default-green);
}

.todo__item--not__urgent {
  border-bottom: 2.5px solid var(--default-orange);
  border-right: 2.5px solid var(--default-orange);
}

.todo__item--delete {
  border-bottom: 2.5px solid var(--default-red);
  border-right: 2.5px solid var(--default-red);
}

.todo__item--delicate {
  border-bottom: 2.5px solid var(--primary);
  border-right: 2.5px solid var(--primary);
}

.todo__item__header__actions__delete {
  cursor: pointer;
  color: var(--default-red);
}

.todo__item__content {
  font-size: 14px;
  width: 200px;
  color: var(--secondary);
}

.todo__item__header {
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  align-content: center;
}

.todo__item__header__title h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 3px;
  font-family: "mulish";
  font-weight: 600;
  font-size: 15.5px;
  width: 170px;
}

.todo__item__header__title h3::first-letter {
  text-transform: capitalize;
}

.todo__item__content p {
  /* margin-top: 5px; */
  font-size: 14px;
  line-height: 18px;
  color: var(--secondary);
}

.todo__item__content::first-letter {
  text-transform: capitalize;
}

.todo__item__header__actions {
  cursor: pointer;
  color: var(--default-dark);
  margin-right: 10px;
  font-size: 12px;
}
</style>

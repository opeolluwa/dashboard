<template>
    <div class="todo__item">
        <!--delet icon-->
        <div class="todo__item__header__actions__delete">
            <Icon icon="mdi:close-circle-outline" />
        </div>
        <div>
            <div class="todo__item__header">
                <div class="todo__item__header__title">
                    <h3>{{todo.title}}</h3>
                </div>
                <div class="todo__item__header__actions">
                    <div class="todo__item__header__actions__edit">
                        <Icon icon="mdi:clipboard-edit-outline" />
                    </div>
                </div>
            </div>
            <div class="todo__item__content">
                <p>{{todo.description}}</p>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
// import type { defineComponent } from 'vue';
import { Icon } from '@iconify/vue';

export default {
    name: 'AppTodoItem',
    components: {
        Icon
    },
    props: {
        todo: {
            type: Object,
            required: true,
            default: () => ({
                title: 'Todo title',
                description: 'Todo description',
            })
        }
    },
}
</script>


<style scoped>
.todo__item {
    display: grid;
    grid-template-columns: 24px auto;
    align-items: center;
    padding: 5px;
    padding-left: 15px;
    gap: 25px;
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
    grid-template-columns: 1.5fr .5fr;
    align-content: center;
}

.todo__item__header__title h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 3px;
    text-transform: capitalize;
    /* font-family: 'Inter', sans-serif!important; */
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
<template>
    <form>
        <BaseTextInput label="title" type="text" placeholder="Ex: how to create repo" :model="note.title"
            class="field" />
        <!--markdown editor here-->
        <BaseTextarea placeholder="provide note details here" label="content" v-model="note.content" />
        <BaseButton text="Save Entry" class="field" />

    </form>
</template>


<script lang="ts">
import BaseButton from '@/components/BaseButton.vue';
import BaseTextarea from '@/components/BaseTextarea.vue';
import BaseTextInput from '@/components/BaseTextInput.vue';
import { defineComponent } from 'vue';
export default defineComponent({
    name: "CreateNewNoteEntry",
    data: () => ({
        note: {
            title: "",
            content: ""
        },
    }),
    components: {
        BaseButton,
        BaseTextInput,
        BaseTextarea
    }
})
</script>

<style scoped>
button {
    color: var(--primary);
    background-color: #f5f5f5;
    border: 1px solid var(--primary);
}
</style>
<script lang="ts">
import IconEmailVue from './icons/IconEmail.vue';
import IconHomeVue from './icons/IconHome.vue';
import IconProjectsVue from './icons/IconProjects.vue';
import IconSettingsVue from './icons/IconSettings.vue';
import IconTodo from './icons/IconTodo.vue';
export default {
    name: "AppNavigation",
    components: {
        IconEmail: IconEmailVue,
        IconHome: IconHomeVue,
        IconProjects: IconProjectsVue,
        IconSettings: IconSettingsVue,
        IconTodo
    }
}
</script>

<template>
    <nav>
        <ul>
            <li class="link-item">
                <router-link :to="{name:'home'}">
                    <IconHome /> Home
                </router-link>
            </li>
            <li class="link-item">
                <router-link :to="{name:'emails'}">
                    <IconEmail /> Emails
                </router-link>
            </li>
            <li class="link-item">
                <router-link :to="{name:'projects'}">
                    <IconProjects /> Projects
                </router-link>
            </li>
            <li class="link-item">
                <router-link :to="{name:'todo'}">
                    <IconTodo /> Todo
                </router-link>
            </li>
            <li class="link-item">
                <router-link :to="{name:'settings'}">
                    <IconSettings /> Settings
                </router-link>
            </li>
        </ul>
    </nav>
</template>


<style scoped>
nav {
    background-color: var(--default-content-color);
    color: var(--light-text)
}

nav .link-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 10px;
    transition: all 0.2s ease-in-out;
}

nav .link-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
}

nav .link-item a {
    display: inline-flex;
    align-items: flex-end;
    text-decoration: none;
    color: var(--default-dark);
    column-gap: 15px;
    font-size: 18px;
}
</style>
<script lang="ts">
import IconDashboard from './icons/IconDashboard.vue';
import IconEmail from './icons/IconEmail.vue';
import IconHome from './icons/IconHome.vue';
import IconProjects from './icons/IconProjects.vue';
import IconSettings from './icons/IconSettings.vue';
import IconTodo from './icons/IconTodo.vue';
import BaseButton from './BaseButton.vue';
import router from '@/router';
export default {
    name: "AppNavigation",
    components: {
        IconEmail,
        IconHome,
        IconProjects,
        IconSettings,
        IconTodo,
        IconDashboard,
        BaseButton
    },
    methods: {
        logout() {
            router.push({ name: "auth" })
            // this.$store.dispatch('logout');
        }
    }
}
</script>

<template>
    <nav>
        <div>

            <router-link class="link-item" :to="{name:'home'}">
                <IconHome /> Home
            </router-link>


            <router-link class="link-item" :to="{name:'emails'}">
                <IconEmail /> Emails
            </router-link>


            <router-link class="link-item" :to="{name:'projects'}">
                <IconProjects /> Projects
            </router-link>


            <router-link class="link-item" :to="{name:'todo'}">
                <IconTodo /> Todo
            </router-link>


            <router-link class="link-item" :to="{name:'settings'}">
                <IconSettings /> Settings
            </router-link>

        </div>
        <BaseButton @click="logout" class="logout-button" text="Logout" />

    </nav>
</template>


<style scoped>
nav {
    padding-top: 100px;
    background-color: var(--default-content-color);
    color: var(--light-text);
    position: relative;
    top: 0;
    left: 0;
}

nav .link-item {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 15px 50px;
    border-radius: 5px;
    margin-bottom: 10px;
    display: inline-flex;
    align-items: flex-end;
    text-decoration: none;
    color: var(--light-text);
    column-gap: 15px;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
}

nav .link-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
}

.logout-button {
    width: 80%;
    background-color: var(--white);
    position: absolute;
    bottom: 35px;
    margin: 0 auto;
    display: block;
    left: 10%;
    color: var(--default-content-color);
    color: var(--dark-text);
    box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
    -webkit-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
    -moz-box-shadow: 4px 17px 31px -3px rgba(64, 60, 82, 0.6);
}

.logout-button:hover {
    box-shadow: none;
    transition: box-shadow 0.3s ease-in-out;
}
</style>
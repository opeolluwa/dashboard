<template>
    <!--bottom nav
    contains 
    - home
    - search
    - add
    - notification
    - profile

    -->
    <div id="bottom__nav">
        <div class="bottom__nav__item" v-for="route in routes" :key="route.name">
            <RouterLink :to="{ name: route.path }">
                <Icon :icon="route.icon" />
            </RouterLink>
            <span>Profile</span>
        </div>
    </div>

</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
export default defineComponent({
    name: 'DashboardBottomNav',
    components: {
        Icon
    },
    data: () => ({
        //the current route name
        currentRouteName: '',
        routes: [
            {
                name: "Dashboard",
                icon: "mdi:home-variant-outline",
                path: "home",
            },
            {
                name: "notification",
                icon: "mdi:bell-outline",
                path: "notification",
            },
            {
                name: "notes",
                icon: "mdi:pencil-outline",
                path: "notes",
            },
            {
                name: "settings",
                icon: "mdi:cog-outline",
                path: "settings",
            },
            {
                //TODO: create profile
                name: "profile",
                icon: "mdi:account-circle",
                path: "settings",
            },

        ]
    })
})
</script>


<style scoped>
#bottom__nav {
    display: flex;
    width: 100%;
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px 5px 5px;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--secondary);
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px -1px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px -1px;
    z-index: 1500;
    display: none;
}

.bottom__nav__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
    /* color: rgb(104, 96, 96) */
}

.bottom__nav__item svg {
    width: 24px;
    height: 24px;
    color: #fff;
}

.bottom__nav__item span {
    margin-top: 5px;
    font-size: 12px;
    font-weight: 500;
    color: #e5e5e5;
    /* display: none; */
}
</style>
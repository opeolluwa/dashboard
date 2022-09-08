<script lang="ts">
import DashboardSidebarVue from '@/components/DashboardSidebar.vue';
import BaseTextInputVue from '@/components/BaseTextInput.vue';
import DashboardHeaderVue from '@/components/DashboardHeader.vue';
export default {
    components: {
        DashboardSidebar: DashboardSidebarVue,
        BaseTextInput: BaseTextInputVue,
        DashboardHeader: DashboardHeaderVue
    }
};
</script>

<template>
    <div class="container">
        <DashboardSidebar />
        <main>
            <DashboardHeader />
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    grid-template-areas: "sidebar content";
    column-gap: 0px;
    min-height: 100vh;
}

/* .container > * {
    padding-top: 75px;
} */
</style>

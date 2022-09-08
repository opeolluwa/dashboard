<script lang="ts">
import DashboardHeaderVue from '@/components/DashboardHeader.vue';
import DashboardSidebarVue from '@/components/DashboardSidebar.vue';
export default {
    // name: "HomeView",
    components: {
        DashboardHeader: DashboardHeaderVue,
        DashboardSidebar: DashboardSidebarVue,
    }
};
</script>

<template>
    <div class="container">
        <DashboardHeader />
        <DashboardSidebar />
        <main>
            <RouterView />
        </main>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1fr;
    grid-template-areas: " sidebar content";
    column-gap: 20px;
    min-height: 100vh;
}

.container header {
    display: none;
    column-span: 1/-1;
}
</style>

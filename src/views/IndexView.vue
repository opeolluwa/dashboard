<script lang="ts">
import DashboardSidebarVue from '@/components/DashboardSidebar.vue';
import BaseTextInputVue from '@/components/BaseTextInput.vue';
import DashboardHeaderVue from '@/components/DashboardHeader.vue';
import ViewLayoutVue from '@/components/ViewLayout.vue';
export default {
    components: {
        DashboardSidebar: DashboardSidebarVue,
        BaseTextInput: BaseTextInputVue,
        DashboardHeader: DashboardHeaderVue,
        ViewLayout: ViewLayoutVue
    }
};
</script>

<template>
    <div class="container">
        <DashboardSidebar />
        <main>
            <DashboardHeader />
            <div>
                <ViewLayout>
                    <template #content>
                        <RouterView />
                    </template>
                </ViewLayout>
            </div>
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
    height: 100vh;
}

nav {
    grid-area: sidebar;
    height: 100vh !important;
}

main {
    grid-area: content;
    height: 100vh;
    overflow-y: scroll;
    scrollbar-color: red;
}

main header {
    grid-area: header;

}

main>div {
    grid-area: view;
    background-color: #f9f9f9;
}


</style>

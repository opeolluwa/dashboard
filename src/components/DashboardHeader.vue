<script lang="ts">
import greetings from "./greetings"
import IconCommunity from "./icons/IconCommunity.vue"
import IconEcosystem from "./icons/IconEcosystem.vue"
import IconNotification from "./icons/IconNotification.vue"
export default {
    name: "DashboardHeader",
    data: () => ({
        greetings,
    }),
    components: {
        IconCommunity,
        IconNotification
    }
};
</script>
<template>
    <header class="view">
        <!--navigation button for small devices go here-->
        <!--greetings-->
        <div>
            <h1>Hi Opeoluwa,</h1>
            <small>{{greetings}}</small>
        </div>
        <!--pictures and icons-->
        <div class="icons">
            <IconCommunity />
            <IconNotification/>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 100px;
    border-bottom: 1px solid rgba(0, 0, 0, .15);
    background-color: #fff;
}

h1 {
    font-size: 20px;
    font-weight: 500;
    font-family: 'Bakbak One', cursive;
    line-height: 36px;
}

small {
    display: block;
}

.icons {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100px;
}
</style>
<template>
    <div class="view">
        <slot class="slot"></slot>
    </div>
</template>


<script lang="ts">
export default {
    name: "ViewLayout",
} 
</script> 


<style scoped>
.view{
    padding: 25px 100px;
}
</style>
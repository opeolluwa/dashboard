<template>
  <div class="view">
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: "ViewLayout",
};
</script>

<style scoped>
.view {
  padding: 25px 100px;
  transition: all 0.5s ease-in-out;
}
</style>

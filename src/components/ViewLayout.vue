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
  position: relative;
  padding-top: 50px;
}
@media screen and (max-width: 768px) {
  .view {
    padding-top: 100px;
    min-height: 100vh;
  }
}
</style>

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
  padding-bottom: 75px;
}
/**set top padding for first child element of view layout */
.view > *:first-child {
  padding-top: 75px;
}

.view,
.view * {
  box-sizing: border-box;
  overflow-x: hidden;
}
@media screen and (max-width: 768px) {
  .view {
    padding-top: 100px;
    min-height: 100vh;
  }
}
</style>

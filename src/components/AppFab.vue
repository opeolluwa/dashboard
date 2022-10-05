<script lang="ts">
import { defineComponent } from "vue";
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "FavActionButton",
  components: { Icon },
  props: {
    route: {
      type: String,
      required: true,
      default: "404",
    },
    icon: {
      type: String,
      required: true,
      default: "mdi:plus",
    },
  },
});
</script>

<template>
  <RouterLink :to="{ name: route }" class="fab">
    <Icon :icon="icon" />
  </RouterLink>
</template>

<style>
.fab {
  display: flex;
  justify-content: center;
  align-items: center;
  left: calc(100vw - 80px);
  position: fixed;
  bottom: 20px;
  border-radius: 50%;
  border-color: transparent;
  padding: 10px;
  width: 50px;
  height: 50px;
  box-shadow: -3px -3px 27px 3px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: -3px -3px 27px 3px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: -3px -3px 27px 3px rgba(0, 0, 0, 0.3);
  z-index: 10;
}

.fab:hover {
  background-color: var(--primary);
  color: var(--white);
  cursor: pointer;
}
</style>

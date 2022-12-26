<template>
  <div class="view">
    <div v-if="!isHomePage" class="view__header">
      <Icon icon="mdi:arrow-left-thin" @click="goBack" />
      <Icon icon="mdi:arrow-right-thin" @click="goForward" class="d-none" />
    </div>
    <slot name="content"></slot>
  </div>
</template>

<style scoped>
.view__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--secondary);
  font-size: 1.35rem;
}

.view__header svg {
  cursor: pointer;
}

.view {
  position: relative;
  padding-bottom: 75px;
}

/**set top padding for first child element of view layout */
.view__header> {
  margin-bottom: 45px;
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
  .view__header {
    margin-bottom: 20px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue"
import { Icon } from "@iconify/vue";
export default defineComponent({
  name: "ViewLayout",
  components: {
    Icon
  },
  computed: {
    //  * see ifthe current route is the home page return true in not return false
    isHomePage() {
      return this.$route.path === "/u"
    }
  },
  methods: {
    //  * go back to the previous page
    goBack() {
      this.$router.go(-1)
    },
    goForward() {
      this.$router.go(1)
    }
  }
});
</script>

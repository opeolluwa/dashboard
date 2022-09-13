<script lang="ts">
import greetings from "./greetings";
import IconEmail from "./icons/IconEmail.vue";
import IconMenu from "./icons/IconMenu.vue";
import IconNotification from "./icons/IconNotification.vue";
export default {
  name: "DashboardHeader",
  data: () => ({
    greetings,
  }),
  components: {
    IconEmail,
    IconNotification,
    IconMenu,
  },
  methods: {
    toggleSidebar() {
      // this.$emit("toggleSidebar");
    },
  },
};
</script>
<template>
  <header class="view">
    <!--navigation button for small devices go here-->
    <div class="header__nav__mobile">
      <IconMenu @click="$emit('open-sidebar')" />
      <h1>Opeoluwa</h1>
    </div>

    <!--greetings-->
    <div class="header__nav__desktop">
      <h1>Hi Opeoluwa,</h1>
      <small>{{ greetings }}</small>
    </div>
    <!--pictures and icons-->
    <div class="icons">
      <IconEmail />
      <IconNotification />
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  background-color: #fff;
}

h1 {
  font-size: 20px;
  font-weight: 500;
  font-family: "Bakbak One", cursive;
  line-height: 36px;
}

small {
  display: block;
}

.header__nav__mobile {
  display: none;
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  width: 100px;
}

.icons svg {
  width: 24px;
  height: 24px;
  /* fill: #000; */
}
/**--------------------mobile devices styling------------------------ */
@media screen and (max-width: 768px) {
  header {
    padding: 15px 30px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1200;
    width: 100%;
    background-color: var(--primary);
    color: var(--light-text);
  }

  /** hide desktop greeting */
  .header__nav__desktop {
    display: none;
  }

  .header__nav__mobile {
    display: flex;
    align-items: center;
  }

  .header__nav__mobile h1 {
    font-size: 22px;
    font-weight: 500;
    font-family: "Bakbak One", cursive;
    line-height: 36px;
    margin-left: 10px;
  }

  .header__nav__mobile svg {
    width: 20px;
    height: 20px;
  }

  .icons {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 10px;
    width: unset;
    padding: 0;
    /* display: none; */
  }

  .icons svg {
    width: 24px;
    height: 24px;
  }
}
svg {
  cursor: pointer;
}
</style>

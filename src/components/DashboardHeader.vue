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
      <h1>
        <RouterLink :to="{ name: 'home' }">Opeoluwa</RouterLink>
      </h1>
    </div>

    <!--greetings-->
    <div class="header__nav__desktop">
      <h2>Hi Opeoluwa 😊</h2>
      <small>{{ greetings }}</small>
    </div>
    <!--pictures and icons-->
    <div class="icons">
      <RouterLink :to="{ name: 'emails' }">
        <IconEmail /><sup></sup>
      </RouterLink>
      <RouterLink :to="{ name: 'notification' }">
        <IconNotification /> <sup></sup>
      </RouterLink>
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

h1 a {
  font-size: 20px;
  font-weight: 500;
  font-family: "Bakbak One", cursive;
  line-height: 36px;
  text-decoration: none;
  color: var(--light-text);
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
  column-gap: 15px;
  width: 100px;
}

.icons a {
  text-decoration: none;
  color: inherit;
  position: relative;
}

sup {
  /* vertical-align: super; */
  position: absolute;
  top: -4px;
  right: -3px;
  background-color: var(--default-red);
  color: var(--light-text);
  font-size: 13px;
  padding: 3px;
  border-radius: 50%;
  font-weight: 500;
  width: 10px;
  display: flex;
  place-items: center;
  height: 10px;
  text-align: center;
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

<template>
  <button><slot></slot> {{ text }}</button>
</template>

<style scoped>
button {
  height: 50px;
  /* width: 500px; */
  left: 0px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 18px;
  background-color: var(--tertiary);
  color: var(--light-text);
  text-transform: capitalize;
}

button:hover,
button:focus {
  opacity: 0.75;
  transition: 0.5s opacity;
  cursor: pointer;
}
@media screen and (max-width: 768px) {
  button {
    width: 100%;
    font-size: 16px;
  }
}
</style>

<script lang="ts">
export default {
  name: "BaseButton",
  props: {
    color: {
      type: String,
    },
    style: {
      type: Object,
    },
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

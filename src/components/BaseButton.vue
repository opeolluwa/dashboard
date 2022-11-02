<template>
  <button :disabled="disabled">{{ text }}<slot></slot></button>
</template>

<style scoped>
button {
  height: 50px;
  width: 100%;
  left: 0px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  background-color: var(--primary);
  /* background-color: #3c2c5b; */
  color: var(--light-text);
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
}

button:hover,
button:focus {
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  button {
    width: 100%;
    font-size: 14px;
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
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

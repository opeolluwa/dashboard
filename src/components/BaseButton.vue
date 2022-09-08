<template>
  <div class="form-field">
    <button>{{ text }}</button>
  </div>
</template>

<style scoped>
button {
  height: 50px;
  width: 500px;
  left: 0px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

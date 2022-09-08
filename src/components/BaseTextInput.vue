<template>
  <div class="form-field">
    <label :for="label">{{ label }}</label>
    <input :type="type" :id="label" :placeholder="'-- ' + placeholder + ' --'" v-model="model" />
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseTextInput",
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      default: "text",
    },
  },
};
</script>

<style scoped>
.form-field {
  margin-bottom: 35px;
  font-size: 18px;
}

.form-field label {
  display: block;
  margin-bottom: 7.5px;
  text-transform: capitalize;
  font-family: 'Open Sans';
}

.form-field input,
button {
  height: 50px;
  width: 500px;
  left: 0px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
}

.form-field input::placeholder {
  display: inline-block;
  letter-spacing: 1.25px;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}

.form-field input:hover,
.form-field input:focus {
  border: 1.75px solid var(--tertiary);
  transition: 0.5s border;
  outline: none;
}


@media screen and (max-width: 400px) {
  .form-field input{
    width: 100%;
  }
}
</style>

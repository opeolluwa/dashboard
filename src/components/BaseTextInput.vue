<template>
  <!--
    binding v-model to custom components
    https://www.digitalocean.com/community/tutorials/how-to-add-v-model-support-to-custom-vue-js-components

    This is a base component for all the text inputs
    It takes in a label and a type
    It also takes in a v-model

    Example usage:
    <BaseTextInput label="Name" type="text" v-model="name" />
  -->
  <div class="form-field">
    <label :for="label">{{ label }}</label>
    <input
      :type="type"
      :id="label"
      :placeholder="'-- ' + placeholder + ' --'"
      @input="updateModelValue"
      :value="modelValue"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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
    modelValue: {
      type: String,
    },
    type: {
      type: String,
      required: true,
      default: "text",
    },
  },
  methods: {
    updateModelValue(event: any) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
});
</script>

<style>
.form-field {
  margin-bottom: 35px;
  font-size: 16px;
}

.form-field label {
  display: block;
  margin-bottom: 7.5px;
  text-transform: capitalize;
  font-family: "Open Sans";
}

.form-field input {
  /* width: 500px; */
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  display: block;
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
  border: 1px solid var(--default-dark);
  transition: 0.5s border;
  outline: none;
}

@media screen and (max-width: 768px) {
  .form-field input {
    width: 100%;
  }

  .form-field {
    margin-bottom: 35px;
    font-size: 14px;
  }
}
</style>

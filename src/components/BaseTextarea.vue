<template>
  <!--
    This is a base component for all the text textareas
    It takes in a label and a type
    It also takes in a v-model

    Example usage:
    <BaseTexttextarea label="Name" type="text" v-model="name" />
  -->
  <div class="form-field">
    <label :for="label">{{ label }}</label>
    <textarea
      :type="type"
      :id="label"
      :placeholder="'-- ' + placeholder + ' --'"
      :v-model="model"
      rows="10"
      cols="35"
    ></textarea>
  </div>
</template>

<script lang="ts">
export default {
  name: "BaseTextArea",
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
  },
};
</script>

<style scoped>
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

.form-field textarea {
  left: 0px;
  /* width: calc(100% - 100px); */
  object-fit: contain;
  border-radius: 8px;
  padding: 10px 25px;
  border: 1px solid var(--border-color);
  border-radius: 5px;
}

.form-field textarea::placeholder {
  display: inline-block;
  letter-spacing: 1.25px;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}

.form-field textarea:hover,
.form-field textarea:focus {
  border: 1px solid var(--default-dark);
  transition: 0.5s border;
  outline: none;
}

@media screen and (max-width: 768px) {
  .form-field textarea {
    width: 100%;
  }

  .form-field {
    margin-bottom: 35px;
    font-size: 14px;
  }
}
</style>

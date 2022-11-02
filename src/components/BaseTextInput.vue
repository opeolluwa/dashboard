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
  <div class="form__field">
    <label :for="label">{{ label }}</label>
    <!--use this template if the text input style is password template -->
    <template v-if="isPassword">
      <div class="password__input__field">
        <input
          :type="passwordField"
          :id="label"
          :placeholder="placeholder"
          @input="updateModelValue"
          :value="modelValue"
        />
        <!--icon to hid and show password visibility-->
        <Icon
          v-show="!isPasswordInput && showIcon"
          icon="mdi:eye-off-outline"
          class="password__toggler"
          @click="togglePasswordVisibility"
        />
        <Icon
          v-show="isPasswordInput && showIcon"
          icon="mdi:eye-outline"
          class="password__toggler"
          @click="togglePasswordVisibility"
        />
      </div>
      <div class="forgotten_password" v-if="resetPassword">
        <RouterLink :to="{ name: 'reset-password' }"
          >Forgotten password?
        </RouterLink>
      </div>
    </template>

    <!--for other input types-->
    <template v-else>
      <input
        :type="type"
        :id="label"
        :placeholder="placeholder"
        @input="updateModelValue"
        :value="modelValue"
        :maxlength="maxlength"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { Icon } from "@iconify/vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "BaseTextInput",
  components: {
    Icon,
  },
  data: () => ({
    isPasswordInput: true,
  }),
  props: {
    //input field label
    label: {
      type: String,
      required: true,
    },
    // the place holder
    placeholder: {
      type: String,
      required: true,
    },
    //V-model  bindings
    modelValue: {
      type: String,
    },
    //input field length
    maxlength: {
      type: Number,
      required: false,
    },
    //input field type, maps to HTML input types=> text, email, date e.t.c
    type: {
      type: String,
      required: true,
      default: "text",
    },
    //a boolean to add reset password link to password input fields
    resetPassword: {
      type: Boolean,
      default: false,
    },
    // the unresponsive value of the input field
    /*  value: {
      type: String,
      required: false,
    }, */
    showIcon: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    updateModelValue(event: any) {
      this.$emit("update:modelValue", event.target.value);
    },
    //change password visibility
    togglePasswordVisibility() {
      // get the password field
      const passwordField =
        document?.querySelector(".password__toggler")?.previousElementSibling;
      const inputFieldType = passwordField?.getAttribute("type");

      if (inputFieldType === "password") {
        passwordField?.setAttribute("type", "text");
        this.isPasswordInput = false;
      } else {
        passwordField?.setAttribute("type", "password");
        this.isPasswordInput = true;
        // this.passwordField = "password";
      }
      // console.log({ parentElement });
      // this.passwordField = this.passwordField === "password" ? "text" : "password";
    },
  },
  computed: {
    /**
     * decide if the input type is password
     * if true, render the password template
     * else use text input template
     */
    isPassword(): boolean {
      return this.type.toLowerCase().trim() === "password";
    },
    // password field has default value as password, then the  eye icon is clicked, it changed to text
    passwordField(): string {
      // document.getElementById("myLI").parentElement.nodeName;
      return this.isPassword ? "password" : "text";
    },
  },
});
</script>

<style>
.forgotten_password {
  margin-top: 10px;
  color: var(--secondary);
  text-align: right !important;
}

.forgotten_password a {
  text-decoration: none;
}

.forgotten_password {
  text-align: left !important;
  text-transform: lowercase;
  font-size: 13.5px;
  margin-top: 5px;
}

.form__field {
  margin-bottom: 35px;
  font-size: 14px;
}

.form__field label {
  display: block;
  margin-bottom: 7.5px;
  text-transform: capitalize;
  font-size: 14px;
}

.form__field input {
  /* width: 500px; */
  width: 100%;
  height: 50px;
  border-radius: 8px;
  padding: 7px 25px 7px 25px;
  border: 1.5px solid var(--border-color);
  border-radius: 5px;
  display: block;
  font-size: 14px;
}

.form__field input::placeholder {
  display: inline-block;
  letter-spacing: 1.25px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
}

.form__field input:hover,
.form__field input:focus {
  border: 1px solid var(--default-dark);
  transition: 0.5s border;
  outline: none;
}

.form__field .password__input__field {
  position: relative;
}

.form__field .password__input__field .password__toggler {
  position: absolute;
  right: 20px;
  top: 50%;
  display: flex;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  color: rgb(85, 82, 82);
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .form__field input {
    width: 100%;
  }

  .form__field {
    margin-bottom: 35px;
    font-size: 14px;
  }
}
</style>

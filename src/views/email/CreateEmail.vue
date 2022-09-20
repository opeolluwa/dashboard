<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import BaseTextarea from "/components/BaseTextarea.vue";
export default defineComponent({
  name: "CreateEmailView",
  components: {
    BaseButton,
    BaseTextInput,
    BaseTextarea,
  },
  data: () => ({
    newEmail: {
      email: "",
      recipient: "",
      subject: "",
      message: "",
    },
  }),
  methods: {
    addNewProject() {
      console.log("add new project");
    },
  },
});
</script>

<template>
  <h2>Compose new email</h2>
  <div>
    <form action="" @click="">
      <!--the recipient email-->
      <BaseTextInput
        label="recipient email"
        type="email"
        placeholder="recipient email"
        :model="newEmail.email"
      />
      <!--the recipient name-->
      <BaseTextInput
        placeholder="recipient name"
        label="recipient name"
        :model="newEmail.recipient"
      />
      <!--the email subject-->
      <BaseTextInput
        placeholder="email subject"
        label="email subject"
        :model="newEmail.subject"
      />
      <!--the email body-->
      <BaseTextarea
        placeholder="email body"
        label="email body"
        :model="newEmail.message"
      />
      <!--send button-->
      <BaseButton text="send message" />
    </form>
  </div>
</template>

<style>
h2 {
  margin-bottom: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

form label {
  font-size: 16px;
}
</style>

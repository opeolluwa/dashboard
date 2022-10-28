<template>
  <h2>Compose new email</h2>
  <div>
    <form @submit.prevent="sendEmail">
      <div>
        <!--the recipient email-->
        <BaseTextInput
          label="recipient email"
          type="email"
          placeholder="recipient email"
          v-model="newEmail.email"
        />
        <!--the recipient name-->
        <BaseTextInput
          placeholder="recipient name"
          label="recipient name"
          v-model="newEmail.recipient"
        />
        <!--the email subject-->
        <BaseTextInput
          placeholder="email subject"
          label="email subject"
          v-model="newEmail.subject"
        />
      </div>
      <div>
        <!--the email body-->
        <BaseTextarea
          placeholder="email body"
          label="email body"
          v-model="newEmail.message"
        />
        <!--send button-->
        <BaseButton text="send message"> </BaseButton>
      </div>
    </form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseTextInput from "@/components/BaseTextInput.vue";
import BaseTextarea from "@/components/BaseTextarea.vue";
import axios from "axios";
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
    async sendEmail() {
      //get the email data
      const payload = {
        ...this.newEmail,
      };
      console.log(payload);
      const response = await axios.post(
        "http://localhost:3000/emails",
        payload
      );
    },
  },
});
</script>

<style scoped>
form {
  display: flex;
  column-gap: 100px;
  margin: 2.5rem 0;
}

form label {
  font-size: 14px;
}

form button {
  width: 100%;
  background-color: var(--primary);
}

form textarea {
  font-size: 16px;
  padding: 10px;
  /* display: none; */
}

/**---------smaller screens ------------ */
@media screen and (max-width: 768px) {
  form {
    flex-direction: column;
    display: flex;
    justify-content: center;
    column-gap: 20px;
    flex-direction: column;
    column-gap: 20px;
  }

  button {
    width: 100%;
  }
}
</style>

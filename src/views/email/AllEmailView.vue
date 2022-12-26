<script lang="ts">
import EmailItem from "@/components/EmailItem.vue";
import NewEmail from "@/components/AppFab.vue";
import { defineComponent } from "vue";
import { mapActions, mapState } from "pinia";
import AppNetworkError from "../../components/AppNetworkError.vue";
import AppEmptyState from "../../components/AppEmptyState.vue";
import { useEmailsStore } from "@/stores/emails";

export default defineComponent({
  name: "EmailView",
  components: { EmailItem, Fab: NewEmail, AppNetworkError, AppEmptyState },
  created() {
    this.getEmailsRequest();
  },
  methods: {
    ...mapActions(useEmailsStore, {
      getEmailsRequest: "fetchAllEmails",
      starEmailRequest: "starEmail",
      toggleEmailStar: "toggleStar"
    }),
    /**
     * @function previewEmail go to preview email
     * @param emailId  - the id of the email to preview
     */
    previewEmail(emailId: string) {
      this.$router.push({ name: "preview-email", params: { emailId } });
    },
    /**
     * @function starEmail star an email
     * @param emailId  - the id of the email to star
     */
    starEmail(emailId: string) {
      this.starEmailRequest(emailId);
    },
  },
  computed: {
    ...mapState(useEmailsStore, ["allEmails"]),
  },
});
</script>

<template>
  <!--id there is an error fetching the todo -->
  <!-- <AppNetworkError v-show="todoArray == null" /> -->
  <!--if no todo was found bu it's empty-->
  <AppEmptyState v-if="allEmails?.length == 0" />
  <div v-for="email in allEmails" :key="email.id.toString()" v-else>
    <EmailItem :title="email.emailSubject.toString()" :content="email.emailBody.toString()"
      :is-starred="email.isStarred" @preview-email="previewEmail(email.id.trim().toString())"
      @star-email="toggleEmailStar(email.isStarred, email.id.trim().toString())" />
  </div>
  <!-- <AppNetworkError v-if="allEmails.length === 0" /> -->
  <Fab route="new-email" icon="mdi:email-plus-outline" />
</template>

<style scoped>

</style>

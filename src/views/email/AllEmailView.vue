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
    }),
  },
  computed: {
    ...mapState(useEmailsStore, ["allEmails"]),
  }
});
</script>

<template>
  <div v-for="email in allEmails" :key="email.id.toString()">
    <EmailItem :title="email.emailSubject.toString()" :content="email.emailBody.toString()"
      :is-starred="email.isStarred" />
  </div>
  <AppNetworkError v-if="allEmails.length === 0" />
  <Fab route="new-email" icon="mdi:email-plus-outline" />
</template>

<style scoped>

</style>

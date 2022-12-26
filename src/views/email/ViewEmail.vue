
<template>
    <div v-if="email">
        <div class="email__header">
            <div class="email__subject">
                {{ email.emailSubject }} <p class="note__entry__header__date">
                    {{
                            dateSent
                    }}
                </p>
            </div>
            <div class="email__controls">
                <Icon icon="mdi:star" :class="[email.isStarred ? 'starred__email' : '', 'star']"
                    v-if="email.isStarred" />
                <Icon icon="mdi:star-outline" class="email" v-else @star-email="" />
                <Icon icon="mdi:trash-can-outline" class="delete" />
            </div>
        </div>
        <p class="email__body">{{ email.emailBody }}</p>
    </div>
    <AppNetworkError v-else />
</template>

<style scoped>
.starred__email {
    color: var(--default-yellow) !important;
}

.email__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.email__header .email__subject {
    font-weight: 500;
}

.email__body {
    display: flex;
    align-items: center;
    margin-top: 25px;
}

.email__controls {
    display: grid;
    grid-template-columns: repeat(3, 25px);
    column-gap: 5px;
    /* position: absolute; */
    right: 20px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { mapActions, mapState } from "pinia";
import { useEmailsStore, type EmailModelInterface } from "@/stores/emails";
import type { FetchedNoteInterface } from "@/stores/notes";
import { Icon } from "@iconify/vue";
import AppNetworkError from "@/components/AppNetworkError.vue";
export default defineComponent({
    name: "ViewEmail",
    components: { AppNetworkError, Icon },
    data: () => ({
        fetchedEmail: {},
    }),
    mounted() {
        // watch the params of the route to fetch the data again
        this.$watch(
            () => this.$route.params,
            () => {
                //get the data
                this.fetchEmailRequest();
            },
            // fetch the data when the view is created and the data is
            // already being observed
            { immediate: true }
        );
    },
    methods: {
        ...mapActions(useEmailsStore, ["toggleStar", "fetchById"]),
        async fetchEmailRequest() {
            if (!this.email) {
                this.fetchedEmail = await this.fetchById(this.emailId.toString());
            }
        },
    },
    computed: {
        ...mapState(useEmailsStore, ["getEmailById"]),
        emailId() {
            return this.$route.params.emailId;
        },
        email(): EmailModelInterface {
            return this.getEmailById(
                String(this.emailId)
            ) || this.fetchedEmail as unknown as EmailModelInterface;
        },
        dateSent() {
            return new Date(this.email.dateSent.toString()).toLocaleDateString(
                undefined,
                {
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",

                }
            )
        },
    },
});
</script>

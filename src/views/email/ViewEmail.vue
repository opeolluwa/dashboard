<template>
    <div>
        <h1>Preview Email</h1>
       the currebt eail is  {{ currentEmail }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { mapActions, mapState } from "pinia";
import { useEmailsStore, type EmailModelInterface } from "@/stores/emails";
import type { FetchedNoteInterface } from "@/stores/notes";

export default defineComponent({
    data: () => ({
        mail: {
        }
    }),
    mounted() {
        // watch the params of the route to fetch the data again
        this.$watch(
            () => this.$route.params,
            () => {
                //get the data
                // this.fetchNoteRequests();
            },
            // fetch the data when the view is created and the data is
            // already being observed
            { immediate: true }
        );
    },
    methods: {
        // ...mapActions(useEmailsStore, [""])

    },
    computed: {
        ...mapState(useEmailsStore, ["getEmailById"]),
        emailId() {
            return this.$route.params.emailId;
        },
        currentEmail(): EmailModelInterface {
            return this.getEmailById(
                String(this.emailId)
            ) as unknown as EmailModelInterface;
        },
    }
})

</script>
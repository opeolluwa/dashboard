import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { getStoredData } from "@/main";

/**
 * get th e bearer token from the authentication store
 * add the token to the request anf get the todos
 */
const authStore = useAuthStore();
// define the email store
export const useEmailsStore = defineStore("emailStore", {
    state: (): State => ({
        allEmails: [],
        trashedEmails: [],
        draftedEmails: [],
        starredEmails: [],
    }),

    getters: {
        // get all emails
        getInbox: (state) => state.allEmails,
        //get email by id
        getEmailById: (state) => (emailId: String) => {
            return state.allEmails?.filter(
                (email) => email.id === String(emailId)
            )[0];
        },
        //get starredEmail
        getStarredEmail: (state) => {
            return state.allEmails?.filter((email) => email.isStarred == true);
        },
        /*  getStarredEmail: (state) => {
                     return state.allEmails?.filter((email) => email.isStarred == true)
                 }, */
    },
    actions: {
        async fetchAllEmails(/* pagination:PaginationInterface */): Promise<void> {
            const AUTH_TOKEN = authStore.getAuthToken
                ? authStore.getAuthToken
                : await getStoredData("authorizationToken");

            try {
                //TODO:implement pagination
                const { data: response } = await axios.get(
                    "/emails?page=1&noOfRows=10",
                    {
                        headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
                    }
                );
                this.allEmails = response.data.emails;
                console.log(JSON.stringify(response));

                //assign response to the state and hide the loading icon
            } catch (error: any) {
                // this.isLoading = false;
                console.log(error.message);
            }
        },
    },
});

// type definition for the email state
interface State {
    allEmails: Array<EmailModel>;
    starredEmails: Array<EmailModel>;
    trashedEmails: Array<EmailModel>;
    draftedEmails: Array<EmailModel>;
}

/// the email onject as stored in hte database
interface EmailModel {
    id: String;
    senderName: String;
    senderEmail: String;
    emailBody: String;
    emailSubject: String;
    emailStatus: String;
    emailFolder: String;
    isArchived: boolean;
    isStarred: boolean;
    dateSent: Date;
}

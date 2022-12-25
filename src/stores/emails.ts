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
    getDeletedEmail: (state) => {
      return state.allEmails?.filter((email) => email.isStarred == true);
    },
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
        //assign response to the state and hide the loading icon
      } catch (error: any) {
        // this.isLoading = false;
        console.log(error.message);
      }
    },
    /**
     * get an email id
     * make the request to update the emai
     * update the store
     */
    async starEmail(emailId: String) {
      try {
        const AUTH_TOKEN = authStore.getAuthToken
          ? authStore.getAuthToken
          : await getStoredData("authorizationToken");
        const { data: response } = await axios.put(`/emails/star/${emailId}`, {
          headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
        });
        console.log("the note id is ", emailId);
        console.log(JSON.stringify(response));
        //upadate the store
        await this.fetchAllEmails();
      } catch (error) { }
    },

    async unStarEmail(emailId: String) {
      try {
        const AUTH_TOKEN = authStore.getAuthToken
          ? authStore.getAuthToken
          : await getStoredData("authorizationToken");
        const { data: response } = await axios.put(`/emails/un-star/${emailId}`, {
          headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
        });
        console.log("the note id is ", emailId);
        console.log(JSON.stringify(response));
        //upadate the store
        await this.fetchAllEmails();
      } catch (error) { }
    },

    /**
     * toggle star
     * check if mail is starred, make request to un star if
     * if not to otherwise
     */
    async toggleStar(isEmailStarred: boolean, emailId: String) {
      if (isEmailStarred === true) {
        await this.unStarEmail(emailId)

      }
      else {
        await this.starEmail(emailId)

      }
    },
    /**
     * fetch email by id
     * 
     */
    async fetchById(emailId: String) {
      try {
        const AUTH_TOKEN = authStore.getAuthToken
          ? authStore.getAuthToken
          : await getStoredData("authorizationToken");
        const { data: response } = await axios.get(`/email/${emailId}`, {
          headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
        });
        return response;
        console.log(JSON.stringify(response));
      } catch (error) { }
    },

    async deleteNote(emailId: String) {
      try {
        const AUTH_TOKEN = authStore.getAuthToken
          ? authStore.getAuthToken
          : await getStoredData("authorizationToken");
        const { data: response } = await axios.delete(`/emails/${emailId}`, {
          headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
        });
        console.log(JSON.stringify(response));
      } catch (error) { }
    },
  },
});

// type definition for the email state
interface State {
  allEmails: Array<EmailModelInterface>;
  starredEmails: Array<EmailModelInterface>;
  trashedEmails: Array<EmailModelInterface>;
  draftedEmails: Array<EmailModelInterface>;
}

/// the email onject as stored in hte database
export interface EmailModelInterface {
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

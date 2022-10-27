import { defineStore } from "pinia";
import axios from "axios";
import router from "@/router";

export const useAuthStore = defineStore("authStore", {
  state: (): State => ({
    isLoading: false, // the request is in progress
    // a user is authenticated when he have an email and bearer token
    isAuthenticated: false,
    userInformation:
      (localStorage.getItem("user") as unknown as UserInformation) || null,
    authorizationToken: localStorage.getItem("token") || null,
    apiResponseMsg: "",
    apiError: false,
  }),
  getters: {
    getUser: (state) => state.userInformation,
    getPermission: (state) => state.isAuthenticated,
    getAuthToken: (state) => state.authorizationToken,
  },
  /**
   * the authorization action are essentially :
   * -  login
   * - requestRefreshToken
   * - logout
   *
   * all the action will mutate the "isAuthenticated", "userInformation" an the "authorizationToken",
   *
   * example, the "requestRefreshToken" will make a periodic request to the database,
   * on success, iot will clear out the the
   */
  actions: {
    async loginRequest(credentials: AuthCredentials) {
      //destruct the payload and pass the content to axios, but first set loading action to true
      const { email, password } = credentials;
      this.isLoading = true;
      try {
        //login the user and destructure the API response
        const { data: response } = await axios.post("/auth/login", {
          email,
          password,
        });
        console.log({ token: response.data.token });
        if (response.success) {
          this.isLoading = false;
          //save the token to local storage,
          localStorage.setItem("token", response.data.token);
          //redirect to the dashboard
          this.getUserInformation(response.data.token);
        } else {
          this.isLoading = false;
          this.apiResponseMsg = response.message;
          /* this.apiError = true;
          this.apiResponse.message = response.message; */
        }
      } catch (error: any) {
        this.isLoading = false;
        const { data: response } = error.response;
        if (!response.success) {
          this.apiResponseMsg = response.message;
        }
        // console.log(JSON.stringify(error.response.data));
      }
    },

    //use the provided token to get the user profile
    async getUserInformation(bearerToken: String) {
      try {
        const { data: response } = await axios.get("/auth/me", {
          headers: { Authorization: `Bearer ${bearerToken}` },
        });
        //if the request is successful, store the data and
        if (response.success) {
          this.userInformation = response.data.user;
          localStorage.setItem("user", response.data.user);
          router.push({ name: "home" });
        } else {
          //handle the error here bu going back to login page
          localStorage.removeItem("token");
          router.push({ name: "auth" });
          console.log("something bad happened ");
        }
        // console.log({ response });
      } catch (error: any) {
        console.log({ error: error.message });
        console.log("something bad happened ");
      }
    },
    /**
     * to make a logout request,
     * remove the bearer token from the localhost
     * send the token to the server
     */
    logoutRequest() {
      // get the token
      // const bearerToken = localStorage.getItem("token");
      //remove the item from the local storage
      localStorage.removeItem("token");
      router.push({ name: "login" });
      //send the server to the server to be blacklisted
      //TODO
    },

    /**
     * @function getRefreshToken
     * @param {null} - takes no parameter
     * @returns refresh token from the server and update the store
     */
    async getRefreshToken() {
      // console.log("go new token")
      try {
        const { data: response } = await axios.get("/auth", {
          headers: { Authorization: `Bearer ${this.authorizationToken}` },
        });
        //if the request is successful, store the data and
        if (response.success) {
          localStorage.setItem("token", response.data.bearerToken);
        } else {
          console.log("something bad happened ");
        }
      } catch (error: any) {
        console.log("something bad happened ", error.message);
      }
    },
  },
});

//the state interface
interface State {
  isLoading: boolean;
  isAuthenticated: boolean;
  userInformation: UserInformation | null;
  authorizationToken: String | null;
  apiResponseMsg: String | null;
  apiError: boolean;
}

/**
 * the user information interface will contain fetched about the user from the backend
 * the id - is the UUID connected to the user
 * the email
 * the fullname
 * the password,
 * the username to  be used in header fields
 */

interface UserInformation {
  id: String;
  email: String;
  fullname: String;
  username: String;
  password: String | null;
}

/**
 * auth credentials is the payload struct
 */
interface AuthCredentials {
  email: String;
  password: String;
}

import { defineStore } from "pinia";

export const authStore = defineStore("authStore", {
    state: (): State => ({
        isAuthenticated: false,
        userInformation: null,
        authorizationToken: null
    }),
    getters: {
        getUser: (state) => state.userInformation,
        getPermission: (state) => state.isAuthenticated,
        getAuthToken: (state) => state.authorizationToken
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
        login(credentials: AuthCredentials) {

        }
    }
})


//the state interface
interface State {
    isAuthenticated: boolean,
    userInformation: UserInformation | null,
    authorizationToken: String | null
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
    id: String,
    email: String,
    fullname: String,
    username: String
    password: String | null
}


/**
 * auth credentials is the payload struct
 */
interface AuthCredentials {
    email: String,
    password: String
}
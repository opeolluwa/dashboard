import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";

/**
 * get th e bearer token from the authentication store
 * add the token to the request anf get the todos
 */
const authStore = useAuthStore();
const AUTH_TOKEN = authStore.getAuthToken;

export const useNoteStore = defineStore("todoStore", {
    state: (): State => ({
        noteEntries: null,
        noOfRows: 10,
        pageIndex: 1,
        isLoading: false,
        isFetchingEntries: false,
        errorFetchingNotes: false,
        errorMessage: "",
    }),
    getters: {
        //retrieve the array of tod s form store
        getAllTodo: (state) => state.noteEntries,
    },
    actions: {
        /**
         * @function fetchAllNotes
         * @param null - accepts no parameter
         * @returns {NotesModel[]} - array of TodoModel or empty array or error
         */
        async fetchAllNotes(): Promise<void> {
            //show loading state of fetch note
            this.isFetchingEntries = true;
            try {
                const { data: response } = await axios.get("/notes?page=1&noOfRows=10", {
                    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
                });
                //assign response to the state and hide the loading icon
                this.noteEntries = response.data.note;
                this.noOfRows = response.data.noOfRows;
                this.pageIndex = response.DataTransfer.CurrentPage;
                this.isFetchingEntries = false;
                console.log(JSON.stringify(response));
            } catch (error: any) {
                this.isFetchingEntries = false;
                // this.errorMessage = error.data.response.message;
                // this.Entries = null;
                //assign note to empty array if there is an error
                /* const { data: response } = error.response;
                                if (!response.success) {
                                    this.errorMessage = response.message;
                                    this.Entries = null
                                } */
            }
        },
        /**
         * @function createTodo
         * @param {string} title = the note heading
         * @param {string} description - the note body
         * @returns  {object} the new note or error
         *
         * go on to make request to the endpoint
         */
        async createNewEntry(payload: NoteInterface): Promise<void> {
            const authStore = useAuthStore();
            this.isLoading = true;
            try {
                /**
                 * get the auth credentials
                 * add the auth credentials to the payload
                 * make the request and updates the store on response
                 */
                //convert priority to joint word, (not important -> "not-important")
                const { data: response } = await axios.post(
                    "/notes",
                    { ...payload },
                    { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } }
                );
                if (response.success) {
                    //reset the state
                    this.fetchAllNotes();
                    this.isLoading = false;
                    payload.title = "";
                    payload.content = "";
                }
                // console.log(JSON.stringify(response));
            } catch (error: any) {
                this.errorFetchingNotes = true;
                this.isLoading = false;
            }
            this.isLoading = false;
        },
        /**
         * @function deleteTodo
         * @param {uuid}  - the note id
         * @returns success (id no error) and updates the store
         */
        async deleteNote(noteId: String) {
            try {
                const { data: response } = await axios.delete(`/notes/${noteId}`, {
                    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
                });
                if (response.success) {
                    this.fetchAllNotes();
                }
                console.log("the note id is ", noteId);
                console.log(JSON.stringify(response));
            } catch (error) { }
        },
    },
});

/**
 * the state type declaration
 */
interface State {
    noteEntries: Array<FetchedNotesInterface> | null; // array of note fetched from backend
    pageIndex: Number | String | null;
    noOfRows: Number | String | null;
    isLoading: boolean;
    isFetchingEntries: boolean;
    errorFetchingNotes: boolean;
    errorMessage: "";
}

export interface NoteInterface {
    title: String;
    content: String;
    category: String;
}

/**
 * the fetched note interface extends the note interface with id field
 * @param {string} - title - the note title/heading
 * @param {string} - description - the note body
 * @param {uuid} - the note id
 */
export interface FetchedNotesInterface extends NoteInterface {
    id: String;
    dateAdded: String | Date;
    lastUpdated: String,
}

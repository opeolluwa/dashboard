import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { useToast } from "vue-toastification";
import { getStoredData } from "@/main";

const appToastComponent = useToast();
/**
 * get th e bearer token from the authentication store
 * add the token to the request anf get the todos
 */
const authStore = useAuthStore();

export const useTodoStore = defineStore("todoStore", {
  state: (): State => ({
    todoArray: null,
    noOfRows: 10,
    pageIndex: 1,
    isLoading: false,
    isFetchingTodoArray: false,
    errorFetchingTodo: false,
    errorMessage: "",
  }),
  getters: {
    //retrieve the array of tod s form store
    getAllTodo: (state) => state.todoArray,
    async getAuthToken(state) {
      const AUTH_TOKEN_FOR_MOBILE = await getStoredData("authorizationToken")
      const AUTH_TOKEN = authStore.getAuthToken;
      return AUTH_TOKEN || AUTH_TOKEN_FOR_MOBILE;
    }
  },
  actions: {
    /**
     * @function fetchAllTodo
     * @param null - accepts no parameter
     * @returns {TodoModel[]} - array of TodoModel or empty array or error
     */
    async fetchAllTodo() {
      //show loading state of fetch todo
      this.isFetchingTodoArray = true;
      const AUTH_TOKEN = authStore.getAuthToken ? authStore.getAuthToken : await getStoredData("authorizationToken")

      try {
        const { data: response } = await axios.get("/todo", {
          headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
        });
        //assign response to the state and hide the loading icon
        this.todoArray = response.data.todo;
        this.noOfRows = response.data.noOfRows;
        this.pageIndex = response.DataTransfer.CurrentPage;
        this.isFetchingTodoArray = false;
        console.log(JSON.stringify(response));
      } catch (error: any) {
        this.isFetchingTodoArray = false;
  
      }
    },
    /**
     * @function createTodo
     * @param {string} title = the todo heading
     * @param {string} description - the todo body
     * @returns  {object} the new todo or error
     *
     * go on to make request to the endpoint
     */
    async createTodo(payload: TodoInterface): Promise<Boolean> {
      const AUTH_TOKEN = authStore.getAuthToken ? authStore.getAuthToken : await getStoredData("authorizationToken")
      this.isLoading = true;
      try {
        /**
         * get the auth credentials
         * add the auth credentials to the payload
         * make the request and updates the store on response
         */
        //convert priority to joint word, (not important -> "not-important")
        const jointPriority =
          payload.priority.split(" ").join("-") || payload.priority;
        const { data: response } = await axios.post(
          "/todo",
          { ...payload, priority: jointPriority },
          { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } }
        );
        if (response.success) {
          //reset the state
          this.fetchAllTodo();
          this.isLoading = false;
          payload.title = "";
          payload.description = "";
          appToastComponent.success(response.message);
          return true;
        }
        return false;
        // console.log(JSON.stringify(response));
      } catch (error: any) {
        this.errorFetchingTodo = true;
        this.isLoading = false;
        const { data: response } = error.response;
        if (!response.success) {
          appToastComponent.error(response.message);
        }
      }
      this.isLoading = false;
      return false;
    },
    /**
     * @function deleteTodo
     * @param {uuid}  - the todo id
     * @returns success (id no error) and updates the store
     */
    async deleteTodo(taskId: String) {
      try {
        const AUTH_TOKEN = authStore.getAuthToken ? authStore.getAuthToken : await getStoredData("authorizationToken")
        const { data: response } = await axios.delete(`/todo/${taskId}`, {
          headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
        });
        if (response.success) {
          this.fetchAllTodo();
          appToastComponent.success(response.message);
        }
        console.log("the todo id is ", taskId);
        console.log(JSON.stringify(response));
      } catch (error: any) {
        const { data: response } = error.response;
        if (!response.success) {
          appToastComponent.error(response.message);
        }
      }
    },
  },
});

/**
 * the state type declaration
 */
interface State {
  todoArray: Array<FetchedTodoInterface> | null; // array of todo fetched from backend
  pageIndex: Number | String | null;
  noOfRows: Number | String | null;
  isLoading: boolean;
  isFetchingTodoArray: boolean;
  errorFetchingTodo: boolean;
  errorMessage: "";
}

export interface TodoInterface {
  title: String;
  description: String;
  priority: String;
}

/**
 * the fetched todo interface extends the todo interface with id field
 * @param {string} - title - the todo title/heading
 * @param {string} - description - the todo body
 * @param {uuid} - the todo id
 */
export interface FetchedTodoInterface extends TodoInterface {
  id: String;
  dateAdded: String | Date;
}

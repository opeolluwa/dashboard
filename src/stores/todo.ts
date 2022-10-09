import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";

/**
 * get th e bearer token from the authentication store
 * add the token to the request anf get the todos
 */
const authStore = useAuthStore();
const AUTH_TOKEN = authStore.getAuthToken;

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
        // this.errorMessage = error.data.response.message;
        // this.todoArray = null;
        //assign todo to empty array if there is an error
        /* const { data: response } = error.response;
                        if (!response.success) {
                            this.errorMessage = response.message;
                            this.todoArray = null
                        } */
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
    async createTodo(payload: TodoInterface): Promise<void> {
      const authStore = useAuthStore();
      this.isLoading = true;
      try {
        /**
         * get the auth credentials
         * add the auth credentials to the payload
         * make the request and updates the store on response
         */
        const { data: response } = await axios.post(
          "/todo",
          { ...payload },
          { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } }
        );
        if (response.success) {
          //reset the state
          this.fetchAllTodo();
          this.isLoading = false;
          payload.title = "";
          payload.description = "";
        }
        console.log(JSON.stringify(response));
      } catch (error: any) {
        this.errorFetchingTodo = true;
        this.isLoading = false;
      }
      this.isLoading = false;
    },
    /**
     * @function deleteTodo
     * @param {uuid}  - the todo id
     * @returns success (id no error) and updates the store
     */
    async deleteTodo(todoId: String) {
      try {
        const { data: response } = await axios.delete(`/todo/${todoId}`, {
          headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
        });
        if (response.success) {
          this.fetchAllTodo();
        }
        console.log("the todo id is ", todoId);
        console.log(JSON.stringify(response));
      } catch (error) {}
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
}

/**
 * the fetched todo interface extends the todo interface with id field
 * @param {string} - title - the todo title/heading
 * @param {string} - description - the todo body
 * @param {uuid} - the todo id
 */
export interface FetchedTodoInterface extends TodoInterface {
  id: String;
}

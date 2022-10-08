import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";

export const useTodoStore = defineStore("todoStore", {
    state: (): State => ({
        todoArray: [],
        userId: null,
        noOfRows: 10,
        pageIndex: 1,
        isLoading: false
    }),
    getters: {
        //retrieve the array of tod s form store 
        getAllTodo: (state) => state.todoArray
    },
    actions: {
        async fetchAllTodo() {
            const authStore = useAuthStore();
            try {
                /**
                 * get th e bearer token from the authentication store 
                 * add the token to the request anf get the todos
                 */
                const AUTH_TOKEN = authStore.getAuthToken
                const { data: response } = await axios.get("/todo", {
                    headers: { Authorization: `Bearer ${AUTH_TOKEN}` },
                });

                //assign response to the state 
                this.todoArray = response.data.todo
                this.noOfRows = response.data.noOfRows
                this.pageIndex = response.DataTransfer.CurrentPage
                console.log(JSON.stringify(response))
            } catch (error) {
                //assign todo to empty array if there is an error 
                // this.todoArray = []
                // console.log(error)
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
        async createTodo(payload: TodoModel): Promise<void> {
            const authStore = useAuthStore();
            this.isLoading = true;
            try {

                /**
                 * get the auth credentials 
                 * add the auth credentials to the payload 
                 * make the request and updates the store on response 
                 */
                const AUTH_TOKEN = authStore.getAuthToken
                const { data: response } = await axios.post("/todo", { ...payload }, { headers: { Authorization: `Bearer ${AUTH_TOKEN}` } });
                if (response.success) {
                    this.fetchAllTodo()
                    //reset the state
                    this.isLoading = false;
                    payload.title = "";
                    payload.description = ""
                }
                console.log(JSON.stringify(response));
            } catch (error: any) {
                console.log(error);
            }
        },
    }
})





interface State {
    todoArray: Array<TodoModel> | [],
    userId: String | null,
    pageIndex: Number | String | null,
    noOfRows: Number | String | null,
    isLoading: boolean
}


export interface TodoModel {
    title: String,
    description: String,
    id?: String,
}
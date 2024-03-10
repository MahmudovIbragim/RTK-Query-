import { api as index } from "..";
import { CRUD } from "./type";

const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<CRUD.GetDataResponse, CRUD.GetDataRequests>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ["link"],
    }),
    postTodo: builder.mutation<CRUD.PostResponse, CRUD.PostRequests>({
      query: (newData) => ({
        url: "",
        method: "POST",
        body: newData,
      }),
      invalidatesTags: ["link"],
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["link"],
    }),
    putTodo: builder.mutation<CRUD.PutResponse, CRUD.putRequests>({
      query: ({ _id, newData }) => ({
        url: `${_id}`,
        method: "PUT",
        body: newData,
      }),
      invalidatesTags: ["link"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  usePostTodoMutation,
  useDeleteTodoMutation,
  usePutTodoMutation,
} = api;

import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

const BaseQuery = fetchBaseQuery({
  baseUrl:
    "https://api.elchocrud.pro/api/v1/85e84bd57ee8352e8453482008986e70/baseUrlQuery",
});

const BaseQueryExtended: BaseQueryFn = async (args, api, extraOptions) => {
  const result = await BaseQuery(args, api, extraOptions);
  return result
};


export const api = createApi({
  reducerPath: 'api',
  baseQuery:BaseQueryExtended,
  refetchOnReconnect:true,
  refetchOnFocus:false,
  tagTypes: ['link'],
  endpoints: () => ({}),
})
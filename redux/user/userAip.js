import { createApi } from "@reduxjs/toolkit/query/react";

import { fetchBaseQueryApiWithReauth } from "../fetchBaseQuery";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQueryApiWithReauth(),
  endpoints: (builder) => ({
    registration: builder.mutation({
      query: (data) => ({
        url: "/auth/registration",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getUserInfo: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegistrationMutation,
  useLazyGetUserInfoQuery,
} = userApi;

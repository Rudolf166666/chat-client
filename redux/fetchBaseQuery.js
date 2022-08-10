import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { loggedOut } from "./user/slice";

const fetchBaseQueryApi = () =>
  fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
      const key = localStorage.getItem("access_token");
      if (key) {
        headers.set("Authorization", `Bearer ${key}`);
      }

      return headers;
    },
  });
export const fetchBaseQueryApiWithReauth =
  () => async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQueryApi();
    const UNAUTHORIZED = 401;
    let result = await baseQuery(args, api, extraOptions);
    if (
      result.error &&
      result.error.status === UNAUTHORIZED &&
      localStorage.getItem("refresh_token")
    ) {
      const res = await baseQuery(
        {
          url: "/auth/refresh",
          method: "POST",
          body: { refreshToken: localStorage.getItem("refresh_token") },
        },
        api,
        extraOptions
      );
      if (res.data) {
        localStorage.setItem("access_token", res.data.accessToken);
        localStorage.setItem("refresh_token", res.data.refreshToken);
        result = await fetchBaseQueryApi()(args, api, extraOptions);
      } else {
        api.dispatch(loggedOut());
      }
    }
    return result;
  };

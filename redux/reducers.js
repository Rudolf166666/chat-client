import { combineReducers } from "redux";
//USER
import user from "./user/slice";
import { userApi } from "./user/userAip";

//NOTIFICATIONS
import notifications from "./notifications/slice";

const reducers = combineReducers({
  user,
  notifications,
  [userApi.reducerPath]: userApi.reducer,
});

export const apiMiddleware = [userApi.middleware];
export default reducers;

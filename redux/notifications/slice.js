import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notifications: [],
};

const NotificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addNotification: (state, action) => {
      const notifications = [...state.notifications];
      notifications.unshift(action.payload);
      return {
        ...state,
        notifications,
      };
    },
    removeNotification: (state, action) => {
      const notifications = [...state.notifications].filter(
        (el) => el.id !== action.payload
      );
      return {
        ...state,
        notifications,
      };
    },
  },
});

export const { addNotification, removeNotification } =
  NotificationsSlice.actions;

export default NotificationsSlice.reducer;

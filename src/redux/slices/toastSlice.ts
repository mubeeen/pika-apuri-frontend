import { ToastState } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ToastState = {
  error: null,
  notification: null,
};

export const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setNotification: (state, action: PayloadAction<string>) => {
      state.notification = action.payload;
    },
    clearMessages: (state) => {
      state.notification = null;
      state.error = null;
    },
  },
});

export const { setError, setNotification, clearMessages } = toastSlice.actions;

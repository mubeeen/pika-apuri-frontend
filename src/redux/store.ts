import { configureStore } from "@reduxjs/toolkit";
import { authSlice, toastSlice } from "./slices/index";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    toast: toastSlice.reducer,
  },
});

type AppDispatch = typeof store.dispatch;
type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

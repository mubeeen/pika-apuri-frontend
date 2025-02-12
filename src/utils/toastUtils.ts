import { Dispatch } from "redux";
import { setError, setNotification, clearMessages } from "../redux/slices/toastSlice";

type ToastType = "notification" | "error";

export const showToast = (dispatch: Dispatch, message: string, type: ToastType = "notification", duration: number = 5000): void => {
  if (type === "error") {
    dispatch(setError(message));
  } else {
    dispatch(setNotification(message));
  }

  setTimeout(() => {
    dispatch(clearMessages());
  }, duration);
};

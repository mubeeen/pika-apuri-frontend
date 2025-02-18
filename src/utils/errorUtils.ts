import { showToast } from "./toastUtils";
import axios from "axios";
import { Dispatch } from "redux";


export const handleAxiosError = (error: unknown, dispatch: Dispatch) => {
  if (axios.isAxiosError(error)) {
    const errorMessage = error.response?.data?.error || "An unknown error occurred";
    showToast(dispatch, errorMessage, "error", 5000);
    return error.response?.data?.message || "An unknown error occurred";
  }

  showToast(dispatch, "An unknown error occurred", "error", 5000);
  return "An unknown error occurred";
};

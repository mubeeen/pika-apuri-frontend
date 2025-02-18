import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, forgotPasswordCredentials, loginCredentials, resetPasswordCredentials, signupCredentials } from "../../types";
import { loginAPI, logoutAPI, signupAPI, forgotPasswordApi, resetPasswordApi } from "../../api/authAPI";
import { showToast } from "@/utils/toastUtils";
import { handleAxiosError } from "@/utils/errorUtils";

const initialState: AuthState = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  isAuthenticated: false,
  loading: false,
  error: "",
  accountType: null,
};

export const loginAsync = createAsyncThunk("auth/login", async (credentials: loginCredentials, { rejectWithValue, dispatch }) => {
  try {
    const response = await loginAPI(credentials);
    showToast(dispatch, "Login successful!", "notification", 5000);

    return response;
  } catch (error: unknown) {
    const errorMessage = handleAxiosError(error, dispatch);
    return rejectWithValue(errorMessage);
  }
});

export const signupAsync = createAsyncThunk("auth/signup", async (credential: signupCredentials, { rejectWithValue, dispatch }) => {
  try {
    const response = await signupAPI(credential);

    showToast(dispatch, "Signup successfull!", "notification", 5000);

    return response;
  } catch (error: unknown) {
    const errorMessage = handleAxiosError(error, dispatch);
    return rejectWithValue(errorMessage);
  }
});

export const logoutAsync = createAsyncThunk("auth/logout", async (_: void, { rejectWithValue, dispatch }) => {
  try {
    const response = await logoutAPI();
    showToast(dispatch, "Logout successfull!", "notification", 5000);

    return response;
  } catch (error: unknown) {
    const errorMessage = handleAxiosError(error, dispatch);
    return rejectWithValue(errorMessage);
  }
});

export const resetPasswordAsync = createAsyncThunk("auth/reset-password", async (credentials: resetPasswordCredentials, { rejectWithValue, dispatch }) => {
  try {
    const response = await resetPasswordApi(credentials);
    showToast(dispatch, "Password has been reset successfully", "notification", 5000);

    return response;
  } catch (error: unknown) {
    const errorMessage = handleAxiosError(error, dispatch);
    return rejectWithValue(errorMessage);
  }
});

export const forgotPasswordAsync = createAsyncThunk("auth/forgot-password", async (credential: forgotPasswordCredentials, { rejectWithValue, dispatch }) => {
  try {
    const response = await forgotPasswordApi(credential);
    showToast(dispatch, response.message, "notification", 5000);
    return response;
  } catch (error: unknown) {
    const errorMessage = handleAxiosError(error, dispatch);
    return rejectWithValue(errorMessage);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder.addCase(loginAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;

      const { user, accessToken } = action.payload;

      state.email = user.email;
      state.firstname = user.firstName;
      state.lastname = user.lastName;
      state.accountType = user.role;

      localStorage.setItem("token", accessToken);
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
      state.isAuthenticated = false;
    });
    //signup
    builder.addCase(signupAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(signupAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;

      const { user, accessToken } = action.payload;

      state.email = user.email;
      state.firstname = user.firstName;
      state.lastname = user.lastName;
      state.accountType = user.role;

      localStorage.setItem("token", accessToken);
    });
    builder.addCase(signupAsync.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload as string;
    });
    //forgotPassword
    builder.addCase(forgotPasswordAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(forgotPasswordAsync.fulfilled, (state, action) => {
      state.loading = false;
      console.log("action payload forgot password", action.payload);
    });
    builder.addCase(forgotPasswordAsync.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload as string;
    });
    //resetPassword
    builder.addCase(resetPasswordAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(resetPasswordAsync.fulfilled, (state, action) => {
      state.loading = false;
      console.log("password has been reset successfully", action.payload);
    });
    builder.addCase(resetPasswordAsync.rejected, (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;

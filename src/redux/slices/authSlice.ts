import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, forgotPasswordCredentials, loginCredentials, resetPasswordCredentials, signupCredentials } from "../../types";
import { loginAPI, logoutAPI, signupAPI, forgotPasswordApi, resetPasswordApi } from "../../api/authAPI";

const initialState: AuthState = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  isAuthenticated: false,
  loading: false,
  error: "",
};

export const loginAsync = createAsyncThunk("auth/login", async (credentials: loginCredentials, { rejectWithValue }) => {
  try {
    const response = await loginAPI(credentials);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error?.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

export const signupAsync = createAsyncThunk("auth/signup", async (credential: signupCredentials, { rejectWithValue }) => {
  try {
    return await signupAPI(credential);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error?.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

export const logoutAsync = createAsyncThunk("auth/logout", async (_: void, { rejectWithValue }) => {
  try {
    return await logoutAPI();
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error?.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

export const resetPasswordAsync = createAsyncThunk("auth/reset-password", async (credentials: resetPasswordCredentials, { rejectWithValue }) => {
  try {
    const response = await resetPasswordApi(credentials);
    return response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error?.message);
    }
    return rejectWithValue("An unknown error occurred");
  }
});

export const forgotPasswordAsync = createAsyncThunk("auth/forgot-password", async (credential: forgotPasswordCredentials, { rejectWithValue }) => {
  try {
    return await forgotPasswordApi(credential);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error?.message);
    }
    return rejectWithValue("An unknown error occurred");
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
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      localStorage.setItem("token", action.payload.accessToken);
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
      localStorage.setItem("token", action.payload.accessToken);
      state.loading = false;
      state.isAuthenticated = true;
      state = action.payload.user;
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

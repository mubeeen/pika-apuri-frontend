import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthState, loginCredentials, signupCredentials } from "../../types";
import { loginAPI, logoutAPI, signupAPI } from "../../api/authAPI";

const initialState: AuthState = {
  firstname: "",
  lastname: "",
  email: "",
  phoneNumber: "",
  password: "",
  loggedIn: false,
  loading: false,
  error: "",
};

export const loginAsync = createAsyncThunk("auth/login", async (credentials: loginCredentials, { rejectWithValue }) => {
  try {
    const response = await loginAPI(credentials);
    localStorage.setItem("token", response.accessToken);
    return response;
  } catch (error: any) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const signupAsync = createAsyncThunk("auth/signup", async (credential: signupCredentials, { rejectWithValue }) => {
  try {
    return await signupAPI(credential);
  } catch (error: any) {
    return rejectWithValue(error.response?.data || error.message);
  }
});

export const logoutAsync = createAsyncThunk("auth/logout", async (_: void, { rejectWithValue }) => {
  try {
    return await logoutAPI();
  } catch (error: any) {
    return rejectWithValue(error.response?.data || error?.message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.loggedIn = true;
      state.email = action.payload.email;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.phoneNumber = action.payload.phoneNumber;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default authSlice.reducer;

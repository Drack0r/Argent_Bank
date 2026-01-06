import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser,
  fetchUserProfile,
  updateUserProfile,
} from "../services/api";

// Async thunk for user login
export const loginUserAsync = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await loginUser(email, password);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching user profile
export const fetchUserProfileAsync = createAsyncThunk(
  "auth/fetchUserProfile",
  async (token, { rejectWithValue }) => {
    try {
      const userData = await fetchUserProfile(token);
      return userData;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk that combines login and profile fetching in a single action
export const loginAndFetchProfile = createAsyncThunk(
  "auth/loginAndFetchProfile",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // First, login the user
      const loginData = await loginUser(email, password);
      const token = loginData.token;

      // Then fetch user profile data
      const userData = await fetchUserProfile(token);

      // Return both token and user data
      return {
        token,
        user: userData,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for updating user profile
export const updateUserProfileAsync = createAsyncThunk(
  "auth/updateUserProfile",
  async ({ token, userData }, { rejectWithValue }) => {
    try {
      const updatedUser = await updateUserProfile(token, userData);
      return updatedUser;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Auth slice with initial state and reducers
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // User profile data
    token: null, // Authentication token
    isAuthenticated: false, // Authentication status
    isLoading: false, // Loading state for async operations
    error: null, // Error messages
  },
  reducers: {
    // Clear all auth data on logout
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    // Clear error messages
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle login and fetch profile action states
      .addCase(loginAndFetchProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAndFetchProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginAndFetchProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = false;
        state.user = null;
        state.token = null;
      })
      // Handle fetch user profile action states
      .addCase(fetchUserProfileAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfileAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserProfileAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // Handle update user profile action states
      .addCase(updateUserProfileAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserProfileAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        // Merge updated data with existing user data
        state.user = { ...state.user, ...action.payload };
        state.error = null;
      })
      .addCase(updateUserProfileAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;

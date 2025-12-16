import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser,
  fetchUserProfile,
  updateUserProfile,
} from "../services/api";

// Thunk async pour le login
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

// Thunk async pour récupérer le profil utilisateur
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

// Thunk combiné : login + récupération du profil
export const loginAndFetchProfile = createAsyncThunk(
  "auth/loginAndFetchProfile",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const loginData = await loginUser(email, password);
      const token = loginData.token;

      const userData = await fetchUserProfile(token);

      return {
        token,
        user: userData,
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Thunk pour mettre à jour le profil utilisateur
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

// Slice d'authentification
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Login et récupération du profil
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
      // Récupération du profil seul
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
      // Mise à jour du profil
      .addCase(updateUserProfileAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUserProfileAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { ...state.user, ...action.payload };
        state.error = null;
      })
      .addCase(updateUserProfileAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;

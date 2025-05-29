import { registerUserApi } from "@/store/api/authApi";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface User {
  _id?: string;
  email?: string;
  role?: string;
  status?: string;
}

interface AuthState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

// export const registerUser = createAsyncThunk(
//   "auth/registerUser",
//   async (
//     userData: { email: string; password: string },
//     { rejectWithValue }
//   ) => {
//     try {
//       const user = await registerUserApi(userData);
//       return user;
//     } catch (error: any) {
//       return rejectWithValue(
//         error.response?.data?.message || "Registration failed"
//       );
//     }
//   }

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(registerUser.pending, (state) => {
  //       state.loading = true;
  //       state.error = null;
  //     })
  //     .addCase(registerUser.fulfilled, (state, action) => {
  //       state.loading = false;
  //       state.user = action.payload;
  //     })
  //     .addCase(registerUser.rejected, (state, action) => {
  //       state.loading = false;
  //       state.error = action.payload as string;
  //     });
  // },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

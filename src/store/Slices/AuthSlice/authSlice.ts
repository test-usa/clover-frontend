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

});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;

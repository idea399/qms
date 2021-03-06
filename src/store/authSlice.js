import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import storage from "../services/storage";

export const login = createAsyncThunk(
  "/auth/login",
  async (data: object) => {
    return await axios.post("/auth/login", data).then((res) => res.data);
  }
);

export const refresh = createAsyncThunk(
  "/auth/refresh",
  async () => {
    const token = storage.getToken();
    if(token) {
      return await axios
        .post("/auth/refresh")
        .then((res) => res.data);
    }
    return null;
  }
);

const initialState = {
  user: null
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      storage.removeToken();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      if (action.payload.user) {
        storage.setToken('Bearer' + action.payload.access_token);
      }
    });

    builder.addCase(refresh.fulfilled, (state, action) => {
      if(!action.payload) return;
      state.user = action.payload.user;
      storage.setToken('Bearer' + action.payload.access_token);
    });
  },
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions

export default authSlice.reducer;

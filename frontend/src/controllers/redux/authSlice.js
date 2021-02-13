import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk("auth/loginStatus", async (formInput) => {
  try {
    const { data } = await axios.post("/api/users/login", formInput);
    return data;
  } catch (err) {
    console.error(err);
  }
});

const slice = createSlice({
  name: "auth",
  initialState: {
    admin: false,
    LoggedIn: false,
  },
  reducers: {
    signOut: (state) => {
      state.LoggedIn = false;
      state.admin = false;
    },
    createUser: (state, action) => {},
  },
  extraReducers: {
    [signIn.fulfilled]: (state, action) => {
      const { name, password } = action.payload;
      state.LoggedIn = true;
      state.admin = true;
    },
  },
});

export default slice.reducer;
export const { signOut, createUser } = slice.actions;


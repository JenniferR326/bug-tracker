import {
  createSlice,
  createAsyncThunk,
  createNextState,
} from "@reduxjs/toolkit";
// import { retrieveBugs } from "../bugController";
import axios from "axios";

//thunk
export const createBug = createAsyncThunk("createBug", async (formInput) => {
  try {
    const { data } = await axios.post("/api/bugs/createbug", formInput);
    return data;
  } catch (err) {
    console.error(err);
  }
});
export const retrieveBugs = createAsyncThunk("retrieveBug", async () => {
  try {
    const { data } = await axios.get("/api/bugs");
    return data;
  } catch (err) {
    console.error(err);
  }
});

export const deleteBug = createAsyncThunk("deleteBug", async (id) => {
  try {
    await axios.delete(`/api/bugs/${id}`);
    return id;
  } catch (err) {
    console.error(err);
  }
});
export const markComplete = createAsyncThunk("markComplete", async (id) => {
  try {
    await axios.put(`/api/bugs/${id}`, {complete: true})
    return id
  } catch (err) {
    console.error(err)
  }
})

const slice = createSlice({
  name: "bug",
  initialState: [],
  reducers: {
    // getBugs: state => retrieveBugs(),
    // createBugs: (state, actions) => {},
    updateBug: (state, actions) => {},
  },
  extraReducers: {
    [createBug.fulfilled]: (state, action) => {
      const newBug = action.payload;
      if (newBug) state.push(newBug);
    },
    [retrieveBugs.fulfilled]: (state, action) => {
      while (state.length) {
        state.pop();
      }
      state.push(...action.payload);
    },
    [deleteBug.fulfilled]: (state, action) => {
      state.splice(
        state.findIndex((bug) => bug.id === action.payload),
        1
      );
    },
    [markComplete.fulfilled]: (state, action) => {
      const bugId = action.payload
      const bugToComplete = state.find(bug=>bug.id === bugId)
      bugToComplete.complete = true;
    }
  },
});

export default slice.reducer;

export const { updateBug } = slice.actions;

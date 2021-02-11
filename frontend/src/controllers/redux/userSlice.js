import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: "user",
  initialState: [{}],
  reducers: {
    getUser:(state) => {
      state.push({name: "Keisha Rosenblatt"})
      state.push({name: "Joe Mills"})
    }
  }
})

export default slice.reducer

export const { getuser } = slice.actions 
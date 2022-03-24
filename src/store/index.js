import { createSlice, configureStore } from "@reduxjs/toolkit";

const UserCardSlice = createSlice({
  name: "userCard",
  initialState: {
    user: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
    },
  },
});

export const cardActions = UserCardSlice.actions;
const store = configureStore({ reducer: { card: UserCardSlice.reducer } });
export default store;

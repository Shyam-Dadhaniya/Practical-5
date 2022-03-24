import { configureStore } from "@reduxjs/toolkit";
import userCardSlice from "./userCardSlice";

const store = configureStore({ reducer: { card: userCardSlice } });
export default store;

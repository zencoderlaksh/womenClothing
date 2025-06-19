import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import productSliceReducer from '../features/auth/productSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    selectedItem:productSliceReducer,
  },
});

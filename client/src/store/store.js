import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice/index";
import AdminProductsSlice from "./admin/products-slice.js";

const store = configureStore({
  reducer: {
    auth: authReducer,
    admin: AdminProductsSlice,
  },
});

export default store;

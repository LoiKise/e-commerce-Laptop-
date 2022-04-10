import { configureStore } from "@reduxjs/toolkit";
import quantityCartSlice from "./quantityCartSlice";
import userReducer from "./userSlice";

const Store = configureStore({
    reducer: {
        user: userReducer,
        quantityCart: quantityCartSlice
    },
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ serializableCheck: false }),
    ],
});

export default Store;

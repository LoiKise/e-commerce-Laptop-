import { configureStore } from "@reduxjs/toolkit";
//import userReducer from "./slices/userSlice";

const Store = configureStore({
    reducer: {
        ///  user: userReducer,
    },
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ serializableCheck: false }),
    ],
});

export default Store;

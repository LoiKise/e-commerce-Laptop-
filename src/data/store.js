import { configureStore } from "@reduxjs/toolkit";
// import homeReducer from "./endUser/Home/HomeSlice";
const Store = configureStore({
    reducer: {
        // home: homeReducer
    },
    devTools: process.env.NODE_ENV === "development",
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware({ serializableCheck: false }),
    ],
});

export default Store;

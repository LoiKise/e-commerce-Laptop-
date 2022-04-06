import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import requestAPI from "../apis";

const initialState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
};

// export const register = createAsyncThunk(
//     "user/register",
//     async (data, thunkAPI) => {
//         try {
//             const res = await requestAPI("/register", "POST", data);
//             return res.data;
//         } catch (err) {
//             return thunkAPI.rejectWithValue(err);
//         }
//     }
// );

const handleLogin = (state, action) => {
    const { token } = action.payload.content;
    const { user } = action.payload.content;
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", token);
};

const handleLogout = (state, action) => {
    state.user = {};
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: handleLogout,
        login: handleLogin,
    }
});

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;

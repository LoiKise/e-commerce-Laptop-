import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
import requestAPI from "../apis";

const initialState = {

    user: JSON.parse(localStorage.getItem("user")) || {},
};


export const login = createAsyncThunk("user/signup", async (data, thunkAPI) => {
    try {
        const res = await requestAPI("/user/signin", "POST", data);
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});


export const profile = createAsyncThunk("user/profile", async () => {
    const res = await requestAPI("/user/profile", "GET", null);
    return res.data;
});


const handleLogin = (state, action) => {
    const { token } = action.payload.content;
    // const user = action.payload.content.user;
    // state.profile = user;
    // localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", token);
};


const handleProfile = (state, action) => {
    const user = action.payload.content;
    state.user = user;

    localStorage.setItem("user", JSON.stringify(user))
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
    },
    extraReducers: {
        [login.fulfilled]: handleLogin,
        [profile.fulfilled]: handleProfile
    }
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

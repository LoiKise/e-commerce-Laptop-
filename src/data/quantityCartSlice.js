import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestAPI from "../apis";

const initialState = {
    quantityCart: []
};


export const quantity = createAsyncThunk("user/profile", async (data, thunkAPI) => {
    try {
        const res = await requestAPI("/user/profile", "GET");
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});

const handleQuantityCart = (state, action) => {
    state.quantityCart = action.payload.content.cart
}

export const quantityCartSlice = createSlice({
    name: "quantityCart",
    initialState,
    extraReducers: {
        [quantity.fulfilled]: handleQuantityCart,
    }
});

export default quantityCartSlice.reducer;
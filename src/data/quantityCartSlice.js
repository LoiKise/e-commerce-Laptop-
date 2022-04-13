import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestAPI from "../apis";

const initialState = {
    quantityCart: [],
    productCart: []
};


export const quantity = createAsyncThunk("user/profile", async (data, thunkAPI) => {
    try {
        const res = await requestAPI("/user/profile", "GET");
        return res.data;
    } catch (err) {
        return thunkAPI.rejectWithValue(err);
    }
});


export const quantityCartSlice = createSlice({
    name: "quantityCart",
    initialState,
    extraReducers: {
        [quantity.fulfilled]: (state, action) => {
            state.productCart = action.payload.content.cart
            state.quantityCart = action.payload.content.cart
        },
    }
});

export default quantityCartSlice.reducer;
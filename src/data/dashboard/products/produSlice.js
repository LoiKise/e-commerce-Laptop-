const { createSlice } = require("@reduxjs/toolkit");

const products = createSlice({
    name: "products",
    initialState: {
        updateProduct: {},
        isUpdate: false,
        showMore: "",
    },
    reducers: {
        CheckUpdate: (state, action) => {
            //state.isUpdate = !state.isUpdate;
        },
        getProductUpdate: (state, action) => {
            state.updateProduct = action.payload;
        },
        // CheckShowMore: (state, action) => {
        //     state.showMore = action.payload;
        // },
    },
});

const productsReducer = products.reducer;

export const { getProductUpdate } = products.actions;

export default productsReducer;

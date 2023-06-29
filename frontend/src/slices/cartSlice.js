import { createSlice } from '@reduxjs/toolkit';

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : { cartItens: [] };

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {}
});

export default cartSlice.reducer;
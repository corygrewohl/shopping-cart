import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type { RootState } from './store'

interface CartState {
    cart: any;
}

const initialState: CartState = {
    cart: {}
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart[action.payload.id] = action.payload.quantity;
        }
    }
})

export const { addToCart } = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer;
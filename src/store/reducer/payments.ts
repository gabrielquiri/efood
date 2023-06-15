import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum CheckoutEnum {
    ADDRESS = 1,
    PAYMENT,
    FINISH
} 

interface paymentSlice {
    checkout: CheckoutEnum.ADDRESS | CheckoutEnum.PAYMENT | CheckoutEnum.FINISH | 0
}

const initialState: paymentSlice = {
    checkout: 0
}

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        changeCheckout: (state, action: PayloadAction<CheckoutEnum | 0>) => {
            state.checkout = action.payload 
        }
    }
}) 

export const { changeCheckout } = paymentSlice.actions

export default paymentSlice.reducer
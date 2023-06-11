import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface modalSlice {
  item: boolean
}

const initialState: modalSlice = {
  item: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openClose: (state, action: PayloadAction<boolean>) => {
      state.item = action.payload 
    }
  }
}) 

export const { openClose } = modalSlice.actions

export default modalSlice.reducer
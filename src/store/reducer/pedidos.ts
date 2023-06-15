import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Plate from "../../models/Plates";

interface PurchaseSlice {
  items: Plate[],
  switch: boolean
}

const initialState: PurchaseSlice = {
  items: [],
  switch: false,
}

const purchaseSlice = createSlice({
  name: 'pedido',
  initialState,
  reducers: {
    adder: (state, action: PayloadAction<Plate>) => {
      if(state.items.some(item => item.id === action.payload.id)){
        alert("Prato já inserido no Carrinho !")
      }else {
        state.items.push(action.payload)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      const card = state.items.filter(item => item.id !== action.payload)
      state.items = card
    },
    interrupter: (state, action: PayloadAction<boolean>) =>{
      state.switch = action.payload;
    },
    clean: (state) =>{
      state.items = [];
    }
  }
}) 

export const { adder, remover, interrupter, clean } = purchaseSlice.actions

export default purchaseSlice.reducer
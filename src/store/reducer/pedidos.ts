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
      state.items.push(action.payload)
    },
    remover: (state, action: PayloadAction<number>) => {
      const platePayload = state.items.find(item => item.id === action.payload)
      if(platePayload){
        const indexPlatePayload = state.items.indexOf(platePayload)
        state.items.splice(indexPlatePayload, 1)
      }
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
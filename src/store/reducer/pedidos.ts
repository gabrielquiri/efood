import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Plate from "../../models/Plates";

interface PedidoSlice {
  items: Plate[],
  switch: boolean
}

const initialState: PedidoSlice = {
  items: [],
  switch: false,
}

const pedidoSlice = createSlice({
  name: 'pedido',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Plate>) => {
      if(state.items.some(item => item.id === action.payload.id)){
        alert("Prato já inserido no Carrinho !")
      }else {
        state.items.push(action.payload)
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      const carrinho = state.items.filter(item => item.id === action.payload)
      state.items = carrinho
    },
    interruptor: (state, action: PayloadAction<boolean>) =>{
      state.switch = action.payload;
    }
  }
}) 

export const { adicionar, remover, interruptor } = pedidoSlice.actions

export default pedidoSlice.reducer
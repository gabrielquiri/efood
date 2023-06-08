import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import Restaurants from "../../models/Restaurants";

interface PedidoSlice {
  items: Restaurants[]
}

const initialState: PedidoSlice = {
  items: []
}

const pedidoSlice = createSlice({
  name: 'pedido',
  initialState,
  reducers: {
    fazerPedido: (state, action: PayloadAction<Restaurants>) => {
      state.items.push(action.payload)
    }
  }
}) 

export const { fazerPedido } = pedidoSlice.actions

export default pedidoSlice.reducer
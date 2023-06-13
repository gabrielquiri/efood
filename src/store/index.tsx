import { configureStore } from "@reduxjs/toolkit"

import PedidoReducer from "./reducer/pedidos"
import ModalReducer from './reducer/modal'
import paymentReducer from './reducer/payments'

import api from '../service/fakeApi'

export const store = configureStore({
  reducer: {
    pedido: PedidoReducer,
    modal: ModalReducer,
    payment: paymentReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
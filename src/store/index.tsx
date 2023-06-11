import { configureStore } from "@reduxjs/toolkit"

import PedidoReducer from "./reducer/pedidos"
import ModalReducer from './reducer/modal'

import api from '../service/fakeApi'

export const store = configureStore({
  reducer: {
    pedido: PedidoReducer,
    modal: ModalReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
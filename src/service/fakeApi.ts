import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import Restaurants from '../models/Restaurants'

type Product = {
  id: number,
  price: number
}

type CheckoutPayload = {
  products: Product[],
  delivery: {
    receiver: string,
    address: {
      description: string,
			city: string,
			zipCode: string,
			number: number,
			complement?: string
    }
  },
  payment: {
    card: {
      name: string,
      number: string,
      code: number,
      expires: {
        month: number,
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fake-api-tau.vercel.app/api/efood' }),
  endpoints: builder => ({
    getRestaurants: builder.query<Restaurants[], void>({
      query: () => '/restaurantes'
    }),
    getARestaurant: builder.query<Restaurants, string>({
      query: (id) => `/restaurantes/${id}`
    }),
    makeCheckout: builder.mutation<any, CheckoutPayload>({
      query: initialState => ({
        url: '/checkout',
        method: 'POST',
        body: initialState
      })
    })
  })
})

export const { 
  useGetRestaurantsQuery, 
  useGetARestaurantQuery,
  useMakeCheckoutMutation
} = api

export default api
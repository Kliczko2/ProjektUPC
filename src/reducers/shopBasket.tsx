import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { products } from '../constants/products'

interface CounterState {
  cart: Array<any>
}

const initialState = {
  cart: [],
} as CounterState

export const counterSlice = createSlice({
  name: 'counter',

  initialState: initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<any>) => {
      const itemInCart = products.find((item) => item.id === action.payload)
      state.cart.push(itemInCart)
    },
    removeItem: (state, action: PayloadAction<any>) => {
      const removeItem = state.cart.filter(
        (item) => item.title !== action.payload
      )
      state.cart = removeItem
    },
  },
})

export const { incrementByAmount, removeItem } = counterSlice.actions

export default counterSlice.reducer

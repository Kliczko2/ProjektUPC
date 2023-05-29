import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { products } from '../constants/products'

// Define a type for the slice state
interface CounterState {
  cart: Array<any>
}

const initialState = {
  cart: [],
} as CounterState
// Define the initial state using that type

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<any>) => {
      const itemInCart = products.find((item) => item.id === action.payload)
      state.cart.push(itemInCart)
    },
    removeItem: (state, action: PayloadAction<any>) => {
      const removeItem = state.cart.find((item) => item.id === action.payload)
      state.cart.splice(removeItem, 1)
    },
  },
})

export const { incrementByAmount, removeItem } = counterSlice.actions

export default counterSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
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
      console.log(action.payload)
      const itemInCart = products.find((item) => item.id === action.payload)
      state.cart.push(itemInCart)
    },
  },
})

export const { incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.shopBasket.cart

export default counterSlice.reducer

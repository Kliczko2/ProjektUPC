import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { products } from '../constants/products'

interface CounterState {
  cart: Array<any>
}

interface IShopBasketActionProps {
  title: string
  value: number
}

const initialState = {
  cart: [],
} as CounterState

export const counterSlice = createSlice({
  name: 'counter',

  initialState: initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      const itemInCart = products.find((item) => item.id === action.payload)
      state.cart.push(itemInCart)
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const removeItem = state.cart.filter(
        (item) => item.title !== action.payload
      )
      state.cart = removeItem
    },
    incrementByInput: (
      state,
      action: PayloadAction<IShopBasketActionProps>
    ) => {
      const filter = state.cart.filter(
        (item) => item.title === action.payload.title
      )
      const filterLength = filter.length
      const difference = action.payload.value - filterLength
      if (difference > 0) {
        const itemInCart = products.find(
          (item) => item.title === action.payload.title
        )
        for (let i = 0; i < difference; i++) {
          state.cart.push(itemInCart)
        }
      } else {
        const removeItem = state.cart.find(
          (item) => item.title === action.payload.title
        )
        for (let i = 0; i < Math.abs(difference); i++) {
          state.cart.splice(removeItem, 1)
        }
      }
      console.log(current(state.cart))
    },
  },
})

export const { incrementByAmount, removeItem, incrementByInput } =
  counterSlice.actions

export default counterSlice.reducer

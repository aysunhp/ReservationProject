import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface hotelState {
  value: number
}

const initialState: hotelState = {
  value: 0,
}

export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementByAmount } = hotelSlice.actions

export default hotelSlice.reducer
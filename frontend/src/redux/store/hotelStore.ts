import { configureStore } from '@reduxjs/toolkit'
import hotelReducer from "./../slice/hotelSlice"
import userReducer from "./../slice/userSlice"
import roomReducer from "./../slice/roomSlice"
import reviewReducer from "./../slice/reviewSlice"




export const store = configureStore({
  reducer: {
    hotel:hotelReducer,
    user:userReducer,
    room:roomReducer,
    review:reviewReducer,
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios"

export interface Review{
  submitterName:string,
  submitterEmail:string,
  submitterImg:string,
  submittitle:string,
  submitcontent:string,
  submittime:string,
  cleanlinesRate:number,
  communicationRate:number,
  checkinRate:number,
  accuracyRate:number,
  locationRate:number,
  valueRate:number,
  likeCount:number
}

export interface Hotel{
  _id:String,
  name:String,
  facilities:String[],
  hotelImages:String[],
  hotelImg:String,
  locationcity:String,
  partnerName:String,
  price:String,
  rate:String,
  review:Review[]
}


export interface hotelState {
  hotels: Hotel[],
  status: "loading" | "succeeded" | "failed",
  error: string | null | undefined;
}

const initialState: hotelState = {
  hotels: [],
  status: "loading",
  error :null
}



export const fetchHotelData = createAsyncThunk<Hotel[]>("hotel/fetchHotelData", async () => {
    const response = await axios.get(`http://localhost:8000/hotels`);
    return response.data;
  });

export const postHotelData = createAsyncThunk<Hotel>("hotel/postHotelData", async (obj) => {
    const response = await axios.post(`http://localhost:8000/hotels`, obj);
    return response.data;
});


export const hotelSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.hotels += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHotelData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHotelData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotels = action.payload;
      })
      .addCase(fetchHotelData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      builder
      .addCase(postHotelData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postHotelData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.hotels = [...state.hotels, action.payload];
      })
      .addCase(postHotelData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
})

// Action creators are generated for each case reducer function
export const {  } = hotelSlice.actions

export default hotelSlice.reducer
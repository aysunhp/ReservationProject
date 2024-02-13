import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios"

export interface ReviewDetail{
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

export interface Review{
  _id:string,
  id:string,
  submitterName:string,
  submitterEmail:string,
  review:[]
}


export interface reviewState {
  reviews: Review[],
  status: "loading" | "succeeded" | "failed",
  error: string | null | undefined;
}

const initialState: reviewState = {
    reviews: [],
  status: "loading",
  error :null
}



export const fetchReviewData = createAsyncThunk<Review[]>("review/fetchReviewData", async () => {
    const response = await axios.get(`http://localhost:8000/reviews`);
    return response.data;
  });

export const postReviewData = createAsyncThunk<Review>("review/postReviewData", async (obj) => {
    const response = await axios.post(`http://localhost:8000/reviews`, obj);
    return response.data;
});


export const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.reviews += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchReviewData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews = action.payload;
      })
      .addCase(fetchReviewData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      builder
      .addCase(postReviewData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postReviewData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.reviews = [...state.reviews, action.payload];
      })
      .addCase(postReviewData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
})

// Action creators are generated for each case reducer function
export const {  } = reviewSlice.actions

export default reviewSlice.reducer
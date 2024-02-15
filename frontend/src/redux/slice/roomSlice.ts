import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios"

export interface RoomDetail{
    roomName:string,
    square:string,
    bedCount:string,
    adultCount:string,
    childrenCount:string,
    nightPrice:number,
    roomImg:string,
    roomImages:string,
    roomId:string,

}

export interface Room{
  _id:string,
  id:string,
  hotelName:string,
  cityName:string,
  room: RoomDetail[]
}


export interface roomState {
    rooms: Room[],
  status: "loading" | "succeeded" | "failed",
  error: string | null | undefined;
}

const initialState: roomState = {
    rooms: [],
  status: "loading",
  error :null
}



export const fetchRoomData = createAsyncThunk<Room[]>("room/fetchRoomData", async () => {
    const response = await axios.get(`http://localhost:8000/rooms`);
    return response.data;
  });

export const postRoomData = createAsyncThunk<Room>("room/postRoomData", async (obj) => {
    const response = await axios.post(`http://localhost:8000/rooms`, obj);
    return response.data;
});


export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.rooms += action.payload
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRoomData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rooms = action.payload;
      })
      .addCase(fetchRoomData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      builder
      .addCase(postRoomData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postRoomData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rooms = [...state.rooms, action.payload];
      })
      .addCase(postRoomData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
})

// Action creators are generated for each case reducer function
export const {  } = roomSlice.actions

export default roomSlice.reducer
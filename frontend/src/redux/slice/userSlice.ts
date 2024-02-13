import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios"


  export interface Location{
    homeAirport:string,
    state: string,
    address:string,
    zipCode :string,
    city:string,
    country:string
  }

export interface User{
    email: string,
    fullName:string,
    isPartner:boolean,
    location: Location,
    password: string,
    paypayEmail: string,
    phone: string,
    userInfo: string,
    userName: string,
    userImage: string,
    wishlist:string[],
}

export interface userState {
  users: User[],
  wishlist:string[],
  status: "loading" | "succeeded" | "failed",
  error: string | null | undefined;
  isLogin: boolean,
}

const initialState: userState = {
  users: [],
  wishlist:[],
  status: "loading",
  error :null,
  isLogin:false,
}



export const fetchData = createAsyncThunk<User[]>("user/fetchData", async () => {
    const response = await axios.get(`http://localhost:8000/users`);
    return response.data;
  });

export const postData = createAsyncThunk<User>("user/postData", async (obj) => {
    const response = await axios.post(`http://localhost:8000/users`, obj);
    return response.data;
});
export const updateWishlist= createAsyncThunk<{id:string,item:string}>("user/updateWishlist", async (obj) => {
  const response = await axios.patch(`http://localhost:8000/users/`+obj.id, {
    wishlist:obj.item
  });
  return response.data;
});


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload;
    },
    addWishlist: (state, action: PayloadAction<string>) => {
      let found = state.wishlist.find((item) => item === action.payload);
      if (found) {
        state.wishlist = current(state.wishlist).filter(
          (item) => item !== action.payload
        );
      } else {
        state.wishlist = [...current(state.wishlist), action.payload];
      }

      console.log(state.wishlist);
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      builder
      .addCase(postData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = [...state.users, action.payload];
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
      builder
      .addCase(updateWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";``
        state.wishlist = [...state.wishlist, action.payload.item];
      })
      .addCase(updateWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
})

// Action creators are generated for each case reducer function
export const { addWishlist, login } = userSlice.actions

export default userSlice.reducer
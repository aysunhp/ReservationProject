import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
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
  isLogin:true,
}



export const fetchData = createAsyncThunk<User[]>("user/fetchData", async () => {
    const response = await axios.get(`http://localhost:8000/users`);
    return response.data;
  });

  export const fetchUserById = createAsyncThunk<string>("user/fetchUserById", async (id) => {
    const response = await axios.get(`http://localhost:8000/users/`+id);
    return response.data;
  });
export const postData = createAsyncThunk<User>("user/postData", async (obj) => {
    const response = await axios.post(`http://localhost:8000/users`, obj);
    return response.data;
});
export const updateWishlist = createAsyncThunk(
  "user/updateWishlist",
  async (obj: { id: string; item: string }) => {
    try {
      const response = await axios.get(`http://localhost:8000/users/${obj.id}`);
      const currentUserData = response.data;
      const found = currentUserData.wishlist.find((item:string)=>item===obj.item);

      if(found){
        const updatedWishlist =  currentUserData.wishlist.filter((item:string)=>item!==obj.item);
        await axios.patch(`http://localhost:8000/users/${obj.id}`, {
          wishlist: updatedWishlist,
        });

        return updatedWishlist;
      }else{
        const updatedWishlist = [...currentUserData.wishlist, obj.item];
        await axios.patch(`http://localhost:8000/users/${obj.id}`, {
          wishlist: updatedWishlist,
        });

        return updatedWishlist;
      }
    } catch (error) {
      throw error;
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLogin = action.payload;
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
      .addCase(fetchUserById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("action", action.payload)
        state.wishlist = action.payload.wishlist;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
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
        console.log("loading")
      })
      .addCase(updateWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("updated action", action.payload)
        state.wishlist = action.payload;
        console.log("succedd")
      })
      .addCase(updateWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log("failed")

      });
  },
})

export const {  login } = userSlice.actions

export default userSlice.reducer
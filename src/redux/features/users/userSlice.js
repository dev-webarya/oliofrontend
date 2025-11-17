import { createSlice } from "@reduxjs/toolkit";
import { getMyBooking, loginUser } from "./userThunk";
import { setToken } from "../../../utils/auth";
import Booking from "../../../components/booking";


const initialState = {
  list: [],
  loading: false,
  error: null,
  user: null,
  myBookingTable:[]
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

        builder
      .addCase(getMyBooking.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMyBooking.fulfilled, (state, action) => {
        state.loading = false;
        state.myBookingTable = action.payload;
      })
      .addCase(getMyBooking.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });  
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

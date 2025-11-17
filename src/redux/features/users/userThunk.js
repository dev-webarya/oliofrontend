import { createAsyncThunk } from "@reduxjs/toolkit";
import apiEnpoint from "../../../constants/apiEndpoint";
import api from "../../../services/api";




export const loginUser = createAsyncThunk(
  "user/loginUser yttt",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.login, credentials);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);


export const RegisterUser = createAsyncThunk(
  "user/RegisterUser uuyy",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.register, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);

export const bookingDriver = createAsyncThunk(
  "user/RegisterUser ttiu",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.driverBookings, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const bookingCab = createAsyncThunk(
  "user/RegisterUser yhyuu",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.carBookings, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const getMyBooking = createAsyncThunk(
  "user/RegisterUser tyyt",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.myBookings, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const approveCar = createAsyncThunk(
  "user/RegisterUser trdf",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.put(apiEnpoint.carBookings + "/" + userData?.id + "/" + userData?.action);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);

export const approveDriver = createAsyncThunk(
  "user/RegisterUser hhhjj",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.put(apiEnpoint.driverBookings + "/" + userData?.id + "/" + userData?.action);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const getAdminDrivers = createAsyncThunk(
  "user/AdminDrivers yyy",
  async (type, { rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.adminDrivers);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);

export const getAdminCars = createAsyncThunk(
  "user/adminVehcales uyhj",
  async (type, { rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.adminVehicles);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const postAdminCars = createAsyncThunk("user/adminVehcales yyy", async (data, { rejectWithValue }) => {
  try {
    const res = await api.post(apiEnpoint.adminVehicles, data);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || "Registration failed");
  }
}
);

export const postAdminDrivers = createAsyncThunk(
  "user/AdminDrivers uyt",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.adminDrivers, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const deleteAdminDrivers = createAsyncThunk(
  "user/AdminDrivers kjh",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.delete(apiEnpoint.adminDrivers + "/" + data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);


export const deleteAdminCars = createAsyncThunk("user/adminVehcales", async (data, { rejectWithValue }) => {
  try {
    const res = await api.delete(apiEnpoint.adminVehicles + "/" + data);
    return res.data;
  } catch (err) {
    return rejectWithValue(err.response?.data || "Registration failed");
  }
}
);


export const getPendingCars = createAsyncThunk(
  "user/ admin cars tfs",
  async (type, { rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.pendingCarBooking);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
)


export const getPendingDriver = createAsyncThunk(
  "user/admin driver hhh",
  async (type, { rejectWithValue }) => {
    try {
      const res = await api.get(apiEnpoint.pendingDriverBookings);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
)


export const getOptionsVichles = async () => {
  try {
    const response = await api.get(apiEnpoint.Vehicles);
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};


export const postverifyingOtp = createAsyncThunk(
  "user/AdminDrivers verifyinh otp",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.verifyingOtp, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);



export const priceCalculating = createAsyncThunk(
  "user/AdminDrivers verifyinh otp",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.priceCalcualting, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);

export const sendforgototp = createAsyncThunk(
  "forgot verifyinh otp",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.requestOtp, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);
// /api/v1/auth/reset-password

export const resetPassword = createAsyncThunk(
  "forgot reset password",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post(apiEnpoint.resetPassword, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Reset password failed");
    }
  }
);

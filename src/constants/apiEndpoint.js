const apiEndpoint = {
  login: "/api/v1/auth/login",
  refreshToken: "/api/v1/auth/refresh",
  register: "/api/v1/auth/register",

  users: "/api/v1/users",

  myBookings: "/api/v1/bookings/history/my-bookings",

  carBookings: "/api/v1/bookings/cars",
  driverBookings: "/api/v1/bookings/drivers",

  adminCarBookings: "/api/v1/admin/bookings/cars",
  // adminCarBookingApprove:  `/api/v1/admin/bookings/cars/${id}/approve`,
  // adminCarBookingCancel: (id) => `/api/v1/admin/bookings/cars/${id}/cancel`,


  adminDriverBookings: "/api/v1/admin/bookings/drivers",
  // adminDriverBookingApprove: (id) => `/api/v1/admin/bookings/drivers/${id}/approve`,
  // adminDriverBookingCancel: (id) => `/api/v1/admin/bookings/drivers/${id}/cancel`,


  adminDrivers: "/api/v1/admin/drivers",
  Vehicles: "/api/v1/admin/vehicles",
  adminVehicles: "/api/v1/admin/vehicles",
  pendingDriverBookings: "/api/v1/admin/bookings/drivers/status/pending",
  pendingCarBooking: "/api/v1/admin/bookings/cars/status/pending",
  verifyingOtp:"/api/v1/auth/verify-otp",
  priceCalcualting : "/api/v1/pricing/calculate"
};

export default apiEndpoint;

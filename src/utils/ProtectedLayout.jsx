import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const token = localStorage.getItem("token") ? JSON.parse(localStorage?.getItem("token")) : null;

  if (!token?.accessToken) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedLayout;

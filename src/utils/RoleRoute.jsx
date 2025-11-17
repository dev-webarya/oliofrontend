import { Navigate } from "react-router-dom";

const RoleRoute = ({ element: Component, allowedRoles }) => {
  const role = localStorage.getItem("role");

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/home" replace />;
  }

  return <Component />;
};

export default RoleRoute;

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

const GuestRoutes = () => {
  const { user } = useContext(UserContext);

  // Check if User email is NOT true/exist then show the proper routes otherwise redirect to Dashboard page
  return !user.email ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default GuestRoutes;

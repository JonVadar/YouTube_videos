import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

const AuthRoutes = () => {
  const { user } = useContext(UserContext);

  // Check if User email is true/exist then show the proper routes otherwise redirect to Login page
  return user.email ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthRoutes;

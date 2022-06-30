import React from "react";
import { Outlet } from "react-router-dom";
import SignIn from "./Component/User/SignIn";
const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};
const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <SignIn />;
};

export default ProtectedRoute;

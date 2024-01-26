import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
// import PrivateRoute from "@/components/private-route";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "../pages/reset-password";
import VerifyCode from "../pages/verify-code";
import Home from "../pages/home";

export function MainRoutes() {
  const elements = useRoutes([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/reset-password",
      element: <ResetPassword />,
    },
    {
      path: "/verify-code",
      element: <VerifyCode />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ]);

  return elements;
}

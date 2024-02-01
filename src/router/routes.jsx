import React, { lazy } from "react";
import { useRoutes } from "react-router-dom";
// import PrivateRoute from "@/components/private-route";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import ForgotPassword from "../pages/forgot-password";
import ResetPassword from "../pages/reset-password";
import VerifyCode from "../pages/verify-code";
import Home from "../pages/home";
import Order from "../pages/order";
import OrderDetail from "../pages/orderDetail";
import ModifySubscription from "../pages/modifySubscription";
import About from "../pages/about";
import OrderNow from "../pages/orderNow";
import OrderPlaced from "../pages/orderPlaced";
import OrderSubscription from "../pages/orderSubscription";
import Orders from "../pages/orders";
import PrivacyPolicy from "../pages/privacy";

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
    {
      path: "/order",
      element: <Order />,
    },
    {
      path: "/orderDetail",
      element: <OrderDetail />,
    },
    {
      path: "/modifySubscription",
      element: <ModifySubscription />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/orderNow",
      element: <OrderNow />,
    },
    {
      path: "/orderPlaced",
      element: <OrderPlaced />,
    },
    {
      path: "/orderSubscription",
      element: <OrderSubscription />,
    },
    {
      path: "/orders",
      element: <Orders />,
    },
    {
      path: "/privacy-policy",
      element: <PrivacyPolicy />,
    },
  ]);

  return elements;
}

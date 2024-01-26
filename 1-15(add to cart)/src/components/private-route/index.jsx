import React from "react";
import CONFIG from "@/config";
import qs from "query-string";
import { useLocation, Navigate } from "react-router-dom";

const o = Object.create(null);

const PrivateRoute = function ({ element: Component, meta = o, ...rest }) {
  const { pathname, search } = useLocation();
  const isLoginPage = pathname === "/" || pathname === "/login";

  React.useEffect(() => {
    if (meta.title) {
      document.title = `${meta.title} - ${CONFIG.title}`;
    } else {
      document.title = CONFIG.title;
    }
  }, [meta]);

  if (isLoginPage && isLogin) {
    const redirectUrl = qs.parse(search).redirectUrl;
    const url = redirectUrl || "/home/index" + search;
    return <Navigate to={url} replace />;
  }

  if (meta.requiresAuth) {
    if (isLogin) {
      return <Component {...rest} />;
    } else {
      if (!isLoginPage) {
        return <Navigate to={`/?redirectUrl=${pathname}${search}`} replace />;
      }
    }
  }

  return <Component {...rest} />;
};

export default PrivateRoute;

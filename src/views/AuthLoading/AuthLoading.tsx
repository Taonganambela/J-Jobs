import React from "react";
import { useRoutes } from "react-router";
import routes from "../../router";

const AuthLoading = () => {
  const Nav = useRoutes(routes);
  return <>{Nav}</>;
};

export default AuthLoading;

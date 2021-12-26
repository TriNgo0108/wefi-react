import { useAppSelector } from "app/hooks";
import React from "react";
import { Navigate } from "react-router-dom";
import { LoginFooter, LoginForm, LoginHeader } from "./components";
import { getToken } from "./loginSlice";

const LoginPage: React.FC = () => {
  const token = useAppSelector(getToken);
  return (
    <>
    {token && <Navigate to="/"/>}
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </>
  );
};
export default LoginPage;

import { useAppSelector } from "app/hooks";
import { Loader } from "components";
import React from "react";
import { Navigate } from "react-router-dom";
import { LoginFooter, LoginForm, LoginHeader } from "./components";
import { getCode, getIsWaiting, getToken } from "./loginSlice";

const LoginPage: React.FC = () => {
  const token = useAppSelector(getToken);
  const isWaiting = useAppSelector(getIsWaiting);
  const code = useAppSelector(getCode);
  return (
    <>
    {isWaiting && <Loader text="RETRIVE&nbsp;WAIFU'S&nbsp;INFORMATION..."/>}
    {token && <Navigate to="/"/>}
      <LoginHeader />
      <LoginForm code={code} />
      <LoginFooter />
    </>
  );
};
export default LoginPage;

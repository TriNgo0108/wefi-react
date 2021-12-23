import React from "react";
import { LoginFooter, LoginForm, LoginHeader } from "./components";

const LoginPage: React.FC = () => {
  return (
    <>
      <LoginHeader />
      <LoginForm />
      <LoginFooter />
    </>
  );
};
export default LoginPage;

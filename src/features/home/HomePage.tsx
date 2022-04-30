import { useAppSelector } from "app/hooks";
import { Footer, MainHeader } from "components";
import { getToken } from "features/login/loginSlice";
import React, { useEffect } from "react";

import { ChooseUs, Content, Slider } from "./components";

const HomePage: React.FC = () => {
  const token = useAppSelector(getToken);
  useEffect(()=>{
    if(!token) localStorage.removeItem("state");
  },[token])
  return (
    <>
      <MainHeader />
      <Slider />
      <Content />
      <ChooseUs />
      <Footer />
    </>
  );
};
export default HomePage;

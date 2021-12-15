import React from "react";
import {
  Footer,
  MainHeader,
} from "../../components";
import { ChooseUs, Content, Slider } from "./components";

const HomePage: React.FC = () => {
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
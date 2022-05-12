import { Footer, MainHeader } from "components";
import React from "react";
import CartContent from "./cartContent";

const CartPage : React.FC = () =>{
    return <>
    <MainHeader/>
    <CartContent/>
    <Footer/>
    </>
}

export default CartPage;
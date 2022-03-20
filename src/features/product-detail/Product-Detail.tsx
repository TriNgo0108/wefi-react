import { Footer, MainHeader } from "components";
import React from "react";
import { useParams } from "react-router";

const ProductDetail : React.FC = ()=>{
    const param = useParams();
    const {id} = param;
    return(<>
    <MainHeader/>
    <Footer/>
    </>)
}
export default ProductDetail;
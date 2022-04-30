import { Center, Footer, Intro, MainHeader, Who } from "components";
import React from "react";

const AboutUs : React.FC = ()=>{
    return<>
    <MainHeader/>
    <Center>
        <Intro/>
    </Center>
    <Footer/>
    </>
}
export default AboutUs;
import { Center, Footer, Intro, MainHeader, Who } from "components";
import authors from "models/author.model";
import React from "react";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    rotate:{
        transform:"rotateY(180deg)",
    }
});
const AboutUs : React.FC = ()=>{
    const classes = useStyles();
    return<>
    <MainHeader/>
    <Center>
        <Intro/>
        {
            authors.map((author,index)=>{
                return <Who className={index % 2 ===0 ?"":classes.rotate}  key={index} author={author}/>
            })
        }
    </Center>
    <Footer/>
    </>
}
export default AboutUs;
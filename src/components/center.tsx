import React from "react";
import { createUseStyles } from "react-jss";

interface IProp{
    children?:React.ReactNode;
}
const useStyles = createUseStyles({
    center:{
        margin:"1rem 2rem"
    }
});
const Center:React.FC<IProp> = (prop:IProp)=>{
    const classes = useStyles();
    return <div className={classes.center}>
        {prop.children}
    </div>
}

export default Center;
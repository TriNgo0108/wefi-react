import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    footer:{
        backgroundColor:"black",
        color:"white",
        textAlign:"center",
        fontSize:"1rem",
        height:"20vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }
})
const LoginFooter : React.FC = () =>{
    const classes = useStyles();
    return <>
    <footer className={classes.footer}>
        <div>
        Copyright © 2021, WeFi
        </div>
    </footer>
    </>
}
export default LoginFooter;
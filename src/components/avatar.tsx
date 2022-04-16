import React from "react";
import { createUseStyles } from "react-jss";

interface IProps{
    avatarUrl?:string;
}
const useStyles = createUseStyles({
    avatar:{
        width:"40px",
        height:"40px",
        borderRadius:"50%"
    }
});
const Avatar : React.FC<IProps> = (props:IProps) =>{
    const classes = useStyles();
    return<>
        <img className={classes.avatar} src={props.avatarUrl} alt="user_avatar"/>
    </>
}

export default Avatar;
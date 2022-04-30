import clsx from "clsx";
import { IAuthor } from "interfaces/interfaces";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    flex:{
        display:"flex",
        textAlign:"initial",
        marginBottom:"2rem",
        "& > img":{
            width:"60%"
        },
        "&  h5":{
            fontSize:"1.5rem",
            margin:0
        },
        "& h6":{
            fontSize:"1rem",
            margin:0
        }
    },
    introduce:{
        backgroundColor:"#fff",
        transform: "inherit",
        zIndex:1,
        margin:"auto",
        padding:"2rem",
        border:"1px #cdc3c3 solid",
        marginLeft:"-10%",
        borderRadius:"4px",
        boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px ",
    },
    "@media (max-width:900px)":{
        flex:{
            "& img":{
                display:"none"
            },
            overflow:"hidden"
        },
        introduce:{
            margin:"1rem 0rem"
        }
    }
});
interface IProps{
    author?:IAuthor,
    className?:string;
}
const Who : React.FC<IProps> = (props:IProps)=>{
    const classes = useStyles();
    const {imageUrl,name,alias,description} = props.author as IAuthor;
    return <>
    <div className={clsx(classes.flex,props.className)}>
    <img src={imageUrl} alt="glenn"/>
    <div className={classes.introduce}>
           <h5>{name}</h5>
           <h6>Alias: {alias}</h6>
           <div className="des">
                {description}
           </div>
    </div>
    </div>
    </>
}
export default Who;

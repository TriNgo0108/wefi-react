import clsx from "clsx";
import { IReview } from "interfaces/interfaces";
import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { createUseStyles } from "react-jss";
import {Avatar} from "./index";
const useStyles = createUseStyles({
    flex:{
        display:"flex",
        "&  p":{
           margin:"0" 
        },
        "& > .avatar":{
            marginRight:"10px"
        },
        "& > .content":{
            width:"100%",
            "& > .comment":{
                margin:"5px 0px"
            },
            "& .group":{
                marginRight:"10px",
                color:"#707070",
                "& > svg":{
                    transition:".5s all",
                    cursor:"pointer",
                    "&:hover":{
                        color:"#ff0"
                    }
                }
            }
        }
    },
    justityContent:{
        justifyContent:"space-between"
    },
    store:{
        border:"1px solid #43a1fa ",
        color:"#43a1fa",
        borderRadius:"4px",
        padding:"4px",
        width:"max-content",
        margin:"5px 0px",
        fontSize:"14px"
    },
    customerQuestion:{
        margin:"1rem 0px"
    }
});

const Questions : React.FC<IReview> = (props:IReview)=>{
    const classes = useStyles();
    const {avatarUrl,time,comment,username,isStore} = props;
    
    return <div className={classes.customerQuestion}>
    <div className={classes.flex}>
        <div className="avatar">
            <Avatar avatarUrl={avatarUrl}/>
        </div>
        <div className="content">
            <div className={clsx(classes.flex,classes.justityContent)}>
                <p>{username}</p>
                <p>{time}</p>
            </div>
            {isStore && <div className={classes.store}>Store answer</div>}
            <div className="comment">
                <p>{comment}</p>
            </div>
            <div className="reaction">
                <div className={classes.flex}>
                    <div className="group">
                        <AiFillLike/>
                        <span>10</span>
                    </div>
                    <div className="group">
                        <AiFillDislike/>
                        <span>4</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
}

export default Questions;
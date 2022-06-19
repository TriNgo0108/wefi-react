import clsx from "clsx";
import { dance } from "images";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    big:{
        fontSize:"3rem"
    },
    medium:{
        fontSize:"2rem"
    },
    intro:{
        position:"relative",
        overflow:"hidden"
    },
    dance:{
        position:"absolute",
        "& > img":{
            width:"30%"
        }
    },
    left:{
        left:"-10%"
    },
    right:{
        right:"-10%"
    },
    "@media (max-width:900px)":{
        dance:{
            display:"none"
        }
    }
});

const Intro:React.FC = () =>{
    const classes = useStyles();
    return <div className={classes.intro}>
        <div className={clsx(classes.dance,classes.left)}>
            <img src={dance} alt="dance"/>
        </div>
        <div className={clsx(classes.dance,classes.right)}>
            <img src={dance} alt="dance"/>
        </div>
        <h4 className={classes.big}>WHO WE ARE</h4>
        <h5 className={classes.medium}>We're just a weebs group LOL 😆😆😆</h5>
    </div>
}
export default Intro;
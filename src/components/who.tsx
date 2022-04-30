import { glenn } from "images";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    flex:{
        display:"flex",
    },
    image:{
        "& > img":{

        }
    }
});
const Who : React.FC = ()=>{
    const classes = useStyles();
    return <>
    <div className={classes.flex}>
        <div className={classes.image}>
            <img src={glenn} alt="glenn"/>
        </div>
        <div className="introduce">
            <p>asdjkahdjsahjkdahjkdasdsaksahsada</p>
        </div>
    </div>
    </>
}
export default Who;

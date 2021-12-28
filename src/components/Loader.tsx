import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { setInterval } from "timers";
interface ILoader {
    text?:string
}
const useStyles = createUseStyles({
    overlay:{
        position:"absolute",
        backgroundColor:"rgba(0,0,0,0.6)",
        width:"100%",
        height:"100%",
        opacity:0,
        animation:"$changeOpacity .5s forwards",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        zIndex:"100",
        "& > .overlay__content":{
            backgroundColor:"white",
            width:"fit-content",
            height:"100px",
            padding:"0px 5px",
            fontSize:"clamp(16px,2vw,4vw)",
            borderRadius:"10px",
            display:"flex",
            alignItems:"center",
            color:"#218b00",
            "& > span":{
                transition:".3s all"
            },
            "& > span.active":{
                paddingBottom:"30px",
            }
        }
    },
    "@keyframes changeOpacity":{
        to:{
            opacity:1
        }
    }
});
const Loader : React.FC<ILoader> = (props :ILoader) =>{
    const [activeIndex,setActiveIndex] = useState(0);
    const classes = useStyles();
    useEffect(()=>{
        const length = props.text?.length ?? 0;
        const increaseActiveIndex = () =>{
            setActiveIndex((preIndex):number=>{
                return preIndex + 1 > length -1 ? 0 : preIndex + 1 
            });
        }
         setInterval(increaseActiveIndex,100);
    },[])
    return<>
    <div className={classes.overlay}>
        <div className="overlay__content">
            {props.text?.split("").map((character,index)=>{
                return <span key={index} className={activeIndex === index ? "active":""}>{character}</span>
            })}
        </div>
    </div>
    </>
}
export default Loader;
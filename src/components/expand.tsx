import clsx from "clsx";
import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { createUseStyles } from "react-jss";

interface IProps{
    children?: React.ReactNode;
    title?:string;
}
interface IExpand{
    isOpen:boolean;
}
const useStyles = createUseStyles<string,IExpand>({
   open:{
       transition:"all .8s ease-in-out",
       overflow:"hidden",
       wordBreak:"break-work",
       height:"auto",
       maxHeight:(prop:IExpand) =>(prop.isOpen ? "100%":"0")
   },
   close:{
    transition:"max-height .8s ease-in",
   },
   flex:{
       display:"flex",
       justifyContent:"space-between",
       alignItems:"center",
   },
   borderBottom:{
       borderBottom:"1px solid #d8d8d8"
   },
   icon:{
       transform: (prop:IExpand) => prop.isOpen ? "rotate(180deg)" :"rotate(0deg)",
       transition:"1s all"
   },
   block:{
       display:"block"
   }
});
const Expand :React.FC <IProps> = (props:IProps) =>{
    const {children,title} =  props;
    const [isOpen,setOpen] = useState(false);
    const classes = useStyles({isOpen});
    const onTogglelick = () =>{
        let currentState = isOpen;
        setOpen(!currentState);
    }
    return <>
    <div className={clsx(classes.flex,classes.borderBottom)} onClick={onTogglelick}>
        <h4>{title}</h4>
        <AiFillCaretDown className={classes.icon}/>
    </div>
    <div className={clsx(classes.open)}>
        {children}
    </div>
    </>
}
export default Expand;
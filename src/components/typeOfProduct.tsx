import React from "react";
import { createUseStyles } from "react-jss";

interface IProps{
    type?:string;
}
interface IType{
    color?:string;
    isExclusive?:boolean;
}
const colorList = ["#2abdbb","#fab818","#f47521","#ef4323"];

const getColor = (type?:string) =>{
    switch(type){
        case "pre-order":
            return colorList[0];
        case "in-stock":
            return colorList[1];
        case "exclusive":
            return 
    }
}
const isExclusive = (type?:string)=>{
    return type === "exclusive";
}
const useStyles = createUseStyles<string,IType>({
    type:{
        padding:"2px",
        color:"white",
        width:"100px",
        backgroundColor:(prop:IType)=>prop.color,
        "& > p":{
            textTransform:"uppercase",
            fontSize:"16px",
            margin:"0px"
        },
        clipPath:(prop:IType)=> prop.isExclusive ? "polygon(0 0, 87% 0, 100% 39%, 100% 100%, 80% 100%, 20% 100%, 0 100%, 0% 20%)":""
    }
})

const TypeOfProduct : React.FC<IProps> = (props:IProps)=>{
    const {type} = props;
    const color = getColor(type);
    const exclusive = isExclusive(type)
    const classes = useStyles({color:color,isExclusive:exclusive});

    return <div className={classes.type}>
        <p>{type}</p>
    </div> 
}
export default TypeOfProduct;
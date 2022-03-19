import clsx from "clsx";
import React from "react";
import { createUseStyles } from "react-jss";

interface IProps{
    page?:number;
    pagePerNumber?:number;
    onChange:Function
}


const useStyles = createUseStyles({
    flex:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    },
    borderBottom:{
        borderBottom:"1px #ebdfdf solid"
    },
    toolBar:{
        margin:"0px 10px"
    }
});
const ToolBar : React.FC<IProps> = (props:IProps)=>{
    const {page,pagePerNumber,onChange} = props;
    const optionList = ["Featured","Most popular","Date, new to old","Date, old to new","Price, high to low","Price, low to high","Alphabeticall A - Z","Alphabeticall Z- A"];
    const startPosition = page === 0 ? 1 : page as number * (pagePerNumber as number) ;
    const endPosition = page === 0 ? pagePerNumber : (page as number) * (pagePerNumber as number)  + (pagePerNumber as number) ;
    const classes = useStyles();
    return <div className={classes.toolBar}>
        <div className={clsx(classes.flex, classes.borderBottom)}>
            <div className="result">
                <p>Showing {startPosition} - {endPosition} of (2002) results </p>
            </div>
            <div className="option">
                <select name="option" id="option" onChange={(event)=>{
                    onChange(event);
                }}>
                    {
                        optionList.map((item,index)=>{
                            return <option value={index} key={index}>{item}</option>
                        })
                    }
                </select>
            </div>
        </div>
    </div>
}
export default ToolBar;
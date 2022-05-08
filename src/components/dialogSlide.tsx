import React, { ReactElement } from "react";
import { createUseStyles } from "react-jss";
interface IProps{
    text?:string;
    color?:string;
    open:boolean;
    icon?:ReactElement;
}
const useStyles = createUseStyles<string,IProps>({
    dialog:{
        marginTop:"0.5rem",
        position:"absolute",
        right:"-30%",
        fontSize:"1rem",
        backgroundColor:(props:IProps)=> props.color,
        boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px ",
        padding:".5rem",
        color:"#fff",
        borderRadius:"10px",
        transition:".5s all",
        zIndex:1000,
        transform:(props:IProps) =>props.open ? "translateX(-30vw)":"translateX(100%)",
        "& .flex":{
            display:"flex",
            alignItems:"center"
        },
        "& .success":{
            marginRight:".5rem",
            "& > svg":{
                fontSize:"2rem"
            }
        }
    },
    "@media (max-width:600px)":{
        dialog:{
            fontSize:".5rem",
            "&  svg":{
                fontSize:"1rem"
            }
        }
    }
});

const DialogSlide : React.FC<IProps> = (props:IProps) =>{
    const {text,color,icon,open} = props;
    const classes = useStyles({color:color,open:open});
    return <div className={classes.dialog}>
    <div className="flex">
        <div className="success">
            {icon}
        </div>
        <div className="info">
            <p>{text}</p>
        </div>
    </div>
</div>
};

export default DialogSlide;
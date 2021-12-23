import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
interface Iprops {
  title?: string;
  isPassword?: boolean;
  placeHolder?: string;
}
const useStyles = createUseStyles({
  input__form: {
    marginBottom: "20px",
    "& > .title": {
      marginBottom: "10px",
      color:"#000000bf"
    },
    "& > .input": {
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      border:"1px #00000061 solid",
      "& > input": {
        fontSize: "1rem",
        height: "30px",
        width: "100%",
        border: "none",
        "&:focus-visible": {
          outline: "unset",
        },
      },
      "& > div":{
        marginRight:"5px",
        fontSize:"1.5rem",
        color:"#000000bf",
        height:"24px",
        cursor:"pointer"
      }
    },
  },
});
const Input: React.FC<Iprops> = (props: Iprops) => {
  const [isHided,setHide] = useState(true);
  const classes = useStyles();
  const handleClick = ()=>{
    setHide(!isHided);
  }
  return (
    <>
      <div className={classes.input__form}>
        <div className="title">{props.title}</div>
        <div className="input">
          <input
            placeholder={props.placeHolder}
            type={props.isPassword && isHided ? "password" : "text"}
          />
          {props.isPassword && (
            <div onClick={handleClick}>
              {isHided ? <AiOutlineEye /> : <AiOutlineEyeInvisible/>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Input;

import React from "react";
import { createUseStyles } from "react-jss";

interface ILoginWith {
  name?: string;
  color?: string;
  icon?: React.ReactNode;
}
const useStyles = createUseStyles({
  login__with: {
    cursor:"pointer",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: "4px",
    fontSize: "1.2rem",
    color: "white",
    padding: "5px 0px",
    transition:".5s all",
    backgroundColor: (props: ILoginWith) =>
      props.color ? props.color : "black",
    "&:hover":{
        boxShadow:"2px 2px #817d7da1, -2px -2px #817d7da1"
    },
  },
});
const LoginWith: React.FC<ILoginWith> = (props: ILoginWith) => {
  const classes = useStyles({ color: props.color });
  return (
    <>
      <div className={classes.login__with}>
        {props.icon}
        <div className="name">{props.name}</div>
      </div>
    </>
  );
};
export default LoginWith;

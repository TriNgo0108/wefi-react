import React from "react";
import { createUseStyles } from "react-jss";
import { login_form } from "images";
import { Input, LoginWith } from ".";
import { BsFacebook, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useAppDispatch } from "app/hooks";
import { LoginWithEmail } from "../loginSlice";
const useStyles = createUseStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(12,1fr)",
    backgroundImage: `url(${login_form})`,
    height: "100%",
    backgroundPosition: "bottom",

    "& > .form__wapper": {
      gridColumn: "8 / span 4",
      display: "grid",
      gridTemplateRows: "repeat(12, 1fr)",

      "& > .form": {
        gridRow: "2 / span 10",
        backgroundColor: "white",
        borderRadius: "10px",
        padding: "20px",
        textAlign: "left",
        "& > .helper": {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "20px",
          fontSize: "13px",
          color: "#218b00",
        },
        "&  button": {
          width: "100%",
          height: "40px",
          fontSize: "1rem",
          marginBottom: "5px",
          backgroundColor: "#218b00",
          color: "white",
          borderRadius: "4px",
          border: "2px #c4ffb1 solid",
          transition: ".5s all",
          "&:hover": {
            backgroundColor: "#B22D29",
            border: "2px #ffff52 solid",
          },
        },
        "& > .others__option": {
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gridGap: "20px",
          marginBottom: "40px",
          "& > p": {
            gridColumn: "span 3",
            position: "relative",
            textAlign: "center",
            color: "#00000061",
            "&::after": {
              position: "absolute",
              content: `""`,
              top: "8px",
              right: 0,
              width: "40%",
              height: "2px",
              backgroundColor: "#00000061",
            },
            "&::before": {
              position: "absolute",
              content: `""`,
              top: "8px",
              left: 0,
              width: "40%",
              height: "2px",
              backgroundColor: "#00000061",
            },
          },
        },
        "& > .register": {
          textAlign: "center",
          "& > p": {
            color: "#218b00",
          },
          "& a": {
            textDecoration: "unset",
          },
        },
      },
    },
    "& .login__text": {
      fontSize: "1.5rem",
      marginBottom: "20px",
      color: "#218b00",
    },
    "& p": {
      margin: 0,
    },
  },
  "@media (max-width:900px)": {
    grid: {
      "& > .form__wapper": {
        gridColumn: "4 / span 6",
      },
    },
  },
  "@media (max-width:600px)": {
    grid: {
      "& > .form__wapper": {
        gridColumn: "2 / span 10",
      },
    },
  },
  "@media (max-width:370px)":{
    grid:{
        "& > .form__wapper":{
            gridColumn:"span 13",
            margin:"0px 5px",
            "& > .form":{
              padding:"10px"
            }
        }
    }
}
});
const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const classes = useStyles();
  return (
    <>
      <div className={classes.grid}>
        <div className="form__wapper">
          <div className="form">
            <div className="login__text">
              <div className="text">Login</div>
            </div>
            <div className="account">
              <Input
                title="Username / Email"
                isPassword={false}
                placeHolder="Enter your username or email"
              />
            </div>
            <div className="password">
              <Input
                title="Password"
                isPassword={true}
                placeHolder="Enter your password"
              />
            </div>
            <div className="login__button">
              <button onClick={()=>{
                dispatch(LoginWithEmail())
              }}>LOG IN</button>
            </div>
            <div className="helper">
              <p>Forgot password</p>
              <p>Login with SMS</p>
            </div>
            <div className="others__option">
              <p>OR</p>
              <LoginWith name="Facebook" color="blue" icon={<BsFacebook />} />
              <LoginWith name="Google" color="#ff000094" icon={<FcGoogle />} />
              <LoginWith name="Apple" color="#000" icon={<BsApple />} />
            </div>
            <div className="register">
              <p>
                New weeb ?
                <span>
                  <a href="/register"> Register</a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;

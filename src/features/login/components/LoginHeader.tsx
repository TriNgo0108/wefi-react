import { logo } from "images";
import React from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    grid:{
        display:"grid",
        alignItems:"center",
        gridTemplateColumns:"repeat(12,1fr)",
        color:"#B22D29",
        "& > .logo":{
            gridColumn:"span 2",
            display:"flex",
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
            cursor:"pointer"
        },
        "& > .help":{
            gridColumn:"12 / span 1",
            cursor:"pointer"
        }
    },
    "@media (max-width:900px)":{
        grid:{
            "& > .help":{
                gridColumn:"11 / span 2"
            }
        }
    },
    "@media (max-width:600px)":{
        grid:{
            "& > .help":{
                gridColumn:"10 / span 3"
            }
        }
    },
    "@media (max-width:370px)":{
        grid:{
            "& > .help":{
                gridColumn:"9 / span 4"
            }
        }
    }

});
const LoginHeader : React.FC = () =>{
    const classes = useStyles();
    return <>
    <header>
        <div className={classes.grid}>
            <div className="logo">
                <img src={logo} width="80px" height="80px" alt="logo"/>
                <div className="login">
                    Login
                </div>
            </div>
            <div className="help">
                Need help ?
            </div>
        </div>
    </header>
    </>
}
export default LoginHeader;
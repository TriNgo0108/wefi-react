import React from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { BiUser,BiCart } from "react-icons/bi";
import { background, logo } from "images";
const useStyles = createUseStyles({
    top__header:{
        height:"10vh",
        backgroundImage:`url(${background})`,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        "& >p":{
            backgroundColor:"red",
            margin:"0",
            borderRadius:"10px",
            padding:"10px",
            color:"white",
            boxShadow:"2px 2px 2px #c12727, -2px -2px 2px #c12727"
        }
    },
    logo:{
        width:"80px",
        height:"80px"
    },
    header:{
        display:"grid",
        gridTemplateColumns:"repeat(12, 1fr)",
        transition:"500ms all",
        "&__logo":{
            display:"flex",
            alignSelf:"center",
            "& > p":{
                margin:0,
                alignSelf:"center",
                transition:"500ms all",
            }
        },
        "&__menu":{
            gridColumn:"4 / span 6",
            alignSelf:"center"
        },
        "&:hover":{
            backgroundColor:"#B22D29",
            "& li":{
                color:"white"
            },
            "& svg":{
                color:"white",
                "&:hover":{
                    color:"#f9f86c"
                }
            },
            "& p":{
                color:"white"
            }
        }
    },
    nav:{
        display:"grid",
        gridTemplateColumns:"repeat(6,1fr)",
        cursor:"pointer",
        "& > li":{
            listStyleType:"none",
            transition:"500ms all",
            "&:hover":{
                color:"#f9f86c"
            }
        }

    },
    header__button:{
        gridColumn:"11 / span 2",
        alignSelf:"center",
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        cursor:"pointer",
        "& > div":{
            fontSize:"18px",
            transition:"500ms all",
        }
    }
});
const MainHeader : React.FC = ()=>{
    let classes = useStyles();
    return <header>
        <div className={classes.top__header}>
            <p>Padoru</p>
        </div>
        <div className={classes.header}>
            <div className={`${classes.header}__logo`}>
                <img src={logo} alt="logo" className={classes.logo}/>
                <p>WEFI</p>
            </div>
            <div className={`${classes.header}__menu`}>
                <ul className={classes.nav}>
                    <li className="nav__item">
                        <NavLink className={({ isActive }) => "nav__link" + (isActive ? " activated" : "")} to="/anime"/>
                        Anime
                    </li>
                    <li className="nav__item">
                        <NavLink className={({ isActive }) => "nav__link" + (isActive ? " activated" : "")} to="/manga"/>
                        Manga
                    </li>
                    <li className="nav__item">
                        <NavLink className={({ isActive }) => "nav__link" + (isActive ? " activated" : "")} to="/game"/>
                        Game
                    </li>
                    <li className="nav__item">
                        <NavLink className={({ isActive }) => "nav__link" + (isActive ? " activated" : "")} to="/figure"/>
                        Figure
                    </li>
                    <li className="nav__item">
                        <NavLink className={({ isActive }) => "nav__link" + (isActive ? " activated" : "")} to="/aboutus"/>
                        About us
                    </li>
                </ul>
            </div>
            <div className={classes.header__button}>
                <div>
                    <GoSearch/>
                </div>
                <div>
                    <BiCart/>
                </div>
                <div>
                    <BiUser/>
                </div>
            </div>
        </div>
    </header>;
}
export default MainHeader;
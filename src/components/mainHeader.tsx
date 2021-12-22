import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { BiUser, BiCart, BiMenu } from "react-icons/bi";
import { background, logo } from "images";

interface HeaderProps {
  open?: boolean;
  scrollDown?: boolean;
}

const useStyles = createUseStyles<string, HeaderProps>({
  header:{
    position:"sticky",
    top:"0",
    zIndex:100,
    transform: (props:HeaderProps)=> props.scrollDown ? "translateY(-100%)":"unset",
    transition:"all .3s"
  },
  header_layout: {
    "&::before":{
      content:`""`,
      backgroundImage:`url(${background})`,
      height:"8vh",
      width:"100%",
      gridColumn:" span 13"
    },
    position:"relative",
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    transition: "all 800ms",
    width:"100%",
    backgroundColor:"white",
    "& > .logo": {
      display: "flex",
      alignSelf: "center",
      "& > p": {
        margin: 0,
        alignSelf: "center",
        transition: "500ms all",
      },
    },
    "& > .menu": {
      gridColumn: "4 / span 6",
      alignSelf: "center",
    },
    "& > .toggle, & > .dropdown": {
      display: "none",
    },
    "&:hover": {
      backgroundColor: "#B22D29",
      "& li": {
        color: "white",
        "&:hover": {
          cursor: "pointer",
          color: "#f9f86c",
          transition: "500ms all",
        },
      },
      "& svg": {
        color: "white",
        "&:hover": {
          color: "#f9f86c",
        },
      },
      "& p": {
        color: "white",
      },
    },
  },
  nav: {
    display: "grid",
    gridTemplateColumns: "repeat(6,1fr)",
    cursor: "pointer",
    "& > li": {
      listStyleType: "none",
      textTransform: "capitalize",
    },
  },
  header__button: {
    gridColumn: "11 / span 2",
    alignSelf: "center",
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    cursor: "pointer",
    "& > div": {
      fontSize: "18px",
      transition: "500ms all",
    },
  },
  "@media (max-width:749px)": {
    header_layout: {
      "& > .menu": {
        display: "none",
      },
      "& > .toggle": {
        display: "inherit",
        gridColumn: "12 / span 1",
        fontSize: "1.5rem",
        alignSelf: "center",
      },
      "& > .dropdown": {
        display: "inherit",
        width:"100%",
        textTransform: "capitalize",
        gridColumn:"span 13",
        overflowX: "hidden",
        position:"absolute",
        top:"calc(80px + 8vh)",
        color: "white",
        backgroundColor: "#B22D29",
        transition: "500ms all",
        height: (prop: HeaderProps) => (prop.open === true ? "210px" : 0),
        zIndex: 2,
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14)",
        "& > ul": {
          listStyle: "none",
          padding: "0",
          margin: "0",
          "& > li": {
            margin: "10px 0px",
          },
        },
      },
    },
    header__button: {
      display: "none",
    },
  },
});
const getNavList = () => {
  const navList = ["anime", "manga", "game", "figure", "about us"];
  return navList.map((nav, index) => {
    return (
      <li className="nav__item" key={index}>
        <NavLink
          className={({ isActive }) =>
            "nav__link" + (isActive ? " activated" : "")
          }
          to={`/${nav.split(" ").length < 2 ? nav : "aboutus"}`}
        />
        {nav}
      </li>
    );
  });
};
const MainHeader: React.FC = () => {
  const [isOpened, setOpen] = useState(false);
  const [isScrollDown,setScrollDown] = useState(false);
  let classes = useStyles({ open: isOpened,scrollDown:isScrollDown});
  const handleToggleClick = () => {
    setOpen(!isOpened);
  };
  useEffect(()=>{
    let lastScroll = 0;
    window.onscroll = ()=>{
      if (window.scrollY > lastScroll){
        lastScroll = window.scrollY;
        setScrollDown(true);
      }
      if(window.scrollY < lastScroll){
        lastScroll = window.scrollY;
        setScrollDown(false);
      }
      
    }
  },[]);
  return (
    <header className={classes.header}>
      <div className={classes.header_layout}>
        <div className="logo">
          <img src={logo} alt="logo"  width="80px" height="80px" />
          <p>WEFI</p>
        </div>
        <div className="menu">
          <ul className={classes.nav}>{getNavList()}</ul>
        </div>
        <div className={classes.header__button}>
          <div>
            <GoSearch />
          </div>
          <div>
            <BiCart />
          </div>
          <div>
            <BiUser />
          </div>
        </div>
        <div className="toggle">
          <BiMenu onClick={handleToggleClick} />
        </div>
        <div className="dropdown">
            <ul>
              {getNavList()}
              <li className="nav__item">
                <NavLink
                  className={({ isActive }) =>
                    "nav__link" + (isActive ? " activated" : "")
                  }
                  to="/login"
                />
                Login
              </li>
              <li className="nav__item">
                <NavLink
                  className={({ isActive }) =>
                    "nav__link" + (isActive ? " activated" : "")
                  }
                  to="/cart"
                />
                Cart
              </li>
            </ul>
          </div>
      </div>
    </header>
  );
};
export default MainHeader;

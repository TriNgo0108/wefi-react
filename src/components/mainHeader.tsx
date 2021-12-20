import React, { useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import { NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { BiUser, BiCart, BiMenu } from "react-icons/bi";
import { background, logo } from "images";

interface HeaderProps {
  open?: boolean;
  sticky?: boolean;
}

const useStyles = createUseStyles<string, HeaderProps>({
  top__header: {
    height: "10vh",
    backgroundImage: `url(${background})`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& >p": {
      backgroundColor: "red",
      margin: "0",
      borderRadius: "10px",
      padding: "10px",
      color: "white",
      boxShadow: "2px 2px 2px #c12727, -2px -2px 2px #c12727",
    },
  },
  logo: {
    width: "80px",
    height: "80px",
  },
  header: {
    position:(prop: HeaderProps) => (prop.sticky === true ? "fixed" : "relative"),
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    transition: "all 800ms",
    width:"100%",
    backgroundColor:"white",
    zIndex:100,
    top:(prop: HeaderProps) => (prop.sticky === true ? 0 : "unset"),
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
    header: {
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
        top:"80px",
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
  const [isSticky,setSticky] = useState(false);
  let classes = useStyles({ open: isOpened, sticky:isSticky });
  const headerEl= useRef(null);
  const handleToggleClick = () => {
    setOpen(!isOpened);
  };
  
  useEffect(()=>{
    const headerY = (headerEl?.current as unknown as HTMLElement).offsetTop;
    window.onscroll = () =>{
      console.log(window.scrollY > headerY);
      if (window.scrollY > headerY  && isSticky === false ){
        setSticky(true);
      }
      if(window.scrollY < headerY){
        setSticky(false);
      }
    }
  },[]);
  console.log("State: ",isSticky);
  return (
    <header>
      <div className={classes.top__header}>
        <p>Padoru</p>
      </div>
      <div className={classes.header} ref={headerEl}>
        <div className="logo">
          <img src={logo} alt="logo" className={classes.logo} />
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

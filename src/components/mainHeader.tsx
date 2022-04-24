import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { NavLink, useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { BiUser, BiCart, BiMenu } from "react-icons/bi";
import { background, logo } from "images";
import { useAppSelector } from "app/hooks";
import { getProducts } from "features/cart/cartSlice";

interface HeaderProps {
  open?: boolean;
  scrollDown?: boolean;
}

const useStyles = createUseStyles<string, HeaderProps>({
  cart:{
    position:"relative",
    display:"flex",
    "& p":{
      margin:0
    },
    "& > .quantities":{
      position:"absolute",
      width:"5px",
      height:"5px",
      borderRadius:"50%",
      padding:"5px",
      background:"#00ff00",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      fontSize:"12px",
      color:"#fff",
      top:"-5px",
      left:"13px",
    }
  },
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
      cursor:"pointer",
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
    "& > a":{
      textDecoration:"unset",
      color:"black"
    },
    "&  li": {
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
      "& > a":{
        color: "#000"
      }
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
          "& > a":{
            textDecoration:"unset",
          },
          "&  li": {
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
  const navList = ["anime", "manga", "accessories", "figure", "about us"];
  return navList.map((nav, index) => {
    return (
        <NavLink key={index}
          className={({ isActive }) =>
            "nav__link" + (isActive ? " activated" : "")
          }
          to={`/${nav.split(" ").length < 2 ? nav : "aboutus"}`}
        >
          <li className="nav__item">{nav}</li>
        </NavLink>
    );
  });
};
const MainHeader: React.FC = () => {
  const [isOpened, setOpen] = useState(false);
  const [isScrollDown,setScrollDown] = useState(false);
  const productList = useAppSelector(getProducts);
  const navigate =  useNavigate();
  let classes = useStyles({ open: isOpened,scrollDown:isScrollDown});
  const handleToggleClick = () => {
    setOpen(!isOpened);
  };
  const getQuantities = () : number=>{
    let quantities = 0;
    productList?.forEach((product)=>{
      quantities += product.quantity || 1;
    });
    console.log(productList);
     return quantities;
  }
  const goToHome = ()=>{
    navigate("/");
  }
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
  },[])
  return (
    <header className={classes.header}>
      <div className={classes.header_layout}>
        <div className="logo" onClick={goToHome}>
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
          <div className={classes.cart}>
            <BiCart />
            <div className="quantities">
              <p>{getQuantities()}</p>
            </div>
          </div>
          <div>
          <NavLink
                  className={({ isActive }) =>
                    "nav__link" + (isActive ? " activated" : "")
                  }
                  to="/login"
                >
            {<BiUser />}
            </NavLink>
          </div>
        </div>
        <div className="toggle">
          <BiMenu onClick={handleToggleClick} />
        </div>
        <div className="dropdown">
            <ul>
              {getNavList()}
                <NavLink
                  className={({ isActive }) =>
                    "nav__link" + (isActive ? " activated" : "")
                  }
                  to="/login"
                >
                  <li>Login</li>
                </NavLink>
              <NavLink
                  className={({ isActive }) =>
                    "nav__link" + (isActive ? " activated" : "")
                  }
                  to="/cart"
                >
                  <li>Cart</li>
                </NavLink>
            </ul>
          </div>
      </div>
    </header>
  );
};
export default MainHeader;

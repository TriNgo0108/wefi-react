import React from "react";
import { createUseStyles } from "react-jss";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { footer_background, footer_image } from "images";
const useStyles = createUseStyles({
  footer: {
    marginTop: "10px",
    position: "relative",
    "& .footer__image > img": {
      position: "absolute",
      top: "0",
      right: "10vw",
      height: "100%",
    },
  },
  footer__background: {
    position: "relative",
    height: "50vh",
    "&::before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
      backgroundImage: `url(${footer_background})`,
      height: "50vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      opacity: 0.5,
    },
  },
  grid: {
    display: "grid",
    justifyItems:"center"
  },
  col_3: {
    gridTemplateColumns: "repeat(3,1fr)",
  },
  col_12: {
    gridTemplateColumns: "repeat(12,1fr)",
  },
  subscriber: {
    gridColumn: " span 3",
    "& h3": {
      fontSize: "1.7rem",
    },
    "& > .form__text > h3": {
      color: "#fab818",
    },
    "& > .grid_icon": {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
    },
  },
  icon__buttons: {
    gridColumn: "2 / span 1",
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    fontSize: "2.5rem",
    justifyItems: "center",
    "& > svg": {
      transition: "500ms all",
      padding: "10px 0px",
      cursor: "pointer",
      "&:hover": {
        paddingTop: "0px",
      },
    },
  },
  form: {
    display: "inline",
    "& > button": {
      fontSize: "1rem",
      height: "45px",
      width: "120px",
      marginLeft: "10px",
      border: "1px #ff0 solid",
      backgroundColor: "#fab818",
      color: "#000",
      cursor: "pointer",
      transition: "800ms all",
      borderRadius: "10px",
      "&:hover": {
        backgroundColor: "#B22D29",
        color: "white",
      },
    },
    "& > input": {
      fontSize: "1rem",
      borderRadius: "10px",
      width: "250px",
      height: "45px",
      backgroundColor: "#ffffff",
      border: "1px #fab818 solid",
      color: "#000",
      "&:focus-visible": {
        outline: "unset",
      },
    },
  },
  footer__content: {
    backgroundColor: "black",
    "& > .copyright": {
      gridColumn: "span 12",
      color: "white",
      marginTop: "20px",
    },
  },
  content__layout: {
    gridColumn: "2 / span 8",
    textAlign: "left",
    color: "white",
    "& h4": {
      color: "#ff0",
    },
    "& .list > p": {
      transition: "500ms all",
      cursor: "pointer",
    },
    "& .list > p:hover": {
      paddingLeft: "10px",
    },
  },
  "@media (max-width:1200px)": {
    footer: {
      "& .footer__image > img": {
        display: "none",
      },
    },
  },
  "@media (max-width:800px)": {
    content__layout: {
      gridColumn: "2 / span 10",
    },
  },
});
const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__background}>
        <div className={`${classes.grid} ${classes.col_3}`}>
          <div className={classes.subscriber}>
            <div className="title">
              <h3>WE'RE SOCIAL</h3>
            </div>
            <div className="grid_icon">
              <div className={classes.icon__buttons}>
                <FaFacebook />
                <AiFillTwitterCircle />
                <AiFillInstagram />
                <BsTelegram />
              </div>
            </div>
            <div className={classes.subscriber}>
              <div className="form__text">
                <h3>JOIN OUR MAILING LIST</h3>
              </div>
              <div className={classes.form}>
                <input type="input" id="email" placeholder="Your email" />
                <button>SUBCRIBE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.grid} ${classes.col_12} ${classes.footer__content}`}
      >
        <div
          className={`${classes.col_3}  ${classes.grid} ${classes.content__layout}`}
        >
          <div className="service">
            <h4>HELP &amp; CUSTOMER SERVICE</h4>
            <div className="list">
              <p>FAQ</p>
              <p>Shipping &amp; Returns</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="about">
            <h4>ABOUT WEFI</h4>
            <div className="list">
              <p>Do Not Sell customer Information</p>
              <p>Copyright Policy</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className="help">
            <h4>HELP &amp; CUSTOMER SERVICE</h4>
            <div className="list">
              <p>FAQ</p>
              <p>Shipping &amp; Returns</p>
              <p>Contact Us</p>
            </div>
          </div>
        </div>
        <div className="copyright">Copyright © 2021, WeFi</div>
      </div>
      <div className="footer__image">
        <img src={footer_image} alt="footer__image" />
      </div>
    </footer>
  );
};
export default Footer;

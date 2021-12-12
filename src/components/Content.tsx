import React from "react";
import { createUseStyles } from "react-jss";
import ReactPlayer from "react-player";
import { best_girl, genshin, in_stock, kanojou, preorder, sayu, takagi } from "../images";

const useStyles = createUseStyles({
  content: {
    display: "grid",
    margin: "10px",
    gridTemplateColumns: "repeat(6,1fr)",
    gridGap: "20px",
    "&  .img": {
      "& > img": {
        width: "100%",
        height: "60vh",
      },
    },
  },
  pre__order: {
    gridColumn: "1 / span 2",
    position: "relative",
    cursor:"pointer"
  },
  sayu: {
    gridColumn: "1 / span 2",
    position: "relative",
    cursor:"pointer"
  },
  takagi:{
    gridColumn: "3 / span 2",
    position: "relative",
    cursor:"pointer"
  },
  in__stock: {
    gridColumn: "3 / span 2",
    position: "relative",
    cursor:"pointer"
  },
  kanojou:{
    gridColumn: "5 / span 2",
    position: "relative",  
    cursor:"pointer"
  },
  best__girl: {
    gridColumn: "5 / span 2",
    position: "relative",
    cursor:"pointer"
  },
  genshin: {
    gridColumn: "1 / span 3",
    cursor:"pointer",
    position: "relative",
    "&  img": {
      width: "100%",
    },
  },
  pandoru: {
    gridColumn: "4 / span 3",
    cursor:"pointer",
    position: "relative",
    "& > div": {
      width: "100% !important",
      height: "100% !important",
    },
  },
  text: {
    position: "absolute",
    zIndex: 10,
    margin: "5%",
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    fontSize: "1.5rem",
  },
});
const Content: React.FC = () => {
  let classes = useStyles();
  return (
    <>
      <h3>YOU NEED AT LEAST ONE THING</h3>
      <div className={classes.content}>
        <div className={classes.pre__order}>
          <div className="img">
            <img src={preorder} alt="pre-order" />
          </div>
          <div className={classes.text}>
            <h5>Pre-order</h5>
          </div>
        </div>
        <div className={classes.takagi}>
          <div className="img">
            <img src={takagi} alt="takagi" />
          </div>
          <div className={classes.text}>
            <h5>Takagi</h5>
          </div>
        </div>
        <div className={classes.kanojou}>
          <div className="img">
            <img src={kanojou} alt="kanojou" />
          </div>
          <div className={classes.text}>
            <h5>Rent-A-Girlfriend </h5>
          </div>
        </div>
        <div className={classes.genshin}>
          <div>
            <img src={genshin} alt="genshin" />
            <div className={classes.text}>
              <h5>Genshin Impact</h5>
            </div>
          </div>
        </div>
        <div className={classes.pandoru}>
          <ReactPlayer url="https://www.youtube.com/watch?v=PzrGGyPMfoo" />
        </div>
        <div className={classes.sayu}>
          <div className="img">
            <img src={sayu} alt="sayu" />
          </div>
          <div className={classes.text}>
            <h5>Sayu</h5>
          </div>
        </div>
        <div className={classes.in__stock}>
          <div className="img">
            <img src={in_stock} alt="in_stock" />
          </div>
          <div className={classes.text}>
                <h5>In stock</h5>
            </div>
        </div>
        <div className={classes.best__girl}>
            <div className="img">
                <img src={best_girl} alt="best__girl"/>
            </div>
            <div className={classes.text}>
                <h5>Best girl</h5>
            </div>
        </div>
      </div>
    </>
  );
};
export default Content;

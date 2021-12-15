import React from "react";
import { createUseStyles } from "react-jss";
import { free, japan, rating } from "images";

const useStyles = createUseStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    justifyItems: "center",
    gridGap: "20px",
    margin: "10px",
    "& img": {
      width: "60%",
      height: "25vh",
    },
    "& p": {
      maxInlineSize: "22vw",
    },
  },
  choose__us: {
    position: "relative",
    "&:before": {
      content: `""`,
      position: "absolute",
      top: "6px",
      right: "14px",
      width: "40%",
      height: "3px",
      backgroundColor: "red",
    },
    "&:after": {
      content: `""`,
      position: "absolute",
      top: "6px",
      left: "14px",
      width: "40%",
      height: "3px",
      backgroundColor: "red",
    },
  },
});
const reasons = [
  {
    img: japan,
    title: "WE GET OUR GOODS FROM JAPAN",
    text: "Always 100% officially licensed merch straight from the source.",
  },
  {
    img: free,
    title: "IT'S FREE FOR THIS PANDORU",
    text: "All goods in our store are free and you don't need to pay for anything",
  },
  {
    img: rating,
    title: "GIVE US YOUR FEEDBACK",
    text: "Your words have weight. Nothing is more important than the fans!",
  },
];
const ChooseUs: React.FC = () => {
  let classes = useStyles();
  return (
    <>
      <div className={classes.choose__us}>
        <h4>WHY CHOOSE US ?</h4>
      </div>
      <div className={classes.grid}>
        {reasons.map((reason, index) => {
          return (
            <div key={index}>
              <div>
                <img src={reason.img} alt="chooseus" />
              </div>
              <div>
                <h5>{reason.title}</h5>
                <p>{reason.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default ChooseUs;

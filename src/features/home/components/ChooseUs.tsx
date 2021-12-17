import React from "react";
import { createUseStyles } from "react-jss";
import { free, japan, rating } from "images";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);
const useStyles = createUseStyles({
  grid: {
    margin: "10px",
    "& img": {
      width: "60%",
      height: "25vh",
    },
    "& p": {
      maxInlineSize: "22vw",
    },
    "& .item": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },
  choose__us: {
    position: "relative",
    "&:before": {
      content: `""`,
      position: "absolute",
      top: "6px",
      right: "14px",
      width: "30%",
      height: "3px",
      backgroundColor: "red",
    },
    "&:after": {
      content: `""`,
      position: "absolute",
      top: "6px",
      left: "14px",
      width: "30%",
      height: "3px",
      backgroundColor: "red",
    },
  },
  "@media (max-width: 469px)": {
    choose__us: {
      "&:before": {
        display: "none",
      },
      "&:after": {
        display: "none",
      },
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

const setting = {
  loop:false,
  autoplay: {
    "deplay":2000
  },
  breakpoints: {
    "700": {
      "slidesPerView": 3,
      "loop": false,
    },
    "500": {
      "slidesPerView": 2,
      "loop": true,
      "autoplay": true,
      "pagination":true,
    },
    "380": {
      slidesPerView: 1,
      loop: true,
      autoplay: true,
    },
  },
};
const ChooseUs: React.FC = () => {
  let classes = useStyles();
  return (
    <>
      <div className={classes.choose__us}>
        <h4>WHY CHOOSE US ?</h4>
      </div>
      <div className={classes.grid}>
        <Swiper
          {...setting}
          autoplay={true}
          pagination={true}
          className="mySwipert"
        >
          {reasons.map((reason, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="item">
                  <img src={reason.img} alt="choouse" />
                  <div>
                    <h5>{reason.title}</h5>
                    <div>
                      <p>{reason.text}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};
export default ChooseUs;

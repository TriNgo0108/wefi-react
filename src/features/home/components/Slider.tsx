import React from "react";
import { createUseStyles } from "react-jss";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import "swiper/swiper-bundle.min.css";
import SwiperCore, {EffectCreative,Autoplay,Navigation} from 'swiper';
// import 'swiper/css';
import { slider_1,slider_2,slider_3,slider_4,slider_5,slider_6 } from "../../../images";
SwiperCore.use([EffectCreative,Autoplay,Navigation]);
const useStyles = createUseStyles({
    image__slider:{
        height:"77vh",
        width:"100%",
        objectFit:"cover",
        objectPosition:"top"
    },
    swiper__custom:{
        "& > .swiper-button-next, & > .swiper-button-prev":{
            color:"#B22D29"
        }
    }
});
const Slider : React.FC =()=>{
    let images = [slider_1,slider_2,slider_3,slider_4,slider_5,slider_6];
    let classes = useStyles();
    let setting = {
        "prev": {
          "shadow": true,
          "translate": [
            0,
            0,
            -400
          ]
        },
        "next": {
          "translate": [
            "100%",
            0,
            0
          ]
        }
      }
      let autoPlay = {
        "delay": 1000,
        "disableOnInteraction": true
      }
    return<>
    <Swiper className={classes.swiper__custom} grabCursor={true} navigation={true} effect={'creative'} creativeEffect={setting} autoplay={autoPlay} loop={true}>
        {
            images.map((image,index)=>{
                return <SwiperSlide key={index}>
                    <div>
                        <img  src={image} className={classes.image__slider} alt="slider"/>
                    </div>
                </SwiperSlide>
            })
        }
    </Swiper>
    </>
};
export default Slider;
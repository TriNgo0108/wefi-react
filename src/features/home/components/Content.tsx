import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import ReactPlayer from "react-player";
import {
  best_girl,
  genshin,
  in_stock,
  kanojou,
  preorder,
  sayu,
  takagi,
} from "images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ContentItem } from "components";

const useStyles = createUseStyles({
  content: {
    display: "grid",
    margin: "10px",
    gridTemplateColumns: "repeat(6,1fr)",
    gridGap: "20px",
    "& > .pre__order, & > .sanyu": {
      gridColumn: "1 / span 2",
      position: "relative",
      cursor: "pointer",
    },
    "& > .takagi, & > .in__stock": {
      gridColumn: "3 / span 2",
      position: "relative",
      cursor: "pointer",
    },
    "& > .kanojou, & > .best__girl": {
      gridColumn: "5 / span 2",
      position: "relative",
      cursor: "pointer",
    },
    "&  .img": {
      "& > img": {
        width: "100%",
        height: "60vh",
      },
    },
  },

  genshin: {
    gridColumn: "1 / span 3",
    cursor: "pointer",
    position: "relative",
    "&  img": {
      width: "100%",
    },
  },
  pandoru: {
    gridColumn: "4 / span 3",
    cursor: "pointer",
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
  "@media (max-width:640px)": {
    content: {
      "& > .pre__order, & > .takagi, & > .kanojou, & > .sanyu, & > .in__stock, & > .best__girl":
        {
          gridColumn: "span 3",
        },
    },
    pandoru: {
      gridColumn: "span 3",
    },
    genshin: {
      gridColumn: "span 3",
      "& > div": {
        height: "100%",
      },
      "& img": {
        height: "100%",
      },
    },
  },
  "@media (max-width:514px)": {
    content: {
      "& > .best__girl, & > .in__stock": {
        gridColumn: "span 6",
      },
    },
  },
});

const itemVariant = {
  visible: {
    y: 0,
    opacity: 1,

    transition: { duration: 0.5, delay: 0.4 },
  },
  hidden: {
    opacity: 0,
    y: -250,
    ease: "easeInOut",
    transition: { duration: 0.5, delay: 0.4 },
  },
};
const Content: React.FC = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  let classes = useStyles();
  return (
    <>
      <h3>YOU NEED AT LEAST ONE THING</h3>
      <div className={classes.content}>
        <ContentItem
          className="pre__order"
          imageUrl={preorder}
          alt="per-order"
          text="Pre-order"
          delay={0}
        />

        <ContentItem
          className="takagi"
          imageUrl={takagi}
          alt="takagi"
          text="Takagi"
          delay={0.1}
        />

        <ContentItem
          className="kanojou"
          imageUrl={kanojou}
          alt="kanojou"
          text="Rent-A-Girlfriend"
          delay={0.2}
        />

        <ContentItem
          className={classes.genshin}
          imageUrl={genshin}
          alt="genshin"
          text="Genshin Impact"
          delay={0.3}
        />
        <motion.div
          className={classes.pandoru}
          ref={ref}
          variants={itemVariant}
          initial="hidden"
          animate={control}
        >
          <ReactPlayer url="https://www.youtube.com/watch?v=PzrGGyPMfoo" />
        </motion.div>

        <ContentItem
          className="sanyu"
          imageUrl={sayu}
          alt="sayu"
          text="Sayu"
          delay={0.5}
        />
        <ContentItem
          className="in__stock"
          imageUrl={in_stock}
          alt="in__stock"
          text="In stock"
          delay={0.6}
        />

        <ContentItem
          className="best__girl"
          imageUrl={best_girl}
          alt="best__girl"
          text="Best girl"
          delay={0.6}
        />
      </div>
    </>
  );
};
export default Content;

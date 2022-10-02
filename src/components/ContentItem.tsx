import { motion, useAnimation, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { createUseStyles } from "react-jss";
interface IProps {
  className?: string;
  imageUrl?: string;
  alt?: string;
  text?: string;
  delay?:number;
}
const useStyles = createUseStyles({
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

const ContentItem: React.FC<IProps> = (props: IProps) => {

  const { imageUrl, className, alt, text, delay } = props;
  const itemVariant = {
    visible: {
      y:0,
      opacity:1,
      
      transition: { duration: 0.5,
        delay:delay,

       },

    },
    hidden: { opacity:0, y: -250, ease: "easeInOut",
    transition: { duration: 0.5,
      delay:delay
     } },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const classes = useStyles();
  

  return (
    <>
      <motion.div ref={ref} 
      variants={itemVariant}
      initial="hidden"
      animate={control}
      className={className}
      >
        <div>
          <div className="img">
            <img src={imageUrl} alt={alt} />
          </div>
          <div className={classes.text}>
            <h5>{text}</h5>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ContentItem;

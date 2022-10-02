import clsx from "clsx";
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
  zIndex:number;
} 
interface IStyles{
  zIndex: number
}
const useStyles = createUseStyles<string, IStyles>({
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
   item:{
    zIndex:(prop:IStyles)=> prop.zIndex
   }
});

const ContentItem: React.FC<IProps> = (props: IProps) => {

  const { imageUrl, className, alt, text, delay,zIndex } = props;
  const itemVariant = {
    visible: {
      y:0,
      opacity:1,
      filter: "blur(0px)",
      transition: { duration: 0.5,
        delay:delay,

       },

    },
    hidden: { opacity:0, y: -250, ease: "easeInOut",
    filter:"blur(50px)",
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

  const classes = useStyles({zIndex: zIndex});
  

  return (
    <>
      <motion.div ref={ref} 
      variants={itemVariant}
      initial="hidden"
      animate={control}
      className={clsx(className,classes.item)}
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

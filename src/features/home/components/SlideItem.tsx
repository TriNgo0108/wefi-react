import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface IProps {
  imageUrl?: string;
  title?: string;
  text?: string;
  delay?: number;
}

const SlideItem: React.FC<IProps> = (props: IProps) => {
  const { imageUrl, title, text, delay } = props;
  const itemVariant = {
    visible: {
      x:0,
      opacity:1,
      transition: { duration: 0.5,
        delay:delay,

       },

    },
    hidden: { opacity:0, x: -80, ease: "easeInOut",
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


  return (
    <>
    <motion.div ref={ref} 
      variants={itemVariant}
      initial="hidden"
      animate={control}>
      <div className="item">
        <img src={imageUrl} alt="choose_use" />
        <div>
          <h5>{title}</h5>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
};

export default SlideItem;

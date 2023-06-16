import { useRef, React } from "react";
import { animate, motion } from "framer-motion";
import styles from '../styles/whyus.module.css';

const MotionSpan = (props) => {

    const { val } = props;

    const Count = useRef(null);

    const animateCount = () => {
      const count = Count.current.innerText;
      console.log("count is : ",count);
      animate(0, val, {
        duration: 1,
        onUpdate: (v) => {
          Count.current.innerText = Math.floor(v);
        },
      });
    };

  return (
    <div className={styles.as_whychoose_box_span}>
        <motion.span ref={Count} whileInView={animateCount}>
        {val}
        </motion.span>
        <span>+</span>
    </div>
  )
}

export default MotionSpan
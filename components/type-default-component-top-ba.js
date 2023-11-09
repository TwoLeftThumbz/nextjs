import { useMemo } from "react";
import styles from "./type-default-component-top-ba.module.css";

const TypeDefaultComponentTopBa = ({
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propAlignSelf,
}) => {
  const typeDefaultComponentTopBaStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propPosition, propTop, propLeft, propWidth, propAlignSelf]);

  return (
    <div
      className={styles.typedefaultComponenttopBa}
      style={typeDefaultComponentTopBaStyle}
    >
      <div className={styles.div}>9:41</div>
      <img className={styles.groupIcon} alt="" src="/group4.svg" />
      <img className={styles.groupIcon1} alt="" src="/group5.svg" />
      <img className={styles.groupIcon2} alt="" src="/group6.svg" />
    </div>
  );
};

export default TypeDefaultComponentTopBa;

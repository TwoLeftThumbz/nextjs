import { useMemo } from "react";
import styles from "./type-logo-default-component-l.module.css";

const TypeLogoDefaultComponentL = ({
  timestamp,
  propPosition,
  propTop,
  propLeft,
}) => {
  const typeLogoDefaultComponentLStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <img
      className={styles.typelogoDefaultComponentl}
      alt=""
      src={timestamp}
      style={typeLogoDefaultComponentLStyle}
    />
  );
};

export default TypeLogoDefaultComponentL;

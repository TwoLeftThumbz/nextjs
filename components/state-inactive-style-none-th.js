import { useMemo } from "react";
import styles from "./state-inactive-style-none-th.module.css";

const StateInactiveStyleNoneTh = ({
  tabLabel,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propFlex,
  propColor,
  propBackgroundColor,
}) => {
  const stateInactiveStyleNoneThStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      flex: propFlex,
    };
  }, [propPosition, propTop, propLeft, propWidth, propFlex]);

  const horizontalTabStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const rectangleStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={styles.stateinactiveStylenoneTh}
      style={stateInactiveStyleNoneThStyle}
    >
      <div className={styles.horizontalTab} style={horizontalTabStyle}>
        {tabLabel}
      </div>
      <div className={styles.rectangleWrapper}>
        <div className={styles.rectangle} style={rectangleStyle} />
      </div>
    </div>
  );
};

export default StateInactiveStyleNoneTh;

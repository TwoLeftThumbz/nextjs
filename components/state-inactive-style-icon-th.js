import { useMemo } from "react";
import styles from "./state-inactive-style-icon-th.module.css";

const StateInactiveStyleIconTh = ({
  iconCode,
  iconTextCode,
  propTop,
  propColor,
  propBackgroundColor,
}) => {
  const stateInactiveStyleIconThStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const horizontalTab1Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const rectangle1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  return (
    <div
      className={styles.stateinactiveStyleiconTh}
      style={stateInactiveStyleIconThStyle}
    >
      <div className={styles.autoLayoutHorizontal}>
        <img className={styles.iconlycurvedchart} alt="" src={iconCode} />
        <div className={styles.horizontalTab} style={horizontalTab1Style}>
          Horizontal Tab
        </div>
        <img className={styles.iconlycurvedchart} alt="" src={iconTextCode} />
      </div>
      <div className={styles.rectangleWrapper}>
        <div className={styles.rectangle} style={rectangle1Style} />
      </div>
    </div>
  );
};

export default StateInactiveStyleIconTh;

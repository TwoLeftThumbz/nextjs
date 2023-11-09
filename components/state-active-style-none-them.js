import { useMemo } from "react";
import styles from "./state-active-style-none-them.module.css";

const StateActiveStyleNoneThem = ({
  tabLabel,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propFlex,
}) => {
  const stateActiveStyleNoneThemStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      flex: propFlex,
    };
  }, [propPosition, propTop, propLeft, propWidth, propFlex]);

  return (
    <div
      className={styles.stateactiveStylenoneThem}
      style={stateActiveStyleNoneThemStyle}
    >
      <div className={styles.horizontalTab}>{tabLabel}</div>
      <div className={styles.rectangle} />
    </div>
  );
};

export default StateActiveStyleNoneThem;

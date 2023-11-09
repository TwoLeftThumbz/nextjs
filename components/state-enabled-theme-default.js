import { useMemo } from "react";
import styles from "./state-enabled-theme-default.module.css";

const StateEnabledThemeDefault = ({
  propLeft,
  propBackgroundColor,
  propLeft1,
  propBorder,
}) => {
  const stateEnabledThemeDefaultStyle = useMemo(() => {
    return {
      left: propLeft,
      backgroundColor: propBackgroundColor,
    };
  }, [propLeft, propBackgroundColor]);

  const frameStyle = useMemo(() => {
    return {
      left: propLeft1,
      border: propBorder,
    };
  }, [propLeft1, propBorder]);

  return (
    <div
      className={styles.stateenabledThemedefault}
      style={stateEnabledThemeDefaultStyle}
    >
      <div className={styles.frame} style={frameStyle} />
    </div>
  );
};

export default StateEnabledThemeDefault;

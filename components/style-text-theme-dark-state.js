import { useMemo } from "react";
import styles from "./style-text-theme-dark-state.module.css";

const StyleTextThemeDarkState = ({
  dimensionLabel,
  selectionIcon,
  propTop,
  propLeft,
  propColor,
}) => {
  const styleTextThemeDarkState1Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const unselectedStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={styles.styletextThemedarkState}
      style={styleTextThemeDarkState1Style}
    >
      <img className={styles.ellipseStrokeIcon} alt="" src={dimensionLabel} />
      <div className={styles.unselected} style={unselectedStyle}>
        {selectionIcon}
      </div>
    </div>
  );
};

export default StyleTextThemeDarkState;

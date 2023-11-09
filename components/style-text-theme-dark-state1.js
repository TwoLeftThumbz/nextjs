import { useMemo } from "react";
import styles from "./style-text-theme-dark-state1.module.css";

const StyleTextThemeDarkState1 = ({
  itemCode,
  isChecked,
  propTop,
  propLeft,
  propColor,
}) => {
  const styleTextThemeDarkStateStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const checkedStyle = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={styles.styletextThemedarkState}
      style={styleTextThemeDarkStateStyle}
    >
      <img className={styles.groupIcon} alt="" src={itemCode} />
      <div className={styles.checked} style={checkedStyle}>
        {isChecked}
      </div>
    </div>
  );
};

export default StyleTextThemeDarkState1;

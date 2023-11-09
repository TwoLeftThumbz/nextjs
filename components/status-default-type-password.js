import { useMemo } from "react";
import styles from "./status-default-type-password.module.css";

const StatusDefaultTypePassword = ({
  passwordHint,
  passwordMaskedValue,
  customIconId,
  propLeft,
  propBorder,
  propTop,
  propBackgroundColor,
  propBoxShadow,
  propColor,
  propFontWeight,
}) => {
  const statusDefaultTypePasswordStyle = useMemo(() => {
    return {
      left: propLeft,
      border: propBorder,
      top: propTop,
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propLeft, propBorder, propTop, propBackgroundColor, propBoxShadow]);

  const label3Style = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  return (
    <div
      className={styles.statusdefaultTypepassword}
      style={statusDefaultTypePasswordStyle}
    >
      <img className={styles.iconlyboldlock} alt="" src={passwordHint} />
      <div className={styles.label} style={label3Style}>
        {passwordMaskedValue}
      </div>
      <img className={styles.iconlyboldlock} alt="" src={customIconId} />
    </div>
  );
};

export default StatusDefaultTypePassword;

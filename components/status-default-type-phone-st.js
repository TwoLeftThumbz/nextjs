import { useMemo } from "react";
import styles from "./status-default-type-phone-st.module.css";

const StatusDefaultTypePhoneSt = ({
  dimensionCode,
  dimensionCodeImageUrl,
  phoneNumber,
  propLeft,
  propBorder,
  propTop,
  propBackgroundColor,
  propBoxShadow,
  propColor,
  propFontWeight,
}) => {
  const statusDefaultTypePhoneStStyle = useMemo(() => {
    return {
      left: propLeft,
      border: propBorder,
      top: propTop,
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propLeft, propBorder, propTop, propBackgroundColor, propBoxShadow]);

  const labelStyle = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  return (
    <div
      className={styles.statusdefaultTypephoneSt}
      style={statusDefaultTypePhoneStStyle}
    >
      <div className={styles.flagParent}>
        <img className={styles.flagIcon} alt="" src={dimensionCode} />
        <img
          className={styles.iconlylightarrowDown2}
          alt=""
          src={dimensionCodeImageUrl}
        />
      </div>
      <div className={styles.label} style={labelStyle}>
        {phoneNumber}
      </div>
    </div>
  );
};

export default StatusDefaultTypePhoneSt;

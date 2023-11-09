import { useMemo } from "react";
import styles from "./status-default-type-normal-s.module.css";

const StatusDefaultTypeNormalS = ({
  dimensionCode,
  dimensionCodeImageUrl,
  dimensionCodeText,
  dimensionCodeImageText,
  propLeft,
  propBorder,
  propTop,
  propBackgroundColor,
  propBoxShadow,
  propColor,
  propFontWeight,
  propColor1,
}) => {
  const statusDefaultTypeNormalSStyle = useMemo(() => {
    return {
      left: propLeft,
      border: propBorder,
      top: propTop,
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [propLeft, propBorder, propTop, propBackgroundColor, propBoxShadow]);

  const label1Style = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  const label2Style = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  return (
    <div
      className={styles.statusdefaultTypenormalS}
      style={statusDefaultTypeNormalSStyle}
    >
      <img className={styles.additionalIcons} alt="" src={dimensionCode} />
      <img
        className={styles.iconlyboldprofile}
        alt=""
        src={dimensionCodeImageUrl}
      />
      <div className={styles.label} style={label1Style}>
        Placeholder
      </div>
      <div className={styles.label1} style={label2Style}>
        kg
      </div>
      <img className={styles.additionalIcons} alt="" src={dimensionCodeText} />
      <img
        className={styles.iconlyboldprofile}
        alt=""
        src={dimensionCodeImageText}
      />
    </div>
  );
};

export default StatusDefaultTypeNormalS;

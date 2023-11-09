import { useMemo } from "react";
import styles from "./type-button-type2-primary-t1.module.css";

const TypeButtonType2PrimaryT1 = ({
  itemCode,
  dimensionCode,
  propTop,
  propBackgroundColor,
  propHeight,
  propPadding,
  propWidth,
  propFlex,
  propColor,
}) => {
  const typeButtonType2PrimaryT1Style = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
      height: propHeight,
      padding: propPadding,
    };
  }, [propTop, propBackgroundColor, propHeight, propPadding]);

  const autoLayoutHorizontalStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const button2Style = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div
      className={styles.typebuttonType2primaryT}
      style={typeButtonType2PrimaryT1Style}
    >
      <div
        className={styles.autoLayoutHorizontal}
        style={autoLayoutHorizontalStyle}
      >
        <img className={styles.iconlyboldbuy} alt="" src={itemCode} />
        <b className={styles.button} style={button2Style}>
          Button
        </b>
        <img className={styles.iconlyboldbuy} alt="" src={dimensionCode} />
      </div>
    </div>
  );
};

export default TypeButtonType2PrimaryT1;

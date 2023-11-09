import { useMemo } from "react";
import styles from "./type-button-type2-icon-type.module.css";

const TypeButtonType2IconType = ({
  itemCode,
  propLeft,
  propBorderRadius,
  propBackgroundColor,
  propBorder,
  propFlexDirection,
  propPadding,
  propGap,
  propHeight,
  propHeight1,
  propWidth,
}) => {
  const typeButtonType2IconTypeStyle = useMemo(() => {
    return {
      left: propLeft,
      borderRadius: propBorderRadius,
      backgroundColor: propBackgroundColor,
      border: propBorder,
      flexDirection: propFlexDirection,
      padding: propPadding,
      gap: propGap,
      height: propHeight,
    };
  }, [
    propLeft,
    propBorderRadius,
    propBackgroundColor,
    propBorder,
    propFlexDirection,
    propPadding,
    propGap,
    propHeight,
  ]);

  const textStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
    };
  }, [propHeight1, propWidth]);

  return (
    <div
      className={styles.typebuttonType2iconType}
      style={typeButtonType2IconTypeStyle}
    >
      <img className={styles.additionalIcons} alt="" src={itemCode} />
      <div className={styles.text} style={textStyle}>
        Text
      </div>
    </div>
  );
};

export default TypeButtonType2IconType;

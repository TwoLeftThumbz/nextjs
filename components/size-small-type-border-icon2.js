import { useMemo } from "react";
import styles from "./size-small-type-border-icon2.module.css";

const SizeSmallTypeBorderIcon2 = ({
  itemCode,
  chipItemCode,
  propPosition,
  propTop,
  propLeft,
  propPadding,
  propBorder,
  propGap,
  propBackgroundColor,
  propWidth,
  propHeight,
  propOverflow,
  propFlexShrink,
  propWidth1,
  propHeight1,
  propFontSize,
  propFontWeight,
  propColor,
}) => {
  const sizeSmallTypeBorderIconStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      padding: propPadding,
      border: propBorder,
      gap: propGap,
      backgroundColor: propBackgroundColor,
      width: propWidth,
      height: propHeight,
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propPadding,
    propBorder,
    propGap,
    propBackgroundColor,
    propWidth,
    propHeight,
  ]);

  const iconlyBoldStarStyle = useMemo(() => {
    return {
      overflow: propOverflow,
      flexShrink: propFlexShrink,
      width: propWidth1,
      height: propHeight1,
    };
  }, [propOverflow, propFlexShrink, propWidth1, propHeight1]);

  const chipsStyle = useMemo(() => {
    return {
      fontSize: propFontSize,
      fontWeight: propFontWeight,
      color: propColor,
    };
  }, [propFontSize, propFontWeight, propColor]);

  return (
    <div
      className={styles.sizesmallTypeborderIcon}
      style={sizeSmallTypeBorderIconStyle}
    >
      <img
        className={styles.iconlyboldstar}
        alt=""
        src={itemCode}
        style={iconlyBoldStarStyle}
      />
      <div className={styles.chips} style={chipsStyle}>
        {chipItemCode}
      </div>
    </div>
  );
};

export default SizeSmallTypeBorderIcon2;

import { useMemo } from "react";
import styles from "./size-small-type-border-icon.module.css";

const SizeSmallTypeBorderIcon = ({
  iconlyLightOutlineCloseSq,
  propTop,
  propBorder,
  propPadding,
  propGap,
  propBackgroundColor,
  propWidth,
  propHeight,
  propLeft,
  propColor,
  propFontSize,
  propFontWeight,
  propWidth1,
  propHeight1,
}) => {
  const sizeSmallTypeBorderIcon2Style = useMemo(() => {
    return {
      top: propTop,
      border: propBorder,
      padding: propPadding,
      gap: propGap,
      backgroundColor: propBackgroundColor,
      width: propWidth,
      height: propHeight,
      left: propLeft,
    };
  }, [
    propTop,
    propBorder,
    propPadding,
    propGap,
    propBackgroundColor,
    propWidth,
    propHeight,
    propLeft,
  ]);

  const chips2Style = useMemo(() => {
    return {
      color: propColor,
      fontSize: propFontSize,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontSize, propFontWeight]);

  const iconlyLightOutlineCloseSquStyle = useMemo(() => {
    return {
      width: propWidth1,
      height: propHeight1,
    };
  }, [propWidth1, propHeight1]);

  return (
    <div
      className={styles.sizesmallTypeborderIcon}
      style={sizeSmallTypeBorderIcon2Style}
    >
      <div className={styles.chips} style={chips2Style}>
        Chips
      </div>
      <img
        className={styles.iconlylightOutlinecloseSqu}
        alt=""
        src={iconlyLightOutlineCloseSq}
        style={iconlyLightOutlineCloseSquStyle}
      />
    </div>
  );
};

export default SizeSmallTypeBorderIcon;

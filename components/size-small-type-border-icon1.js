import { useMemo } from "react";
import styles from "./size-small-type-border-icon1.module.css";

const SizeSmallTypeBorderIcon1 = ({
  propTop,
  propBorder,
  propPadding,
  propBackgroundColor,
  propWidth,
  propHeight,
  propLeft,
  propColor,
  propFontSize,
  propFontWeight,
}) => {
  const sizeSmallTypeBorderIcon1Style = useMemo(() => {
    return {
      top: propTop,
      border: propBorder,
      padding: propPadding,
      backgroundColor: propBackgroundColor,
      width: propWidth,
      height: propHeight,
      left: propLeft,
    };
  }, [
    propTop,
    propBorder,
    propPadding,
    propBackgroundColor,
    propWidth,
    propHeight,
    propLeft,
  ]);

  const chips1Style = useMemo(() => {
    return {
      color: propColor,
      fontSize: propFontSize,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontSize, propFontWeight]);

  return (
    <div
      className={styles.sizesmallTypeborderIcon}
      style={sizeSmallTypeBorderIcon1Style}
    >
      <div className={styles.chips} style={chips1Style}>
        Chips
      </div>
    </div>
  );
};

export default SizeSmallTypeBorderIcon1;

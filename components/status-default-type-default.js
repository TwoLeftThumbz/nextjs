import { useMemo } from "react";
import styles from "./status-default-type-default.module.css";

const StatusDefaultTypeDefault = ({
  placeholderText,
  showLabel,
  propTop,
  propWidth,
  propHeight,
  propJustifyContent,
  propPadding,
  propOverflow,
  propLeft,
  propBorder,
  propBackgroundColor,
  propBoxShadow,
  propFlex,
  propFontSize,
  propLetterSpacing,
  propColor,
  propTextAlign,
  propFontWeight,
}) => {
  const statusDefaultTypeDefaultStyle = useMemo(() => {
    return {
      top: propTop,
      width: propWidth,
      height: propHeight,
      justifyContent: propJustifyContent,
      padding: propPadding,
      overflow: propOverflow,
      left: propLeft,
      border: propBorder,
      backgroundColor: propBackgroundColor,
      boxShadow: propBoxShadow,
    };
  }, [
    propTop,
    propWidth,
    propHeight,
    propJustifyContent,
    propPadding,
    propOverflow,
    propLeft,
    propBorder,
    propBackgroundColor,
    propBoxShadow,
  ]);

  const label5Style = useMemo(() => {
    return {
      flex: propFlex,
      fontSize: propFontSize,
      letterSpacing: propLetterSpacing,
      color: propColor,
      textAlign: propTextAlign,
      fontWeight: propFontWeight,
    };
  }, [
    propFlex,
    propFontSize,
    propLetterSpacing,
    propColor,
    propTextAlign,
    propFontWeight,
  ]);

  return (
    <div
      className={styles.statusdefaultTypedefault}
      style={statusDefaultTypeDefaultStyle}
    >
      {showLabel && (
        <div className={styles.label} style={label5Style}>
          {placeholderText}
        </div>
      )}
    </div>
  );
};

export default StatusDefaultTypeDefault;

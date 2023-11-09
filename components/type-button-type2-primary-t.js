import { useMemo } from "react";
import styles from "./type-button-type2-primary-t.module.css";

const TypeButtonType2PrimaryT = ({
  propTop,
  propBackgroundColor,
  propHeight,
  propPadding,
  propPosition,
  propLeft,
  propWidth,
  propAlignSelf,
  propColor,
  propDisplay,
  propAlignItems,
  propJustifyContent,
  propWidth1,
  propFlexShrink,
  propFlex,
}) => {
  const typeButtonType2PrimaryTStyle = useMemo(() => {
    return {
      top: propTop,
      backgroundColor: propBackgroundColor,
      height: propHeight,
      padding: propPadding,
      position: propPosition,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [
    propTop,
    propBackgroundColor,
    propHeight,
    propPadding,
    propPosition,
    propLeft,
    propWidth,
    propAlignSelf,
  ]);

  const button1Style = useMemo(() => {
    return {
      color: propColor,
      display: propDisplay,
      alignItems: propAlignItems,
      justifyContent: propJustifyContent,
      width: propWidth1,
      flexShrink: propFlexShrink,
      flex: propFlex,
    };
  }, [
    propColor,
    propDisplay,
    propAlignItems,
    propJustifyContent,
    propWidth1,
    propFlexShrink,
    propFlex,
  ]);

  return (
    <div
      className={styles.typebuttonType2primaryT}
      style={typeButtonType2PrimaryTStyle}
    >
      <b className={styles.button} style={button1Style}>
        Button
      </b>
    </div>
  );
};

export default TypeButtonType2PrimaryT;

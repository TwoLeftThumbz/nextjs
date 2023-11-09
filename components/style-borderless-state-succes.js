import { useMemo } from "react";
import styles from "./style-borderless-state-succes.module.css";

const StyleBorderlessStateSucces = ({
  tagMarkerText,
  propTop,
  propLeft,
  propAlignItems,
  propBottom,
  propBackgroundColor,
  propBorder,
  propColor,
  propTextAlign,
}) => {
  const styleBorderlessStateSuccesStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      alignItems: propAlignItems,
      bottom: propBottom,
      backgroundColor: propBackgroundColor,
      border: propBorder,
    };
  }, [
    propTop,
    propLeft,
    propAlignItems,
    propBottom,
    propBackgroundColor,
    propBorder,
  ]);

  const tagMarkerStyle = useMemo(() => {
    return {
      color: propColor,
      textAlign: propTextAlign,
    };
  }, [propColor, propTextAlign]);

  return (
    <div
      className={styles.styleborderlessStatesucces}
      style={styleBorderlessStateSuccesStyle}
    >
      <div className={styles.tagMarker} style={tagMarkerStyle}>
        {tagMarkerText}
      </div>
    </div>
  );
};

export default StyleBorderlessStateSucces;

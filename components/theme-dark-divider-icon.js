import { useMemo } from "react";
import styles from "./theme-dark-divider-icon.module.css";

const ThemeDarkDividerIcon = ({
  imageDimensions,
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propAlignSelf,
  propMaxWidth,
  propOverflow,
  propFlexShrink,
}) => {
  const themeDarkDividerIconStyle = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
      maxWidth: propMaxWidth,
      overflow: propOverflow,
      flexShrink: propFlexShrink,
    };
  }, [
    propPosition,
    propTop,
    propLeft,
    propWidth,
    propAlignSelf,
    propMaxWidth,
    propOverflow,
    propFlexShrink,
  ]);

  return (
    <img
      className={styles.themedarkDividerIcon}
      alt=""
      src={imageDimensions}
      style={themeDarkDividerIconStyle}
    />
  );
};

export default ThemeDarkDividerIcon;

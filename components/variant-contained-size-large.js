import { useMemo } from "react";
import styles from "./variant-contained-size-large.module.css";

const VariantContainedSizeLarge = ({
  buttonText,
  variantContainedSizeLargeBoxSizing,
  buttonFontSize,
  buttonLineHeight,
  buttonColor,
  buttonDisplay,
}) => {
  const variantContainedSizeLargeStyle = useMemo(() => {
    return {
      boxSizing: variantContainedSizeLargeBoxSizing,
    };
  }, [variantContainedSizeLargeBoxSizing]);

  const buttonStyle = useMemo(() => {
    return {
      fontSize: buttonFontSize,
      lineHeight: buttonLineHeight,
      color: buttonColor,
      display: buttonDisplay,
    };
  }, [buttonFontSize, buttonLineHeight, buttonColor, buttonDisplay]);

  return (
    <div
      className={styles.variantcontainedSizelarge}
      style={variantContainedSizeLargeStyle}
    >
      <div className={styles.button} style={buttonStyle}>
        {buttonText}
      </div>
    </div>
  );
};

export default VariantContainedSizeLarge;

import { useMemo } from "react";

const TypeButtonType2Secondary = ({
  buttonText,
  typeButtonType2SecondaryBackgroundColor,
  typeButtonType2SecondaryAlignSelf,
  typeButtonType2SecondaryWidth,
  typeButtonType2SecondaryHeight,
  typeButtonType2SecondaryPadding,
  typeButtonType2SecondaryFlex,
  typeButtonType2SecondaryBoxShadow,
  buttonFlex,
  buttonDisplay,
  buttonColor,
  buttonAlignItems,
  buttonJustifyContent,
  buttonWidth,
  buttonFlexShrink,
}) => {
  const typeButtonType2SecondaryStyle = useMemo(() => {
    return {
      backgroundColor: typeButtonType2SecondaryBackgroundColor,
      alignSelf: typeButtonType2SecondaryAlignSelf,
      width: typeButtonType2SecondaryWidth,
      height: typeButtonType2SecondaryHeight,
      padding: typeButtonType2SecondaryPadding,
      flex: typeButtonType2SecondaryFlex,
      boxShadow: typeButtonType2SecondaryBoxShadow,
    };
  }, [
    typeButtonType2SecondaryBackgroundColor,
    typeButtonType2SecondaryAlignSelf,
    typeButtonType2SecondaryWidth,
    typeButtonType2SecondaryHeight,
    typeButtonType2SecondaryPadding,
    typeButtonType2SecondaryFlex,
    typeButtonType2SecondaryBoxShadow,
  ]);

  const button1Style = useMemo(() => {
    return {
      flex: buttonFlex,
      display: buttonDisplay,
      color: buttonColor,
      alignItems: buttonAlignItems,
      justifyContent: buttonJustifyContent,
      width: buttonWidth,
      flexShrink: buttonFlexShrink,
    };
  }, [
    buttonFlex,
    buttonDisplay,
    buttonColor,
    buttonAlignItems,
    buttonJustifyContent,
    buttonWidth,
    buttonFlexShrink,
  ]);

  return (
    <div
      className="rounded-81xl bg-royalblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] flex flex-row items-center justify-center py-0 px-4 box-border text-center text-base text-others-white font-body-medium-medium self-stretch"
      style={typeButtonType2SecondaryStyle}
    >
      <b
        className="flex-1 relative tracking-[0.2px] leading-[140%]"
        style={button1Style}
      >
        {buttonText}
      </b>
    </div>
  );
};

export default TypeButtonType2Secondary;
